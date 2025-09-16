import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, BookOpen, Clock, Users, Award } from "lucide-react";

const preparationSteps = [
  {
    step: "1",
    task: "Take Diagnostic Test",
    description: "Assess your current level and identify weak areas",
    icon: Target
  },
  {
    step: "2", 
    task: "Set Target Score",
    description: "Define your goal band score based on requirements",
    icon: Award
  },
  {
    step: "3",
    task: "Create Study Plan", 
    description: "Develop a structured timeline with daily goals",
    icon: BookOpen
  },
  {
    step: "4",
    task: "Master Each Section",
    description: "Focus on Listening, Reading, Writing, and Speaking",
    icon: Users
  },
  {
    step: "5",
    task: "Practice Regularly",
    description: "Complete daily exercises and mock tests",
    icon: Clock
  },
  {
    step: "6",
    task: "Book Your Test",
    description: "Register for IELTS exam when you're ready",
    icon: CheckCircle2
  }
];

const additionalTips = [
  "Know the test format & timing: চিটি েসকশরেনা সময়া/টাা ক — আরেগ েথারেক জাানা না ে না চি রেনা মক নাা লাারেগ।",
  "Study the band descriptors: Writing ও Speaking-এ examiners চিক ে রেখানা (band descriptors) েসটাা বাং না — েসখাারেনা ভাারেলাা ে ারে জানা ক কা া েলাখাা থাারেক।",
  "Build general English: চি চি না আটি রেকলা না, চিবাংচিভা অচিডও না না, েজাারে েজাারে কথা বাংলা না, চিনায়াচিম লা খা না — সাধাা ণ ই রে জা শক্ত রেলা IELTS ে স চিবাংধাা য়া।",
  "Learn test techniques: চি টি রেলা েক শলা চিশখা না — ে মনা skimming/scanning, note-taking, paraphrasing, essay planning, speaking structure ই াচি ।",
  "Create a vocabulary plan: high-frequency topics (ে মনা: Education, Environment, Health) চিনারেয়া শব্দ ভাাা বাংানাানা (collocations) চিশখা না এবাং না না শব্দ েলারেখা ও বাংরেলা বাং বাং া করু না।",
  "Keep an error log: একটি ভা রেলা লা াখা না ( াচি খা, ভা লা, সঠিক করে , ক ক ণ য়া) — বাংা বাংা ওয়াা ভা লা রেলাা টাারেগ টা করে ঠিক করু না।"
];

const IeltsTips = () => {
  return (
    <section id="ielts-tips" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">IELTS Resources</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          Access our comprehensive collection of IELTS preparation materials, tips, and strategies to boost your performance.
        </p>

        {/* Main Preparation Checklist */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 mb-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Essential Steps for IELTS Success</h3>
            <p className="text-lg opacity-90">Follow this systematic approach to maximize your IELTS score</p>
          </div>

          <div className="space-y-6">
            {preparationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="card-hover border-l-4 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <h4 className="text-xl font-bold text-foreground">{step.task}</h4>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Expert Tips */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Expert Tips from Our Mentors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalTips.map((tip, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IeltsTips;