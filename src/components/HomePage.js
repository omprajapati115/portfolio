import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Server, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = ({ resumeData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {resumeData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
              AI/ML Engineer 
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                to="/projects" 
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-6 py-3 rounded-full font-medium flex items-center transition-all"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-medium transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </div>
      </div>

      {/* AI/ML Specialty Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">AI/ML Specialties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Brain className="h-12 w-12 mb-4 text-blue-400" />, 
                title: "Deep Learning", 
                description: "Expertise in neural networks, CNN, RNN, and transformer architectures for complex AI tasks." 
              },
              { 
                icon: <Cpu className="h-12 w-12 mb-4 text-purple-400" />, 
                title: "Computer Vision", 
                description: "Building systems that can interpret and understand visual information from the world." 
              },
              { 
                icon: <Server className="h-12 w-12 mb-4 text-indigo-400" />, 
                title: "MLOps", 
                description: "Streamlining the deployment, monitoring, and management of ML models in production." 
              },
              { 
                icon: <Globe className="h-12 w-12 mb-4 text-teal-400" />, 
                title: "AI Ethics", 
                description: "Ensuring AI systems are fair, transparent, secure, and respect privacy concerns." 
              }
            ].map((specialty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              >
                <div className="flex justify-center">{specialty.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                <p className="text-gray-400">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {resumeData.projects.slice(0, 2).map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-r from-blue-800 to-purple-900 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?ai,${idx}`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <h3 className="absolute text-2xl font-bold text-white z-10">{project.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {project.details.slice(0, 2).map((detail, i) => (
                      <li key={i} className="text-gray-400">{detail}</li>
                    ))}
                  </ul>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View project details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(resumeData.skills).flat().slice(0, 12).map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            I'm currently available for ML research opportunities and AI development projects.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-lg font-medium transition-all"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 