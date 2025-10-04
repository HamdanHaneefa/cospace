import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "We believe in building a vibrant community of professionals who support and inspire each other.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Constantly evolving our spaces and services to meet the changing needs of modern businesses.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to providing premium facilities and exceptional service to all our members.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      description: "Building eco-friendly workspaces that contribute to a sustainable future for all.",
    },
  ];

  const stats = [
    { number: "250+", label: "Happy Members" },
    { number: "50+", label: "Companies Served" },
    { number: "24/7", label: "Access & Support" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* Company Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Cospace Coworks emerged from a simple vision: to create workspace solutions 
                  that adapt to the evolving needs of modern businesses. We recognized that traditional offices 
                  were becoming outdated, and entrepreneurs, freelancers, and growing companies needed flexible, 
                  professional environments.
                </p>
                <p>
                  What started as a single location has grown into a thriving community of innovative professionals. 
                  We've carefully designed each space to foster productivity, creativity, and meaningful connections 
                  between our members.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, always keeping our members' success at 
                  the heart of everything we do. Join us and be part of a community that's shaping the future of work.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-cta/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    To provide exceptional workspace solutions that empower businesses to thrive and communities to flourish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and community building
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      {/* <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              To be the leading coworking space provider that transforms how people work, connect, 
              and grow their businesses in a collaborative and sustainable environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="opacity-80">Supporting the growth of businesses and professionals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Connection</h3>
                <p className="opacity-80">Building meaningful professional relationships</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="opacity-80">Embracing new technologies and work methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of a thriving community of entrepreneurs, freelancers, and growing businesses. 
            Let's build the future of work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-cta">
              Book a Tour
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;