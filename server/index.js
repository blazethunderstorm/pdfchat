import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { Queue } from 'bullmq';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { QdrantVectorStore } from '@langchain/qdrant';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyBz4ebmm28HoMckqxFPWWk92FEkpNQOsOs');

const queue = new Queue('file-upload-queue', {
  connection: {
    host: 'localhost',
    port: '6379',
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ status: 'All Good!' });
});

app.post('/upload/pdf', upload.single('pdf'), async (req, res) => {
  await queue.add(
    'file-ready',
    JSON.stringify({
      filename: req.file.originalname,
      destination: req.file.destination,
      path: req.file.path,
    })
  );
  return res.json({ message: 'uploaded' });
});

app.get('/chat', async (req, res) => {
  const userQuery = req.query.message;

  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: 'embedding-001',
    apiKey: 'AIzaSyBz4ebmm28HoMckqxFPWWk92FEkpNQOsOs',
  });
  
  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
    {
      url: 'http://localhost:6333',
      collectionName: 'langchainjs-testing',
    }
  );
  
  const ret = vectorStore.asRetriever({
    k: 2,
  });
  
  const result = await ret.invoke(userQuery);

  const SYSTEM_PROMPT = `
  You are helpful AI Assistant who answers the user query based on the available context from PDF File.
  Context:
  ${JSON.stringify(result)}
  `;

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const prompt = `${SYSTEM_PROMPT}\n\nUser Query: ${userQuery}`;
  
  const chatResult = await model.generateContent(prompt);
  const response = await chatResult.response;
  const text = response.text();

  return res.json({
    message: text,
    docs: result,
  });
});

app.listen(8000, () => console.log(`Server started on PORT:${8000}`));