import { Card, CardContent } from "../ui/card";
import { Brain, Shield, Cloud, Code } from "lucide-react";

export function AboutSection() {
  const interests = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Passionate about developing intelligent systems and exploring the frontiers of artificial intelligence.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Dedicated to understanding and implementing robust security measures to protect digital assets.",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Building scalable and efficient cloud-based solutions using modern technologies.",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Creating responsive and user-friendly web applications with modern frameworks.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate B.Tech Computer Science Engineering student with a
            deep interest in cutting-edge technologies that shape our digital
            future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-foreground mb-6">
              I'm a passionate Computer Science Engineering student at KKR&KSR
              Institute of Technology and Sciences, Guntur, with a deep
              fascination for cutting-edge technologies that shape our digital
              future.
            </p>
            <p className="text-lg text-foreground mb-6">
              My expertise spans cybersecurity tools like Snort, Wireshark, and
              Metasploit, programming languages including Python, Dart, and
              JavaScript, and AI/ML frameworks such as TensorFlow and PyTorch.
              I'm constantly exploring new technologies to stay at the forefront
              of innovation.
            </p>
            <p className="text-lg text-foreground">
              When I'm not coding, you'll find me working on mental wellness
              apps, AI video generators, or diving deep into cybersecurity
              challenges to enhance my penetration testing skills.
            </p>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa2e4746a0ef34ba487ee21b66ad429f5%2Fba0ebd5013364d04acd7eb73769de1df?format=webp&width=800"
                alt="Kosuri Gowry Sankar"
                className="w-72 h-72 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
