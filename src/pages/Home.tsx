import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Bruce <span className="text-blue-600 dark:text-blue-400">Nguyen</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#home" onClick={() => setActiveSection('home')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Home</a>
                <a href="#about" onClick={() => setActiveSection('about')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>About</a>
                <a href="#projects" onClick={() => setActiveSection('projects')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Projects</a>
                <a href="#skills" onClick={() => setActiveSection('skills')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Skills</a>
                <a href="#contact" onClick={() => setActiveSection('contact')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Home</a>
            <a href="#about" onClick={() => { setActiveSection('about'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>About</a>
            <a href="#projects" onClick={() => { setActiveSection('projects'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Projects</a>
            <a href="#skills" onClick={() => { setActiveSection('skills'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Skills</a>
            <a href="#contact" onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Contact</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="max-w-[800px] mx-auto text-center pb-[100px] md:pb-[130px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-lg p-8 mb-10 bg-gradient-to-r from-black to-gray-900 border border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
                    <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                      <img src="/images/avatar.jpg" alt="Bruce Nguyen" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-4 text-white md:text-6xl leading-tight tracking-tighter">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glitch-text">BRUCE NGUYEN</span>
                      <br />
                      <span className="text-3xl md:text-4xl text-cyan-300">&lt; Firmware & Software Engineer /&gt;</span>
                    </h1>
                    <div className="w-32 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                    <p className="text-lg text-cyan-100 mb-8 leading-relaxed max-w-2xl mx-auto font-mono">
                      <span className="text-purple-400">interface</span> <span className="text-cyan-400">Engineer</span> {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-gray-300">fullstack: <span className="text-green-400">true</span>,</span>
                      <br />
                      &nbsp;&nbsp;<span className="text-gray-300">specialties: [<span className="text-orange-400">"Firmware"</span>, <span className="text-orange-400">"Mobile"</span>, <span className="text-orange-400">"Cloud"</span>],</span>
                      <br />
                      &nbsp;&nbsp;<span className="text-gray-300">location: <span className="text-orange-400">"San Marcos, CA"</span>,</span>
                      <br />
                      &nbsp;&nbsp;<span className="text-gray-300">mission: <span className="text-orange-400">"Building innovative and scalable solutions"</span></span>
                      <br />
                      {"}"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="inline-flex items-center justify-center py-3 px-7 text-base font-medium text-black rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition duration-300 border border-cyan-300 shadow-[0_0_15px_rgba(0,200,255,0.5)]"
                      >
                        <span className="mr-2">{"<"}</span>View Projects<span className="ml-2">{"/>"}</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center justify-center py-3 px-7 text-base font-medium text-cyan-300 rounded-md bg-transparent hover:bg-cyan-900/30 transition duration-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.3)]"
                      >
                        <span className="mr-2">{"{"}</span>Contact Me<span className="ml-2">{"}"}</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-20 md:pt-25 lg:pt-30 pb-20 md:pb-25 lg:pb-30 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center glitch-text">ABOUT<span className="font-normal text-cyan-300">[me]</span></h2>
                  <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Bruce Nguyen - Firmware & Software Engineer" 
                      className="w-full h-auto filter brightness-90 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 border border-cyan-400 rounded px-3 py-1">
                      <span className="text-cyan-400 font-mono text-xs">sys.status: <span className="text-green-400">ONLINE</span></span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-grid-pattern opacity-20 mix-blend-overlay pointer-events-none"></div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/80 p-8 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300 font-mono">$ whoami</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                    <span className="text-cyan-400">Bruce Nguyen</span> : Innovative and results-driven engineer with expertise in firmware development, mobile app integration, and cloud-based IoT solutions.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                    Proficient in BLE communication, AWS infrastructure automation, and full-stack mobile development. Adept at working in fast-paced environments, collaborating with cross-functional teams, and implementing scalable solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-cyan-400 text-lg mr-2">▶</span>
                      <span className="text-gray-200 font-mono text-sm">Location: <span className="text-white">San Marcos, CA</span></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 text-lg mr-2">▶</span>
                      <span className="text-gray-200 font-mono text-sm">Email: <span className="text-white">techgiganet@gmail.com</span></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 text-lg mr-2">▶</span>
                      <span className="text-gray-200 font-mono text-sm">Availability: <span className="text-green-400">Full-time</span></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-400 text-lg mr-2">▶</span>
                      <span className="text-gray-200 font-mono text-sm">Phone: <span className="text-white">+1 (678) 612-4510</span></span>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/bruce-nguyen-4707b7/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-cyan-300 rounded bg-transparent hover:bg-cyan-900/30 transition duration-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.2)]"
                  >
                    <span className="mr-2">&lt;</span>View Experience<span className="ml-2">/&gt;</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-20 md:pt-25 lg:pt-30 pb-20 md:pb-25 lg:pb-30 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center glitch-text">EXPERIENCE<span className="font-normal text-cyan-300">[career]</span></h2>
                  <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 border-l-2 border-cyan-600/30 h-full"></div>
              
              {/* Job 1 - Firmware Engineer */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mb-16"
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10 md:text-right mb-8 md:mb-0">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative inline-block">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-cyan-300 font-mono mb-1">Firmware Engineer</h3>
                      <p className="text-white font-medium">Confidential – Remote</p>
                      <p className="text-cyan-400 text-sm">August 2024 – Present</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-12 h-12 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  </div>
                  <div className="md:w-1/2 pl-10">
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Developed BLE communication protocols for a medical pump feeder device, enabling seamless iOS and Android integration.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Automated AWS CI/CD pipeline for Lambda, DynamoDB, S3, and Cognito deployment using TypeScript and AWS CDK.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Engineered a Flutter-based mobile application for iOS and Android, synchronizing real-time data with the cloud.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Developed role-based access control (RBAC) to enable different app functionalities based on user roles.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Led STM32 firmware integration for Amazon Sidewalk, enabling secure IoT communication.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Job 2 - Data Engineer */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative mb-16"
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10 md:text-right mb-8 md:mb-0 md:order-1">
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Engineered and maintained data pipelines using Apache Beam on Google Cloud Dataflow for business analytics.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Integrated authentication using GCP serverless services.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Implemented Pub/Sub messaging services for real-time distributed data exchange, enhancing system responsiveness.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Created Terraform scripts for automated deployment of cloud resources across multiple environments.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Optimized data access using Google Cloud Storage (GCS) IO connectors, reducing development overhead.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-12 h-12 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  </div>
                  <div className="md:w-1/2 pl-10 md:order-0">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative inline-block">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-cyan-300 font-mono mb-1">Data Engineer and Tech Lead</h3>
                      <p className="text-white font-medium">METRO.digital – Remote</p>
                      <p className="text-cyan-400 text-sm">May 2023 – June 2024</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Job 3 - Engineering Consultant */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative mb-16"
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10 md:text-right mb-8 md:mb-0">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative inline-block">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-cyan-300 font-mono mb-1">Engineering Consultant</h3>
                      <p className="text-white font-medium">The Home Depot – Remote</p>
                      <p className="text-cyan-400 text-sm">October 2021 – April 2023</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-12 h-12 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  </div>
                  <div className="md:w-1/2 pl-10">
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Designed a scalable model serving architecture leveraging Google Vertex AI and custom containers for real-time inference.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Conducted research on TensorFlow and ONNX optimizations to enhance model performance.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▹</span>
                        <span>Facilitated knowledge transfer and code sharing within data science teams.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Job 4 - Senior Software Engineer */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10 md:text-right mb-8 md:mb-0 md:order-1">
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Developed a cross-browser video player serving 5 million daily users using React.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Built a browser video plugin optimized for ad performance using HTML5 and native JavaScript.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Wrote unit tests using Enzyme and Jest to ensure code reliability.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Designed and implemented a data pipeline for vehicle data ingestion using Node.js and MongoDB.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-cyan-400 ml-2 md:ml-0 md:mr-2 mt-1">▹</span>
                        <span>Mentored junior developers and led automated testing efforts in a CI/CD environment.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-12 h-12 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  </div>
                  <div className="md:w-1/2 pl-10 md:order-0">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative inline-block">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-cyan-300 font-mono mb-1">Senior Software Engineer</h3>
                      <p className="text-white font-medium">Hearst Digital – Atlanta, GA</p>
                      <p className="text-cyan-400 text-sm">March 2018 – October 2021</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-cyan-300 font-mono inline-block border-b-2 border-cyan-500 pb-2">Education</h3>
                </div>
                <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <h4 className="text-xl font-bold text-cyan-300 font-mono mb-1">Bachelor of Science</h4>
                  <p className="text-white font-medium">Stevens Institute of Technology, Hoboken, NJ</p>
                  <p className="text-cyan-400 text-sm mb-4">September 1987 – June 1992</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-20 md:pt-25 lg:pt-30 pb-20 md:pb-25 lg:pb-30 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center glitch-text">PROJECTS<span className="font-normal text-cyan-300">[selected]</span></h2>
                  <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] bg-gray-900">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-black/70 border border-cyan-400 rounded px-2 py-1 z-10">
                    <span className="text-cyan-400 font-mono text-xs">01</span>
                  </div>
                  <img 
                    src="/images/project1.jpg" 
                    alt="CodeMatchPro" 
                    className="w-full h-48 object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300 font-mono group-hover:text-cyan-400 transition-colors duration-300">CodeMatchPro</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Developer matching platform connecting companies with skilled engineers. Features custom matching algorithms and intuitive project management tools.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">React</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Node.js</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">MongoDB</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://codematchpro.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] bg-gray-900">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-black/70 border border-cyan-400 rounded px-2 py-1 z-10">
                    <span className="text-cyan-400 font-mono text-xs">02</span>
                  </div>
                  <img 
                    src="/images/project2.jpg" 
                    alt="Trump Market Trends" 
                    className="w-full h-48 object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300 font-mono group-hover:text-cyan-400 transition-colors duration-300">Trump Market Trends</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Real-time market analysis platform tracking financial trends. Integrated data visualization and predictive analytics for market insights.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Vue.js</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">D3.js</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Firebase</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://trumpmarkettrends.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] bg-gray-900">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-black/70 border border-cyan-400 rounded px-2 py-1 z-10">
                    <span className="text-cyan-400 font-mono text-xs">03</span>
                  </div>
                  <img 
                    src="/images/project3.jpg" 
                    alt="Simple One Realty" 
                    className="w-full h-48 object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300 font-mono group-hover:text-cyan-400 transition-colors duration-300">Simple One Realty</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Streamlined real estate platform for property listings and client management. Features interactive maps and automated communication tools.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Next.js</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Tailwind CSS</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Supabase</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://simpleonerealty.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] bg-gray-900">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-black/70 border border-cyan-400 rounded px-2 py-1 z-10">
                    <span className="text-cyan-400 font-mono text-xs">04</span>
                  </div>
                  <img 
                    src="/images/project4.jpg" 
                    alt="EasyTask" 
                    className="w-full h-48 object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300 font-mono group-hover:text-cyan-400 transition-colors duration-300">EasyTask App</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Intuitive task management application with customizable workflows and productivity analytics. Includes mobile apps for iOS and Android.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Flutter</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Firebase</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Express</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://easytask.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 5 - Medical Device BLE */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] bg-gray-900">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-black/70 border border-cyan-400 rounded px-2 py-1 z-10">
                    <span className="text-cyan-400 font-mono text-xs">05</span>
                  </div>
                  <img 
                    src="/images/project5.jpg" 
                    alt="Medical Device BLE Integration" 
                    className="w-full h-48 object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300 font-mono group-hover:text-cyan-400 transition-colors duration-300">Medical Device BLE Integration</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Firmware and mobile app integration enabling real-time medical device data collection through BLE protocols. Reduced latency by 40% while ensuring HIPAA compliance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">STM32</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">Flutter</span>
                      <span className="px-2 py-1 text-xs bg-cyan-900/40 text-cyan-300 border border-cyan-700 rounded">BLE</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Show More Button */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-3 px-8 text-sm font-medium text-cyan-300 rounded bg-transparent hover:bg-cyan-900/30 transition duration-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.2)]"
                >
                  <span className="mr-2">&lt;</span>Load More Projects<span className="ml-2">/&gt;</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pt-20 md:pt-25 lg:pt-30 pb-20 md:pb-25 lg:pb-30 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center glitch-text">SKILLS<span className="font-normal text-cyan-300">[matrix]</span></h2>
                  <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Skills Categories Column */}
              <div>
                {/* Languages */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-cyan-300">
                    <span className="inline-block w-2 h-2 bg-cyan-400 mr-2 rounded-full"></span>
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['C/C++', 'C#', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'SQL'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-cyan-700 rounded text-cyan-200 hover:border-cyan-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(0,200,255,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-cyan-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Frameworks & Libraries */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-purple-300">
                    <span className="inline-block w-2 h-2 bg-purple-400 mr-2 rounded-full"></span>
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Flask', 'TensorFlow', 'PyTorch', 'CUDA'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-purple-700 rounded text-purple-200 hover:border-purple-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(180,0,255,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-purple-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Cloud & DevOps */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-blue-300">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    Cloud & DevOps
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Terraform', 'Git'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-blue-700 rounded text-blue-200 hover:border-blue-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(0,100,255,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-blue-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Skills Column 2 */}
              <div>
                {/* Hardware & IoT */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-green-300">
                    <span className="inline-block w-2 h-2 bg-green-400 mr-2 rounded-full"></span>
                    Hardware & IoT
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Embedded Systems', 'STM32', 'ESP32', 'RTOS', 'PCB Design', 'BLE', 'I2C/SPI', 'FPGA'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-green-700 rounded text-green-200 hover:border-green-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(0,255,100,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-green-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Data & Analytics */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-yellow-300">
                    <span className="inline-block w-2 h-2 bg-yellow-400 mr-2 rounded-full"></span>
                    Data & Analytics
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['SQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Data Pipelines', 'Kafka', 'Pandas', 'NumPy', 'Jupyter'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-yellow-700 rounded text-yellow-200 hover:border-yellow-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(255,200,0,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-yellow-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Tools & Methodologies */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-mono font-bold mb-4 flex items-center text-pink-300">
                    <span className="inline-block w-2 h-2 bg-pink-400 mr-2 rounded-full"></span>
                    Tools & Methodologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Agile', 'Scrum', 'JIRA', 'Confluence', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Debugging'].map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="py-2 px-4 bg-gray-900 border border-pink-700 rounded text-pink-200 hover:border-pink-400 transition-colors duration-300 text-sm shadow-[0_0_15px_rgba(255,0,180,0.1)]">
                          <span className="inline-block h-2 w-2 mr-2 rounded-full bg-pink-400 animate-pulse"></span>{skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Computer Terminal Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 relative overflow-hidden bg-gray-900 rounded-lg border border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            >
              <div className="flex items-center bg-gray-950 border-b border-cyan-700 p-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-cyan-300 font-mono">terminal@brucemetro:~</div>
              </div>
              <div className="p-4 font-mono text-sm text-cyan-300">
                <div className="flex">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="typing-animation"> analyzing skill proficiency levels...</span>
                </div>
                <div className="mt-2">
                  <div className="mb-2">
                    <span className="text-pink-400">C/C++:</span> 
                    <div className="mt-1 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-pink-400">Embedded Systems:</span> 
                    <div className="mt-1 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-pink-400">React & JavaScript:</span> 
                    <div className="mt-1 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-pink-400">Python:</span> 
                    <div className="mt-1 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        transition={{ duration: 1, delay: 1.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">Cloud Technologies:</span> 
                    <div className="mt-1 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  <span className="text-green-400 mr-2">$</span>
                  <span> skills.summary(): <span className="text-cyan-400">Versatile engineer with strong focus on embedded systems and modern web technologies.</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-20 md:pt-25 lg:pt-30 pb-20 md:pb-25 lg:pb-30 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center glitch-text">CONTACT<span className="font-normal text-cyan-300">[connect]</span></h2>
                  <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-cyan-300 font-mono mb-8">// Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-mono text-sm mb-1">Email:</p>
                      <a href="mailto:techgiganet@gmail.com" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">techgiganet@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-mono text-sm mb-1">Phone:</p>
                      <a href="tel:+16786124510" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">+1 (678) 612-4510</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-mono text-sm mb-1">Location:</p>
                      <p className="text-cyan-400 font-medium">San Marcos, CA 92069</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-mono text-sm mb-1">Availability:</p>
                      <p className="text-green-400 font-medium">Open to Opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-cyan-300 font-mono mb-4">// Connect</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/subarudad" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 hover:bg-cyan-800/40 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/bruce-nguyen-4707b7/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 hover:bg-cyan-800/40 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/innoculou" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-700 hover:bg-cyan-800/40 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-lg border border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-cyan-300 font-mono mb-8">// Send Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-cyan-700 rounded-md focus:ring-cyan-400 focus:border-cyan-400 bg-gray-800/70 text-white shadow-[0_0_10px_rgba(0,255,255,0.1)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-cyan-700 rounded-md focus:ring-cyan-400 focus:border-cyan-400 bg-gray-800/70 text-white shadow-[0_0_10px_rgba(0,255,255,0.1)]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-cyan-700 rounded-md focus:ring-cyan-400 focus:border-cyan-400 bg-gray-800/70 text-white shadow-[0_0_10px_rgba(0,255,255,0.1)]"
                      placeholder="Project Opportunity"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-cyan-700 rounded-md focus:ring-cyan-400 focus:border-cyan-400 bg-gray-800/70 text-white shadow-[0_0_10px_rgba(0,255,255,0.1)]"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3 px-4 text-base font-medium rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.4)] border border-cyan-400"
                    >
                      <span>Send Message</span>
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 border-t border-cyan-800/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Bruce <span className="text-cyan-400">Nguyen</span></h3>
                <p className="text-gray-400 mb-4">
                  Innovative Firmware & Software Engineer specializing in embedded systems, mobile app integration, and cloud-based IoT solutions.
                </p>
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Bruce Nguyen. All rights reserved.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
                  <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Relocate Preferences</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">▶</span>
                    Atlanta, GA
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">▶</span>
                    Washington DC
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">▶</span>
                    Portland, OR
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">▶</span>
                    Seattle, WA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home; 