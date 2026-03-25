import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  
  {
    title: "Responsive Web Applications",
    description:
      "Multiple responsive web applications built with modern frontend technologies. Features include interactive UI components, API integration, and optimized performance.",
    image: "/projects/project4.png",
    tags: ["React.js", "JavaScript", "CSS3", "Bootstrap"],
    link: "#",
    github: "https://github.com/itsmeroshan12",
  },
  {
    title: "Doctor Directory Web Application",
    description:
      "A full-stack platform enabling users to add and manage listings for doctors, clinics, and hospitals. Features include user registration, listing management, and search functionality.",
    image: "/projects/project5.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    link: "#",
    github: "https://github.com/itsmeroshan12",
  },
 
  {
    title: "NFT Marketplace",
    description:
      "A blockchain-based NFT marketplace where users can browse, buy, and sell digital assets. Built with modern web technologies and smart contract integration.",
    image: "/projects/project1.png",
    tags: ["React.js", "Next.js", "Solidity", "Web3"],
    link: "#",
    github: "https://github.com/itsmeroshan12",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              showcase expertise.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my full-stack projects, from responsive web applications to specialized platforms. Each represents my commitment to quality code and user-focused design.
          </p>
        </div>

        {/* Enterprise Project Feature */}
        <div className="glass rounded-2xl border border-primary/30 p-8 mb-10 animate-fade-in animation-delay-200">
          <h3 className="text-3xl font-bold text-secondary-foreground mb-3">
             Vaidya Hub
          </h3>
          <p className="text-muted-foreground mb-3">
            Developed as a solo engineer at EdgeLink Technology, this healthcare platform solves real-world challenges with a scalable Next.js architecture. It uses Clerk authentication, Cloudinary media management, Resend email automation, and follows a 100% SEO-first strategy.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Next.js', 'MongoDB', 'Vercel', 'Clerk', 'Cloudinary', 'Resend', 'SEO'].map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="http://vaidyahub.com/"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              View Live
            </a>
            
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
