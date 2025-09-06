import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SocialIcons from "@/components/SocialIcons";
import HomeSection from "@/components/sections/HomeSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import PhotosSection from "@/components/sections/PhotosSection";

const Index = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");

  // Determine active tab from URL
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      setActiveTab("home");
    } else if (path.startsWith("/videos")) {
      setActiveTab("videos");
    } else if (path.startsWith("/work")) {
      // Redirect old /work routes to /videos routes
      const newPath = path.replace("/work", "/videos");
      navigate(newPath, { replace: true });
      return;
    } else if (path.startsWith("/about")) {
      setActiveTab("about");
    } else if (path.startsWith("/contact")) {
      setActiveTab("contact");
    } else if (path.startsWith("/photos")) {
      setActiveTab("photos");
    } else {
      // Handle any other routes by redirecting to home
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab === "home" ? "" : tab}`);
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection />;
      case "videos":
        return <WorkSection />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      case "photos":
        return <PhotosSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <SocialIcons />
      <main className="pt-16 sm:pt-20">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
