import { Scan, Smartphone, Zap, Shield, BarChart2, ShoppingBag, Timer, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Scan className="w-10 h-10 text-primary" />,
    title: "Scan & Go",
    description: "Scan product barcodes with your phone's camera and add items to your cart instantly, eliminating manual entry.",
    color: "bg-primary/10",
    highlight: "bg-primary"
  },
  {
    icon: <Smartphone className="w-10 h-10 text-accent" />,
    title: "Mobile Payments",
    description: "Pay securely via M-Pesa, credit cards, and other mobile payment methods without waiting in checkout lines.",
    color: "bg-accent/10",
    highlight: "bg-accent"
  },
  {
    icon: <Timer className="w-10 h-10 text-secondary" />,
    title: "Time-Saving",
    description: "Complete your shopping in half the time compared to traditional checkout, with no need to unload and reload items.",
    color: "bg-secondary/10",
    highlight: "bg-secondary"
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Secure Checkout",
    description: "End-to-end encryption and PCI compliance ensures your payment and personal information stays safe and protected.",
    color: "bg-primary/10",
    highlight: "bg-primary"
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-accent" />,
    title: "Real-time Analytics",
    description: "For businesses: Track sales, inventory, and customer behavior in real-time through our intuitive dashboard.",
    color: "bg-accent/10",
    highlight: "bg-accent"
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-secondary" />,
    title: "Digital Receipts",
    description: "Get digital receipts sent directly to your email or phone - environmentally friendly with no paper waste.",
    color: "bg-secondary/10",
    highlight: "bg-secondary"
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Multiple Payment Options",
    description: "Support for all major payment methods including credit cards, mobile money, and digital wallets.",
    color: "bg-primary/10",
    highlight: "bg-primary"
  },
  {
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: "Easy Integration",
    description: "Seamlessly integrates with your existing POS systems, inventory management, and loyalty programs.",
    color: "bg-accent/10",
    highlight: "bg-accent"
  }
];

const getFeatureColor = (index: number) => {
  const colors = [
    "bg-gradient-to-br from-purple-500 to-indigo-600",
    "bg-gradient-to-br from-blue-500 to-cyan-600", 
    "bg-gradient-to-br from-green-500 to-emerald-600",
    "bg-gradient-to-br from-yellow-500 to-orange-600",
    "bg-gradient-to-br from-pink-500 to-rose-600",
    "bg-gradient-to-br from-indigo-500 to-purple-600"
  ];
  return colors[index % colors.length];
};

const Features = () => {

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-[var(--light-blue)] via-purple-50 to-[var(--light-gray)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-br from-pink-200/20 to-indigo-200/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-gradient-to-r from-[var(--light-blue)] to-blue-100 text-purple-700 text-sm font-bold px-6 py-3 rounded-full inline-block mb-6 border border-purple-200 shadow-lg">✨ FEATURES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Why Choose TillDash?</h2>
          <p className="text-lg text-gray-700 font-medium">
            Experience the future of retail with our comprehensive self-checkout solution
            designed for both customers and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 hover:border-purple-200"
            >
              <div className={`w-14 h-14 ${getFeatureColor(index)} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <span className="text-white">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">The future of retail checkout is here</h3>
                <p className="text-gray-700 mb-6">
                  TillDash is more than just a self-checkout app. It's a complete solution that transforms how customers shop and how retailers operate.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">No special hardware required</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">Works with your existing inventory system</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">Reduces checkout staff needs by up to 70%</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">Improves customer satisfaction scores</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a 
                    href="#how-it-works" 
                    className="bg-[var(--dark-blue)] text-[var(--light-blue)] hover:bg-[var(--primary-blue)]/90 px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg inline-block"
                  >
                    See How It Works
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-[var(--light-gray)]">
                  <div className="rounded-lg shadow-lg w-full bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Scan className="w-8 h-8 text-[var(--dark-blue)]" />
                      </div>
                      <p className="text-gray-700 font-medium">Smart Scanning Technology</p>
                      <p className="text-gray-500 text-sm mt-1">Advanced barcode recognition</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
