import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-bg.jpg";
const HomeSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // Auto-play video when section is in view
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);
  return (
    <div className="relative">
      {/* First Scroll - Hero Name Section */}
      <div className="section-full cinematic-gradient relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80"></div>
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="font-hero text-hero text-foreground mb-6 tracking-tight">PRAKASH SINGH</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cinematic Storyteller & Visual Artist
          </p>
        </div>
      </div>

      {/* Second Scroll - Video Player Section */}
      <div className="section-full bg-background relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center animate-slide-up">
              <h2 className="font-heading text-display text-foreground mb-4">
                My Showreel
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                A collection of my finest work
              </p>
            </div>
            
            {/* Video Player */}
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-cinematic hover-lift">
              <video ref={videoRef} className="w-full h-full object-cover" controls muted loop poster="/placeholder.svg">
                <source src="/D4%20COMBM%202.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;