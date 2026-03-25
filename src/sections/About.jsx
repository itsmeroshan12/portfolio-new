import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "React.js, JavaScript, HTML5, CSS3, Bootstrap — building responsive, interactive user interfaces.",
  },
  {
    icon: Rocket,
    title: "Backend Development",
    description:
      "Node.js, Express.js, REST APIs, JWT authentication, role-based access control.",
  },
  {
    icon: Users,
    title: "Database & Cloud",
    description: "MySQL database design, AWS services (EC2, RDS, S3, Route 53), Google Cloud.",
  },
  {
    icon: Lightbulb,
    title: "Tools & Skills",
    description:
      "Git, GitHub, API Integration, Technical Documentation, Wireframing, Python, and Vibe Coding! 🎵",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Developing solutions with
              <span className="font-serif italic font-normal text-white">
                {" "}
                full-stack expertise.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Web Developer passionate about creating responsive, user-friendly web applications. Currently at EdgeLink Technology, I work on building scalable solutions using modern technologies like React, Node.js, and AWS. I also do vibe coding — coding while grooving to the perfect vibes!
              </p>
              <p>
                I specialize in frontend development with HTML5, CSS3, and JavaScript, while also building robust backend APIs with Node.js and Express. My expertise spans across JWT authentication, role-based access control, database design with MySQL, and cloud deployment using AWS services.
              </p>
              <p>
                I'm constantly learning and exploring new technologies in web development. With a strong foundation in full-stack development, I focus on writing clean, maintainable code and delivering high-quality products that solve real-world problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe in building web applications that are not just functional, but delightful — combining clean code with excellent user experience to create products that make a real difference."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
