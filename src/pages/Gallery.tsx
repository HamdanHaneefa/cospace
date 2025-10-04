import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { LazyImage } from "@/components/LazyImage";
import { Building2, Users, Shield } from 'lucide-react';

// Import generated images
import heroImage from '../assets/banner.jpg'
import dedicatedDesk from '../assets/dedicatedDesk.jpg';
import DoubleSeat from "../assets/DoubleSeat.jpg";
import conferenceRoom from "../assets/conferenceRoom.jpg";  
import privateCabin from "../assets/privatecabin.jpg";
import VirtualOffice from '../assets/virtualoffice.jpg'
import pantryImage from '../assets/pantry.jpg';
import loungeImage from '../assets/Lounge.jpg';
import receptionImage from '../assets/recpetion.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const galleryImages = [
  {
    id: 1,
    src: heroImage,
    alt: "Modern coworking space overview",
    category: "Workspace",
  },
  {
    id: 3,
    src: privateCabin,
    alt: "Private office cabin",
    category: "Private Offices",
  },
  {
    id: 4,
    src: dedicatedDesk,
    alt: "Dedicated desk setup",
    category: "Workspace",
  },
  {
    id: 5,
    src: DoubleSeat,
    alt: "Double seat workspace",
    category: "Workspace",
  },
  {
    id: 6,
    src: VirtualOffice,
    alt: "Virtual office setup",
    category: "Virtual Office",
  },
  {
    id: 7,
    src: pantryImage,
    alt: "Modern pantry area",
    category: "Amenities",
  },
  {
    id: 8,
    src: loungeImage,
    alt: "Comfortable lounge space",
    category: "Amenities",
  },
  {
    id: 9,
    src: receptionImage,
    alt: "Welcoming reception area",
    category: "Amenities",
  },
];

  const categories = ["All", "Workspace", "Meeting Rooms", "Private Offices"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === "All" || image.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Category Filter */}
      <section className="py-8 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary hover:text-primary-foreground"
                } transition-all duration-200`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg"
                    aspectRatio="4/3"
                    data-testid={`img-gallery-${image.id}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {image.category}
                    </Badge>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail in our workspace is designed to inspire productivity and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
              <p className="text-muted-foreground">
                Contemporary architecture with ergonomic furniture and natural lighting to enhance your work experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Spaces</h3>
              <p className="text-muted-foreground">
                Open areas designed to foster networking and collaboration between professionals from diverse industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Environment</h3>
              <p className="text-muted-foreground">
                24/7 security with CCTV monitoring and secure access controls to ensure your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our facilities in person and find the perfect workspace for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-cta text-cta-foreground rounded-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300">
              Book a Tour
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          {selectedImage && (
            <LazyImage
              src={selectedImage}
              alt="Gallery image"
              className="w-full rounded-lg"
              aspectRatio="auto"
              eager={true}
              data-testid="img-modal"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;