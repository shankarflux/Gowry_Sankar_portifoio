import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Dart", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Cybersecurity Tools",
      skills: [
        { name: "Snort", level: 85 },
        { name: "Wireshark", level: 80 },
        { name: "Burp Suite", level: 75 },
        { name: "Nmap", level: 80 },
        { name: "Metasploit", level: 75 },
        { name: "Kali Linux", level: 85 },
      ],
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "OpenCV", level: 80 },
      ],
    },
    {
      title: "App Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Mobile Development", level: 85 },
        { name: "Cross-platform Development", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      style={{
                        background: "hsl(var(--muted))",
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
