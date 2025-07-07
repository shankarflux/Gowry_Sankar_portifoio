import { Button } from "../ui/button";
import { TypingAnimation } from "../ui/typing-animation";
import { Github, Linkedin, Code, Trophy, Shield, Brain } from "lucide-react";

export function HeroSection() {
  const quotes = [
    '"The best way to predict the future is to invent it." – Alan Kay',
    '"Cybersecurity is not a product, but a process." – Bruce Schneier',
    '"AI is likely to be either the best or worst thing to happen to humanity." – Stephen Hawking',
    '"First, solve the problem. Then, write the code." – John Johnson',
    '"Any sufficiently advanced technology is indistinguishable from magic." – Arthur C. Clarke',
  ];

  const interests = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shankarflux/",
      description: "Code repositories and projects",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gowry-sankar-kosuri-03990231a/",
      description: "Professional network",
    },
    {
      name: "X.com",
      icon: Brain,
      url: "https://x.com/silentmaverick_",
      description: "Tech discussions and insights",
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/u/Kosuri_Gowry_Sankar/",
      description: "Coding challenges",
    },
    {
      name: "Hack The Box",
      icon: Shield,
      url: "https://account.hackthebox.com/dashboad",
      description: "Penetration testing",
    },
    {
      name: "BugCrowd",
      icon: Trophy,
      url: "https://bugcrowd.com/nanomaverickf8b1140b-0e88-4b24-b9e7-9e35595f9b92",
      description: "Bug bounty platform",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="hero-gradient absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-gold">Kosuri Gowry Sankar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            B.Tech CSE | Web Dev | Cybersecurity & AI Enthusiast
          </p>

          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <TypingAnimation
              quotes={quotes}
              className="text-lg md:text-xl text-accent italic"
              speed={50}
              delay={25000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a
                href="https://cdn.builder.io/o/assets%2Fa2e4746a0ef34ba487ee21b66ad429f5%2F4d8baa085f3240d2837dfe6c384881c5?alt=media&token=08782e97-d2a2-4cef-acdd-4d66e8f8c431&apiKey=a2e4746a0ef34ba487ee21b66ad429f5"
                download="Gowry_Sankar_Kosuri_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Track My Interests
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {interests.map((interest) => (
                <a
                  key={interest.name}
                  href={interest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:bg-primary/5"
                >
                  <interest.icon className="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">
                    {interest.name}
                  </span>
                  <span className="text-xs text-muted-foreground text-center mt-1">
                    {interest.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
