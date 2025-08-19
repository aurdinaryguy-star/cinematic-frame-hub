import { useState } from "react";
import { ArrowRight, Users, Video, Briefcase } from "lucide-react";

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

  const categories: Category[] = [
    {
      id: "commercial",
      title: "Commercial Projects",
      description: "Brand campaigns and corporate storytelling",
      icon: Briefcase,
      clients: [
        {
          id: "client1",
          name: "Brand Studio",
          projects: [
            { id: "p1", title: "Campaign 2024", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p2", title: "Product Launch", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p3", title: "Brand Refresh", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "client2",
          name: "Creative Agency",
          projects: [
            { id: "p4", title: "Brand Identity", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p5", title: "Website Design", thumbnail: "/placeholder.svg", type: "image" },
          ]
        },
        {
          id: "client3",
          name: "Tech Startup",
          projects: [
            { id: "p6", title: "Product Demo", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p7", title: "Company Culture", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "client4",
          name: "Fashion Brand",
          projects: [
            { id: "p8", title: "Lookbook 2024", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p9", title: "Campaign Video", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p10", title: "Behind the Scenes", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "client5",
          name: "Restaurant Chain",
          projects: [
            { id: "p11", title: "Menu Photography", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p12", title: "Commercial Ad", thumbnail: "/placeholder.svg", type: "video" },
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
          name: "Lifestyle Creator",
          projects: [
            { id: "p13", title: "Daily Vlogs", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p14", title: "Morning Routine", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p15", title: "Travel Diary", thumbnail: "/placeholder.svg", type: "image" },
          ]
        },
        {
          id: "inf2",
          name: "Fitness Influencer",
          projects: [
            { id: "p16", title: "Workout Series", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p17", title: "Transformation Photos", thumbnail: "/placeholder.svg", type: "image" },
          ]
        },
        {
          id: "inf3",
          name: "Food Blogger",
          projects: [
            { id: "p18", title: "Recipe Videos", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p19", title: "Food Photography", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p20", title: "Restaurant Reviews", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "inf4",
          name: "Tech Reviewer",
          projects: [
            { id: "p21", title: "Product Unboxing", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p22", title: "Tech Comparisons", thumbnail: "/placeholder.svg", type: "video" },
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
          name: "Personal Work",
          projects: [
            { id: "p23", title: "Short Film", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p24", title: "Photography Series", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p25", title: "Experimental Video", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "ind2",
          name: "Art Projects",
          projects: [
            { id: "p26", title: "Digital Art", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p27", title: "Time-lapse Creation", thumbnail: "/placeholder.svg", type: "video" },
          ]
        },
        {
          id: "ind3",
          name: "Documentary Work",
          projects: [
            { id: "p28", title: "Local Stories", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p29", title: "Portrait Series", thumbnail: "/placeholder.svg", type: "image" },
            { id: "p30", title: "Street Photography", thumbnail: "/placeholder.svg", type: "image" },
          ]
        },
        {
          id: "ind4",
          name: "Music Videos",
          projects: [
            { id: "p31", title: "Indie Artist Collab", thumbnail: "/placeholder.svg", type: "video" },
            { id: "p32", title: "Live Performance", thumbnail: "/placeholder.svg", type: "video" },
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
                  className="group cursor-pointer hover-lift transition-smooth"
                >
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted/10 border border-border group-hover:border-accent/50 transition-smooth">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
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
    </div>
  );
};

export default WorkSection;