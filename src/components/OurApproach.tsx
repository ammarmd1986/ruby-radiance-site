import classroomStudents from "@/assets/classroom-students.jpg";

const steps = [
  {
    step: "1",
    title: "Assessment & Goal Setting",
    description: "We start with a comprehensive assessment to understand your current level and set realistic, achievable goals for your IELTS journey.",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    step: "2", 
    title: "Personalized Learning Path",
    description: "Based on your assessment, we create a customized learning path that focuses on your specific needs and target band score.",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    step: "3",
    title: "Intensive Practice",
    description: "Regular practice sessions with immediate feedback help you master each section of the IELTS test systematically.",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  {
    step: "4",
    title: "Test Readiness",
    description: "Final preparation with full-length mock tests and last-minute tips to ensure you're confident and ready for test day.",
    color: "bg-yellow-50 text-yellow-600 border-yellow-200"
  }
];

const OurApproach = () => {
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient text-center mb-4">Our Approach</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-xl">
          A systematic, step-by-step methodology that has helped thousands of students achieve their IELTS goals efficiently and effectively.
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={classroomStudents} 
                  alt="Bengali students in modern classroom setting" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="order-1 lg:order-2 space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border-2 ${step.color}`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;