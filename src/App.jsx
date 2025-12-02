import React, { useState, useEffect } from 'react';
import {
  Moon, Sun, Menu, X, ArrowRight, CheckCircle,
  Code, Cpu, Globe, Zap, MessageCircle, Phone,
  Mail, Linkedin, Shield, Terminal, Database, Layout
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 focus:ring-emerald-500",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-700 dark:hover:bg-slate-600 focus:ring-slate-500",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-slate-800",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:border-emerald-500 dark:hover:border-emerald-500 group">
    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const TechBadge = ({ label }) => (
  <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-sm border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default">
    {label}
  </span>
);

const PrivacyPolicy = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-24 pb-12 px-4 md:px-8">
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-emerald-600 hover:text-emerald-500 font-medium"
      >
        <ArrowRight className="rotate-180 mr-2 w-4 h-4" /> Back to Home
      </button>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-xl font-bold mb-3 text-emerald-600">1. Information We Collect</h2>
          <p>At JinaMatrix.in, we collect information you provide directly to us, such as when you request a quote, sign up for our newsletter, or communicate with us. This may include your name, email address, phone number, and company details.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-emerald-600">2. How We Use Information</h2>
          <p>We use the information to build and deploy your AI web applications, maintain our services, and communicate with you regarding your project status or new features.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-emerald-600">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized alteration, loss, or misuse.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-emerald-600">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at m.nath190702@gmail.com.</p>
        </section>
      </div>
    </div>
  </div>
);

// --- Main Application ---

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Toggle Dark Mode Class on HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (currentPage === 'privacy') {
    return (
      <>
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo('home')}>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  JinaMatrix<span className="text-slate-900 dark:text-white">.in</span>
                </span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
            </div>
          </div>
        </nav>
        <PrivacyPolicy onBack={() => navigateTo('home')} />
      </>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo('home')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                JinaMatrix<span className="text-slate-900 dark:text-white">.in</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <button onClick={() => scrollToSection('features')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md font-medium transition-colors">Features</button>
                <button onClick={() => scrollToSection('process')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md font-medium transition-colors">Process</button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md font-medium transition-colors">Contact</button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                </button>

                <Button variant="primary" onClick={() => scrollToSection('contact')}>
                  Build My App
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-white hover:bg-emerald-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">Features</button>
              <button onClick={() => scrollToSection('process')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">Process</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6 animate-fade-in-up">
                <Zap className="w-4 h-4 mr-2" /> Next-Gen AI Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                Forging Intelligent <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">Digital Realities</span>
              </h1>
              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                JinaMatrix builds custom, high-performance web applications powered by cutting-edge Artificial Intelligence. Automate workflows, predict trends, and scale effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" onClick={() => scrollToSection('contact')} icon={ArrowRight}>
                  Start Your Project
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('features')}>
                  Explore Features
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-slate-900 rounded-xl overflow-hidden h-64 md:h-80 flex flex-col">
                  {/* Mock Browser Header */}
                  <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Mock Dashboard Content */}
                  <div className="p-6 flex-1 flex flex-col justify-center items-center text-slate-500 font-mono text-sm relative">
                    <div className="absolute inset-0 bg-slate-900 z-0"></div>
                    <div className="z-10 w-full space-y-4">
                      <div className="flex justify-between items-center text-emerald-400 mb-4">
                        <span>System Status</span>
                        <span className="animate-pulse">● Online</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-3/4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-3 rounded border border-slate-700">
                          <span className="text-xs block text-slate-400">AI Model</span>
                          <span className="text-white font-bold">JinaMatrix-2.0</span>
                        </div>
                        <div className="bg-slate-800 p-3 rounded border border-slate-700">
                          <span className="text-xs block text-slate-400">Latency</span>
                          <span className="text-white font-bold">04ms</span>
                        </div>
                      </div>
                      <div className="text-center pt-4 text-xs text-slate-600">
                        Analysis Complete. Optimization +400%.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why JinaMatrix?</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">We don't just write code; we engineer intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400">Optimized algorithms and modern tech stacks ensure your app loads instantly and scales effortlessly.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Core Integration</h3>
              <p className="text-slate-600 dark:text-slate-400">Deep integration of LLMs and machine learning models directly into your business logic.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Precision Engineering</h3>
              <p className="text-slate-600 dark:text-slate-400">Clean, maintainable architecture built to industry standards with 99.9% uptime reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for Modern Business
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to launch a world-class AI application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageCircle}
              title="Natural Language Processing"
              description="Integrate chatbots and assistants that understand context, sentiment, and intent to support your users 24/7."
            />
            <FeatureCard
              icon={Database}
              title="Smart Data Analytics"
              description="Turn raw data into actionable insights with predictive modeling and automated reporting dashboards."
            />
            <FeatureCard
              icon={Layout}
              title="Workflow Automation"
              description="Eliminate repetitive tasks. Let our AI agents handle scheduling, data entry, and email routing automatically."
            />
            <FeatureCard
              icon={Globe}
              title="Global Scalability"
              description="Built on cloud-native architecture (AWS/Google Cloud) to serve users worldwide with low latency."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              description="Bank-grade encryption, secure authentication, and privacy-first AI implementation compliant with GDPR."
            />
            <FeatureCard
              icon={Code}
              title="Custom API Integration"
              description="Seamlessly connect your new AI tool with your existing CRM, ERP, or legacy systems."
            />
          </div>

          {/* Tech Stack Bar */}
          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">Powered By Best-in-Class Technology</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Next.js', 'Python', 'TensorFlow',
                'OpenAI', 'Claude', 'Perplexity AI', 'Gemini',
                'Node.js', 'PostgreSQL', 'AWS'
              ].map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <div className="h-1 w-20 bg-emerald-500 rounded"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your needs and data strategy.' },
              { step: '02', title: 'Prototype', desc: 'Visual mockups and architecture planning.' },
              { step: '03', title: 'Development', desc: 'Agile coding with regular updates.' },
              { step: '04', title: 'Deploy', desc: 'Launch, monitor, and scale.' }
            ].map((item) => (
              <div key={item.step} className="relative pl-8 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></span>
                <span className="text-5xl font-bold text-slate-800 absolute -top-4 right-4 select-none opacity-50">{item.step}</span>
                <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Ready to Matrix Your Business?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Let's discuss how we can build your vision. Reach out via WhatsApp, Email, or LinkedIn, or fill out the form.
              </p>

              <div className="space-y-6">
                <a href="https://wa.me/919531273486" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">+91 95312 73486</p>
                  </div>
                </a>

                <a href="tel:+919531273486" className="flex items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Call Us</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">+91 95312 73486</p>
                  </div>
                </a>

                <a href="mailto:m.nath190702@gmail.com" className="flex items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">m.nath190702@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/monoswee-nath/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                    <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Connect with Monoswee Nath</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Simple Form */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Request a Consultation</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Idea</label>
                  <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Tell us about your AI needs..."></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white mb-4 block">JinaMatrix.in</span>
              <p className="text-slate-400 max-w-sm">
                Empowering businesses with intelligent web solutions. Your partner in the AI revolution.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-emerald-400 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('process')} className="hover:text-emerald-400 transition-colors">Process</button></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/monoswee-nath/" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
                <li><a href="mailto:m.nath190702@gmail.com" className="hover:text-emerald-400 transition-colors">Email</a></li>
                <li><a href="https://wa.me/919531273486" className="hover:text-emerald-400 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} JinaMatrix.in. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Terminal className="w-5 h-5 text-slate-600" />
              <Code className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;