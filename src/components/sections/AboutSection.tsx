import portraitImage from "@/assets/IMG_4581.jpg";

const AboutSection = () => {
  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="font-heading text-display text-foreground mb-6">
              About Me
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Portrait Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-cinematic">
                    <img
                      src={portraitImage}
                      alt="Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <h3 className="font-heading text-cinematic text-foreground">
                    Crafting Visual Stories
                  </h3>
                  
                  <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Hi, I’m <strong>Prakash Kumar</strong> — a visual storyteller,
                      cinematographer, and content creator based in New Delhi. I specialize in
                      crafting cinematic visuals that inspire, educate, and connect with people.
                    </p>
                    
                    <p>
                     From travel films to brand campaigns, my work blends creativity with
                     technical precision, always aiming to tell stories that stay with the
                     audience long after the screen goes dark. I believe every frame has the
                     power to evoke emotion, and I strive to bring authenticity, depth, and
                     artistry into my projects.
                    </p>
                    
                    <p>
                     When I’m not behind the camera, you’ll find me exploring hidden corners
                     of cities, riding my bike through the mountains, or simply observing
                     everyday life — because the best stories often come from the simplest
                     moments.
                    </p>
  
                    <p>
                     My mission is simple: <em>to capture the world in a way that inspires
                     people to see beauty, chase experiences, and tell their own stories.</em>
                    </p>
                  </div>
                </div>

                {/* Skills/Expertise */}
                <div className="space-y-4">
                  <h4 className="font-heading text-xl text-foreground">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Cinematography",
                      "Direction",
                      "Post-Production",
                      "Color Grading",
                      "Motion Graphics",
                      "Visual Effects"
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-body text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards/Recognition */}
               <div className="space-y-4">
  <h4 className="font-heading text-xl text-foreground">
    Recognition
  </h4>
  <div className="space-y-3">
    {[
      "Created and edited over 2000+ videos, reaching more than 100M+ views across YouTube and social media.",
      "Contributed to 700K+ YouTube subscribers through strategic content and cinematic storytelling.",
      "Collaborated with architecture and luxury brands like HB/HBS, producing high-end cinematic campaigns.",
      "My clicked photo was published by ANI.",
      `<strong><a href="https://dgca.gov.in" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">DGCA Certified Drone Pilot</a></strong> – officially licensed to operate drones in India.`
    ].map((award, index) => (
      <div key={index} className="flex items-start space-x-3">
        <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
        <p
          className="font-body text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: award }}
        ></p>
      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
