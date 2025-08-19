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
    }
  ];

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
              {blogPosts.map((post) => (
                <article
                  key={post.id}
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
            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-lg bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-smooth font-body font-medium">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;