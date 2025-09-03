import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageLightbox from "@/components/ImageLightbox";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const PhotosSection = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Sample photos data - replace with your actual photos
  const photos: Photo[] = [
    // Architecture
    { id: "arch1", src: "/placeholder.svg", alt: "Modern Architecture", category: "architecture" },
    { id: "arch2", src: "/placeholder.svg", alt: "Classic Building", category: "architecture" },
    { id: "arch3", src: "/placeholder.svg", alt: "Urban Design", category: "architecture" },
    { id: "arch4", src: "/placeholder.svg", alt: "Interior Space", category: "architecture" },
    { id: "arch5", src: "/placeholder.svg", alt: "Architectural Detail", category: "architecture" },
    { id: "arch6", src: "/placeholder.svg", alt: "City Skyline", category: "architecture" },
    
    // Cars
    { id: "car1", src: "/placeholder.svg", alt: "Sports Car", category: "cars" },
    { id: "car2", src: "/placeholder.svg", alt: "Classic Vehicle", category: "cars" },
    { id: "car3", src: "/placeholder.svg", alt: "Racing Car", category: "cars" },
    { id: "car4", src: "/placeholder.svg", alt: "Luxury Car", category: "cars" },
    { id: "car5", src: "/placeholder.svg", alt: "Vintage Auto", category: "cars" },
    { id: "car6", src: "/placeholder.svg", alt: "Car Detail", category: "cars" },
    
    // E-commerce
    { id: "ecom1", src: "/placeholder.svg", alt: "Product Shot", category: "ecommerce" },
    { id: "ecom2", src: "/placeholder.svg", alt: "Fashion Item", category: "ecommerce" },
    { id: "ecom3", src: "/placeholder.svg", alt: "Jewelry", category: "ecommerce" },
    { id: "ecom4", src: "/placeholder.svg", alt: "Tech Product", category: "ecommerce" },
    { id: "ecom5", src: "/placeholder.svg", alt: "Home Goods", category: "ecommerce" },
    { id: "ecom6", src: "/placeholder.svg", alt: "Beauty Product", category: "ecommerce" },
    
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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categoryPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo, categoryPhotos)}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group hover-lift"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="font-heading text-display text-foreground mb-6">
              Photography Portfolio
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my photography work across different genres and styles
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="architecture" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12 bg-card">
                <TabsTrigger 
                  value="architecture" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Architecture
                </TabsTrigger>
                <TabsTrigger 
                  value="cars"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Cars
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  E-commerce
                </TabsTrigger>
                <TabsTrigger 
                  value="travel"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Travel
                </TabsTrigger>
                <TabsTrigger 
                  value="landscapes"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Landscapes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="architecture" className="animate-fade-in">
                <PhotoGrid category="architecture" />
              </TabsContent>

              <TabsContent value="cars" className="animate-fade-in">
                <PhotoGrid category="cars" />
              </TabsContent>

              <TabsContent value="ecommerce" className="animate-fade-in">
                <PhotoGrid category="ecommerce" />
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