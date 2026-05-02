import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from '@iconify/react'
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaCode,
} from 'react-icons/fa'
import {
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLeetcode,
} from 'react-icons/si'
import { EncryptedText } from "@/components/ui/encrypted-text";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning Projects', href: '#learning-projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const skills = [
    { name: 'C', category: 'Programming', icon: 'devicon:c' },
    { name: 'C++', category: 'Programming', icon: 'devicon:cplusplus' },
    { name: 'Java', category: 'Programming', icon: 'devicon:java' },
    { name: 'Python', category: 'Programming', icon: 'devicon:python' },
    { name: 'TypeScript', category: 'Programming', icon: 'devicon:typescript' },
    { name: 'JavaScript', category: 'Programming', icon: 'devicon:javascript' },
    { name: 'HTML', category: 'Frontend/UI', icon: 'devicon:html5' },
    { name: 'CSS', category: 'Frontend/UI', icon: 'devicon:css3' },
    { name: 'React', category: 'Frontend/UI', icon: 'devicon:react' },
    { name: 'Bootstrap', category: 'Frontend/UI', icon: 'devicon:bootstrap' },
    { name: 'Tailwind CSS', category: 'Frontend/UI', icon: 'devicon:tailwindcss' },
    { name: 'Vite', category: 'Frontend/UI', icon: 'devicon:vitejs' },
    { name: 'Material UI', category: 'Frontend/UI', icon: 'devicon:materialui' },
    { name: 'Figma', category: 'Frontend/UI', icon: 'devicon:figma' },
    { name: 'React Native', category: 'Frontend/UI', icon: 'devicon:react' },
    { name: 'Node.js', category: 'Backend/APIs', icon: 'devicon:nodejs' },
    { name: 'Express.js', category: 'Backend/APIs', icon: 'simple-icons:express' },
    { name: 'FastAPI', category: 'Backend/APIs', icon: 'devicon:fastapi' },
    { name: 'Spring Boot', category: 'Backend/APIs', icon: 'devicon:spring' },
    { name: 'Prisma', category: 'Backend/APIs', icon: 'devicon:prisma' },
    { name: 'NPM', category: 'Backend/APIs', icon: 'devicon:npm' },
    { name: 'MongoDB', category: 'Databases', icon: 'devicon:mongodb' },
    { name: 'MySQL', category: 'Databases', icon: 'devicon:mysql' },
    { name: 'PostgreSQL', category: 'Databases', icon: 'devicon:postgresql' },
    { name: 'TensorFlow', category: 'AI/ML/Data', icon: 'devicon:tensorflow' },
    { name: 'PyTorch', category: 'AI/ML/Data', icon: 'devicon:pytorch' },
    { name: 'scikit-learn', category: 'AI/ML/Data', icon: 'devicon:scikitlearn' },
    { name: 'OpenCV', category: 'AI/ML/Data', icon: 'devicon:opencv' },
    { name: 'NumPy', category: 'AI/ML/Data', icon: 'devicon:numpy' },
    { name: 'Git', category: 'Tools', icon: 'devicon:git' },
    { name: 'GitHub', category: 'Tools', icon: 'devicon:github' },
    { name: 'Docker', category: 'Tools', icon: 'devicon:docker' },
    { name: 'Firebase', category: 'Tools', icon: 'devicon:firebase' },
    { name: 'Postman', category: 'Tools', icon: 'devicon:postman' },
    { name: 'VS Code', category: 'Tools', icon: 'devicon:vscode' },
    { name: 'Android Studio', category: 'Tools', icon: 'devicon:androidstudio' },
    { name: 'Sublime Text', category: 'Tools', icon: 'devicon:sublime' },
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
      title: 'Connect App',
      description:
        'Designed an emergency app with ambulance, blood donation, and women safety modules, including real-time responder chat and rapid SOS broadcasts.',
      stack: ['React Native', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'ServiceNow'],
      github: 'https://github.com/akondi-athreya/Sahaya',
    },
  ]

  const learningProjects = [
    {
      title: 'Cipher-Dock',
      focus: 'RSA + TOTP microservice security system',
      github: 'https://github.com/akondi-athreya/gpp-1-cipher-dock',
    },
    {
      title: 'Library Management API',
      focus: 'State-machine based backend with ACID-safe workflows',
      github: 'https://github.com/akondi-athreya/gpp-library-management',
    },
    {
      title: 'Workspace Hub',
      focus: 'Multi-tenant SaaS with RBAC and tenant isolation',
      github: 'https://github.com/akondi-athreya/gpp-workspace-hub',
    },
    {
      title: 'Payment Gateway V1',
      focus: 'UPI/card flow with async queue-based processing',
      github: 'https://github.com/akondi-athreya/gpp-payment-gateway',
    },
    {
      title: 'Payment Gateway V2',
      focus: 'Idempotent payments, refunds, and webhook delivery',
      github: 'https://github.com/akondi-athreya/gpp-payment-gateway-v2',
    },
    {
      title: 'ML Inference API',
      focus: 'FastAPI model serving with singleton loading and batch endpoints',
      github: 'https://github.com/akondi-athreya/gpp-api-for-ml',
    },
    {
      title: 'SwiftCart',
      focus: 'Next.js SSR e-commerce with NextAuth and Prisma',
      github: 'https://github.com/akondi-athreya/gpp_e_commerce',
    },
    {
      title: 'Multi-Task NLP API',
      focus: 'Shared DistilBERT encoder with MLflow and ONNX deployment',
      github: 'https://github.com/akondi-athreya/gpp-nlp-api',
    },
    {
      title: 'Twitter Sentiment Analysis',
      focus: 'Fine-tuned DistilBERT pipeline with FastAPI and Streamlit',
      github: 'https://github.com/akondi-athreya/gpp_Twitter_Sentiment_Analysis',
    },
    {
      title: 'Product Catalog Service',
      focus: 'Repository pattern microservice with PostgreSQL full-text search',
      github: 'https://github.com/akondi-athreya/gpp_product_catalog',
    },
    {
      title: 'Data Sync Pipeline',
      focus: 'Kafka + Debezium CDC with PostgreSQL to MongoDB',
      github: 'https://github.com/akondi-athreya/gpp_data_synchronization_pipeline',
    },
    {
      title: 'SaaS Analytics Dashboard',
      focus: 'Next.js app router, streaming, and Playwright tests',
      github: 'https://github.com/akondi-athreya/gpp-Multi-Tenant-SaaS-Analytics-Dashboard',
    },
    {
      title: 'StreamDrive',
      focus: 'SMB file browser with lazy tree loading and streaming ZIP',
      github: 'https://github.com/akondi-athreya/gpp-stream-drive',
    },
    {
      title: 'LLM Prompt Router',
      focus: 'Two-stage intent routing with confidence fallbacks',
      github: 'https://github.com/akondi-athreya/gpp-llm-powered-prompt-router',
    },
    {
      title: 'Customer Support Chatbot',
      focus: 'Offline Ollama inference and prompt strategy evaluation',
      github: 'https://github.com/akondi-athreya/gpp-chatbot',
    },
    {
      title: 'Multi-Tenant Spring Starter',
      focus: 'Reusable Spring Boot starter for tenant-aware datasource routing',
      github: 'https://github.com/akondi-athreya/gpp-multitenancy-spring',
    },
    {
      title: 'User Profile Service',
      focus: 'Spring Boot service with HashiCorp Vault secret integration',
      github: 'https://github.com/akondi-athreya/gpp-user-profile-service',
    },
    {
      title: 'Incremental Export System',
      focus: 'Watermark-driven CDC export pipeline for large datasets',
      github: 'https://github.com/akondi-athreya/gpp-incremental-export-system',
    },
    {
      title: 'Multi-Tenant Audit System',
      focus: 'Hardened Kafka audit streams with ACL and quota controls',
      github: 'https://github.com/akondi-athreya/gpp-audit-log-system',
    },
    {
      title: 'Log Aggregation Pipeline',
      focus: 'Observability stack with Kafka, Fluentd, WebSockets',
      github: 'https://github.com/akondi-athreya/gpp-log-aggregation',
    },
  ]

  const codingProfiles = [
    { name: 'LeetCode', href: 'https://leetcode.com/u/athreya_akondi/', icon: SiLeetcode },
    { name: 'CodeChef', href: 'https://www.codechef.com/users/akondi_athreya', icon: FaCode },
    { name: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/user/akondiathrj8w/', icon: SiGeeksforgeeks },
    { name: 'HackerRank', href: 'https://www.hackerrank.com/profile/akondiathreya', icon: SiHackerrank },
    { name: 'Codeforces', href: 'https://codeforces.com/profile/Athreya_Akondi', icon: SiCodeforces },
  ]

  const sectionMotion = reduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 36 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.65, ease: 'easeOut' },
    }

  const heroTags = ['Real-time Systems', 'Secure Backends']

  useEffect(() => {
    if (reduceMotion || !skillsRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { y: 34, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 72%',
          },
        },
      )
    }, skillsRef)

    return () => ctx.revert()
  }, [reduceMotion])

  useEffect(() => {
    if (reduceMotion || !mainRef.current || !heroRef.current) return

    const ctx = gsap.context(() => {
      gsap.to('.hero-bg-grid', {
        yPercent: 22,
        xPercent: -3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-bg-orb', {
        yPercent: -16,
        xPercent: 8,
        rotate: 8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-bg-blob-1', {
        yPercent: 10,
        xPercent: -5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-bg-blob-2', {
        yPercent: -8,
        xPercent: 6,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, mainRef)

    return () => ctx.revert()
  }, [reduceMotion])

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

      <main ref={mainRef}>
        <section id="home" className="hero-section" ref={heroRef}>
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-bg-grid" />
            <div className="hero-bg-blob hero-bg-blob-1" />
            <div className="hero-bg-blob hero-bg-blob-2" />
            <div className="hero-bg-orb" />
            <div className="hero-bg-noise" />
          </div>

          <div className="hero-content container hero-inner">
            <div className="hero-layout">
              <div className="hero-copy-col">
                <motion.div
                  className="hero-badge"
                  initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  Full Stack Engineer
                </motion.div>

                <motion.h1
                  className="hero-title"
                  initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                >
                  <span className="hero-name hero-name-first">
                    Athreya{' '}
                  </span>
                  <span className="hero-name hero-name-last">Akondi</span>

                </motion.h1>

                <motion.p
                  className="hero-copy"
                  initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                >
                  I build scalable, user-focused digital products with modern web
                  technologies and thoughtful engineering.
                </motion.p>

                <motion.div
                  className="hero-tags"
                  initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28 }}
                >
                  {heroTags.map((tag) => (
                    <span key={tag} className="hero-tag">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* <motion.div
                  className="hero-terminal"
                  initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                >
                  <span className="hero-terminal-dot" />
                  <span className="hero-terminal-dot" />
                  <span className="hero-terminal-dot" />
                  <span>const developer = new Engineer()</span>
                </motion.div> */}
                <p className="mx-auto max-w-lg text-left pt-6 text-[16px] md:text-[24px]">
                  <EncryptedText
                    text="const developer = new Engineer();"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="light:text-black dark:text-white"
                    revealDelayMs={30}
                  />
                </p>


                <motion.div
                  className="cta-row"
                  initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
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
              </div>

              <div className="hero-visual-col">
                <motion.div className="hero-portrait" initial={reduceMotion ? {} : { opacity: 0, y: 24 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
                  <img src="./picofme.png" alt="Athreya Akondi" width="300" height="360" loading="eager" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <motion.section id="about" className="container section" {...sectionMotion}>
          <h2>About</h2>
          <div className="about-grid">
            <img
              src="./picofme_1.png"
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
          <div className="skills-grid" ref={skillsRef}>
            {skills.map((skill) => {
              return (
                <article key={skill.name} className="skill-card">
                  <div className="skill-head">
                    <Icon icon={skill.icon} className="skill-icon" aria-hidden="true" />
                    <h3>{skill.name}</h3>
                  </div>
                  <p>{skill.category}</p>
                </article>
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
                className="project-card reveal-card"
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

        <motion.section id="learning-projects" className="container section" {...sectionMotion}>
          <h2>Learning Projects</h2>
          <p>
            Collection from my weekly shipped systems repository with real production-focused patterns.
          </p>
          <div className="projects-grid">
            {learningProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card reveal-card"
                initial={reduceMotion ? {} : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <h3>{project.title}</h3>
                <p>{project.focus}</p>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Open Repository <FaExternalLinkAlt aria-hidden="true" />
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
          <h3 className="profiles-title">Coding Profiles</h3>
          <div className="coding-profiles">
            {codingProfiles.map((profile) => {
              const Icon = profile.icon
              return (
                <a key={profile.name} href={profile.href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" /> {profile.name}
                </a>
              )
            })}
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