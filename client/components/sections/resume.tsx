import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Download, Calendar, MapPin, GraduationCap } from "lucide-react";

export function ResumeSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "KKR&KSR Institute of Technology and Sciences",
      location: "Guntur, Andhra Pradesh",
      duration: "2022 - 2026",
      description:
        "Focusing on Cybersecurity, AI/ML, App Development, and Software Engineering. Passionate about cutting-edge technologies.",
    },
  ];

  const experience = [
    {
      title: "Cybersecurity Intern",
      company: "TechSecure Solutions",
      location: "Remote",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Conducted penetration testing on web applications and identified critical vulnerabilities",
        "Implemented security monitoring solutions using Snort IDS",
        "Developed automated security scanning tools using Python",
      ],
    },
    {
      title: "AI/ML Research Assistant",
      company: "University Research Lab",
      location: "VIT University",
      duration: "Jan 2024 - Present",
      description: [
        "Research on computer vision applications for healthcare",
        "Developed image classification models with 95% accuracy",
        "Published research findings in university conferences",
      ],
    },
  ];

  const achievements = [
    "Winner - National Cybersecurity Championship 2024",
    "Top 100 - Google AI Challenge 2023",
    "Published 3 research papers in AI/ML conferences",
    "Led team of 5 in university hackathon - 1st place",
    "Certified Ethical Hacker (CEH) - EC-Council",
    "AWS Cloud Practitioner Certified",
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            My academic background, professional experience, and key
            achievements in technology and cybersecurity.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
              href="https://cdn.builder.io/o/assets%2Fa2e4746a0ef34ba487ee21b66ad429f5%2F4d8baa085f3240d2837dfe6c384881c5?alt=media&token=08782e97-d2a2-4cef-acdd-4d66e8f8c431&apiKey=a2e4746a0ef34ba487ee21b66ad429f5"
              download="Gowry_Sankar_Kosuri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <Card className="hover:border-primary transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-foreground">
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
