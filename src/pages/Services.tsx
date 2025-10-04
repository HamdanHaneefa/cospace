import { Building2, Users, Calendar, Home, Laptop, Users2, Wifi, Clock, Car, Coffee, Shield, Printer, Wind, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const servicesRef = useRef(null);
  const amenitiesRef = useRef(null);
  const ctaRef = useRef(null);
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const amenitiesInView = useInView(amenitiesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  const mainServices = [
    {
      icon: <Laptop className="h-12 w-12 text-primary" />,
      title: "Single Seat",
      description: "Individual dedicated workspace perfect for solo professionals and freelancers.",
      features: ["Personal desk space", "Ergonomic chair", "Storage locker", "24/7 access"]
    },
    {
      icon: <Users2 className="h-12 w-12 text-primary" />,
      title: "Double Seat",
      description: "Collaborative workspace designed for small teams and partnerships.",
      features: ["Two dedicated desks", "Ergonomic chairs", "Shared storage", "24/7 access"]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Triple Seat",
      description: "Spacious workspace for growing teams requiring more collaboration space.",
      features: ["Three dedicated desks", "Team storage", "Meeting room access", "24/7 access"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Quadruple Seat",
      description: "Premium workspace solution for established teams and small businesses.",
      features: ["Four dedicated desks", "Private area", "Priority meeting rooms", "24/7 access"]
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Virtual Office",
      description: "Business address and professional services without the physical workspace commitment.",
      features: ["Prestigious business address", "Mail handling", "Phone answering", "Meeting room credits"]
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Conference Room",
      description: "Professional meeting spaces equipped with modern technology for presentations and team meetings.",
      features: ["HD projector", "Audio/video equipment", "Whiteboard", "Comfortable seating"]
    },
  ];

  const amenities = [
    { icon: <Wifi />, title: "High-Speed Internet", description: "Unlimited fiber internet with 100+ Mbps speed" },
    { icon: <Clock />, title: "24/7 Access & Security", description: "Round-the-clock access with CCTV security" },
    { icon: <Users />, title: "Conference Hall", description: "Professional meeting rooms for teams" },
    { icon: <Coffee />, title: "Unlimited Coffee", description: "Premium coffee and refreshments" },
    { icon: <Shield />, title: "Locker Facility", description: "Secure storage for personal belongings" },
    { icon: <Printer />, title: "Printing Services", description: "High-quality printing and scanning" },
    { icon: <Car />, title: "Parking", description: "Dedicated parking space for members" },
    { icon: <Users2 />, title: "Lounge Area", description: "Comfortable relaxation and networking space" },
    { icon: <Sparkles />, title: "Housekeeping", description: "Professional cleaning and maintenance" },
    { icon: <Wind />, title: "Air Conditioning", description: "Climate-controlled comfortable environment" },
  ];

  return (
    <div className="min-h-screen">

      {/* Main Services */}
      <section ref={servicesRef} className="py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Workspace Solutions</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional workspace options tailored to your requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={servicesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="card-hover h-full flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.15) + 0.5 + (idx * 0.1), duration: 0.4 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                          />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex-grow" />
                    
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/gallery">
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section ref={amenitiesRef} className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={amenitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Premium Amenities</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Enjoy world-class facilities and services designed to enhance your productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={amenitiesInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="text-center card-hover">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex justify-center mb-4 text-primary"
                      whileHover={{ 
                        scale: 1.3,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {amenity.icon}
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={amenitiesInView ? { opacity: 1 } : {}}
                      transition={{ delay: (index * 0.1) + 0.3, duration: 0.5 }}
                      className="font-semibold mb-2"
                    >
                      {amenity.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={amenitiesInView ? { opacity: 1 } : {}}
                      transition={{ delay: (index * 0.1) + 0.4, duration: 0.5 }}
                      className="text-sm text-muted-foreground"
                    >
                      {amenity.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of professionals who have made Cospace their workspace of choice
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="btn-cta">
                Book a Tour
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline">
                View Pricing Plans
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;