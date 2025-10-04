import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappNumber = "919876543210"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Hi, I'm interested in learning more about Cospace Coworks and your workspace solutions.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen">
      {/* Map Section - First */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Location</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located in Kottakkal, Kerala with easy access to transportation
            </p>
          </div>
          
          {/* Google Map Embed */}
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5!2d75.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65903252556c1%3A0x6c78879fa2b2f011!2sPTK%20SQUARE%2C%20Panikkarpadi%2C%20Edarikode%2C%20Kottakkal%2C%20Kerala%20676501!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cospace Coworks Location"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg9MgYIBxAuGEDSAQgyMTI3ajBqMagCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcdWWSUMs6c7MQIZ8LqSn4Rs&daddr=PTK+SQUARE,+Panikkarpadi,+Edarikode,+Kottakkal,+Kerala+676501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to us through your preferred method
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <a href="tel:+919876543210">
              <Card className="card-hover h-full cursor-pointer transition-transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </a>

            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Card className="card-hover h-full cursor-pointer transition-transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Quick Response</p>
                </CardContent>
              </Card>
            </a>

            {/* Email */}
            <a href="mailto:info@cospacecoworks.com">
              <Card className="card-hover h-full cursor-pointer transition-transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">info@cospacecoworks.com</p>
                  <p className="text-sm text-muted-foreground">We'll reply within 24 hours</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Get in Touch - Details */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find all the information you need to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Cospace Coworks<br />
                    PTK SQUARE, Panikkarpadi<br />
                    Edarikode, Kottakkal<br />
                    Kerala 676501
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    +91 98765 43210
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +91 87654 32109
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    info@cospacecoworks.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    sales@cospacecoworks.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    24/7 Access for Members
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    Support: 9 AM - 6 PM
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Tours: 10 AM - 5 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your workspace needs..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-cta" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our coworking spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What are your operating hours?</h3>
                <p className="text-muted-foreground">
                  Our coworking spaces are accessible 24/7 for members. Our support team is available 
                  from 9 AM to 6 PM for assistance and tours are available from 10 AM to 5 PM.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Do you offer day passes?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer day passes for ₹299 which includes access to hot desks, WiFi, 
                  coffee, and all common areas. Perfect for trying out our space.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Is parking available?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide dedicated parking spaces for all our members. Additional guest 
                  parking is also available for your clients and visitors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Can I schedule a tour?</h3>
                <p className="text-muted-foreground">
                  Absolutely! You can book a free tour through our website, call us, or visit during 
                  our tour hours (10 AM - 5 PM). We'd love to show you around.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;