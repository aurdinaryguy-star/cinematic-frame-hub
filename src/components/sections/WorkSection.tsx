import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, Users, Video, Briefcase, Play } from "lucide-react";
import VideoModal from "../VideoModal";
import ImageLightbox from "../ImageLightbox";

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
  type: "image" | "video" | "youtube" | "vimeo" | "gallery";
  embedId?: string;
  images?: string[];
}

const WorkSection = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<"categories" | "clients" | "projects">("categories");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; embedId?: string; type?: "youtube" | "vimeo" } | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [vimeoThumbnails, setVimeoThumbnails] = useState<Record<string, string>>({});
  const [youtubeThumbnails, setYoutubeThumbnails] = useState<Record<string, string>>({});

  // URL navigation logic
  useEffect(() => {
    const { category, project } = params;
    
    if (category && project) {
      // Find the category and client/project
      const foundCategory = categories.find(c => c.id === category);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
        const foundClient = foundCategory.clients.find(client => 
          client.projects.some(p => p.id === project)
        );
        if (foundClient) {
          setSelectedClient(foundClient);
          setCurrentView("projects");
        }
      }
    } else if (category) {
      // Just show category
      const foundCategory = categories.find(c => c.id === category);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
        setCurrentView("clients");
      }
    } else {
      // Reset to categories view
      setCurrentView("categories");
      setSelectedCategory(null);
      setSelectedClient(null);
    }
  }, [params]);

  const categories: Category[] = [
    {
      id: "commercial-projects",
      title: "Commercial Projects",
      description: "Brand campaigns and corporate storytelling",
      icon: Briefcase,
      clients: [
        {
          id: "sunstone",
          name: "Sunstone",
          logo: sunstoneLogo,
          projects: [
            { id: "s1", title: "Sunstone – Scholarships", thumbnail: "", type: "youtube", embedId: "f3v0xVZYjB8" },
            { id: "s2", title: "Sunstone – Admit Cards", thumbnail: "", type: "youtube", embedId: "3u3TFnXCX7M" },
          ]
        },
        {
          id: "aspen",
          name: "Aspen Adventure",
          logo: aspenLogo,
          projects: [
            { id: "a1", title: "Aspen Video", thumbnail: "/aspen.mp4", type: "video" },
          ]
        },
        {
          id: "hbs",
          name: "HBS",
          logo: hbsLogo,
          projects: [
            { id: "h1", title: "HBS Video 1", thumbnail: "/HBS1.mp4", type: "video" },
            { id: "h2", title: "HBS Video 2", thumbnail: "/HBS2.mp4", type: "video" },
            { id: "h3", title: "HBS Video 3", thumbnail: "/HBS3.mp4", type: "video" },
            { id: "h4", title: "HBS Video 4", thumbnail: "/HBS4.mp4", type: "video" },
          ]
        },
        {
          id: "justwravel",
          name: "Just Wravel",
          logo: justWravelLogo,
          projects: [
            { id: "j1", title: "Just Wravel Video 1", thumbnail: "/JUSTWRAVEL1.MP4", type: "video" },
            { id: "j2", title: "Just Wravel Video 2", thumbnail: "/JUSTWRAVEL2.mp4", type: "video" },
            { id: "j3", title: "Just Wravel Video 3", thumbnail: "/JUSTWRAVEL3.mp4", type: "video" },
          ]
        },
        {
          id: "volunteer",
          name: "Volunteer Yatra",
          logo: volunteerYatraLogo,
          projects: [
            { id: "v1", title: "Volunteer Video 1", thumbnail: "/VY1.mp4", type: "video" },
            { id: "v2", title: "Volunteer Video 2", thumbnail: "/VY2.mp4", type: "video" },
            { id: "v3", title: "Volunteer Video 3", thumbnail: "/VY3.mp4", type: "video" },
          ]
        },
        {
          id: "tpc",
          name: "The Parent Code (TPC)",
          logo: tpcLogo,
          projects: [
            { id: "t1", title: "TPC – Newborn Care", thumbnail: "", type: "youtube", embedId: "jImEMU23RPQ" },
            { id: "t2", title: "TPC – Parenting Video 2", thumbnail: "", type: "youtube", embedId: "lWHWofC8Wys" },
          ]
        },
        {
          id: "loopie",
          name: "Loopie",
          projects: []
        },
        {
          id: "truva",
          name: "Truva",
          projects: []
        }
      ]
    },
    {
      id: "influencer-content",
      title: "Influencer Content",
      description: "Social media and lifestyle content",
      icon: Users,
      clients: [
        {
          id: "influencer",
          name: "",
          projects: [
            { id: "ind1", title: "IND1", thumbnail: "", type: "vimeo", embedId: "1112484191" },
            { id: "ind2", title: "IND2", thumbnail: "", type: "vimeo", embedId: "1112484204" },
            { id: "ind3", title: "IND3", thumbnail: "", type: "vimeo", embedId: "1112484229" },
            { id: "ind4", title: "IND4", thumbnail: "", type: "vimeo", embedId: "1112484243" },
            { id: "ind5", title: "IND5", thumbnail: "", type: "vimeo", embedId: "1112484261" },
            { id: "ind6", title: "IND6", thumbnail: "", type: "vimeo", embedId: "1112484274" },
            { id: "ind7", title: "IND7", thumbnail: "", type: "vimeo", embedId: "1112484292" },
            { id: "ind8", title: "IND8", thumbnail: "", type: "vimeo", embedId: "1112484308" },
            { id: "ind9", title: "IND9", thumbnail: "", type: "vimeo", embedId: "1112484324" },
            { id: "ind10", title: "IND10", thumbnail: "", type: "vimeo", embedId: "1112484335" },
            { id: "ind11", title: "IND11", thumbnail: "", type: "vimeo", embedId: "1112484350" },
            { id: "ind12", title: "IND12", thumbnail: "", type: "vimeo", embedId: "1112484364" },
            { id: "ind13", title: "IND13", thumbnail: "", type: "vimeo", embedId: "1112484386" },
            { id: "ind14", title: "IND14", thumbnail: "", type: "vimeo", embedId: "1112484410" },
          ]
        }
      ]
    },
    {
      id: "independent-projects",
      title: "Independent Projects",
      description: "Personal creative endeavors",
      icon: Video,
      clients: [
        {
          id: "independent",
          name: "",
          projects: [
            { id: "independent1", title: "INDEPENDENT1", thumbnail: "/INDEPENDENT1.mp4", type: "video" },
            { id: "independent2", title: "INDEPENDENT2", thumbnail: "/INDEPENDENT2.mp4", type: "video" },
            { id: "independent3", title: "INDEPENDENT3", thumbnail: "/INDEPENDENT3.mp4", type: "video" },
            { id: "independent4", title: "INDEPENDENT4", thumbnail: "/INDEPENDENT4.mp4", type: "video" },
            { id: "independent5", title: "INDEPENDENT5", thumbnail: "/INDEPENDENT5.mp4", type: "video" },
            { id: "independent6", title: "INDEPENDENT6", thumbnail: "/INDEPENDENT6.mp4", type: "video" },
            { id: "independent7", title: "INDEPENDENT7", thumbnail: "/INDEPENDENT7.mp4", type: "video" },
          ]
        }
      ]
    }
  ];

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView("clients");
    navigate(`/videos/${category.id}`);
  };

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
    setCurrentView("projects");
    navigate(`/videos/${selectedCategory?.id}/${client.id}`);
  };

  const handleBack = () => {
    if (currentView === "projects") {
      setCurrentView("clients");
      setSelectedClient(null);
      navigate(`/videos/${selectedCategory?.id}`);
    } else if (currentView === "clients") {
      setCurrentView("categories");
      setSelectedCategory(null);
      navigate("/videos");
    }
  };

  const handleProjectClick = (project: Project) => {
    if (project.type === "video") {
      setSelectedVideo({ src: project.thumbnail, title: project.title });
    } else if (project.type === "youtube" || project.type === "vimeo") {
      setSelectedVideo({ src: "", title: project.title, embedId: project.embedId, type: project.type });
    } else if (project.type === "gallery" && project.images) {
      setLightboxImages(project.images);
      setLightboxIndex(0);
      setIsLightboxOpen(true);
    }
  };

  const handleImageClick = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // Fetch Vimeo and YouTube thumbnails
  useEffect(() => {
    const fetchThumbnails = async () => {
      const vimeoThumbnails: Record<string, string> = {};
      const youtubeThumbnails: Record<string, string> = {};
      
      // Get all Vimeo projects
      const vimeoProjects = categories
        .flatMap(category => category.clients)
        .flatMap(client => client.projects)
        .filter(project => project.type === "vimeo" && project.embedId);

      // Get all YouTube projects
      const youtubeProjects = categories
        .flatMap(category => category.clients)
        .flatMap(client => client.projects)
        .filter(project => project.type === "youtube" && project.embedId);

      // Fetch thumbnails for each Vimeo video
      await Promise.all(
        vimeoProjects.map(async (project) => {
          if (project.embedId) {
            try {
              // Clean the embedId (remove any leading slash)
              const cleanEmbedId = project.embedId.replace(/^\/+/, '');
              const response = await fetch(
                `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${cleanEmbedId}`
              );
              const data = await response.json();
              if (data.thumbnail_url) {
                vimeoThumbnails[project.embedId] = data.thumbnail_url;
              }
            } catch (error) {
              console.error(`Failed to fetch thumbnail for Vimeo ${project.embedId}:`, error);
            }
          }
        })
      );

      // Generate YouTube thumbnails
      youtubeProjects.forEach((project) => {
        if (project.embedId) {
          youtubeThumbnails[project.embedId] = `https://img.youtube.com/vi/${project.embedId}/hqdefault.jpg`;
        }
      });

      setVimeoThumbnails(vimeoThumbnails);
      setYoutubeThumbnails(youtubeThumbnails);
    };

    fetchThumbnails();
  }, []);

  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Categories View */}
        {currentView === "categories" && (
          <div className="animate-fade-in">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-display text-foreground mb-4 sm:mb-6">
                My Videos
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Explore my creative portfolio across different project types
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className="card-gradient rounded-lg p-6 sm:p-8 cursor-pointer hover-lift hover-glow transition-smooth group touch-manipulation"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-accent/20 transition-smooth">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">
                        {category.title}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        {category.description}
                      </p>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto group-hover:translate-x-2 transition-smooth" />
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
            <div className="text-center mb-12 sm:mb-16">
              <button
                onClick={handleBack}
                className="text-accent hover:text-accent/80 transition-smooth mb-4 sm:mb-6 text-sm sm:text-base py-2 px-4 touch-manipulation"
              >
                ← Back to Categories
              </button>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-display text-foreground mb-4 sm:mb-6">
                {selectedCategory.title}
              </h2>
            </div>

            {/* For Influencer and Independent, skip client selection and go directly to projects */}
            {(selectedCategory.id === "influencer-content" || selectedCategory.id === "independent-projects") ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                {selectedCategory.clients[0].projects.map((project) => (
                  <div key={project.id}>
                    <div
                      onClick={() => handleProjectClick(project)}
                      className="group cursor-pointer hover-lift transition-smooth touch-manipulation"
                    >
                      <div className="relative rounded-lg overflow-hidden bg-muted/10 border border-border group-hover:border-accent/50 transition-smooth">
                        <div className="aspect-video relative">
                          {project.type === "video" ? (
                            <>
                              <video
                                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                poster={project.thumbnail}
                                muted
                                preload="metadata"
                                controls={false}
                              >
                                <source 
                                  src={project.thumbnail} 
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-smooth">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-smooth">
                                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                                </div>
                              </div>
                            </>
                          ) : project.type === "vimeo" ? (
                            <>
                              {vimeoThumbnails[project.embedId!] ? (
                                <img
                                  src={vimeoThumbnails[project.embedId!]}
                                  alt={project.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                                  <div className="text-center">
                                    <Play className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-2" />
                                    <p className="text-xs sm:text-sm text-muted-foreground">Loading...</p>
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-smooth">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-smooth">
                                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <h3 className="font-heading text-base sm:text-lg text-foreground mt-3 sm:mt-4 group-hover:text-accent transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground capitalize">
                        {project.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {selectedCategory.clients.map((client) => (
                  <div
                    key={client.id}
                    onClick={() => handleClientSelect(client)}
                    className="card-gradient rounded-lg p-4 sm:p-6 cursor-pointer hover-lift transition-smooth group touch-manipulation"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-muted/10 border border-border flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent/10 transition-smooth">
                        {client.logo ? (
                          <img src={client.logo} alt={client.name} className="w-full h-full object-contain" loading="lazy" />
                        ) : (
                          <span className="text-xl sm:text-2xl font-heading text-muted-foreground">
                            {client.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl text-foreground">
                        {client.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                        {client.projects.length} projects
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projects View */}
        {currentView === "projects" && selectedClient && (
          <div className="animate-fade-in">
            <div className="text-center mb-12 sm:mb-16">
              <button
                onClick={handleBack}
                className="text-accent hover:text-accent/80 transition-smooth mb-4 sm:mb-6 text-sm sm:text-base py-2 px-4 touch-manipulation"
              >
                ← Back to Clients
              </button>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-display text-foreground mb-4 sm:mb-6">
                {selectedClient.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {selectedClient.projects.map((project) => (
                <div key={project.id}>
                  {project.type === "gallery" ? (
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-4">{project.title}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.images?.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleImageClick(project.images!, index)}
                            className="group cursor-pointer hover-lift transition-smooth"
                          >
                            <div className="relative rounded-lg overflow-hidden bg-muted/10 border border-border group-hover:border-accent/50 transition-smooth">
                              <div className="aspect-square relative">
                              <img
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                loading="lazy"
                              />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleProjectClick(project)}
                      className="group cursor-pointer hover-lift transition-smooth"
                    >
                      <div className="relative rounded-lg overflow-hidden bg-muted/10 border border-border group-hover:border-accent/50 transition-smooth">
                        <div className={`${project.type === "video" || project.type === "youtube" || project.type === "vimeo" ? "aspect-video" : "aspect-square"} relative`}>
                          {project.type === "video" ? (
                            <video
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                              poster={project.thumbnail}
                              muted
                              preload="metadata"
                              controls
                            >
                              <source 
                                src={project.thumbnail} 
                                type={project.thumbnail.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
                              />
                              Your browser does not support the video tag.
                            </video>
                           ) : project.type === "youtube" ? (
                             <>
                               {youtubeThumbnails[project.embedId!] ? (
                                 <img
                                   src={youtubeThumbnails[project.embedId!]}
                                   alt={project.title}
                                   className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                   loading="lazy"
                                 />
                               ) : (
                                 <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                                   <div className="text-center">
                                     <Play className="w-16 h-16 text-accent mx-auto mb-2" />
                                     <p className="text-sm text-muted-foreground">Loading...</p>
                                   </div>
                                 </div>
                               )}
                             </>
                           ) : project.type === "vimeo" ? (
                              <>
                                {vimeoThumbnails[project.embedId!] ? (
                                  <img
                                    src={vimeoThumbnails[project.embedId!]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                                    <div className="text-center">
                                      <Play className="w-16 h-16 text-accent mx-auto mb-2" />
                                      <p className="text-sm text-muted-foreground">Loading...</p>
                                    </div>
                                  </div>
                                )}
                              </>
                          ) : (
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                            />
                          )}
                          {(project.type === "video" || project.type === "youtube" || project.type === "vimeo") && (
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
                         {project.type === "youtube" ? "YouTube Video" : project.type === "vimeo" ? "Vimeo Video" : project.type}
                       </p>
                    </div>
                  )}
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
        embedId={selectedVideo?.embedId}
        videoType={selectedVideo?.type}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
};

export default WorkSection;
