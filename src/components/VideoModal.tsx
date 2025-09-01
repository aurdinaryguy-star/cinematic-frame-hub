import { useState } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  embedId?: string;
  videoType?: "youtube" | "vimeo";
}

const VideoModal = ({ isOpen, onClose, videoSrc, title, embedId, videoType }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-heading text-lg text-foreground">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-muted/10 transition-smooth"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
          
          {/* Video */}
          <div className="aspect-video">
            {embedId ? (
              videoType === "vimeo" ? (
                <iframe
                  className="w-full h-full"
                  src={`https://player.vimeo.com/video/${embedId}?autoplay=1`}
                  title={title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <video
                className="w-full h-full"
                controls
                autoPlay
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;