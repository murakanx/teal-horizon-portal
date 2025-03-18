
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Boosting Workplace Morale: Innovative Tactics For Increasing Employee Engagement in 2024",
    excerpt: "Discover the latest strategies to create a more engaged and motivated workforce",
    date: "10 April 2024",
    category: "News",
    image: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
  },
  {
    id: 2,
    title: "How To Avoid The Top Six Most Common Job Interview Mistakes",
    excerpt: "Learn how to present your best self and avoid these critical errors during interviews",
    date: "28 March 2024",
    category: "Tips",
    image: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">News and Blog</h2>
          <Link to="/blog" className="text-primary hover:text-primary-dark flex items-center">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="h-48 bg-gray-200 relative">
                {/* Post image placeholder - would use actual image in production */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="font-semibold text-xl mt-2 mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:text-primary-dark">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
