import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, BookOpen, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "IELTS Regular",
    duration: "2.5 - 3 months",
    timing: "3pm-5pm / 6pm-9pm",
    days: "SAT - MON - WED",
    classes: "40 classes",
    fee: "7,000 TK",
    mockTests: "10",
    suitable: "Qualified candidates who have enough time",
    features: [
      "Free grammar review",
      "Unlimited writing feedback", 
      "Open discussions",
      "Vocab + Pronunciation review",
      "Student centric learning",
      "Cambridge standard strategies",
      "Free language club access for 3 months",
      "Progress evaluation tests"
    ],
    popular: true
  },
  {
    title: "IELTS Crash",
    duration: "1.5 months", 
    timing: "6pm-9pm",
    days: "SUN - TUE - THU",
    classes: "24 classes",
    fee: "9,000 TK",
    mockTests: "5",
    suitable: "Qualified candidates who need to prepare on short notice",
    features: [
      "Intensive fast-track preparation",
      "Focus on exam techniques",
      "Quick skill development",
      "Time management strategies"
    ]
  },
  {
    title: "Pre-IELTS",
    duration: "3 - 4 months",
    timing: "11am-1pm", 
    days: "SAT - MON - WED",
    classes: "36 - 40 classes",
    fee: "15,000 TK",
    mockTests: "NA",
    suitable: "Anyone whose basic English is at band 4/5 and is looking to get over 5.5 in IELTS",
    features: [
      "Foundation English building",
      "Grammar strengthening",
      "Basic vocabulary development",
      "Confidence building"
    ]
  },
  {
    title: "English Buddy",
    duration: "6 months+",
    timing: "2pm-4:30pm",
    days: "SUN - TUE - THU - FRI", 
    classes: "Continuous",
    fee: "Monthly: 3,500 TK / 5-month package: 14,000 TK",
    mockTests: "NA",
    suitable: "For those who wish to learn English live by practicing everyday until they feel ready",
    features: [
      "Learn important phrases & idioms",
      "Practice sentence building",
      "Impromptu speaking practice",
      "Guided discussions",
      "Topic-wise conversations",
      "Movies, news & daily activities discussion",
      "Pronunciation & vocabulary development"
    ]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">Our Courses</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          EnglishXpress is ready to offer the following courses. Join us to unlock new doors of opportunities locally and globally and let not English be the barrier to stop you from achieving your dreams.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className={`card-hover relative ${course.popular ? 'ring-2 ring-primary' : ''}`}>
              {course.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {course.title}
                </CardTitle>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{course.timing} | {course.days}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">{course.classes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Mock Tests: {course.mockTests}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">{course.fee}</div>
                  <p className="text-sm text-muted-foreground">{course.suitable}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;