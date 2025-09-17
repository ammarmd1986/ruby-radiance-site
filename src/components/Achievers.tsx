import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import ikramulImg from "@/assets/student-ikramul-new.jpg";
import ahmedImg from "@/assets/student-ahmed-new.jpg";
import tasninImg from "@/assets/student-tasnin.jpg";
import jahidImg from "@/assets/student-jahid-new.jpg";
import saifuddinImg from "@/assets/student-saifuddin-new.jpg";
import alamgirImg from "@/assets/student-alamgir-new.jpg";
import raniImg from "@/assets/student-rani.jpg";

const achievers = [
  { 
    name: "Ikramul Hoque", 
    band: "6.0", 
    image: ikramulImg,
    testimonial: "Ammar sir's teaching methods are exceptional! His expert guidance and cooperative nature helped me achieve my target band score. He made complex grammar concepts so easy to understand."
  },
  { 
    name: "Ahmed Barkatullah", 
    band: "7.5", 
    image: ahmedImg,
    testimonial: "I'm so grateful to Ammar sir for his talented teaching approach. He was incredibly helpful throughout my IELTS preparation and always encouraged me to push my limits."
  },
  { 
    name: "Tasnin Ira Sarna", 
    band: "8.5", 
    image: tasninImg,
    testimonial: "Ammar sir is truly an expert in English language teaching. His cooperative attitude and helpful nature made my learning journey smooth and successful!"
  },
  { 
    name: "Jahid M. Islam", 
    band: "8.5", 
    image: jahidImg,
    testimonial: "The way Ammar sir teaches is amazing! He's so talented and helpful. His expert knowledge and cooperative teaching style helped me excel in my IELTS exam."
  },
  { 
    name: "Saifuddin Majumder", 
    band: "6.5", 
    image: saifuddinImg,
    testimonial: "Ammar sir's expertise in English is remarkable. He was always cooperative and helpful, making sure I understood every concept thoroughly. Highly recommended!"
  },
  { 
    name: "Alamgir Shaikh", 
    band: "7.0", 
    image: alamgirImg,
    testimonial: "What makes Ammar sir special is his cooperative and helpful nature. His talented teaching methods and expert guidance transformed my English skills completely."
  },
  { 
    name: "Rani S. Sarker", 
    band: "7.5", 
    image: raniImg,
    testimonial: "Ammar sir is an incredibly talented teacher! His expert knowledge and helpful approach made my IELTS preparation enjoyable and effective. Thank you for being so cooperative!"
  },
];

const getBandColor = (band: string): string => {
  const score = parseFloat(band);
  if (score >= 8.0) return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
  if (score >= 7.0) return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
  if (score >= 6.5) return "bg-gradient-to-r from-green-500 to-emerald-500 text-white";
  return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
};

const getStarCount = (band: string): number => {
  const score = parseFloat(band);
  if (score >= 8.0) return 5;
  if (score >= 7.0) return 4;
  if (score >= 6.5) return 3;
  return 2;
};

const Achievers = () => {
  return (
    <section id="achievers" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">Our Achievers</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Celebrating the success stories of our dedicated students
        </p>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {achievers.map((achiever, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover border-2 border-primary/20 shadow-lg bg-gradient-to-br from-white to-accent/5">
                  <CardContent className="p-6 text-center relative">
                    {/* Decorative frame corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30"></div>
                    
                    {/* Student photo */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
                        <img 
                          src={achiever.image} 
                          alt={`${achiever.name} - EnglishXpress student`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-foreground">{achiever.name}</h3>
                    
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${getBandColor(achiever.band)}`}>
                      IELTS Band: {achiever.band}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="relative">
                      <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-1" />
                      <p className="text-sm text-muted-foreground italic leading-relaxed pl-4">
                        "{achiever.testimonial}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Success Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7.5</div>
              <div className="text-muted-foreground">Average Band</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievers;