import { useState } from "react";
import Navigation from "@/components/Navigation";
import SocialIcons from "@/components/SocialIcons";
import HomeSection from "@/components/sections/HomeSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import BlogSection from "@/components/sections/BlogSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection />;
      case "work":
        return <WorkSection />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      case "blog":
        return <BlogSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <SocialIcons />
      <main className="pt-20">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
