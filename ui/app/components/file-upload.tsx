'use client';
import React from 'react';
import { Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  onUploadSuccess: (fileName: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [status, setStatus] = React.useState<'idle' | 'uploading' | 'success'>('idle');
  const [fileName, setFileName] = React.useState('');

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setFileName(file.name);
      setStatus('uploading');

      const formData = new FormData();
      formData.append('pdf', file);

      try {
        await fetch('http://localhost:8000/upload/pdf', {
          method: 'POST',
          body: formData,
        });
        setStatus('success');
        onUploadSuccess(file.name);
        
        setTimeout(() => {
          setStatus('idle');
        }, 2000);
      } catch (error) {
        setStatus('idle');
        console.error('Upload failed:', error);
      }
    };
    
    input.click();
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">PDF Chat</h2>
        
        <Button
          onClick={handleUpload}
          disabled={status === 'uploading'}
          className="w-full h-24 border-2 border-dashed border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-blue-50 transition-colors"
          variant="outline"
        >
          <div className="flex flex-col items-center">
            {status === 'idle' && (
              <>
                <Upload className="h-6 w-6 mb-2 text-gray-500" />
                <p className="font-medium text-gray-700">Upload PDF</p>
                <p className="text-xs text-gray-500">Click to select file</p>
              </>
            )}
            
            {status === 'uploading' && (
              <>
                <Loader2 className="h-6 w-6 mb-2 text-blue-500 animate-spin" />
                <p className="font-medium text-blue-600">Uploading...</p>
                <p className="text-xs text-gray-500 truncate max-w-48">{fileName}</p>
              </>
            )}
            
            {status === 'success' && (
              <>
                <CheckCircle className="h-6 w-6 mb-2 text-green-500" />
                <p className="font-medium text-green-600">Ready to chat!</p>
                <p className="text-xs text-gray-500">File uploaded</p>
              </>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;