import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can join EnglishXpress?",
    answer: "Except for the IELTS program, anyone can join our platform. We believe IELTS is serious business and only students who have good and solid foundation should pursue the course and minimise retakes, money loss, frustration and precious time."
  },
  {
    question: "Which IELTS exam should I give?",
    answer: "Which IELTS you take depends on your goals. You should find out from your program, job, or immigration service which test to take. If you think you may need to take both, send us an email and we'd be happy to give you access to both Academic and General Training materials."
  },
  {
    question: "What is your refund policy?",
    answer: "If you are not satisfied with our course taking with specific reasons / complaints, and failure for us to address that in our part, after sitting in 3 successful classes and not missing any class without prior notice, we will give a 60% refund."
  },
  {
    question: "Do you give any score guarantee?",
    answer: "Each student is capable in their own way and able to utilise our resources in their own unique ways and so we have no control over our students actions. Hard work and proper guidelines may ensure a good score but not EnglishXpress nor its staff."
  },
  {
    question: "Can you help me with a study plan?",
    answer: "Yes we can. Our experienced mentors will create a personalized study plan based on your current level, target score, and timeline. This includes practice schedules, mock tests, and progress tracking."
  },
  {
    question: "How do you accept payments?",
    answer: "We accept Nagad, bKash and bank transfers only at the moment. We're working on adding more payment options for your convenience."
  },
  {
    question: "If I am struggling with a question outside of class time, can I get help?",
    answer: "We're happy to help you with questions you have. Send us a message on WhatsApp / Messenger, while you're studying, and we'll get back to you quickly. We do have limitations to how much we can help any individual student, but in most cases (for 99% of students), we can answer all of your questions!"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Get answers to the most common questions about our programs
        </p>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-foreground">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you with any additional questions you may have
            </p>
            <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 animate-pulse">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-bold">Call - 01782521290</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;