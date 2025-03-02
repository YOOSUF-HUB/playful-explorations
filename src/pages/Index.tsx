
import React from "react";
import { 
  Code, 
  Briefcase, 
  User, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  ShoppingBag, 
  Globe, 
  Laptop
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="w-full bg-textilebrand-navy text-white py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-textilebrand-beige to-textilebrand-green flex items-center justify-center">
              <Code className="h-5 w-5 text-textilebrand-navy" />
            </div>
            <h1 className="text-xl font-bold">Alex Morgan</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-textilebrand-green transition-colors">About</a>
            <a href="#projects" className="hover:text-textilebrand-green transition-colors">Projects</a>
            <a href="#skills" className="hover:text-textilebrand-green transition-colors">Skills</a>
            <a href="#experience" className="hover:text-textilebrand-green transition-colors">Experience</a>
            <a href="#contact" className="hover:text-textilebrand-green transition-colors">Contact</a>
          </nav>
          <Button className="bg-textilebrand-green text-textilebrand-navy hover:bg-textilebrand-beige">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-textilebrand-navy to-[#403E43] text-white py-16 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-textilebrand-green/20 rounded-full text-textilebrand-green">
                <span className="font-medium">Full Stack Developer</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hi, I'm Alex Morgan
              </h1>
              <p className="text-lg text-gray-300">
                I build elegant, responsive, and high-performance web applications with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-textilebrand-green text-textilebrand-navy hover:bg-textilebrand-beige">
                  View My Work
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Resume
                </Button>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-textilebrand-green transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-textilebrand-green transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-textilebrand-green transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-textilebrand-green/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-textilebrand-beige/20 rounded-full blur-3xl"></div>
                <div className="w-80 h-80 bg-textilebrand-navy rounded-full border-4 border-textilebrand-green/30 p-4 relative z-10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-textilebrand-navy to-[#403E43] rounded-full flex items-center justify-center">
                    <User className="h-32 w-32 text-textilebrand-beige/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textilebrand-navy">About Me</h2>
            <div className="mt-2 w-20 h-1 bg-textilebrand-green mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-textilebrand-gray">
                I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, with a focus on creating elegant, user-friendly interfaces backed by robust architecture.
              </p>
              <p className="text-lg text-textilebrand-gray">
                After graduating with a Computer Science degree from UC Berkeley, I've worked with startups and established companies to deliver solutions that solve real business problems.
              </p>
              <p className="text-lg text-textilebrand-gray">
                When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or contributing to open-source projects.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-textilebrand-navy">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy">Email</h3>
                  <p>alex@example.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy">Experience</h3>
                  <p>5+ Years</p>
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy">Availability</h3>
                  <p>Open to opportunities</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-textilebrand-light-gray flex items-center justify-center">
                <User className="h-32 w-32 text-textilebrand-gray/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-textilebrand-light-gray">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textilebrand-navy">Featured Projects</h2>
            <div className="mt-2 w-20 h-1 bg-textilebrand-green mx-auto"></div>
            <p className="mt-4 text-textilebrand-gray max-w-2xl mx-auto">
              A selection of my recent work across various industries and technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop />,
                title: "E-Commerce Platform",
                description: "A full-featured online store with inventory management, payment processing, and customer analytics.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"]
              },
              {
                icon: <Globe />,
                title: "Travel Booking App",
                description: "Mobile-responsive web application for booking flights, hotels, and rental cars with real-time availability.",
                tech: ["React Native", "GraphQL", "AWS", "Firebase"]
              },
              {
                icon: <ShoppingBag />,
                title: "Inventory Management System",
                description: "Enterprise solution for tracking inventory across multiple warehouses with barcode scanning integration.",
                tech: ["Vue.js", "Express", "PostgreSQL", "Docker"]
              },
              {
                icon: <Code />,
                title: "Developer Portfolio",
                description: "Custom portfolio website with interactive project showcase and integrated blog system.",
                tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"]
              },
              {
                icon: <Briefcase />,
                title: "HR Management Dashboard",
                description: "Internal tool for HR departments to manage employee records, time off, and performance reviews.",
                tech: ["Angular", "Spring Boot", "MySQL", "Chart.js"]
              },
              {
                icon: <User />,
                title: "Social Media Analytics",
                description: "Dashboard for brands to track social media performance across multiple platforms.",
                tech: ["React", "Python", "Django", "D3.js"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-textilebrand-green rounded-lg flex items-center justify-center mb-4">
                  <div className="text-textilebrand-navy">{project.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-textilebrand-navy mb-2">{project.title}</h3>
                <p className="text-textilebrand-gray flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-textilebrand-beige text-xs font-medium text-textilebrand-navy rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-textilebrand-navy font-medium">
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textilebrand-navy">Skills & Expertise</h2>
            <div className="mt-2 w-20 h-1 bg-textilebrand-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript/TypeScript", level: 90 },
              { name: "React & React Native", level: 85 },
              { name: "Node.js & Express", level: 80 },
              { name: "HTML & CSS", level: 95 },
              { name: "UI/UX Design", level: 75 },
              { name: "MongoDB", level: 70 },
              { name: "PostgreSQL", level: 80 },
              { name: "GraphQL", level: 65 },
              { name: "AWS/Cloud Services", level: 75 },
              { name: "Docker & Kubernetes", level: 70 },
              { name: "CI/CD", level: 80 },
              { name: "Testing (Jest, Cypress)", level: 85 }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-textilebrand-navy mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-textilebrand-light-gray rounded-full overflow-hidden">
                  <div
                    className="h-full bg-textilebrand-green rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-right text-sm text-textilebrand-gray">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-textilebrand-light-gray">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textilebrand-navy">Work Experience</h2>
            <div className="mt-2 w-20 h-1 bg-textilebrand-green mx-auto"></div>
          </div>
          <div className="space-y-8 relative">
            {/* Line connecting all experiences */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-textilebrand-green/30 transform md:translate-x-[-0.5px] hidden md:block"></div>
            
            {[
              {
                position: "Senior Full Stack Developer",
                company: "TechNova Solutions",
                period: "2021 - Present",
                description: "Lead developer for client projects, managing a team of 5 developers. Implemented CI/CD pipelines that reduced deployment time by 70%. Designed and built scalable architectures for enterprise applications."
              },
              {
                position: "Full Stack Developer",
                company: "Wavefront Digital",
                period: "2018 - 2021",
                description: "Developed and maintained several client websites and web applications. Integrated third-party APIs and services. Optimized application performance, reducing load times by 40%."
              },
              {
                position: "Frontend Developer",
                company: "Pixel Perfect Agency",
                period: "2016 - 2018",
                description: "Created responsive, cross-browser compatible websites. Worked closely with designers to implement UI/UX designs. Maintained and updated existing client websites."
              }
            ].map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                  {index % 2 === 0 && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:ml-auto">
                      <h3 className="text-xl font-bold text-textilebrand-navy">{exp.position}</h3>
                      <h4 className="text-lg font-medium text-textilebrand-green">{exp.company}</h4>
                      <div className="text-sm text-textilebrand-gray mb-2">{exp.period}</div>
                      <p className="text-textilebrand-gray">{exp.description}</p>
                    </div>
                  )}
                </div>
                <div className="hidden md:flex items-center justify-center relative z-10 order-1 md:order-2">
                  <div className="w-5 h-5 rounded-full bg-textilebrand-green"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-2 md:order-3">
                  {index % 2 === 1 && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-textilebrand-navy">{exp.position}</h3>
                      <h4 className="text-lg font-medium text-textilebrand-green">{exp.company}</h4>
                      <div className="text-sm text-textilebrand-gray mb-2">{exp.period}</div>
                      <p className="text-textilebrand-gray">{exp.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textilebrand-navy">Get In Touch</h2>
            <div className="mt-2 w-20 h-1 bg-textilebrand-green mx-auto"></div>
            <p className="mt-4 text-textilebrand-gray max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions. Feel free to reach out!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textilebrand-navy mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-textilebrand-green"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textilebrand-navy mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-textilebrand-green"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-textilebrand-navy mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-textilebrand-green"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-textilebrand-navy mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-textilebrand-green"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-textilebrand-green text-textilebrand-navy hover:bg-textilebrand-beige">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4">
                <div className="w-12 h-12 bg-textilebrand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-textilebrand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy mb-1">Email</h3>
                  <p className="text-textilebrand-gray">alex@example.com</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4">
                <div className="w-12 h-12 bg-textilebrand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-textilebrand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy mb-1">Work Status</h3>
                  <p className="text-textilebrand-gray">Available for freelance and full-time positions</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4">
                <div className="w-12 h-12 bg-textilebrand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-textilebrand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-textilebrand-navy mb-1">Location</h3>
                  <p className="text-textilebrand-gray">San Francisco, California</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-textilebrand-navy mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-textilebrand-light-gray rounded-full flex items-center justify-center text-textilebrand-navy hover:bg-textilebrand-green hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-textilebrand-light-gray rounded-full flex items-center justify-center text-textilebrand-navy hover:bg-textilebrand-green hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-textilebrand-light-gray rounded-full flex items-center justify-center text-textilebrand-navy hover:bg-textilebrand-green hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-textilebrand-navy text-white py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-textilebrand-beige to-textilebrand-green flex items-center justify-center">
                <Code className="h-5 w-5 text-textilebrand-navy" />
              </div>
              <h1 className="text-xl font-bold">Alex Morgan</h1>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© 2024 Alex Morgan. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
