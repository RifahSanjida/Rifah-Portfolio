import { ArrowLeft, Award, Calendar, MapPin, Trophy, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import awardImage from "@/assets/award.jpg";

const Achievements = () => {
  const navigate = useNavigate();

  const otherAchievements = [
    {
      title: "IEEE Student Branch Executive Member",
      organization: "IEEE Student Branch, CUET",
      date: "2024 - Present",
      location: "Chittagong University of Engineering and Technology",
      description: "Joined as an executive member this year! It's been amazing organizing tech events and workshops with the team. Meeting other engineering students passionate about technology, learning leadership skills, and giving back to the CUET community. Still learning the ropes, but loving every bit of it.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&q=80&fm=webp",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Assistant Program Coordinator",
      organization: "CUET Photographic Society",
      date: "2023 - Present",
      location: "Chittagong University of Engineering and Technology",
      description: "Who knew I'd fall in love with photography? Started attending sessions, then got more involved, and now I'm helping coordinate programs! From planning photo walks to organizing exhibitions - it's taught me so much about creativity, teamwork, and managing events. Plus, I get to work with some incredibly talented photographers.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&q=80&fm=webp",
      icon: <Medal className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "EDGE Project Completion",
      organization: "Department of ETE, CUET",
      date: "2024",
      location: "Under Dr. Nursadul Mamun & Eftekhar Hossain",
      description: "My introduction to machine learning! Four projects - from data classification to regression and visualization. Python was intimidating at first (those indentation errors!), but breaking down problems into code taught me how to think differently. Not gonna lie, debugging those models at night with coffee was rough, but absolutely worth it.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&q=80&fm=webp",
      icon: <Star className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Level 3 Engineering Student",
      organization: "Electronics & Telecommunication Engineering",
      date: "2022 - Present",
      location: "Chittagong University of Engineering and Technology",
      description: "Third year and still discovering new things I love about engineering! Signal processing, communication systems, VLSI design, control systems - each course opens up a new world. Some days are tough (looking at you, Fourier transforms), but figuring out how things work from first principles? That never gets old.",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&q=80&fm=webp",
      icon: <Award className="h-6 w-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="container mx-auto px-6 pt-8">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="mb-8 group rounded-xl border-2 hover:bg-primary/5 transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Button>
      </div>

      {/* Hero Achievement Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Achievements & Recognition
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Milestones, leadership roles, and recognition that shaped my engineering journey
          </p>
        </div>

        {/* Featured Achievement - Award Photo */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in hover:scale-[1.02] hover:shadow-2xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 transition-transform duration-700"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%), url(${awardImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white shadow-lg mx-auto mb-6">
                <Award className="h-10 w-10" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Distinguished Academic Achievement Award
              </h2>
              <p className="text-xl text-gray-200 font-medium mb-4">
                Electronics & Telecommunication Engineering Department
              </p>
              
              <div className="flex justify-center items-center gap-6 mb-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Level 1 Term 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Chittagong University of Engineering and Technology</span>
                </div>
              </div>
              
              <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto text-lg">
                Secured 2nd place in Level 1 Term 1! Getting this award from the former Vice-Chancellor at our 
                Departmental Annual Day was honestly one of my proudest moments. First year was tough - adjusting to 
                university life, the coursework, everything. But this recognition made all those late-night study 
                sessions worth it. It motivated me to keep pushing forward.
              </p>
            </div>
          </div>
        </div>

        {/* Other Achievements Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Other Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {otherAchievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in hover:scale-[1.02] hover:shadow-xl"
              style={{ 
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url(${achievement.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-200 font-medium text-sm">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar className="h-4 w-4" />
                      {achievement.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <MapPin className="h-4 w-4" />
                      {achievement.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed text-sm line-clamp-3">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to know more about my journey?</p>
          <Button 
            onClick={() => navigate('/#contact')}
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
