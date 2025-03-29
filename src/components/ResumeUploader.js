import React, { useState } from 'react';
import { Upload, CheckCircle, AlertTriangle, Loader } from 'lucide-react';
import { motion } from "framer-motion";
import { parseResume } from '../utils/resumeParser';

const ResumeUploader = ({ onResumeDataParsed }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files.length) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    // Check file type (PDF or DOCX)
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setStatus('error');
      setMessage('Please upload a PDF or DOCX file');
      return;
    }

    setFile(file);
    setStatus('loading');
    setMessage('Processing your resume...');

    try {
      // Use our parser utility to extract resume data
      const parsedData = await parseResume(file);
      
      setStatus('success');
      setMessage('Resume processed successfully!');

      // Call the parent component's callback with the parsed data
      if (onResumeDataParsed) {
        onResumeDataParsed(parsedData);
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Failed to parse resume');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        
        <h3 className="text-lg font-medium mb-2">Upload Your Resume</h3>
        <p className="text-sm text-gray-500 mb-4">
          Drag and drop your resume file here, or click to browse
          <br />
          <span className="text-xs">Supported formats: PDF, DOCX</span>
        </p>
        
        <input
          type="file"
          id="resume-upload"
          accept=".pdf,.docx"
          className="hidden"
          onChange={handleFileInput}
        />
        
        <label
          htmlFor="resume-upload"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
        >
          Select File
        </label>

        {file && (
          <div className="mt-4 text-sm">
            <p>Selected file: <span className="font-medium">{file.name}</span></p>
          </div>
        )}

        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-3 rounded-md ${
              status === 'success' ? 'bg-green-50 text-green-800' :
              status === 'error' ? 'bg-red-50 text-red-800' :
              'bg-blue-50 text-blue-800'
            }`}
          >
            <div className="flex items-center">
              {status === 'success' && <CheckCircle className="h-5 w-5 mr-2" />}
              {status === 'error' && <AlertTriangle className="h-5 w-5 mr-2" />}
              {status === 'loading' && (
                <Loader className="h-5 w-5 mr-2 animate-spin" />
              )}
              <p>{message}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ResumeUploader; 