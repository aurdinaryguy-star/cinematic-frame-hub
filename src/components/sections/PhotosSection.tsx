import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageLightbox from "@/components/ImageLightbox";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const PhotosSection = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("architecture");

  const categories = ["architecture", "lifestyle", "travel", "landscapes"];

  // URL navigation logic
  useEffect(() => {
    const { category } = params;
    if (category && categories.includes(category)) {
      setActiveTab(category);
    }
  }, [params]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/photos/${tab}`);
  };

  // Sample photos data - replace with your actual photos
  const photos: Photo[] = [
    // Architecture
    { id: "arch1", src: "/placeholder.svg", alt: "Modern Architecture", category: "architecture" },
    { id: "arch2", src: "/placeholder.svg", alt: "Classic Building", category: "architecture" },
    { id: "arch3", src: "/placeholder.svg", alt: "Urban Design", category: "architecture" },
    { id: "arch4", src: "/placeholder.svg", alt: "Interior Space", category: "architecture" },
    { id: "arch5", src: "/placeholder.svg", alt: "Architectural Detail", category: "architecture" },
    { id: "arch6", src: "/placeholder.svg", alt: "City Skyline", category: "architecture" },
    { id: "arch7", src: "/placeholder.svg", alt: "Contemporary Design", category: "architecture" },
    { id: "arch8", src: "/placeholder.svg", alt: "Minimalist Structure", category: "architecture" },
    { id: "arch9", src: "/placeholder.svg", alt: "Glass Facade", category: "architecture" },
    { id: "arch10", src: "/placeholder.svg", alt: "Concrete Architecture", category: "architecture" },
    { id: "arch11", src: "/placeholder.svg", alt: "Industrial Design", category: "architecture" },
    { id: "arch12", src: "/placeholder.svg", alt: "Architectural Photography", category: "architecture" },
    
    // Lifestyle
    { id: "lifestyle1", src: "/placeholder.svg", alt: "Lifestyle Portrait", category: "lifestyle" },
    { id: "lifestyle2", src: "/placeholder.svg", alt: "Fashion Style", category: "lifestyle" },
    { id: "lifestyle3", src: "/placeholder.svg", alt: "Urban Living", category: "lifestyle" },
    { id: "lifestyle4", src: "/placeholder.svg", alt: "Modern Lifestyle", category: "lifestyle" },
    { id: "lifestyle5", src: "/placeholder.svg", alt: "Creative Space", category: "lifestyle" },
    { id: "lifestyle6", src: "/placeholder.svg", alt: "Daily Moments", category: "lifestyle" },
    
    // Travel
    { id: "travel1", src: "/placeholder.svg", alt: "Mountain View", category: "travel" },
    { id: "travel2", src: "/placeholder.svg", alt: "Beach Scene", category: "travel" },
    { id: "travel3", src: "/placeholder.svg", alt: "City Street", category: "travel" },
    { id: "travel4", src: "/placeholder.svg", alt: "Cultural Site", category: "travel" },
    { id: "travel5", src: "/placeholder.svg", alt: "Local Market", category: "travel" },
    { id: "travel6", src: "/placeholder.svg", alt: "Sunset View", category: "travel" },
    
    // Landscapes
    { id: "land1", src: "/placeholder.svg", alt: "Natural Vista", category: "landscapes" },
    { id: "land2", src: "/placeholder.svg", alt: "Forest Path", category: "landscapes" },
    { id: "land3", src: "/placeholder.svg", alt: "Desert Scene", category: "landscapes" },
    { id: "land4", src: "/placeholder.svg", alt: "Ocean View", category: "landscapes" },
    { id: "land5", src: "/placeholder.svg", alt: "Mountain Range", category: "landscapes" },
    { id: "land6", src: "/placeholder.svg", alt: "River Valley", category: "landscapes" }
  ];

  const getPhotosByCategory = (category: string) => {
    return photos.filter(photo => photo.category === category);
  };

  const handlePhotoClick = (photo: Photo, categoryPhotos: Photo[]) => {
    const images = categoryPhotos.map(p => p.src);
    const index = categoryPhotos.findIndex(p => p.id === photo.id);
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const PhotoGrid = ({ category }: { category: string }) => {
    const categoryPhotos = getPhotosByCategory(category);
    
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {categoryPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo, categoryPhotos)}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group hover-lift touch-manipulation"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="animate-fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-display text-foreground mb-4 sm:mb-6">
              Photography Portfolio
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A collection of my photography work across different genres and styles
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Mobile: Horizontal scrollable tabs */}
              <div className="md:hidden mb-8">
                <div className="overflow-x-auto pb-2">
                  <TabsList className="flex w-max min-w-full bg-card p-1 gap-1">
                    <TabsTrigger 
                      value="architecture" 
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs py-2 px-4 whitespace-nowrap flex-shrink-0"
                    >
                      Architecture
                    </TabsTrigger>
                    <TabsTrigger 
                      value="lifestyle"
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs py-2 px-4 whitespace-nowrap flex-shrink-0"
                    >
                      Lifestyle
                    </TabsTrigger>
                    <TabsTrigger 
                      value="travel"
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs py-2 px-4 whitespace-nowrap flex-shrink-0"
                    >
                      Travel
                    </TabsTrigger>
                    <TabsTrigger 
                      value="landscapes"
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs py-2 px-4 whitespace-nowrap flex-shrink-0"
                    >
                      Landscapes
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <TabsList className="hidden md:grid md:grid-cols-4 w-full mb-12 bg-card gap-1 p-1">
                <TabsTrigger 
                  value="architecture" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm py-3"
                >
                  Architecture
                </TabsTrigger>
                <TabsTrigger 
                  value="lifestyle"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm py-3"
                >
                  Lifestyle
                </TabsTrigger>
                <TabsTrigger 
                  value="travel"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm py-3"
                >
                  Travel
                </TabsTrigger>
                <TabsTrigger 
                  value="landscapes"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm py-3"
                >
                  Landscapes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="architecture" className="animate-fade-in">
                <PhotoGrid category="architecture" />
              </TabsContent>

              <TabsContent value="lifestyle" className="animate-fade-in">
                <PhotoGrid category="lifestyle" />
              </TabsContent>

              <TabsContent value="travel" className="animate-fade-in">
                <PhotoGrid category="travel" />
              </TabsContent>

              <TabsContent value="landscapes" className="animate-fade-in">
                <PhotoGrid category="landscapes" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={selectedImages}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export default PhotosSection;