
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Code, Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-6 border-b border-border">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frontend Developer & UI Designer</h1>
            <p className="text-xl text-muted-foreground mb-8">
              I build beautiful, responsive websites with modern technologies that help businesses achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <User className="h-6 w-6" />
                  About Me
                </h2>
                <p className="text-muted-foreground">
                  Get to know me and my background
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                Hello! I'm John, a passionate frontend developer with 5 years of experience creating
                modern and responsive web applications. I specialize in React, TypeScript, and
                creating beautiful user interfaces.
              </p>
              <p className="text-lg mb-6">
                My journey in web development started when I was in college, and I've been hooked
                ever since. I love the perfect blend of technical problem-solving and creative
                design that comes with frontend work.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting
                with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="h-6 w-6" />
                  My Projects
                </h2>
                <p className="text-muted-foreground">
                  Some of my recent work
                </p>
              </div>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="overflow-hidden group">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">Project {item}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                    <p className="text-muted-foreground mb-4">
                      A brief description of this amazing project and the technologies used.
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Code className="h-6 w-6" />
                  Skills
                </h2>
                <p className="text-muted-foreground">
                  Technologies I work with
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
                  "Next.js", "Node.js", "Git", "Figma", "Responsive Design", "UI/UX"
                ].map((skill) => (
                  <div 
                    key={skill} 
                    className="p-4 bg-background border rounded-md flex items-center justify-center hover:border-primary hover:shadow-sm transition-all">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Mail className="h-6 w-6" />
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  Get in touch with me
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-8 text-lg">
                    Interested in working together? Feel free to reach out to me directly at <a href="mailto:john@example.com" className="text-primary hover:underline">john@example.com</a> or use the form below.
                  </p>
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input 
                          id="name" 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          placeholder="Your name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input 
                          id="email" 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          placeholder="your.email@example.com" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2023 John Doe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
