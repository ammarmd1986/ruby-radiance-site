import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const preparationChecklist = [
  { step: "1", task: "Decide which test you need: Academic না General Training—চিন্তা করে ঠিক করুন।" },
  { step: "2", task: "Do a full timed diagnostic test: একটা পুরো টাইমড ডায়াগনস্টিক দিন (Listening, Reading, Writing, Speaking — বাংলা: শ্রবণ, পড়া, লেখা, কথা বলা) — এতে আপনার প্রতিটি স্কিলের বর্তমান band জানবেন।" },
  { step: "3", task: "Set a realistic target band: ডায়াগনস্টিক রিপোর্ট দেখে প্রতিটি স্কিলের জন্য বাস্তবসম্মত লক্ষ্য (target band) ঠিক করুন।" },
  { step: "4", task: "Know the test format & timing: প্রতিটি সেকশনের সময়/টাস্ক কী — আগে থেকে জানুন যেন পরীক্ষার দিনে চমক না লাগে।" },
  { step: "5", task: "Study the band descriptors: Writing ও Speaking-এ examiners কি দেখেন (band descriptors) সেটা বুঝুন — সেখানে ভালো স্কোরের জন্য কী দরকার তা লেখা থাকে।" },
  { step: "6", task: "Make a study schedule: সাপ্তাহিক লক্ষ্য এবং দৈনিক টাস্ক লিখে পরিকল্পনা বানান এবং সেটার সাথে নিয়মিত থাকুন।" },
  { step: "7", task: "Build general English: প্রতিদিন আর্টিকেল পড়ুন, বিভিন্ন অডিও শুনুন, জোরে জোরে কথা বলুন, নিয়মিত লিখুন — সাধারণ ইংরেজি শক্ত হলে IELTS তে সুবিধা হয়।" },
  { step: "8", task: "Learn test techniques: প্রতিটি স্কিলের কৌশল শিখুন — যেমন skimming/scanning, note-taking, paraphrasing, essay planning, speaking structure ইত্যাদি।" },
  { step: "9", task: "Create a vocabulary plan: high-frequency topics (যেমন: Education, Environment, Health) নিয়ে শব্দভাণ্ডার বানান (collocations) শিখুন এবং নতুন শব্দ লেখে ও বলে ব্যবহার করুন।" },
  { step: "10", task: "Practice official-style tasks under timed conditions: টাইমড কন্ডিশনে অফিসিয়াল-স্টাইল প্রশ্ন অনুশীলন করুন — বাস্তব পরীক্ষার মতোই মনোভাব রাখুন।" },
  { step: "11", task: "Keep an error log: একটি ভুলের লিস্ট রাখুন (তারিখ, ভুল, সঠিক করে, কী করণীয়) — বারবার হওয়া ভুলগুলো টার্গেট করে ঠিক করুন।" },
  { step: "12", task: "Get regular feedback: Writing এবং Speaking-এর জন্য একজন qualified teacher বা অভিজ্ঞ native/experienced speaker থেকে নিয়মিত feedback নিন।" },
  { step: "13", task: "Do full mock tests periodically: সময় মতো পুরো মক টেস্ট দিন (পরীক্ষা দিবসের পরিস্থিতি নকল করে) এবং ফলাফল বিশ্লেষণ করে ত্রুটি সংশোধন করুন।" },
  { step: "14", task: "Focus on exam-day readiness: সময় বন্টন (time management), pacing, এবং mock-এ যে ছোট দুর্বলতা পাওয়া গেছে সেগুলো মসৃণ করুন।" },
  { step: "15", task: "Book the test only when ready: অন্তত দুইটি ধারাবাহিক full mock-এ আপনার target band consistently পাওয়া গেলে (আর সম্ভব হলে teacher confirm করলে) আসল টেস্ট বুক করুন।" },
  { step: "16", task: "Test-day checklist: বৈধ ID, টেস্ট কনফার্মেশন, ভালো ঘুম, হেলদি ব্রেকফাস্ট, সময় করে পৌঁছানো, আর শীতল মন—এগুলো মাথায় রাখুন।" }
];

const vocabularySteps = [
  { step: "1", task: "Find a source you enjoy", description: "একটা বই, TV show, podcast, YouTube সিরিজ বা ম্যাগাজিন বেছে নিন যা আপনি উপভোগ করেন — মজা পেলে বেশি শেখা যায়।" },
  { step: "2", task: "Get a new notebook", description: "একটা নতুন খাতা নিন — প্রতিদিনের নোট লেখার জন্য আলাদা জায়গা থাকলেই ভাল।" },
  { step: "3", task: "Consume your source", description: "আপনার বেছে নেওয়া সোর্সটি পড়ুন/শুনুন/দেখুন এবং 15টা অজানা শব্দ চিহ্নিত করুন। কন্টেক্সট দেখে মানে ধরার চেষ্টা করুন — এটা মনে রাখার জন্য খুবই কার্যকরী।" },
  { step: "4", task: "Note down new words", description: "সেই 15টি শব্দ আপনার খাতায় লিখুন। (শব্দ + বাক্যেও ব্যবহার করুন)" },
  { step: "5", task: "Look up the meaning", description: "অনলাইন ডিকশনারি বা অভিধান থেকে মানে খুঁজে নিন। শব্দের পাশে লিখুন: অর্থ, একটি উদাহরণ সেন্টেন্স, collocations, synonyms/antonyms, এবং pronunciation। মনে থাকলে ছবি আঁকেও রাখতে পারেন — যা মনে রাখতে সুবিধা করে।" },
  { step: "6", task: "Review your new words", description: "1 week পরে, 2 week পরে, এবং 1 month পরে রিভিউ করুন। প্রতিটি শব্দ দিয়ে sentence বানান ও বলুন। — এই স্ট্র্যাটেজি 5 দিন/সপ্তাহ করলে 1 মাসে ~300+ নতুন শব্দ হবে। 6 মাস করলে প্রায় 2000 শব্দ শেখা সম্ভব (consistent হলে)।" }
];

const readingTips = [
  { tip: "Timing is key — সময় ঠিক রাখাটা সবচেয়ে জরুরি", description: "আপনার কাছে মোট 1 hour আছে 40টি প্রশ্নের জন্য। সময় বুদ্ধিমত্তার সাথে ব্যবহার করুন। আমি আমার studentsদের বলি প্রতি সেকশন 20 minutes-এর মধ্যে শেষ করার চেষ্টা করতে — এতে প্রায় 16–17 minutes পড়া ও উত্তর করার জন্য, আর 3–4 minutes থাকবে উত্তর transfer ও চেক করার জন্য। সময় ব্যবস্থাপনায় অনুশীলন করুন।" },
  { tip: "Read the instructions carefully — নির্দেশনা ভালো করে পড়ুন", description: "অনেকে ভাল ইংরেজি জানলেও instruction না পড়ায় marks হারায়। ইনস্ট্রাকশনগুলো মনোযোগ দিয়ে পড়ুন যাতে সহজ ভুল না হয়।" },
  { tip: "Don't panic — প্যানিক করবেন না", description: "কিছু প্রশ্ন সহজ হবে, কিছু অনেক কঠিনও হবে। কঠিন প্রশ্নে অনেক সময় নষ্ট করা ভুল — উত্তর না মিললে এগোতে থাকুন এবং পরে ফিরে আসুন। শান্ত থাকাই সবচেয়ে বেশি সাহায্য করে — সবার সব প্রশ্ন সঠিক হবে না এটা মেনে নিন, এতে timing ও nerve-management সহজ হবে।" },
  { tip: "It's really a vocabulary test — এটা অনেকটাই vocabulary পরীক্ষার মতো", description: "IELTS Reading-এ ভালোভাবে পারার জন্য বিস্তৃত শব্দভাণ্ডার দরকার। passage বুঝতে synonyms ও paraphrasing চিনতে হবে — একই আইডিয়া ভিন্নভাবে লেখা থাকতে পারে, তাই শব্দ-পরিবর্তনগুলো সচেতনভাবে ধরে পড়ুন।" },
  { tip: "Don't expect to understand every word — প্রতিটি শব্দ বুঝার আশা করবেন না", description: "কোনো অজানা শব্দ এলে আশেপাশের বাক্য-কথা দেখে মানে আন্দাজ করুন, নাহলে আগাচ্ছেন। প্রশ্নের সঙ্গে সম্পর্কিত শব্দগুলোর ওপর ফোকাস রাখুন; না জানা শব্দে সময় নষ্ট করবেন না।" }
];

const IeltsTips = () => {
  return (
    <section id="ielts-tips" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-gradient">IELTS Tips</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-xl">
          Master IELTS with our comprehensive preparation checklist, vocabulary strategies, and expert reading tips.
        </p>

        {/* IELTS Preparation Checklist */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-3xl text-center">IELTS PREPARATION Checklist</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="w-16 font-bold text-primary">Step</TableHead>
                  <TableHead className="font-bold text-primary">Task & Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {preparationChecklist.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-accent/30" : "bg-background"}>
                    <TableCell className="font-bold text-primary text-center text-xl">{item.step}</TableCell>
                    <TableCell className="text-foreground leading-relaxed py-4 text-lg">{item.task}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Learn IELTS Vocabulary in 6 Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Learn IELTS Vocabulary in 6 Steps</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="w-16 font-bold text-primary">Step</TableHead>
                  <TableHead className="w-48 font-bold text-primary">Task</TableHead>
                  <TableHead className="font-bold text-primary">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vocabularySteps.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-accent/30" : "bg-background"}>
                    <TableCell className="font-bold text-primary text-center text-xl">{item.step}</TableCell>
                    <TableCell className="font-semibold text-foreground text-lg">{item.task}</TableCell>
                    <TableCell className="text-foreground leading-relaxed py-4 text-lg">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Top 5 Tips for IELTS Reading */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-destructive to-destructive/80 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Top 5 Tips for IELTS Reading</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="bg-destructive/5">
                  <TableHead className="w-80 font-bold text-destructive">Tip</TableHead>
                  <TableHead className="font-bold text-destructive">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {readingTips.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-accent/30" : "bg-background"}>
                    <TableCell className="font-semibold text-foreground leading-relaxed py-4 text-lg">{item.tip}</TableCell>
                    <TableCell className="text-foreground leading-relaxed py-4 text-lg">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-red-600 p-8 text-white">
            <CardContent className="p-0">
              <p className="text-xl leading-relaxed">
                It is therefore very important to seek proper guidance and feedback on how you attempt each test module and also how you develop your English skills. What are you waiting for? Join EnglishXpress to unlock new doors of opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IeltsTips;