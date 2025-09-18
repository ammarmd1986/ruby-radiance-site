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
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
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
                      <h3 className="text-lg font-bold mb-3 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-bg rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20 shadow-elegant">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Journey?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of successful students who achieved their IELTS goals with us
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border-2 border-white/30">
                <h4 className="text-2xl font-bold text-primary text-center leading-tight">
                  Join EnglishXpress and open new doors of opportunity globally!
                </h4>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;