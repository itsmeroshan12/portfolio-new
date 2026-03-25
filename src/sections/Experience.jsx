const experiences = [
  {
    period: "April 2025 — Present",
    role: "Web Developer",
    company: "EdgeLink Technology",
    description:
      "Building responsive web applications with modern frontend technologies. Developing REST APIs and backend services using Node.js and Express.js. Implementing authentication systems with JWT and role-based access control. Managing MySQL databases and deploying applications on AWS infrastructure (EC2, RDS, S3, Route 53).",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "AWS", "JWT", "Google API", "NEXT.JS", "Vercel", "Clerk"],
    current: true,
  },
  {
    period: "Jan 2025 — Mar 2025",
    role: "Web Developer Intern",
    company: "EdgeLink Technology",
    description:
      "Developed responsive web pages and components using HTML5, CSS3, and Bootstrap. Implemented interactive features with JavaScript. Collaborated with senior developers to understand full-stack development workflows. Gained hands-on experience in modern web development practices.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    current: false,
  },
  {
    period: "2020 — 2024",
    role: "Bachelor of Engineering in Information Technology",
    company: "Dhole Patil College of Engineering, Pune",
    description:
      "Completed comprehensive coursework in computer science and information technology. Developed strong foundation in programming, database management, and software development practices. Participated in academic projects and technical learning.",
    technologies: ["Programming", "Database Design", "Web Technologies", "Software Engineering"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Professional growth through
            <span className="font-serif italic font-normal text-white">
              {" "}
              experience.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            From internship to professional developer, I've been growing my skills in full-stack web development. My journey includes hands-on experience with responsive design, backend development, and cloud deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
