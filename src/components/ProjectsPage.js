import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Filter } from 'lucide-react';

// Add more projects beyond what's in the resume
const additionalProjects = [
  {
    title: "Autonomous Drone Navigation System",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    details: [
      "Developed a computer vision system for autonomous drone navigation in complex environments",
      "Implemented SLAM (Simultaneous Localization and Mapping) algorithms for real-time obstacle avoidance",
      "Utilized depth estimation networks to create 3D maps of the environment",
      "Technologies: PyTorch, ROS, OpenCV, Python"
    ],
    links: {
      github: "https://github.com",
      demo: "https://example.com"
    }
  },
  {
    title: "Multimodal Sentiment Analysis Tool",
    category: "NLP",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlbnRpbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    details: [
      "Built an ML pipeline to analyze sentiment from multiple modalities (text, audio, visual)",
      "Fine-tuned BERT model for context-aware sentiment classification",
      "Created a REST API for easy integration with other applications",
      "Deployed as a containerized application using Docker and Kubernetes",
      "Technologies: TensorFlow, Flask, Docker, React"
    ],
    links: {
      github: "https://github.com",
      demo: "https://example.com"
    }
  },
  {
    title: "Medical Image Segmentation",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    details: [
      "Developed a U-Net based architecture for precise organ segmentation in CT scans",
      "Implemented data augmentation techniques to handle limited training data",
      "Achieved 94% Dice coefficient on test dataset, improving over previous methods",
      "Technologies: PyTorch, NumPy, Matplotlib, OpenCV"
    ],
    links: {
      github: "https://github.com",
      paper: "https://example.com"
    }
  },
  {
    title: "AI-Powered Financial Forecasting Tool",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jaWFsJTIwY2hhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    details: [
      "Built a deep learning system for stock market prediction using LSTM networks",
      "Incorporated alternative data sources (social media sentiment, news) for improved accuracy",
      "Created interactive dashboards for visualization and decision making",
      "Technologies: TensorFlow, Pandas, Plotly, Flask"
    ],
    links: {
      github: "https://github.com",
      demo: "https://example.com"
    }
  }
];

const ProjectsPage = ({ resumeData }) => {
  // Combine resume projects with additional projects
  const allProjects = [
    ...resumeData.projects.map(project => ({
      ...project,
      category: project.title.includes("Object Detection") ? "Computer Vision" : "AI Systems",
      image: project.title.includes("Object Detection") 
        ? "https://images.unsplash.com/photo-1625017491747-5cc1195d0450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2JqZWN0JTIwZGV0ZWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        : "https://images.unsplash.com/photo-1640165574088-4cd93882a1cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHJlY29nbml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      links: {
        github: "https://github.com",
        demo: "https://example.com"
      }
    })),
    ...additionalProjects
  ];
  
  const categories = ["All", ...new Set(allProjects.map(project => project.category))];
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProjects = allProjects.filter(project => {
    // Apply category filter
    const categoryMatch = filter === "All" || project.category === filter;
    
    // Apply search filter
    const searchMatch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.details && project.details.some(detail => 
        detail.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1580894732444-8ecded7900cd')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              A collection of my work in AI and Machine Learning
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <p className="text-gray-400">Filter by:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      filter === category 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-4 py-2 bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No projects match your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 % 0.5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                >
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs font-medium bg-blue-600 text-white px-3 py-1 rounded-full inline-block">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm mb-4">
                      {project.details.slice(0, 2).map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    
                    <button className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm">
                      View details
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 