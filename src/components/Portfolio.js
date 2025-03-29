import { Github, Linkedin, Mail, Phone, MapPin, Download, Code, FileText, Award, Briefcase, Layers, User } from "lucide-react";
import { motion } from "framer-motion";

// Simple Card components
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 w-full max-w-2xl mx-auto text-left">{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`text-gray-800 ${className}`}>{children}</div>
);

// Section component for consistent styling
const Section = ({ title, children, icon }) => (
  <section className="text-center mb-16">
    <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center gap-2">
      {icon} {title}
    </h2>
    {children}
  </section>
);

// Skill tag component
const SkillTag = ({ skill }) => (
  <motion.span 
    className="bg-black text-white px-3 py-1 rounded-full text-sm"
    whileHover={{ scale: 1.1 }}
  >
    {skill}
  </motion.span>
);

export default function Portfolio({ resumeData }) {
  return (
    <motion.div 
      className="p-6 space-y-8 max-w-5xl mx-auto"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="py-10 space-y-4 text-center"
        initial={{ y: -30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight">{resumeData.personal.name}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {resumeData.objective}
        </p>
        <div className="flex justify-center flex-wrap gap-4 my-4">
          <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Mail className="h-5 w-5" /> {resumeData.personal.email}
          </a>
          <a href={`tel:${resumeData.personal.phone}`} className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Phone className="h-5 w-5" /> {resumeData.personal.phone}
          </a>
          <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <span className="flex items-center gap-1 text-gray-700">
            <MapPin className="h-5 w-5" /> {resumeData.personal.location}
          </span>
        </div>
        <div className="mt-6">
          <a 
            href="/resume.pdf" 
            download
            className="bg-black text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Download className="h-5 w-5" /> Download Resume
          </a>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <Section title="Highlights" icon={<Award />}>
        <div className="space-y-4 max-w-2xl mx-auto">
          {resumeData.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="text-blue-500 mt-1">•</span>
              <p className="text-left">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Skills" icon={<Code />}>
        <div className="space-y-6 max-w-4xl mx-auto">
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-lg font-medium mb-3 text-left capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <SkillTag key={idx} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Experience" icon={<Briefcase />}>
        <div className="space-y-6 max-w-3xl mx-auto">
          {resumeData.experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company} | {job.period}</p>
                  <ul className="list-disc pl-5 space-y-1 mt-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education" icon={<FileText />}>
        <div className="space-y-6 max-w-3xl mx-auto">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution} | {edu.period}</p>
                  <ul className="list-disc pl-5 space-y-1 mt-3">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" icon={<Layers />}>
        <div className="grid gap-6 md:grid-cols-2">
          {resumeData.projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02 }} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ul className="list-disc pl-5 space-y-1 mt-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Soft Skills Section */}
      <Section title="Soft Skills" icon={<User />}>
        <motion.div 
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {resumeData.softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t mt-10">
        <p>© {new Date().getFullYear()} {resumeData.personal.name} • Portfolio</p>
        <p className="mt-1">
          Built with React and Framer Motion
        </p>
      </footer>
    </motion.div>
  );
}
