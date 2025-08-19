import { useState } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-center items-center">
          <div className="flex space-x-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`nav-link text-lg ${
                  activeTab === tab.id ? "active text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;