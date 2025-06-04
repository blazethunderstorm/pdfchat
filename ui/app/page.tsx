'use client';
import React from 'react';
import FileUpload from './components/file-upload';
import ChatComponent from './components/chat';

export default function Home() {
  const [uploadedFile, setUploadedFile] = React.useState<string | null>(null);

  const handleUploadSuccess = (fileName: string) => {
    setUploadedFile(fileName);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Panel - File Upload */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex items-center justify-center">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
      </div>
      
      {/* Right Panel - Chat */}
      <div className="flex-1">
        <ChatComponent />
      </div>
    </div>
  );
}