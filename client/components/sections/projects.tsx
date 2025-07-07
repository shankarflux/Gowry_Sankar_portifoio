import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "TripConnect – Mental Wellness Travel App",
      description:
        "A comprehensive Flutter mobile application focused on mental wellness through travel experiences. Combines travel planning with mental health support features.",
      technologies: ["Flutter", "Firebase", "Dart", "Mental Health APIs"],
      problem:
        "Need for accessible mental wellness support combined with travel planning and therapeutic experiences.",
      solution:
        "Developed a mobile app that integrates travel planning with mental wellness tools, meditation guides, and community support.",
      result:
        "Created an innovative platform connecting travel experiences with mental health improvement.",
      githubUrl: "https://github.com/shankarflux/tripconnect",
      demoUrl: "#",
    },
    {
      title: "YTAGENT – AI Video Generator",
      description:
        "An AI-powered video generation tool that creates dynamic video content using machine learning algorithms. Features automated content creation and customization.",
      technologies: ["Python", "TensorFlow", "AI/ML", "Video Processing"],
      problem:
        "Time-consuming manual video creation process and need for automated content generation.",
      solution:
        "Built an AI system that generates videos automatically using machine learning models and content analysis.",
      result:
        "Streamlined video creation process with AI-driven automation and high-quality output.",
      githubUrl: "https://github.com/shankarflux/ytagent",
      demoUrl: "#",
    },
    {
      title: "IDS using Snort",
      description:
        "Implemented a robust Intrusion Detection System using Snort for real-time network security monitoring and threat detection.",
      technologies: ["Snort", "Python", "Linux", "Network Security"],
      problem:
        "Need for real-time network threat detection and monitoring in enterprise environments.",
      solution:
        "Configured Snort IDS with custom rules and integrated monitoring dashboard for comprehensive network security.",
      result:
        "Successfully deployed network security monitoring system with real-time threat detection capabilities.",
      githubUrl: "https://github.com/shankarflux/ids-snort",
      demoUrl: "#",
    },
    {
      title: "Image Caption Generator (imgcap.py)",
      description:
        "Deep learning model for automatic image captioning using computer vision and natural language processing techniques.",
      technologies: ["Python", "TensorFlow", "OpenCV", "NLP"],
      problem:
        "Need for automated image description generation for accessibility and content management.",
      solution:
        "Developed CNN-RNN architecture that analyzes images and generates human-readable captions automatically.",
      result:
        "Achieved high accuracy in generating contextually relevant captions for diverse image types.",
      githubUrl: "https://github.com/shankarflux/imgcap",
      demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in
            cybersecurity, AI/ML, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Problem:</span>
                    <p className="text-muted-foreground mt-1">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">
                      Solution:
                    </span>
                    <p className="text-muted-foreground mt-1">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Result:</span>
                    <p className="text-muted-foreground mt-1">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
