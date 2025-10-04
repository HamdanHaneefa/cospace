import { Check, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plansRef = useRef(null);
  const additionalRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const additionalInView = useInView(additionalRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const plans = [
    {
      name: "Single Seat",
      price: "₹3,999",
      period: "/month",
      popular: false,
      description: "Individual workspace solution",
      features: [
        "Daily: ₹299",
        "Weekly: ₹1,599",
        "Monthly: ₹3,999",
        "Dedicated desk space",
        "24-hour access",
        "High-speed internet",
      ],
    },
    {
      name: "Double Seat", 
      price: "₹8,999",
      period: "/month",
      popular: true,
      description: "Small team workspace",
      features: [
        "Daily: ₹499",
        "Weekly: ₹2,999",
        "Monthly: ₹8,999",
        "Two dedicated desks",
        "Shared workspace",
        "All amenities included",
      ],
    },
    {
      name: "Triple Seat",
      price: "₹13,999", 
      period: "/month",
      popular: false,
      description: "Growing team solution",
      features: [
        "Daily: ₹699",
        "Weekly: ₹4,499",
        "Monthly: ₹13,999",
        "Three dedicated desks",
        "Team storage",
        "Meeting room access",
      ],
    },
    {
      name: "Quadruple Seat",
      price: "₹18,999",
      period: "/month", 
      popular: false,
      description: "Complete team office",
      features: [
        "Daily: ₹899",
        "Weekly: ₹5,999",
        "Monthly: ₹18,999",
        "Four dedicated desks",
        "Priority support",
        "Premium amenities",
      ],
    },
    {
      name: "Virtual Office",
      price: "₹11,499",
      period: "/month",
      popular: false,
      description: "Professional business address",
      features: [
        "Daily: ₹9,499",
        "Weekly: ₹10,499",
        "Monthly: ₹11,499",
        "Business address",
        "Mail handling",
        "Phone services",
      ],
    },
  ];

  const additionalServices = [
    {
      service: "Conference Room (1-4 hours)",
      price: "₹599",
      unit: "",
      description: "Professional meeting space with AV equipment for 1-4 hours",
    },
    {
      service: "Conference Room (4-8 hours)",
      price: "₹549",
      unit: "", 
      description: "Extended meeting room access for 4-8 hours",
    },
    {
      service: "Conference Room (8+ hours)",
      price: "₹499",
      unit: "",
      description: "Full day conference room access for 8+ hours",
    },
    {
      service: "Day Pass",
      price: "₹299",
      unit: "/day",
      description: "Full access to hot desks and amenities for a day",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Pricing Plans */}
     <section ref={plansRef} className="py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={plansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Membership Plans</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to grow with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {plans.map((plan, index) => {
              const handleGetStarted = () => {
                const phoneNumber = "918714656767"; // WhatsApp format without + or spaces
                const message = `Hi, I'm interested in the ${plan.name} plan at ${plan.price}${plan.period}. Please provide me with more details.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              };

              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.9,
                    rotateY: plan.popular ? 0 : -15 
                  }}
                  animate={plansInView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateY: 0 
                  } : {}}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    rotateY: plan.popular ? 0 : 5,
                    transition: { duration: 0.3 }
                  }}
                  className="flex"
                >
                  <Card 
                    className={`relative card-hover flex flex-col w-full ${
                      plan.popular 
                        ? 'border-primary shadow-medium ring-1 ring-primary/10' 
                        : ''
                    }`}
                  >
                    {plan.popular && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0 }}
                        animate={plansInView ? { opacity: 1, y: -12, scale: 1 } : {}}
                        transition={{ delay: (index * 0.1) + 0.5, duration: 0.5, type: "spring" }}
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                      >
                        <Badge className="bg-gradient-cta text-cta-foreground">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Star className="w-3 h-3 mr-1" />
                          </motion.div>
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={plansInView ? { opacity: 1 } : {}}
                        transition={{ delay: (index * 0.1) + 0.3, duration: 0.5 }}
                      >
                        <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                        <div className="flex items-baseline justify-center space-x-1 mb-2">
                          <motion.span 
                            className="text-3xl font-bold"
                            initial={{ scale: 0 }}
                            animate={plansInView ? { scale: 1 } : {}}
                            transition={{ 
                              delay: (index * 0.1) + 0.5, 
                              duration: 0.4, 
                              type: "spring",
                              stiffness: 200 
                            }}
                          >
                            {plan.price}
                          </motion.span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <CardDescription className="text-center min-h-[2.5rem]">
                          {plan.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col flex-grow">
                      <ul className="space-y-3 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={plansInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: (index * 0.1) + 0.6 + (idx * 0.1), duration: 0.4 }}
                            className="flex items-start space-x-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            </motion.div>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={plansInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: (index * 0.1) + 1, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6"
                      >
                        <Button 
                          onClick={handleGetStarted}
                          className={`w-full ${
                            plan.popular ? 'btn-cta' : 'btn-primary'
                          }`}
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={additionalRef} className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Additional Services</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Enhance your membership with our premium add-on services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {additionalServices.map((service, index) => {
              const handleInquiry = () => {
                const phoneNumber = "918714656767";
                const message = `Hi, I'm interested in the ${service.service} service at ${service.price}${service.unit}. ${service.description} Please provide me with more details.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={additionalInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="flex"
                >
                  <Card className="card-hover flex flex-col w-full">
                    <CardHeader className="text-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={additionalInView ? { opacity: 1 } : {}}
                        transition={{ delay: (index * 0.15) + 0.3, duration: 0.5 }}
                      >
                        <CardTitle className="text-lg mb-3 min-h-[3.5rem] flex items-center justify-center">
                          {service.service}
                        </CardTitle>
                        <div className="flex items-baseline justify-center space-x-1">
                          <motion.span 
                            className="text-2xl font-bold text-primary"
                            initial={{ scale: 0 }}
                            animate={additionalInView ? { scale: 1 } : {}}
                            transition={{ 
                              delay: (index * 0.15) + 0.5, 
                              duration: 0.4, 
                              type: "spring" 
                            }}
                          >
                            {service.price}
                          </motion.span>
                          <span className="text-muted-foreground text-sm">{service.unit}</span>
                        </div>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={additionalInView ? { opacity: 1 } : {}}
                        transition={{ delay: (index * 0.15) + 0.7, duration: 0.5 }}
                        className="text-sm text-muted-foreground text-center mb-4 flex-grow"
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={additionalInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: (index * 0.15) + 0.9, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          onClick={handleInquiry}
                          variant="outline" 
                          className="w-full"
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
     <section ref={featuresRef} className="py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose Our Plans?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: Check,
                title: "Flexible Terms",
                desc: "No long-term commitments. Upgrade or downgrade anytime based on your needs."
              },
              {
                icon: Star,
                title: "Premium Amenities", 
                desc: "All plans include access to premium facilities and professional support services."
              },
              {
                icon: Check,
                title: "24/7 Support",
                desc: "Round-the-clock security and support to ensure your business runs smoothly."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={featuresInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={featuresInView ? { opacity: 1 } : {}}
                  transition={{ delay: (index * 0.2) + 0.3, duration: 0.5 }}
                  className="text-xl font-semibold mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={featuresInView ? { opacity: 1 } : {}}
                  transition={{ delay: (index * 0.2) + 0.4, duration: 0.5 }}
                  className="text-muted-foreground"
                >
                  {feature.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section ref={ctaRef} className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light mb-4"
          >
            Ready to Join?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Start your journey with Cospace today. Book a tour to see our facilities firsthand.
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
              <Button size="lg" variant="secondary">
                Book a Tour
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;