import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Linkedin, Github, MapPin, ChevronDown, ExternalLink, 
  Code2, Server, Database, Cloud, Brain, Terminal, Award,
  Briefcase, GraduationCap, Languages as LanguagesIcon, Sparkles, Menu, X
} from 'lucide-react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import LanguageDropdown from './components/LanguageDropdown'

// Helper to parse text with <highlight> tags
const HighlightedText = ({ text }) => {
  const parts = text.split(/(<highlight>|<\/highlight>)/)
  let isHighlight = false
  return (
    <>
      {parts.map((part, i) => {
        if (part === '<highlight>') {
          isHighlight = true
          return null
        }
        if (part === '</highlight>') {
          isHighlight = false
          return null
        }
        return isHighlight ? (
          <span key={i} className="text-blue-400 font-semibold">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      })}
    </>
  )
}

// Particle Background Component
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: `${2 + Math.random() * 4}px`,
  }))

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'about', label: t.nav.about },
    { key: 'skills', label: t.nav.skills },
    { key: 'experience', label: t.nav.experience },
    { key: 'projects', label: t.nav.projects },
    { key: 'contact', label: t.nav.contact },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          MS
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={`#${item.key}`}
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <LanguageDropdown />
          <motion.a
            href="mailto:stele.miha@gmail.com"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.nav.hireMe}
          </motion.a>
        </div>

        {/* Mobile Nav - Language + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageDropdown />
          <button
            className="text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden overflow-x-hidden max-w-[calc(100vw-2rem)]"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  const { t } = useLanguage()
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % t.hero.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [t.hero.roles.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hex-pattern">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm">{t.hero.available}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {t.hero.greeting}{' '}
              <span className="gradient-text">{t.hero.name}</span>
            </h1>

            <div className="h-16 mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl md:text-3xl text-blue-400 font-medium"
                >
                  {t.hero.roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <MapPin className="text-blue-400" size={20} />
              <span className="text-slate-300">{t.hero.location}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                {t.hero.getInTouch}
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 glass rounded-xl text-white font-semibold text-lg hover:bg-slate-700/50 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.viewProjects}
                <ExternalLink size={20} />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">
              {[
                { icon: Github, href: 'https://github.com/mihastele', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mihastele', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:stele.miha@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-light rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
              
              {/* Avatar container */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/avatar.png"
                  alt="Miha Stele"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-blue-400 font-bold">{t.hero.yearsExp}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-green-400 font-bold">{t.hero.degree}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-blue-400" size={32} />
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  const { t } = useLanguage()
  const stats = [
    { label: t.about.stats.yearsExp, value: '7+' },
    { label: t.about.stats.technologies, value: '50+' },
    { label: t.about.stats.projects, value: '30+' },
    { label: t.about.stats.certifications, value: '10+' },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              <HighlightedText text={t.about.p1} />
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              <HighlightedText text={t.about.p2} />
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              <HighlightedText text={t.about.p3} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl text-center hover:border-blue-500/50 transition-all"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
const SkillsSection = () => {
  const { t } = useLanguage()
  const skillCategories = [
    {
      title: t.skills.categories.languages,
      icon: Code2,
      color: 'from-blue-500 to-cyan-400',
      skills: ['JavaScript', 'Java', 'Python', 'SQL', 'Bash', 'C#', 'Ruby', 'C++', 'PHP'],
    },
    {
      title: t.skills.categories.frontend,
      icon: Sparkles,
      color: 'from-purple-500 to-pink-400',
      skills: ['React.js', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'SASS', 'Tailwind'],
    },
    {
      title: t.skills.categories.backend,
      icon: Server,
      color: 'from-green-500 to-emerald-400',
      skills: ['Node.js', 'Laravel', 'REST APIs', 'GraphQL', 'Microservices'],
    },
    {
      title: t.skills.categories.databases,
      icon: Database,
      color: 'from-orange-500 to-yellow-400',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle DB', 'NoSQL', 'Redis'],
    },
    {
      title: t.skills.categories.devops,
      icon: Cloud,
      color: 'from-sky-500 to-blue-400',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'AWS', 'GCP', 'Ansible'],
    },
    {
      title: t.skills.categories.ml,
      icon: Brain,
      color: 'from-rose-500 to-red-400',
      skills: ['PyTorch', 'TensorFlow', 'LLMs', 'Deep Learning', 'NLP'],
    },
  ]

  return (
    <section id="skills" className="py-32 relative hex-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 flex items-center justify-center">
              <Terminal className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{t.skills.toolsTitle}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Linux', 'Git', 'GitHub', 'GitLab', 'IntelliJ IDEA', 'VS Code', 'JIRA', 'VirtualBox', 
              'Wildfly', 'Maven', 'Puppet', 'OpenShift', 'CircleCI', 'Heroku', 'Firebase',
              'Apache Httpd', 'FTP', 'SSH'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 glass-light rounded-xl text-slate-300 text-sm font-medium hover:text-blue-300 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Experience Section
const ExperienceSection = () => {
  const { t } = useLanguage()
  const experienceTech = [
    ['React.js', 'C#', 'SQL', 'JavaScript'],
    ['Vue.js', 'Laravel', 'PHP', 'Node.js'],
    ['CI/CD', 'DevOps', 'Automation'],
    ['Python', 'PyTorch', 'Linux', 'SASS'],
    ['Java', 'Jenkins', 'GitLab', 'MongoDB'],
  ]

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-blue-600 hidden md:block" />

          <div className="space-y-12">
            {t.experience.jobs.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900 z-10 hidden md:block" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass p-6 rounded-2xl hover:border-blue-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-blue-400" size={20} />
                      <span className="text-blue-400 font-mono text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experienceTech[index]?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Education & Certifications
const EducationSection = () => {
  const { t } = useLanguage()

  const certifications = [
    'Meta Front-End Developer Certificate',
    'IBM Machine Learning Professional Certificate',
    'Google IT Support Professional Certificate',
    'Google IT Automation Professional Certificate',
    'SRE and DevOps Engineer with Google Cloud',
    'Cloud Engineering with Google Cloud',
    'AWS Fundamentals',
    'Software Design and Architecture',
  ]

  return (
    <section className="py-32 relative hex-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">{t.education.title}</h3>
            </div>

            <div className="space-y-6">
              {t.education.degrees.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <p className="text-blue-400 font-mono text-sm mb-2">{edu.period}</p>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-400">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">{t.education.certTitle}</h3>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl hover:bg-blue-600/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-slate-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <LanguagesIcon className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">{t.education.langTitle}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {t.education.languages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl text-center"
              >
                <p className="text-white font-semibold">{item.lang}</p>
                <p className="text-slate-400 text-sm">{item.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section
const ProjectsSection = () => {
  const { t } = useLanguage()
  const projectLinks = [
    { link: 'https://terminoloski.slovenscina.eu/', tags: ['Web Development', 'NLP', 'Python'] },
    { link: 'https://formasolve.com/', tags: ['Web Development', 'Modern UI'] },
    { link: 'https://www.zdravilnigaj.si/', tags: ['Full Stack', 'Web Development'] },
    { link: 'https://mihastele.github.io/spaceshooter.html', tags: ['Game Dev', 'JavaScript', 'Canvas'] },
    { link: 'https://mihastele.github.io/survivors/2DSurvivors.html', tags: ['Game Dev', 'JavaScript'] },
    { link: 'https://mihastele.github.io/flexiebuddies_alpha/', tags: ['Web App', 'Animation'] },
    { link: 'https://mihastele.github.io/guided-sudoku/', tags: ['Puzzle', 'JavaScript', 'Logic'] },
    { link: 'https://mist-blog.vercel.app/', tags: ['Blog', 'Next.js', 'Vercel'] },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <motion.a
              key={index}
              href={projectLinks[index]?.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 group cursor-pointer hover:border-blue-500/50 transition-all block"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center">
                  <Code2 className="text-white" size={24} />
                </div>
                <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {projectLinks[index]?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-32 relative hex-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: t.contact.email, value: 'stele.miha@gmail.com', href: 'mailto:stele.miha@gmail.com' },
              { icon: Linkedin, label: 'LinkedIn', value: '/in/mihastele', href: 'https://www.linkedin.com/in/mihastele' },
              { icon: Github, label: 'GitHub', value: '/mihastele', href: 'https://github.com/mihastele' },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl hover:border-blue-500/50 transition-all group block"
              >
                <contact.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-slate-400 text-sm mb-1">{contact.label}</p>
                <p className="text-white font-medium">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:stele.miha@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
          >
            <Mail size={24} />
            {t.contact.sendMessage}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Miha Stele. {t.footer.rights}
          </p>
          <p className="text-slate-500 text-sm">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <ParticleBackground />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
