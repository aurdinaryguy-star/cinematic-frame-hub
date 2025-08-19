import portraitImage from "@/assets/portrait.jpg";

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
                      I'm a passionate visual storyteller with over a decade of experience 
                      in creating compelling cinematic content. My work spans across commercial 
                      campaigns, independent films, and digital media.
                    </p>
                    
                    <p>
                      Every project is an opportunity to push creative boundaries and tell 
                      meaningful stories that resonate with audiences. I believe in the power 
                      of visual narrative to inspire, educate, and transform.
                    </p>
                    
                    <p>
                      When I'm not behind the camera, you'll find me exploring new technologies, 
                      mentoring emerging creatives, and constantly seeking inspiration from 
                      the world around us.
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
                      "Cannes Film Festival - Short Film Selection",
                      "Webby Awards - Best Cinematography",
                      "Creative Arts Emmy - Outstanding Commercial"
                    ].map((award, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                        <p className="font-body text-muted-foreground">{award}</p>
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