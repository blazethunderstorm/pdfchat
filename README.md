# 📄 PDFChat

**PDFChat** is an intelligent chat application that allows users to upload and query PDFs with natural language. It uses cutting-edge LLMs and vector search to provide fast, context-aware responses.

---

## 🚀 Features

- 📚 Chat with any PDF using LLMs
- ⚡ Vector embeddings with Qdrant
- 🧠 LLM-powered answers via Google Gemini (or OpenAI-compatible)
- 🔗 LangChain for chaining and memory
- 🔄 Task queue with BullMQ + Valkey
- 🔐 Authentication with Clerk
- 🌐 Modern UI built with Next.js, Tailwind CSS, and shadcn/ui
- 🐳 Dockerized for easy deployment

---

## 🧰 Tech Stack

| Layer         | Tech                          |
|--------------|-------------------------------|
| Frontend     | Next.js, Tailwind CSS, shadcn/ui |
| Backend      | LangChain, Gemini, BullMQ     |
| Storage      | Qdrant (vector DB), Valkey (Redis) |
| Auth         | Clerk                          |
| Queue        | BullMQ + Valkey                |
| Containerization | Docker                     |

---

## 📦 Components Used

- **LangChain** – For handling prompts, chains, and agents
- **BullMQ** – Background job queueing
- **Valkey** – Redis-compatible storage for BullMQ
- **Qdrant** – Vector DB for storing embeddings
- **Google Gemini** – LLM response generation
- **Clerk** – Full-stack auth (login, signup, etc.)
- **shadcn/ui** – Customizable UI components
- **Tailwind CSS** – Utility-first styling
- **Docker** – Containerized deployment

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/pdfchat.git
cd pdfchat
