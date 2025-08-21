import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Art of Cinematic Storytelling",
      excerpt: "Exploring the fundamental principles that make visual narratives compelling and emotionally resonant with audiences.",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
      category: "Cinematography"
    },
    {
      id: "2",
      title: "Color Grading Techniques for Modern Films",
      excerpt: "A deep dive into contemporary color grading workflows and how they shape the emotional tone of your story.",
      date: "2024-01-08",
      readTime: "8 min read",
      image: "/placeholder.svg",
      category: "Post-Production"
    },
    {
      id: "3",
      title: "Building Authentic Brand Narratives",
      excerpt: "How to create commercial content that feels genuine and connects with audiences on a personal level.",
      date: "2024-01-02",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Commercial"
    },
    {
      id: "4",
      title: "The Future of Independent Filmmaking",
      excerpt: "Emerging technologies and platforms that are democratizing film production and distribution.",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "/placeholder.svg",
      category: "Industry"
    },
    {
      id: "5",
      title: "Directing Actors in Documentary Style",
      excerpt: "Techniques for achieving natural, authentic performances that feel spontaneous and real.",
      date: "2023-12-20",
      readTime: "4 min read",
      image: "/placeholder.svg",
      category: "Direction"
    },
    {
      id: "6",
      title: "Creative Vision vs. Client Expectations",
      excerpt: "Navigating the balance between artistic integrity and commercial requirements in professional projects.",
      date: "2023-12-15",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Business"
    },
    {
      id: "7",
      title: "Behind the Scenes: Music Video Production",
      excerpt: "The creative process and technical challenges of producing high-energy music videos on tight schedules.",
      date: "2023-12-10",
      readTime: "5 min read",
      image: "/placeholder.svg",
      category: "Music Video"
    },
    {
      id: "8",
      title: "Storytelling Through Visual Effects",
      excerpt: "How modern VFX can enhance narrative without overwhelming the story or breaking audience immersion.",
      date: "2023-12-05",
      readTime: "7 min read",
      image: "/placeholder.svg",
      category: "VFX"
    },
    {
      id: "9",
      title: "The Psychology of Brand Films",
      excerpt: "Understanding how emotional storytelling in commercial work can create lasting connections with audiences.",
      date: "2023-11-28",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Commercial"
    }
  ];

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  const displayedPosts = blogPosts.slice(0, visiblePosts);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="section-cinematic">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="font-heading text-display text-foreground mb-6">
              Creative Journal
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and stories from my creative journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="card-gradient rounded-lg overflow-hidden hover-lift transition-smooth group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-body text-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent transition-smooth">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < blogPosts.length && (
              <div className="text-center mt-12">
                <button 
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-lg bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-smooth font-body font-medium"
                >
                  Load More Posts ({blogPosts.length - visiblePosts} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="bg-card border border-border rounded-lg shadow-elegant">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-body text-sm">
                    {selectedPost.category}
                  </span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-md hover:bg-muted/10 transition-smooth"
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground hover:text-foreground rotate-45" />
                  </button>
                </div>
                <h1 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="aspect-video">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="font-body text-foreground leading-relaxed">
                    This is where the full blog post content would appear. In a real application, 
                    you would fetch the complete article content from your backend or CMS.
                  </p>
                  <p className="font-body text-foreground leading-relaxed mt-4">
                    To implement full blog functionality with rich content editing, image uploads, 
                    and post management, you'll need to connect to a backend service like Supabase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;