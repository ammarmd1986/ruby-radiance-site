import { Card, CardContent } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

const achievers = [
  { name: "Ikramul Hoque", band: "6.0", color: "bg-green-100 text-green-800" },
  { name: "Ahmed Barkatullah", band: "7.5", color: "bg-blue-100 text-blue-800" },
  { name: "Tasnin Ira Sarna", band: "8.5", color: "bg-purple-100 text-purple-800" },
  { name: "Jahid M. Islam", band: "8.5", color: "bg-purple-100 text-purple-800" },
  { name: "Saifuddin Majumder", band: "6.5", color: "bg-green-100 text-green-800" },
  { name: "Alamgir Shaikh", band: "7.0", color: "bg-blue-100 text-blue-800" },
  { name: "Rani S. Sarker", band: "7.5", color: "bg-blue-100 text-blue-800" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievers.map((achiever, index) => (
            <Card key={index} className="card-hover border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-foreground">{achiever.name}</h3>
                
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-3 ${getBandColor(achiever.band)}`}>
                  Band Score: {achiever.band}
                </div>
                
                <div className="flex justify-center gap-1">
                  {[...Array(getStarCount(achiever.band))].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - getStarCount(achiever.band))].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7.2</div>
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