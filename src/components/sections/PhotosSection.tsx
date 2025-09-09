import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageLightbox from "@/components/ImageLightbox";

// Architecture images
import ARCH1 from "@/assets/ARCH1.jpg";
import ARCH2 from "@/assets/ARCH2.jpg";
import ARCH3 from "@/assets/ARCH3.jpg";
import ARCH4 from "@/assets/ARCH4.jpg";
import ARCH5 from "@/assets/ARCH5.jpg";
import ARCH6 from "@/assets/ARCH6.png";
import ARCH7 from "@/assets/ARCH7.png";
import ARCH9 from "@/assets/ARCH9.png";
import ARCH10 from "@/assets/ARCH10.png";
import ARCH11 from "@/assets/ARCH11.png";
import ARCH12 from "@/assets/ARCH12.png";

// Lifestyle images
import LIFESTYLE1 from "@/assets/LIFESTYLE1.jpg";
import LIFESTYLE2 from "@/assets/LIFESTYLE2.jpg";
import LIFESTYLE3 from "@/assets/LIFESTYLE3.jpg";
import LIFESTYLE4 from "@/assets/LIFESTYLE4.jpg";
import LIFESTYLE5 from "@/assets/LIFESTYLE5.jpg";
import LIFESTYLE6 from "@/assets/LIFESTYLE6.jpg";
import LIFESTYLE7 from "@/assets/LIFESTYLE7.jpg";
import LIFESTYLE8 from "@/assets/LIFESTYLE8.jpg";
import LIFESTYLE9 from "@/assets/LIFESTYLE9.jpg";
import LIFESTYLE10 from "@/assets/LIFESTYLE10.jpg";
import LIFESTYLE11 from "@/assets/LIFESTYLE11.jpg";
import LIFESTYLE12 from "@/assets/LIFESTYLE12.jpg";
import LIFESTYLE13 from "@/assets/LIFESTYLE13.jpg";
import LIFESTYLE14 from "@/assets/LIFESTYLE14.jpg";
import LIFESTYLE15 from "@/assets/LIFESTYLE15.jpg";
import LIFESTYLE16 from "@/assets/LIFESTYLE16.jpg";
import LIFESTYLE17 from "@/assets/LIFESTYLE17.jpg";
import LIFESTYLE18 from "@/assets/LIFESTYLE18.jpg";
import LIFESTYLE19 from "@/assets/LIFESTYLE19.jpg";
import LIFESTYLE20 from "@/assets/LIFESTYLE20.jpg";
import LIFESTYLE21 from "@/assets/LIFESTYLE21.jpg";
import LIFESTYLE22 from "@/assets/LIFESTYLE22.jpg";
import LIFESTYLE23 from "@/assets/LIFESTYLE23.jpg";
import LIFESTYLE24 from "@/assets/LIFESTYLE24.jpg";
import LIFESTYLE25 from "@/assets/LIFESTYLE25.jpg";

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

  const photos: Photo[] = [
    // Architecture
    { id: "arch1", src: ARCH1, alt: "Modern Architecture", category: "architecture" },
    { id: "arch2", src: ARCH2, alt: "Classic Building", category: "architecture" },
    { id: "arch3", src: ARCH3, alt: "Urban Design", category: "architecture" },
    { id: "arch4", src: ARCH4, alt: "Interior Space", category: "architecture" },
    { id: "arch5", src: ARCH5, alt: "Architectural Detail", category: "architecture" },
    { id: "arch6", src: ARCH6, alt: "City Skyline", category: "architecture" },
    { id: "arch7", src: ARCH7, alt: "Contemporary Design", category: "architecture" },
    { id: "arch9", src: ARCH9, alt: "Glass Facade", category: "architecture" },
    { id: "arch10", src: ARCH10, alt: "Concrete Architecture", category: "architecture" },
    { id: "arch11", src: ARCH11, alt: "Industrial Design", category: "architecture" },
    { id: "arch12", src: ARCH12, alt: "Architectural Photography", category: "architecture" },
    
    // Lifestyle
    { id: "lifestyle1", src: LIFESTYLE1, alt: "Lifestyle Portrait", category: "lifestyle" },
    { id: "lifestyle2", src: LIFESTYLE2, alt: "Fashion Style", category: "lifestyle" },
    { id: "lifestyle3", src: LIFESTYLE3, alt: "Urban Living", category: "lifestyle" },
    { id: "lifestyle4", src: LIFESTYLE4, alt: "Modern Lifestyle", category: "lifestyle" },
    { id: "lifestyle5", src: LIFESTYLE5, alt: "Creative Space", category: "lifestyle" },
    { id: "lifestyle6", src: LIFESTYLE6, alt: "Daily Moments", category: "lifestyle" },
    { id: "lifestyle7", src: LIFESTYLE7, alt: "Urban Culture", category: "lifestyle" },
    { id: "lifestyle8", src: LIFESTYLE8, alt: "Creative Portrait", category: "lifestyle" },
    { id: "lifestyle9", src: LIFESTYLE9, alt: "Fashion Photography", category: "lifestyle" },
    { id: "lifestyle10", src: LIFESTYLE10, alt: "Contemporary Style", category: "lifestyle" },
    { id: "lifestyle11", src: LIFESTYLE11, alt: "Artistic Expression", category: "lifestyle" },
    { id: "lifestyle12", src: LIFESTYLE12, alt: "Modern Portrait", category: "lifestyle" },
    { id: "lifestyle13", src: LIFESTYLE13, alt: "Lifestyle Moment", category: "lifestyle" },
    { id: "lifestyle14", src: LIFESTYLE14, alt: "Creative Session", category: "lifestyle" },
    { id: "lifestyle15", src: LIFESTYLE15, alt: "Portrait Photography", category: "lifestyle" },
    { id: "lifestyle16", src: LIFESTYLE16, alt: "Creative Lifestyle", category: "lifestyle" },
    { id: "lifestyle17", src: LIFESTYLE17, alt: "Urban Fashion", category: "lifestyle" },
    { id: "lifestyle18", src: LIFESTYLE18, alt: "Contemporary Portrait", category: "lifestyle" },
    { id: "lifestyle19", src: LIFESTYLE19, alt: "Artistic Lifestyle", category: "lifestyle" },
    { id: "lifestyle20", src: LIFESTYLE20, alt: "Modern Style", category: "lifestyle" },
    { id: "lifestyle21", src: LIFESTYLE21, alt: "Creative Expression", category: "lifestyle" },
    { id: "lifestyle22", src: LIFESTYLE22, alt: "Fashion Portrait", category: "lifestyle" },
    { id: "lifestyle23", src: LIFESTYLE23, alt: "Lifestyle Photography", category: "lifestyle" },
    { id: "lifestyle24", src: LIFESTYLE24, alt: "Urban Portrait", category: "lifestyle" },
    { id: "lifestyle25", src: LIFESTYLE25, alt: "Contemporary Lifestyle", category: "lifestyle" },
    
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