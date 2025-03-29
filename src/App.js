import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { resumeData as defaultResumeData } from "./components/ResumeData";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Portfolio from "./components/Portfolio";
import ResumeUploader from "./components/ResumeUploader";

function App() {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [showUploader, setShowUploader] = useState(false);
  
  const handleResumeDataParsed = (newData) => {
    setResumeData(newData);
    setShowUploader(false);
  };
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {showUploader ? (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Upload Your Resume</h1>
            <ResumeUploader onResumeDataParsed={handleResumeDataParsed} />
            <div className="text-center mt-6">
              <button 
                className="text-blue-600 underline" 
                onClick={() => setShowUploader(false)}
              >
                Cancel and return to portfolio
              </button>
            </div>
          </div>
        ) : (
          <>
            <Navbar resumeData={resumeData} />
            
            <Routes>
              <Route path="/" element={<HomePage resumeData={resumeData} />} />
              <Route path="/about" element={<AboutPage resumeData={resumeData} />} />
              <Route path="/projects" element={<ProjectsPage resumeData={resumeData} />} />
              <Route path="/contact" element={<ContactPage resumeData={resumeData} />} />
              <Route path="/resume" element={<Portfolio resumeData={resumeData} />} />
            </Routes>
            
            <div className="fixed bottom-4 right-4 z-10">
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-all flex items-center gap-2"
                onClick={() => setShowUploader(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Update Resume
              </button>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;