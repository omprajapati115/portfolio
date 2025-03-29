import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, BookOpen, Code, Target, ChevronRight } from 'lucide-react';

const AboutPage = ({ resumeData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              AI/ML Engineer and Researcher
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Profile Image */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-800 p-6 rounded-xl shadow-xl">
                  <div className="flex flex-col gap-3 text-white">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-300" />
                      <span>5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-300" />
                      <span>{resumeData.personal.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-300" />
                      <span>Machine Learning Specialist</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-400 rounded-tl-xl"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  AI/ML Engineer with a passion for solving real-world problems
                </span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                I'm an AI/ML Engineer specializing in deep learning, computer vision, and natural language processing. 
                With a strong background in mathematics and computer science, I develop cutting-edge solutions that tackle complex challenges across industries.
              </p>

              <p className="text-gray-300 mb-6">
                My journey in AI began during my undergraduate studies, where I was fascinated by the potential of machine learning to transform how we interact with technology. 
                Since then, I've worked on projects ranging from real-time object detection systems to sophisticated facial recognition platforms, always pushing the boundaries of what's possible.
              </p>

              <p className="text-gray-300 mb-8">
                In 2025, I'm focused on advancements in multimodal AI systems, edge computing for ML workloads, and improving model explainability and fairness. 
                I believe in creating AI systems that are not only powerful but also transparent, ethical, and accessible to all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center flex-1">
                  <p className="text-3xl font-bold text-blue-400">6+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center flex-1">
                  <p className="text-3xl font-bold text-purple-400">5+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center flex-1">
                  <p className="text-3xl font-bold text-indigo-400">3</p>
                  <p className="text-sm text-gray-400">Research Papers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-8">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-1 mr-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-8 w-8 text-purple-500" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              
              <div className="space-y-8">
                {resumeData.experience.map((job, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{job.period}</span>
                    </div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <ul className="mt-2 space-y-2">
                      {job.responsibilities.slice(0, 4).map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <ChevronRight className="h-4 w-4 text-purple-500 mt-1 mr-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 justify-center mb-4">
                <Code className="h-8 w-8 text-indigo-500" />
                <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My technical toolkit is constantly evolving, focusing on the latest advancements in AI and machine learning
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "AI/Machine Learning",
                skills: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "GANs", "Transfer Learning"]
              },
              {
                category: "Programming Languages",
                skills: ["Python", "C++", "SQL", "JavaScript", "R"]
              },
              {
                category: "Frameworks & Libraries",
                skills: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV", "ONNX", "Pandas", "NumPy"]
              },
              {
                category: "MLOps & Deployment",
                skills: ["Docker", "Kubernetes", "CI/CD", "AWS SageMaker", "Azure ML", "TensorRT", "Model Optimization"]
              },
              {
                category: "Data Processing",
                skills: ["ETL Pipelines", "Data Wrangling", "Feature Engineering", "Big Data Processing", "Database Design"]
              },
              {
                category: "Soft Skills",
                skills: ["Research Methodology", "Technical Writing", "Cross-functional Collaboration", "Project Management", "Mentoring"]
              },
            ].map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Industry Trends */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 justify-center mb-4">
                <BookOpen className="h-8 w-8 text-teal-500" />
                <h2 className="text-3xl font-bold">AI Industry Trends 2025</h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Staying on the cutting edge of AI advancements is essential for creating impactful solutions
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Multimodal AI Systems",
                description: "AI models that can process and understand multiple types of data (text, images, audio) simultaneously are becoming the new standard. These systems demonstrate better contextual understanding and can solve more complex problems."
              },
              {
                title: "Edge AI & Federated Learning",
                description: "With increasing privacy concerns and the need for real-time processing, Edge AI deployment is growing rapidly. Federated learning allows models to be trained across multiple devices while keeping data local and private."
              },
              {
                title: "AI Explainability & Ethics",
                description: "As AI systems make more critical decisions, the demand for transparent, explainable, and fair AI is growing. Techniques that help understand model decisions and mitigate biases are crucial in sensitive domains."
              },
              {
                title: "Foundation Models & Transfer Learning",
                description: "Large pre-trained models that can be fine-tuned for specific tasks are transforming how AI applications are built. These foundation models significantly reduce the data and computing resources needed for new applications."
              },
            ].map((trend, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-teal-400">{trend.title}</h3>
                <p className="text-gray-400">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-300" />
                <h2 className="text-3xl font-bold">Achievements</h2>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Published research on efficient real-time object detection algorithms",
              "Developed ML model that increased prediction accuracy by 17%",
              "Built face recognition system with 99.2% accuracy",
              "Led cross-functional team in developing an AI-powered healthcare solution",
              "Optimized ML models for edge devices, reducing inference time by 65%"
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p>{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 