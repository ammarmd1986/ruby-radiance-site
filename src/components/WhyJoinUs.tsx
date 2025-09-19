import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Award, Users, BookOpen, HeadphonesIcon, Clock } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Qualified Student Admission",
    description: "We admit students after checking if they are really qualified for IELTS. We believe that a student's hope and aspirations should be above just making money as an institution.",
  },
  {
    icon: Award,
    title: "10+ Years of Expertise",
    description: "Experienced mentor with extensive background conducting IELTS, Business English, Spoken English and Writing classes with industry leaders.",
  },
  {
    icon: Users,
    title: "Student-Centric Learning",
    description: "Focus on individual student abilities and performance, regular feedbacks and individualised attention with small batch sizes.",
  },
  {
    icon: BookOpen,
    title: "Authentic Learning Methods",
    description: "Learn authentic, proven tips & test taking strategies as per official Cambridge / Oxford Press standards. No misleading tricks.",
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Maximum 15 students per batch ensuring personalized attention and better learning outcomes for every student.",
  },
  {
    icon: HeadphonesIcon,
    title: "On-Demand Help Sessions",
    description: "Learning should never be limited just to class sessions. Get help whenever you need it through our support channels.",
  },
];

const WhyJoinUs = () => {
  return (
    <section id="why-join" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">Why Join Us?</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-xl">
          Discover what makes EnglishXpress the preferred choice for serious IELTS candidates
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="rounded-3xl p-12 max-w-5xl mx-auto shadow-xl border border-purple-text/20" style={{backgroundColor: 'hsl(var(--light-purple))'}}>
            <h3 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-wide" style={{color: 'hsl(var(--purple-text))'}}>
              READY TO START YOUR JOURNEY?
            </h3>
            <p className="mb-8 text-2xl font-medium leading-relaxed max-w-3xl mx-auto" style={{color: 'hsl(var(--purple-text) / 0.8)'}}>
              Join thousands of successful students who achieved their IELTS goals with us
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 max-w-3xl mx-auto" style={{borderColor: 'hsl(var(--purple-text) / 0.3)'}}>
              <h4 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-4" style={{color: 'hsl(var(--purple-text))'}}>
                Join EnglishXpress and open new doors of opportunity globally!
              </h4>
              <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: 'hsl(var(--purple-text))'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;