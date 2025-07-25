import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Busy Parent",
    image: "/public/testimonial-1.jpg",
    rating: 5,
    text: "TillDash has completely changed how I shop with my kids. No more waiting in long checkout lines with impatient children. I scan items as I shop and walk right out. It's saved me so much time and stress!",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Young Professional",
    image: "/public/testimonial-2.jpg",
    rating: 5,
    text: "I use TillDash every day during my lunch break to quickly grab what I need without being late back to work. The app is incredibly intuitive, and checkout is seamless. I've recommended it to all my colleagues.",
  },
  {
    id: 3,
    name: "David Williams",
    position: "Tech Enthusiast",
    image: "/public/testimonial-3.jpg",
    rating: 4,
    text: "As someone who values efficiency and technology, TillDash delivers on both fronts. The barcode scanning is lightning fast, and the payment process is secure and reliable. It's the future of shopping.",
  },
  {
    id: 4,
    name: "Amara Okafor",
    position: "Student",
    image: "/public/testimonial-4.jpg",
    rating: 5,
    text: "Being on a tight student budget, I love how TillDash helps me track my spending in real-time. No surprises at checkout, and the app even shows me deals on items I frequently buy. So convenient!",
  },
  {
    id: 5,
    name: "James Rodriguez",
    position: "Business Traveler",
    image: "/public/testimonial-5.jpg",
    rating: 5,
    text: "I travel for work constantly, and TillDash makes it so easy to shop in unfamiliar stores. The app works the same everywhere, and having digital receipts for expense reports is a game changer.",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Discover why thousands of shoppers and businesses trust TillDash for their self-checkout needs
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="flex">
              {/* Large active testimonial */}
              <div className="w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                  <div className="absolute top-8 right-8">
                    <Quote className="w-12 h-12 text-primary/10" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                        "{testimonials[activeIndex].text}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                        <p className="text-primary">{testimonials[activeIndex].position}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation controls */}
                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToTestimonial(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-primary w-6' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={goToPrev}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label="Next testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile testimonials (stacked cards) */}
          <div className="md:hidden space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-sm">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Join 10,000+ shoppers already using TillDash</h3>
              <p className="text-gray-600 mb-4">Experience the difference with our award-winning self-checkout solution</p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
