import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Users, Calendar, Home, Laptop, Users2, CheckCircle, Star, ArrowRight, Shield, Clock, Wifi, MapPin } from "lucide-react";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyImage } from "@/components/LazyImage";

// Import generated images
import heroImage from '../assets/banner.jpg'
import heroLogo from '../assets/logo_in_banner.png'
import dedicatedDesk from '../assets/dedicatedDesk.jpg';
import DoubleSeat from "../assets/DoubleSeat.jpg";
import conferenceRoom from "../assets/conferenceRoom.jpg";  
import privatecabin from "../assets/privatecabin.jpg";
import VirtualOffice from '../assets/virtualoffice.jpg'
import receptionArea from '../assets/recpetion.jpg'

// Add container styles
const containerStyle = "px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const services = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Single Seat",
    description: "Flexible single-seat workspace with daily, weekly, or monthly plans available.",
    image: dedicatedDesk,
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "Double Seat",
    description: "Shared workspace option with seating for two people, available on multiple plans.",
    image: DoubleSeat,
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Quadruple Seat",
    description: "Workspace for four, ideal for small teams with full access to amenities.",
    image: privatecabin,
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: "Virtual Office",
    description: "Professional business address and services without the physical workspace commitment.",
    image: VirtualOffice,
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Conference Room",
    description: "Bookable meeting rooms for professional discussions and team collaborations.",
    image: conferenceRoom,
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Reception Area",
    description: "Professional reception services with modern amenities and comfortable waiting space.",
    image: receptionArea,
  },
];


  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Premium Security",
      description: "24/7 CCTV monitoring and secure access controls",
      stat: "100%",
      statLabel: "Secure",
    },
    {
      icon: <Wifi className="h-12 w-12 text-primary" />,
      title: "High-Speed Internet",
      description: "Unlimited fiber internet with 100+ Mbps speed",
      stat: "100+",
      statLabel: "Mbps",
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "24/7 Access",
      description: "Round-the-clock access for maximum flexibility",
      stat: "24/7",
      statLabel: "Available",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "₹10,000",
      period: "/year",
      description: "Perfect for virtual presence",
      features: ["Business address", "Mail handling", "Reception services"],
    },
    {
      name: "Hot Desk",
      price: "₹299",
      period: "/day",
      description: "Flexible daily access",
      features: ["Workspace access", "WiFi & amenities", "Networking opportunities"],
      popular: true,
    },
    {
      name: "Dedicated Desk",
      price: "₹4,999",
      period: "/month",
      description: "Your own desk space",
      features: ["Personal desk", "Storage locker", "24/7 access"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechVision",
      image: "/api/placeholder/64/64",
      content: "Cospace has been instrumental in our growth. The professional environment and networking opportunities are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen", 
      role: "Freelance Designer",
      company: "Creative Studio",
      image: "/api/placeholder/64/64",
      content: "The flexibility and amenities at Cospace allow me to focus on what I do best. Highly recommended for any professional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden max-w-[100vw]">
      {loading && <Loader />}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroImage}
            alt="Premium coworking space"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div
              className="w-72 sm:w-80 md:w-96 lg:w-[42rem] xl:w-[48rem] h-32 sm:h-36 md:h-40 lg:h-72 xl:h-80 mx-auto bg-contain bg-center bg-no-repeat select-none pointer-events-none"
              style={{
                backgroundImage: `url(${heroLogo})`,
                userSelect: "none",
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto"
          >
            A modern coworking community built for collaboration, productivity,
            and growth.
          </motion.p>
        </div>
      </section>
      {/* Services Grid */}
        <section ref={servicesRef} className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Workspace Solutions
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of professional workspace
              options designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="group card-hover overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full"
                        aspectRatio="3/2"
                        data-testid={`img-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <Link to="/services">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn"
                        >
                          Learn More
                          <motion.div
                            animate={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={benefitsRef} className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Why Choose Cospace?
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our world-class facilities and
              exceptional service
            </p>
          </motion.div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
  {benefits.map((benefit, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="text-center card-hover">
        <CardContent className="p-8">
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.6 },
            }}
          >
            {benefit.icon}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            className="text-2xl font-bold mb-2"
          >
            {benefit.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            className="text-muted-foreground mb-4"
          >
            {benefit.description}
          </motion.p>
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            animate={benefitsInView ? { scale: 1 } : {}}
            transition={{
              delay: index * 0.2 + 0.5,
              duration: 0.4,
              type: "spring",
            }}
          >
            <div className="text-3xl font-bold text-primary">
              {benefit.stat}
            </div>
            <div className="text-sm text-muted-foreground">
              {benefit.statLabel}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
         </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          >
            {[
              { stat: "250+", label: "Happy Members" },
              { stat: "50+", label: "Companies" },
              { stat: "99%", label: "Satisfaction" },
              { stat: "24/7", label: "Support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section ref={pricingRef} className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Choose a plan that fits your needs. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={pricingInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateX: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className={`card-hover ${
                    plan.popular
                      ? "ring-2 ring-primary relative overflow-hidden"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ x: -100 }}
                      animate={pricingInView ? { x: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                      className="bg-gradient-cta text-cta-foreground text-center py-2 text-sm font-semibold"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <CardHeader className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={pricingInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    >
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center space-x-1">
                        <motion.span
                          className="text-3xl font-bold"
                          initial={{ scale: 0 }}
                          animate={pricingInView ? { scale: 1 } : {}}
                          transition={{
                            delay: index * 0.2 + 0.5,
                            duration: 0.4,
                            type: "spring",
                          }}
                        >
                          {plan.price}
                        </motion.span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={pricingInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: index * 0.2 + 0.6 + idx * 0.1,
                            duration: 0.4,
                          }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </motion.div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full ${
                          plan.popular ? "btn-cta" : "btn-primary"
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <Link to="/pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">
                  View All Plans
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What Our Members Say
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of satisfied professionals who call Cospace their
              workspace home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                name: "Sufaid VT",
                role: "Professional",
                company: "Cospace Member",
                rating: 5,
                content: "This place is great! It's a calm and quiet spot where you can really focus and get things done at your own speed. I loved that I could go in anytime, day or night, and leave whenever I needed to. I even finished my online classes there.",
                image: null
              },
              {
                name: "Shahla K",
                role: "Entrepreneur",
                company: "Cospace Member",
                rating: 5,
                content: "It's a vibrant workspace where ideas come alive and collaboration thrives. With multiple meeting rooms and a stunning conference hall, this space is perfect for dreamers, makers, and entrepreneurs. The collaborative environment encourages creativity and innovation.",
                image: "https://lh3.googleusercontent.com/a-/ALV-UjXXagN-VcVuLRW3-ai1Of3nFAeDTAbwJTTXsdBhY9Y3AxGOAas=w97-h97-p-rp-mo-br100"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  rotateY: index % 2 === 0 ? -10 : 10,
                }}
                animate={
                  testimonialsInView ? { opacity: 1, x: 0, rotateY: 0 } : {}
                }
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{
                  y: -5,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={testimonialsInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={
                            testimonialsInView
                              ? { opacity: 1, scale: 1, rotate: 0 }
                              : {}
                          }
                          transition={{
                            delay: index * 0.3 + 0.6 + i * 0.1,
                            duration: 0.4,
                          }}
                          whileHover={{ scale: 1.3, rotate: 20 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={testimonialsInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
                      className="text-muted-foreground mb-6 italic"
                    >
                      "{testimonial.content}"
                    </motion.p>
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.3 + 0.8, duration: 0.5 }}
                    >
                      {testimonial.image ? (
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <motion.div
                          className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-primary-foreground font-semibold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </motion.div>
                      )}
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            Join our community of successful professionals. Schedule a tour
            today and see why Cospace is the perfect place for your business to
            thrive.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <MapPin className="w-12 h-12 mx-auto" />,
                title: "Visit Us",
                desc: "PTK SQUARE, Panikkarpadi,<br />Edarikode, Kottakkal, Kerala 676501",
              },
              {
                icon: "📞",
                title: "Call Us",
                desc: "+91 98765 43210<br />9 AM - 6 PM Support",
              },
              {
                icon: "✉️",
                title: "Email Us",
                desc: "info@cospacecoworks.com<br />Quick response guaranteed",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="text-center"
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {typeof contact.icon === 'string' ? (
                    <span className="text-6xl">{contact.icon}</span>
                  ) : (
                    contact.icon
                  )}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p
                  className="opacity-80"
                  dangerouslySetInnerHTML={{ __html: contact.desc }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Schedule a Tour
                </Button>
              </motion.div>
            </Link>
            <Link to="/pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-900 text-white hover:bg-blue-800 text-lg px-8"
                >
                  View Pricing
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;