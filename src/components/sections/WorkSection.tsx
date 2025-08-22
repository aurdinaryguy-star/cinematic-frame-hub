import { useState } from "react";
import { ArrowRight, Users, Video, Briefcase, Play } from "lucide-react";
import VideoModal from "../VideoModal";

// Import assets properly for Vite build
import sunstoneLogo from "@/assets/sunstone.png";
import justWravelLogo from "@/assets/just wravel.png";
import hbsLogo from "@/assets/hbs.png";
import volunteerYatraLogo from "@/assets/volunteer yatra .jpg";
import aspenLogo from "@/assets/aspen.png";
import tpcLogo from "@/assets/TPC.jpeg";
import heroImage from "@/assets/hero-bg.jpg";
import portraitImage from "@/assets/portrait.jpg";
import gymImage from "@/assets/IMG_4581.jpg";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  clients: Client[];
}

interface Client {
  id: string;
  name: string;
  logo?: string;
  projects: Project[];
}

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  type: "image" | "video";
}

const WorkSection = () => {
  const [currentView, setCurrentView] = useState<"categories" | "clients" | "projects">("categories");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);

  const categories: Category[] = [
    {
      id: "commercial",
      title: "Commercial Projects",
      description: "Brand campaigns and corporate storytelling",
      icon: Briefcase,
      clients: [
        {
          id: "sunstone",
          name: "Sunstone",
          logo: sunstoneLogo,
          projects: [
            { id: "s1", title: "Sunstone Video 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "s2", title: "Sunstone Video 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "s3", title: "Sunstone Video 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
          ]
        },
        {
          id: "aspen",
          name: "Aspen Adventure",
          logo: aspenLogo,
          projects: [
            { id: "a1", title: "Aspen Video", thumbnail: "aspen.mp4", type: "video" },
            { id: "a2", title: "Adventure Photo 1", thumbnail: heroImage, type: "image" },
            { id: "a3", title: "Adventure Photo 2", thumbnail: portraitImage, type: "image" },
            { id: "a4", title: "Adventure Photo 3", thumbnail: gymImage, type: "image" },
            { id: "a5", title: "Adventure Photo 4", thumbnail: heroImage, type: "image" },
          ]
        },
        {
          id: "hbs",
          name: "HBS",
          logo: hbsLogo,
          projects: [
            { id: "h1", title: "HBS Video 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "h2", title: "HBS Video 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "h3", title: "HBS Video 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "h4", title: "HBS Video 4", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "h5", title: "HBS Photo 1", thumbnail: portraitImage, type: "image" },
            { id: "h6", title: "HBS Photo 2", thumbnail: gymImage, type: "image" },
          ]
        },
        {
          id: "justwravel",
          name: "Just Wravel",
          logo: justWravelLogo,
          projects: [
            { id: "j1", title: "Just Wravel Video 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "j2", title: "Just Wravel Video 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "j3", title: "Just Wravel Video 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
          ]
        },
        {
          id: "volunteer",
          name: "Volunteer Yatra",
          logo: volunteerYatraLogo,
          projects: [
            { id: "v1", title: "Volunteer Video 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "v2", title: "Volunteer Video 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "v3", title: "Volunteer Video 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "v4", title: "Volunteer Video 4", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
          ]
        },
        {
          id: "tpc",
          name: "The Parent Code (TPC)",
          logo: tpcLogo,
          projects: [
            { id: "t1", title: "TPC Project", thumbnail: tpcLogo, type: "image" },
          ]
        }
      ]
    },
    {
      id: "influencer",
      title: "Influencer Content",
      description: "Social media and lifestyle content",
      icon: Users,
      clients: [
        {
          id: "inf1",
          name: "Influencer Videos",
          projects: [
            { id: "inf1", title: "Lifestyle Vlog 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf2", title: "Lifestyle Vlog 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf3", title: "Lifestyle Vlog 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf4", title: "Lifestyle Vlog 4", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf5", title: "Lifestyle Vlog 5", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf6", title: "Lifestyle Vlog 6", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf7", title: "Lifestyle Vlog 7", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf8", title: "Lifestyle Vlog 8", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf9", title: "Lifestyle Vlog 9", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf10", title: "Lifestyle Vlog 10", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf11", title: "Lifestyle Vlog 11", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf12", title: "Lifestyle Vlog 12", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf13", title: "Lifestyle Vlog 13", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf14", title: "Lifestyle Vlog 14", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf15", title: "Lifestyle Vlog 15", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "inf16", title: "Lifestyle Vlog 16", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
          ]
        }
      ]
    },
    {
      id: "independent",
      title: "Independent Projects",
      description: "Personal creative endeavors",
      icon: Video,
      clients: [
        {
          id: "ind1",
          name: "Independent Videos",
          projects: [
            { id: "ind1", title: "Independent Film 1", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "ind2", title: "Independent Film 2", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "ind3", title: "Independent Film 3", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "ind4", title: "Independent Film 4", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
            { id: "ind5", title: "Independent Film 5", thumbnail: "/D4%20COMBM%202.MP4", type: "video" },
          ]
        }
      ]
    }
  ];

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView("clients");
  };

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
    setCurrentView("projects");
  };

  const handleBack = () => {
    if (currentView === "projects") {
      setCurrentView("clients");
      setSelectedClient(null);
    } else if (currentView === "clients") {
      setCurrentView("categories");
      setSelectedCategory(null);
    }
  };

  const handleProjectClick = (project: Project) => {
    if (project.type === "video") {
      setSelectedVideo({ src: project.thumbnail, title: project.title });
    }
  };

  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-6">
        {/* Categories View */}
        {currentView === "categories" && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="font-heading text-display text-foreground mb-6">
                My Work
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my creative portfolio across different project types
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className="card-gradient rounded-lg p-8 cursor-pointer hover-lift hover-glow transition-smooth group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-smooth">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-heading text-2xl text-foreground mb-4">
                        {category.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      <ArrowRight className="w-6 h-6 text-accent mx-auto group-hover:translate-x-2 transition-smooth" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Clients View */}
        {currentView === "clients" && selectedCategory && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <button
                onClick={handleBack}
                className="text-accent hover:text-accent/80 transition-smooth mb-6"
              >
                ← Back to Categories
              </button>
              <h2 className="font-heading text-display text-foreground mb-6">
                {selectedCategory.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {selectedCategory.clients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => handleClientSelect(client)}
                  className="card-gradient rounded-lg p-6 cursor-pointer hover-lift transition-smooth group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-lg bg-muted/10 border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-smooth">
                      {client.logo ? (
                        <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-2xl font-heading text-muted-foreground">
                          {client.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-xl text-foreground">
                      {client.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {client.projects.length} projects
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects View */}
        {currentView === "projects" && selectedClient && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <button
                onClick={handleBack}
                className="text-accent hover:text-accent/80 transition-smooth mb-6"
              >
                ← Back to Clients
              </button>
              <h2 className="font-heading text-display text-foreground mb-6">
                {selectedClient.name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {selectedClient.projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="group cursor-pointer hover-lift transition-smooth"
                >
                  <div className="relative rounded-lg overflow-hidden bg-muted/10 border border-border group-hover:border-accent/50 transition-smooth">
                    <div className={`${project.type === "video" ? "aspect-video" : "aspect-square"} relative`}>
                      {project.type === "video" ? (
                        <video
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                          poster={project.thumbnail}
                          muted
                          preload="metadata"
                        >
                          <source src={project.thumbnail} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      )}
                      {project.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-smooth">
                          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-smooth">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-foreground mt-4 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {project.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  );
};

export default WorkSection;
