import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Globe, Coffee, GitFork, Star, Users } from 'lucide-react';

function App() {
  const projects = [
    {
      id: 1,
      title: "Igraliste E-store",
      description: "This is mobile first E-store Minimal Viable Product (MVP) for my Client thats selling Clothes (Currently in Development)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
      tags: ["Next.js", "TypeScript", "Bootstrap5"],
      githubUrl: "https://github.com/DimitarHristovski/Igraliste",
      hostedUrl: "https://igraliste-one.vercel.app/"
    },
    {
      id: 2,
      title: "LearnHub.mk",
      description: "OpenSource Project that im working on",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600",
      tags: ["Next.js", "TypeScript", "SCSS"],
      githubUrl: "https://github.com/learnhubmk/app",
      hostedUrl: "https://learnhub.mk/"
    },
    {
      id: 3,
      title: "Furwood E-store",
      description: "This a simple E-store that i have created",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1600",
      tags: ["React.js", "TypeScript", "Bootstrap5"],
      githubUrl: "https://github.com/DimitarHristovski/Furwood-E-store",
      hostedUrl: "https://furwood-e-store.vercel.app/"
    },
    {
      id: 4,
      title: "Clothes Store",
      description: "This a E-store that i have created using Next.js to be SEO Friendly",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1600",
      tags: ["Next.js", "TypeScript", "Bootstrap5"],
      githubUrl: "https://github.com/DimitarHristovski/ClothesStore",
      hostedUrl: "https://clothes-store-inky-pi.vercel.app/"
    },
    {
      id: 5,
      title: "Marinov-Jewelry E-store",
      description: "This is mobile first E-store Minimal Viable Product (MVP) for my Client thats about selling jewelry (Currently in Development)",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600",
      tags: ["Next.js", "TypeScript", "Bootstrap5"],
      githubUrl: "https://github.com/DimitarHristovski/Marinov-jewelry/tree/Dimi-Final",
      hostedUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio",
      description: "Responsive portfolio for online competition",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=1600",
      tags: ["CSS3", "HTML5"],
      githubUrl: "https://github.com/DimitarHristovski/Assignment-Two-Portfolio",
      hostedUrl: "https://assignment-two-portfolio.vercel.app/#"
    },
    {
      id: 7,
      title: "EduCenter",
      description: "This a simple Educational website that i have created",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600",
      tags: ["Next.js", "TypeScript", "Bootstrap5"],
      githubUrl: "https://github.com/DimitarHristovski/EduCenter",
      hostedUrl: "#"
    },
    {
      id: 8,
      title: "Car Race Game",
      description: "This a simple racing game that i have created (Desktop-Only)",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1600",
      tags: ["jQuery", "CSS3"],
      githubUrl: "https://github.com/DimitarHristovski/Car-Race-Game",
      hostedUrl: "https://car-race-game-opal.vercel.app/"
    }
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks"
    },
    {
      icon: <Globe size={24} />,
      title: "Full Stack Development",
      description: "Building complete web applications with modern technologies"
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating responsive and user-friendly interfaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Dimitar Hristovski
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Specializing in building modern web applications with Next.js, React, and TypeScript. 
            Focused on creating efficient, scalable, and user-friendly solutions.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com/DimitarHristovski" 
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          {/* GitHub Stats */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
            <div className="flex justify-center gap-8 mb-6">
              <iframe
                src="https://github-readme-stats.vercel.app/api?username=DimitarHristovski&show_icons=true&theme=transparent"
                height="200"
                width="400"
                frameBorder="0"
                scrolling="no"
                title="GitHub Stats"
                className="hidden md:block"
              />
              <iframe
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=DimitarHristovski&layout=compact&theme=transparent"
                height="200"
                width="300"
                frameBorder="0"
                scrolling="no"
                title="Top Languages"
                className="hidden md:block"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <a 
                href="https://github.com/DimitarHristovski?tab=repositories" 
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork size={20} className="text-blue-600" />
                <span className="font-semibold">Repositories</span>
              </a>
              <a 
                href="https://github.com/DimitarHristovski?tab=stars" 
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star size={20} className="text-yellow-500" />
                <span className="font-semibold">Stars</span>
              </a>
              <a 
                href="https://github.com/DimitarHristovski?tab=followers" 
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users size={20} className="text-green-600" />
                <span className="font-semibold">Followers</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce cursor-pointer">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">GitHub Activity</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <iframe
              src="https://github.com/DimitarHristovski.embed"
              height="400"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title="GitHub Activity"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                As a Full Stack Developer, I specialize in creating modern web applications using Next.js, React, and TypeScript. 
                My focus is on building efficient, scalable, and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6">
                I have experience in developing various types of applications, from e-commerce platforms to educational websites. 
                I'm passionate about clean code, performance optimization, and creating exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Coffee size={20} />
                <span>Always learning, always coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    {project.hostedUrl !== "#" && (
                      <a 
                        href={project.hostedUrl}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Dimitar Hristovski. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;