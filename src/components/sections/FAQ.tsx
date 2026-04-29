import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is TillDash?",
        answer: "TillDash is a modern self-checkout solution that allows customers to scan, pay, and go without waiting in line. Our mobile app works with physical retail stores to provide a seamless shopping experience."
      },
      {
        question: "How does TillDash work?",
        answer: "Simply download our app, open it when you enter a TillDash-enabled store, scan product barcodes as you shop, pay through the app, and show your digital receipt on the way out. No lines, no waiting!"
      },
      {
        question: "Is TillDash available yet?",
        answer: "We're currently in our pre-launch phase with the MVP ready and pilot onboarding underway in Mombasa, Kenya. If you'd like to be among the first — as a shopper or a retail partner — join the waitlist and we'll be in touch with next steps."
      }
    ]
  },
  {
    category: "For Shoppers",
    items: [
      {
        question: "Do I need to create an account to use TillDash?",
        answer: "Yes, you'll need to create a free account with basic information and add a payment method to start using TillDash. This takes less than 2 minutes and only needs to be done once."
      },
      {
        question: "What payment methods does TillDash accept?",
        answer: "TillDash accepts most major credit and debit cards, Apple Pay, Google Pay, and in select regions, mobile payment services like M-Pesa and PayPal."
      },
      {
        question: "What if I make a mistake or need to remove an item?",
        answer: "You can easily remove items from your cart within the app before finalizing your purchase. Just tap on the item and select 'Remove' from the options."
      },
      {
        question: "Are my payment details secure?",
        answer: "Absolutely! TillDash uses bank-level encryption and security protocols. We never store your full payment card details on our servers and are fully PCI DSS compliant."
      }
    ]
  },
  {
    category: "For Businesses",
    items: [
      {
        question: "How can my business join the pilot program?",
        answer: "We're currently onboarding a select group of retail partners for our pilot launch. TillDash requires zero hardware investment and can be up and running in just 3–5 days — no disruption to your existing operations. Fill in the contact form on this page, choose 'Becoming a pilot partner', and our team will reach out within 24–48 hours. No commitment required to have that conversation."
      },
      {
        question: "What hardware is required to implement TillDash?",
        answer: "TillDash works with minimal hardware requirements. Typically, you'll need product barcodes, a tablet for staff monitoring, and optional exit verification devices. Our team will provide a detailed assessment based on your store layout."
      },
      {
        question: "How does TillDash integrate with existing POS systems?",
        answer: "TillDash can integrate with most major POS and inventory management systems including Shopify, Square, Lightspeed, and many others. Custom integrations are available for enterprise clients."
      },
      {
        question: "How does TillDash prevent theft?",
        answer: "TillDash incorporates multiple security features including random receipt verification, weight validation (optional), and AI-powered unusual behavior detection. Our solutions typically reduce shrinkage compared to traditional self-checkout."
      }
    ]
  }
];

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});
  const [activeCategory, setActiveCategory] = useState<string>("General");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const filteredFAQs = searchQuery 
    ? faqs.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    : faqs;

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-8">
            Everything you need to know about TillDash. Can't find the answer you're looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">
              Contact our support team.
            </a>
          </p>
          
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Search for questions..."
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Category tabs - Desktop */}
          {!searchQuery && (
            <div className="hidden md:flex mb-12 gap-2 justify-center">
              {faqs.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-5 py-2.5 rounded-full transition-colors ${
                    activeCategory === category.category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          )}
          
          {/* FAQ accordion */}
          <div className="space-y-12">
            {filteredFAQs.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={!searchQuery && activeCategory !== category.category ? 'hidden md:block' : ''}
              >
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, questionIndex) => {
                    const isOpen = openQuestions[`${categoryIndex}-${questionIndex}`] || false;
                    
                    return (
                      <div 
                        key={questionIndex}
                        className={`border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow ${
                          isOpen ? 'shadow-md' : 'shadow-sm hover:shadow'
                        }`}
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 flex justify-between items-center"
                          aria-expanded={isOpen}
                        >
                          <h4 className="font-semibold text-left">{item.question}</h4>
                          <span className="ml-4 flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </span>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-gray-100 p-8 rounded-xl inline-flex flex-col items-center">
                  <Search className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-600">
                    We couldn't find any FAQ matching "{searchQuery}".
                    <br />Please try with a different search term or contact support.
                  </p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Still have questions */}
          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              If you can't find the answer to your question in our FAQ, you can always contact us.
              We'll get back to you as soon as we can.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
