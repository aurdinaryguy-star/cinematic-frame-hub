import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="section-cinematic">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="font-heading text-display text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-8">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground mb-1">Email</h4>
                        <p className="font-body text-muted-foreground">kumarprashdl@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground mb-1">Phone</h4>
                        <p className="font-body text-muted-foreground">+91-9319688231</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground mb-1">Location</h4>
                        <p className="font-body text-muted-foreground">DELHI,INDIA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="card-gradient rounded-lg p-6">
                  <h4 className="font-heading text-foreground mb-3">
                    Response Time
                  </h4>
                  <p className="font-body text-muted-foreground text-sm">
                    I typically respond to new inquiries within 24 hours. For urgent 
                    projects, please mention it in your message.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-gradient rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-background/50 border-border focus:border-accent" placeholder="Your full name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-background/50 border-border focus:border-accent" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="bg-background/50 border-border focus:border-accent resize-none" placeholder="Tell me about your project..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} variant="accent" className="w-full font-body font-medium">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactSection;