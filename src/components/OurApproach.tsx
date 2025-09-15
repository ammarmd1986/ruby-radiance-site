import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, BookOpen, Target, Award } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Free Language Skills Assessment",
    description: "Comprehensive evaluation of your current English proficiency level",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Admission Confirmation",
    description: "Personalized consultation and enrollment process",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Orientation",
    description: "Introduction to our learning methodology and platform",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "Class Schedule Confirmation",
    description: "Flexible scheduling that fits your lifestyle",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Classes Begin",
    description: "Interactive learning with expert mentors and small batch sizes",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Mock Tests",
    description: "Regular practice tests with detailed feedback and improvement strategies",
    color: "text-primary"
  }
];

const OurApproach = () => {
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">Our Approach</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          A systematic journey designed to ensure your success in IELTS and beyond
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                  </div>
                  <div className="mb-2 text-sm font-bold text-primary bg-accent px-3 py-1 rounded-full inline-block">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Flow Arrow for larger screens */}
        <div className="hidden lg:block mt-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 text-primary">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;