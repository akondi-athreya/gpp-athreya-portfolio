import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  FaDocker,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, -140])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: FaReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Python', icon: FaPython },
    { name: 'Docker', icon: FaDocker },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ]

  const projects = [
    {
      title: 'VEDA Tech Fest Platform',
      description:
        'Built a full-stack registration platform for a large-scale university tech fest with payment integration and event capacity tracking.',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/akondi-athreya/Veda-Techfest',
    },
    {
      title: 'LateComers Management System',
      description:
        'Developed an attendance and visitor monitoring system with SMS alerts, automated reports, and analytics for educational operations.',
      stack: ['MERN', 'SMS APIs', 'Dashboard Analytics'],
      github: 'https://github.com/akondi-athreya/LateComers-Management-System',
    },
    {
      title: 'Sahaya (Emergency Coordination)',
      description:
        'Worked on an emergency response platform concept that combines safety workflows and user support coordination under a single system.',
      stack: ['React', 'Node.js', 'Real-time communication'],
      github: 'https://github.com/akondi-athreya/Sahaya',
    },
  ]

  const sectionMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.65, ease: 'easeOut' },
      }

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="container nav">
          <a className="brand" href="#home">
            Athreya Akondi
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section container">
          <motion.div
            className="parallax-orb"
            style={!reduceMotion ? { y: parallaxY } : {}}
            aria-hidden="true"
          />
          <motion.p
            className="eyebrow"
            initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Full Stack Engineer
          </motion.p>
          <motion.h1
            initial={reduceMotion ? {} : { opacity: 0, y: 28 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Athreya Akondi
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={reduceMotion ? {} : { opacity: 0, y: 32 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            I build scalable, user-focused digital products with modern web
            technologies and thoughtful engineering.
          </motion.p>
          <motion.div
            className="cta-row"
            initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a
              className="btn btn-secondary"
              href="https://drive.google.com/file/d/1IDdcDwnLHIFKUMUg5PeKtJIlo8N3h5yK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </section>

        <motion.section id="about" className="container section" {...sectionMotion}>
          <h2>About</h2>
          <div className="about-grid">
            <img
              src="/avatar.svg"
              alt="Avatar illustration for Athreya Akondi"
              loading="lazy"
              width="240"
              height="240"
            />
            <p>
              I am a full stack engineer who enjoys building robust applications
              that solve practical problems at scale. I have worked on systems
              involving secure authentication, real-time data flows, and
              full-stack product delivery. My experience includes developing
              solutions for education and operations with measurable impact. I
              am currently focused on deepening distributed systems and
              cloud-native engineering skills.
            </p>
          </div>
        </motion.section>

        <motion.section id="skills" className="container section" {...sectionMotion}>
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.article
                  key={skill.name}
                  className="skill-card"
                  initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <Icon aria-hidden="true" />
                  <span>{skill.name}</span>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section id="projects" className="container section" {...sectionMotion}>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={reduceMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="stack-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub Repository <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="container section" {...sectionMotion}>
          <h2>Contact</h2>
          <p>Open to collaborations, internships, and full-time opportunities.</p>
          <div className="contact-links">
            <a href="mailto:akondiathreya@gmail.com">
              <FaEnvelope aria-hidden="true" /> akondiathreya@gmail.com
            </a>
            <a href="https://github.com/akondi-athreya" target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> github.com/akondi-athreya
            </a>
            <a
              href="https://www.linkedin.com/in/athreya-akondi-"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> linkedin.com/in/athreya-akondi-
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="container footer">
        <p>Crafted with intention by Athreya Akondi.</p>
      </footer>
    </div>
  )
}

export default App
