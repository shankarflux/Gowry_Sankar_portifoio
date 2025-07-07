import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor, Computer Science Department",
      organization: "VIT University",
      message:
        "Gowry is one of the most dedicated students I've encountered. His work on AI and cybersecurity projects demonstrates exceptional technical skills and innovative thinking. He consistently goes above and beyond expectations.",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Chen",
      title: "Senior Security Analyst",
      organization: "TechSecure Solutions",
      message:
        "During his internship, Gowry showed remarkable aptitude for cybersecurity. His penetration testing skills and ability to identify vulnerabilities were impressive for someone at his level. A future leader in cybersecurity.",
      image: "/placeholder.svg",
    },
    {
      name: "Prof. Anita Sharma",
      title: "AI Research Lab Director",
      organization: "VIT University",
      message:
        "Gowry's research contributions to our AI lab have been outstanding. His machine learning models consistently achieve high accuracy, and his approach to problem-solving is both methodical and creative.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What mentors, professors, and colleagues say about my work and
            dedication to technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
