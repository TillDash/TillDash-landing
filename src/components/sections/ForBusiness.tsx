import { BarChart, ShieldCheck, Users, BadgePercent, Clock, Building2, PanelRight, ReceiptText, Tablet, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: <TrendingUp size={24} />,
    title: "Increase Revenue",
    description: "Shorter checkout times mean more transactions per hour, increased customer satisfaction, and higher average order values.",
    color: "bg-primary-50",
    highlight: "text-primary"
  },
  {
    icon: <Users size={24} />,
    title: "Optimize Staff Allocation",
    description: "Redirect your team from checkout operations to higher-value customer service activities, enhancing the shopping experience.",
    color: "bg-accent-50",
    highlight: "text-accent"
  },
  {
    icon: <BarChart size={24} />,
    title: "Powerful Analytics",
    description: "Gain detailed insights into shopping patterns, customer preferences, and inventory management with our integrated dashboard.",
    color: "bg-secondary-50",
    highlight: "text-secondary"
  },
  {
    icon: <Clock size={24} />,
    title: "Reduce Wait Times",
    description: "Eliminate long checkout lines that frustrate customers and lead to abandoned purchases, especially during peak hours.",
    color: "bg-primary-50",
    highlight: "text-primary"
  },
  {
    icon: <BadgePercent size={24} />,
    title: "Increase Basket Size",
    description: "Real-time personalized promotions delivered directly to customers' phones while they shop increases cross-selling opportunities.",
    color: "bg-accent-50",
    highlight: "text-accent"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Enhanced Security",
    description: "Reduce cash handling risks with secure digital payments and integrated loss prevention technology that exceeds traditional methods.",
    color: "bg-secondary-50",
    highlight: "text-secondary"
  }
];

const retailers = [
  {
    name: "Supermarkets & Grocers",
    icon: <Building2 size={24} />,
    description: "Reduce congestion during peak hours and improve customer satisfaction with faster checkout experiences.",
    features: ["High-volume checkout optimization", "Fresh produce weighing integration", "Loyalty program integration"]
  },
  {
    name: "Convenience Stores",
    icon: <ReceiptText size={24} />,
    description: "Process more customers with limited floor space and staff while maintaining security and compliance.",
    features: ["Age verification for restricted products", "Compact implementation options", "Quick service optimization"]
  },
  {
    name: "Specialty Retailers",
    icon: <PanelRight size={24} />,
    description: "Create a modern shopping experience that aligns with your premium brand positioning and customer expectations.",
    features: ["Premium UI customization", "Product information enrichment", "High-touch service integration"]
  },
  {
    name: "Department Stores",
    icon: <Tablet size={24} />,
    description: "Deploy flexible checkout options throughout the store to reduce friction and increase conversions at the point of decision.",
    features: ["Multi-department management", "Distributed checkout points", "Cross-selling capabilities"]
  }
];

const getBenefitGradient = (index: number) => {
  const gradients = [
    "from-purple-500 to-indigo-600",
    "from-blue-500 to-cyan-600",
    "from-green-500 to-emerald-600",
    "from-yellow-500 to-orange-600",
    "from-pink-500 to-rose-600",
    "from-indigo-500 to-purple-600"
  ];
  return gradients[index % gradients.length];
};

const ForBusiness = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="for-business" className="py-20 md:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1/5 h-1/5 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 text-sm font-bold px-6 py-3 rounded-full inline-block mb-6 border border-orange-200 shadow-lg">🏢 FOR BUSINESSES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">Supercharge Your Retail Operations</h2>
          <p className="text-lg text-gray-700 font-medium">
            Transform the way your customers shop with our advanced self-checkout solution.
            Boost efficiency, cut costs, and deliver exceptional shopping experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] hover:border-purple-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${getBenefitGradient(index)} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <span className="text-white">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Retailer types section */}
        <div className="mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Solutions For Every Retail Category</h3>
            <p className="text-gray-700 font-medium">
              TillDash adapts to your specific industry needs, whether you're a supermarket, 
              convenience store, specialty retailer, or department store.
            </p>
          </div>
          
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {retailers.map((retailer, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105 ${activeTab === index 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300 shadow-md'}`}
              >
                <div className="flex items-center">
                  <span className={activeTab === index ? 'text-white' : 'text-purple-600'}>
                    {retailer.icon}
                  </span>
                  <span className="ml-2">{retailer.name}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{retailers[activeTab].name}</h4>
                <p className="text-gray-700 mb-6 font-medium leading-relaxed">{retailers[activeTab].description}</p>
                <div className="space-y-4">
                  {retailers[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-900 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Request Industry Solution
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
                  <div className="rounded-2xl shadow-lg relative z-10 w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{retailers[activeTab].icon}</div>
                      <p className="text-gray-600 font-medium">{retailers[activeTab].name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">See Your Potential ROI</h3>
              <p className="text-white text-lg mb-6 font-medium drop-shadow-md">
                Our ROI calculator helps you estimate the potential impact of implementing TillDash 
                in your retail locations based on your specific business metrics.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-white font-medium">Enter your store details and current checkout metrics</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-white font-medium">Receive a customized implementation plan</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-white font-medium">Review projected savings and revenue increases</p>
                </div>
              </div>
              <div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-purple-700 font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Calculate Your ROI
                </a>
              </div>
            </div>
            <div className="hidden md:block md:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span>Average checkout time reduction</span>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span>Average staff reallocation</span>
                    <span className="font-bold">42%</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span>Customer satisfaction increase</span>
                    <span className="font-bold">37%</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                    <span>Average ROI timeframe</span>
                    <span className="font-bold">7 months</span>
                  </div>
                </div>
                <div className="mt-5 text-sm text-center text-white/60">
                  Based on average metrics from current TillDash clients
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enterprise section */}
        <div className="mt-24 bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Enterprise Solutions</h3>
            <p className="text-lg text-gray-800 font-medium max-w-3xl mx-auto mb-8">
              For large retailers with multiple locations, our enterprise team provides 
              custom implementations, dedicated support, and advanced integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Contact Enterprise Sales
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-300 text-base font-bold rounded-xl text-purple-700 bg-white hover:bg-purple-50 hover:border-purple-400 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
