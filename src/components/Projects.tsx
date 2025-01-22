'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
  }

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project. What it does, what technologies you used.",
    tech: ["React", "Node.js", "AWS"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Description of your second project. Make it concise but informative.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Your third project description. Highlight the key features and your role.",
    tech: ["Python", "Django", "PostgreSQL"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          href={project.link}
          className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project →
        </motion.a>
      </div>
    </motion.div>
  )
}
