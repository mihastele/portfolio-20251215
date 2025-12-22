import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Linkedin, Github, MapPin, ChevronDown, ExternalLink,
  Code2, Server, Database, Cloud, Brain, Terminal, Award,
  Briefcase, GraduationCap, Languages, Sparkles, Menu, X
} from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'
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
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="mailto:stele.miha@gmail.com"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
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
              <span className="text-slate-300 text-sm">Available for freelance / full-time</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Miha Stele</span>
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-blue-400 font-medium mb-6"
            >
              I build software that works in production, not just in theory
            </motion.h2>

            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              Full-stack engineer with 10 years of experience delivering
              reliable applications from idea to stable deployment.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <MapPin className="text-blue-400" size={20} />
              <span className="text-slate-300">Slovenia</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 glass rounded-xl text-white font-semibold text-lg hover:bg-slate-700/50 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
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
                <span className="text-blue-400 font-bold">10 Years</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-green-400 font-bold">BSc CS</span>
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
  const stats = [
    { label: 'Years Experience', value: 'Cca. 10' },
    { label: 'Technologies', value: '50+' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Certifications', value: '10+' },
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
            About <span className="gradient-text">Me</span>
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
              With <span className="text-blue-400 font-semibold">almost a decade of experience</span>,
              I specialize in building <span className="text-blue-400 font-semibold">production-grade full-stack applications</span> that
              are reliable, maintainable, and scalable. My strength lies in
              <span className="text-blue-400 font-semibold"> delivering end-to-end solutions</span> — from
              initial concept through stable deployment and long-term maintenance.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I excel at <span className="text-blue-400 font-semibold">bridging the gap between development and operations</span>,
              building robust CI/CD pipelines, automating infrastructure, and ensuring applications
              run smoothly in production. My foundation in
              <span className="text-blue-400 font-semibold"> Computer Science</span> from the University of Ljubljana,
              combined with hands-on experience, enables me to tackle complex technical challenges effectively.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Core expertise: <span className="text-blue-400 font-semibold">Java, Python, JavaScript/TypeScript</span>,
              with deep knowledge of <span className="text-blue-400 font-semibold">Docker, CI/CD pipelines, API, security</span>,
              and <span className="text-blue-400 font-semibold">artificial intelligence</span>. I focus on writing clean, tested code
              that other engineers can maintain and extend.
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
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-400',
      skills: ['JavaScript', 'Java', 'Python', 'SQL', 'Bash', 'C#', 'Ruby', 'C++', 'PHP'],
    },
    {
      title: 'Frontend',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-400',
      skills: ['React.js', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'SASS', 'Tailwind'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-400',
      skills: ['Node.js', 'Laravel', 'REST APIs', 'GraphQL', 'Microservices'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-yellow-400',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle DB', 'NoSQL', 'Redis'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-sky-500 to-blue-400',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'AWS', 'GCP', 'Ansible'],
    },
    {
      title: 'ML & AI',
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built over almost a decade of professional experience
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
            <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
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
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'SqualoMail Slovenija',
      period: 'Aug 2025 - Present',
      description: 'Building and maintaining full-stack features for email marketing platform, improving system reliability and user experience.',
      tech: ['React.js', 'C#', 'SQL', 'JavaScript'],
    },
    {
      title: 'Software Engineer',
      company: 'PC7',
      period: 'Feb 2024 - Jul 2025',
      description: 'Delivered production-ready features across multiple client projects. Reduced deployment time by 40% through CI/CD automation and improved application performance by optimizing database queries.',
      tech: ['Vue.js', 'Laravel', 'PHP', 'Node.js'],
    },
    {
      title: 'IT Engineer Specialist',
      company: 'Petrol Group',
      period: 'Jun 2023 - Dec 2023',
      description: 'Built CI/CD pipelines that reduced release cycles from weeks to days. Automated infrastructure provisioning, cutting manual deployment tasks by 60% and improving system stability.',
      tech: ['CI/CD', 'DevOps', 'Automation'],
    },
    {
      title: 'Software Engineer',
      company: 'Amebis d.o.o.',
      period: 'May 2021 - Jun 2023',
      description: 'Developed NLP applications powering Slovenian language tools used by thousands of users. Built the Terminological Portal backend, improving search accuracy and response times by 50%.',
      tech: ['Python', 'PyTorch', 'Linux', 'SASS'],
    },
    {
      title: 'Software Engineer & Test Automation',
      company: 'Beenius',
      period: 'Sep 2017 - May 2021',
      description: 'Built and maintained IPTV/OTT platform features serving 100K+ end users. Implemented automated testing framework that increased test coverage by 70% and reduced regression bugs by 40%.',
      tech: ['Java', 'Jenkins', 'GitLab', 'MongoDB'],
    },
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-blue-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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
                      {exp.tech.map((tech) => (
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
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'University of Ljubljana, Faculty of Computer and Information Science',
      period: '2015 - 2018',
    },
    {
      degree: 'High School Diploma (Electrical Engineering)',
      institution: 'Vegova Ljubljana',
      period: '2011 - 2015',
    },
  ]

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
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
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
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
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
              <Languages className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">Languages</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { lang: 'English', level: 'Professional' },
              { lang: 'Slovenian', level: 'Native' },
              { lang: 'German', level: 'Elementary' },
              { lang: 'Swedish', level: 'Elementary' },
              { lang: 'Norwegian', level: 'Elementary' },
            ].map((item, index) => (
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
  const projects = [
    {
      title: 'Terminological Portal',
      description: 'Problem: Slovenian researchers lacked a unified terminology database. Solution: Built a full-stack portal with advanced search and NLP processing. Result: Now used by linguists and researchers nationwide for terminology standardization.',
      link: 'https://terminoloski.slovenscina.eu/',
      tags: ['Web Development', 'NLP', 'Python'],
    },
    {
      title: 'FormaSolve',
      description: 'Problem: Client needed a professional web presence to showcase services. Solution: Designed and developed a modern, responsive website with optimized performance. Result: Improved client credibility and lead generation.',
      link: 'https://formasolve.com/',
      tags: ['Web Development', 'Modern UI'],
    },
    {
      title: 'Zdravilni Gaj',
      description: 'Problem: Health & wellness business needed online booking and service showcase. Solution: Built a full-stack application with booking system and content management. Result: Streamlined client appointments and increased online visibility.',
      link: 'https://www.zdravilnigaj.si/',
      tags: ['Full Stack', 'Web Development'],
    },
    {
      title: 'Space Shooter',
      description: 'Problem: Wanted to explore game development with pure web technologies. Solution: Built a complete arcade game using Canvas API and vanilla JavaScript. Result: Fully playable browser game demonstrating game loop, collision detection, and sprite management.',
      link: 'https://mihastele.github.io/spaceshooter.html',
      tags: ['Game Dev', 'JavaScript', 'Canvas'],
    },
    {
      title: '2D Survivors',
      description: 'Problem: Challenge to recreate popular game genre in browser. Solution: Implemented Vampire Survivors-style mechanics with procedural enemy spawning and upgrades. Result: Engaging browser game with progressive difficulty and upgrade system.',
      link: 'https://mihastele.github.io/survivors/2DSurvivors.html',
      tags: ['Game Dev', 'JavaScript'],
    },
    {
      title: 'Flexie Buddies',
      description: 'Problem: Experiment with interactive animations and character design. Solution: Created animated interactive characters with smooth CSS/JS animations. Result: Fun, engaging web experience showcasing animation capabilities.',
      link: 'https://mihastele.github.io/flexiebuddies_alpha/',
      tags: ['Web App', 'Animation'],
    },
    {
      title: 'Guided Sudoku',
      description: 'Problem: Standard Sudoku apps lack learning features for beginners. Solution: Built a puzzle game with hint system and step-by-step guidance. Result: Educational Sudoku experience that teaches solving techniques.',
      link: 'https://mihastele.github.io/guided-sudoku/',
      tags: ['Puzzle', 'JavaScript', 'Logic'],
    },
    {
      title: 'Tech Blog',
      description: 'Problem: Wanted a platform to share technical knowledge and insights. Solution: Built a modern blog with Next.js and deployed on Vercel. Result: Active blog for sharing development experiences and tutorials.',
      link: 'https://mist-blog.vercel.app/',
      tags: ['Blog', 'Next.js', 'Vercel'],
    },
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A selection of projects I've worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
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
                {project.tags.map((tag) => (
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
            Let's Talk About <span className="gradient-text">Your Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Available for freelance and full-time opportunities. Let's discuss how
            I can help bring your project from idea to production.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'stele.miha@gmail.com', href: 'mailto:stele.miha@gmail.com' },
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
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Miha Stele. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
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
  )
}

export default App
