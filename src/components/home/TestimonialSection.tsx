
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jason Wu",
    position: "Software Engineer",
    content: "Amazing services, the platform made it so easy to find my perfect job match in just a few days. The alerts system is a game-changer.",
    avatar: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    rating: 5,
    title: "Amazing services"
  },
  {
    id: 2,
    name: "Alexandra Kim",
    position: "Marketing Director",
    content: "Everything simple, intuitive and beautifully designed. I was able to post a job listing and start receiving qualified applicants within hours.",
    avatar: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    rating: 5,
    title: "Everything simple"
  },
  {
    id: 3,
    name: "Marcus Chen",
    position: "HR Manager",
    content: "Awesome talent pool, we've hired three excellent team members through this platform. The filtering tools saved us countless hours in the process.",
    avatar: "/lovable-uploads/a21d18f2-4753-438c-8cd6-e72411928f5d.png",
    rating: 5,
    title: "Awesome talent pool"
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials from Our Customers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <h3 className="font-semibold text-lg mb-3">{testimonial.title}</h3>
              
              <p className="text-gray-600 mb-5">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                  {/* Avatar placeholder - would use actual image in production */}
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
