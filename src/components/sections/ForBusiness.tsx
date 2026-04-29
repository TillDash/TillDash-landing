import { BarChart, ShieldCheck, Users, BadgePercent, Clock, Building2, PanelRight, ReceiptText, Tablet, TrendingUp, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';

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

const TILLDASH_COST: Record<string, number> = {
  '1–2': 26000,
  '3–10': 46000,
  '10+': 65000,
};

const fmt = (n: number) =>
  'KSh ' + Math.round(n).toLocaleString('en-KE');

const ForBusiness = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [roi, setRoi] = useState({
    cashiers: 4,
    salary: 30000,
    transactions: 8000,
    basket: 2500,
    locations: '1–2' as keyof typeof TILLDASH_COST,
  });

  const calc = useMemo(() => {
    const tilldashCost = TILLDASH_COST[roi.locations];
    const staffSavings = roi.cashiers * roi.salary * 0.70;
    // Conservative: recover 10% more transactions by eliminating queue abandonment
    const revenueRecovery = roi.transactions * 0.10 * roi.basket;
    const grossBenefit = staffSavings + revenueRecovery;
    const netBenefit = grossBenefit - tilldashCost;
    const roiRatio = grossBenefit / tilldashCost;
    return { staffSavings, revenueRecovery, grossBenefit, tilldashCost, netBenefit, roiRatio };
  }, [roi]);

  const setField = (field: keyof typeof roi) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = field === 'locations' ? e.target.value : Number(e.target.value);
    setRoi(prev => ({ ...prev, [field]: val }));
  };

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
                className={`px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all transform hover:scale-105 ${activeTab === index
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
        
        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Calculate Your Monthly Returns</h3>
            <p className="text-white/80 text-sm md:text-base">Enter your store details — the numbers update live.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 space-y-5">
              <h4 className="font-bold text-white/90 text-sm uppercase tracking-wider mb-2">Your Store</h4>

              {/* Cashiers slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-white/80">Checkout cashiers</label>
                  <span className="bg-white/20 text-white font-bold text-sm px-2.5 py-0.5 rounded-lg">{roi.cashiers}</span>
                </div>
                <input
                  type="range" min="1" max="20" step="1"
                  value={roi.cashiers}
                  onChange={setField('cashiers')}
                  className="roi-slider"
                  style={{
                    background: `linear-gradient(to right, #facc15 ${(roi.cashiers - 1) / 19 * 100}%, rgba(255,255,255,0.25) ${(roi.cashiers - 1) / 19 * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/50 mt-1"><span>1</span><span>20</span></div>
              </div>

              {/* Salary */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Avg monthly salary per cashier (KSh)</label>
                <input
                  type="number" min="10000" max="200000" step="1000"
                  value={roi.salary}
                  onChange={setField('salary')}
                  className="w-full bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/20"
                />
              </div>

              {/* Transactions */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Monthly customer transactions</label>
                <input
                  type="number" min="100" max="500000" step="100"
                  value={roi.transactions}
                  onChange={setField('transactions')}
                  className="w-full bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/20"
                />
              </div>

              {/* Basket value */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Average basket value (KSh)</label>
                <input
                  type="number" min="100" max="50000" step="100"
                  value={roi.basket}
                  onChange={setField('basket')}
                  className="w-full bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/20"
                />
              </div>

              {/* Locations */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Number of store locations</label>
                <select
                  value={roi.locations}
                  onChange={setField('locations')}
                  className="w-full bg-white/20 text-white rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/20 cursor-pointer"
                >
                  <option value="1–2" className="text-gray-900">1–2 locations</option>
                  <option value="3–10" className="text-gray-900">3–10 locations</option>
                  <option value="10+" className="text-gray-900">10+ locations</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white/90 text-sm uppercase tracking-wider">Your Estimated Monthly Returns</h4>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-3 flex-1">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div>
                    <p className="text-sm font-medium text-white/80">Staff value freed up</p>
                    <p className="text-xs text-white/50">70% of cashier salaries reallocated</p>
                  </div>
                  <span className="text-lg font-bold text-yellow-300 ml-4">{fmt(calc.staffSavings)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div>
                    <p className="text-sm font-medium text-white/80">Revenue recovery</p>
                    <p className="text-xs text-white/50">~10% more transactions captured</p>
                  </div>
                  <span className="text-lg font-bold text-yellow-300 ml-4">{fmt(calc.revenueRecovery)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div>
                    <p className="text-sm font-medium text-white/80">TillDash subscription</p>
                    <p className="text-xs text-white/50">{roi.locations} location{roi.locations !== '1–2' ? 's' : ''} · SaaS plan</p>
                  </div>
                  <span className="text-lg font-bold text-white/70 ml-4">−{fmt(calc.tilldashCost)}</span>
                </div>

                {/* Net benefit — highlighted */}
                <div className={`flex justify-between items-center py-3 px-4 rounded-xl ${calc.netBenefit >= 0 ? 'bg-green-500/20 border border-green-400/30' : 'bg-red-500/20 border border-red-400/30'}`}>
                  <div>
                    <p className="font-bold text-white">Net monthly benefit</p>
                    <p className="text-xs text-white/60">Conservative estimate</p>
                  </div>
                  <span className={`text-xl font-extrabold ml-4 ${calc.netBenefit >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                    {calc.netBenefit >= 0 ? '' : '–'}{fmt(Math.abs(calc.netBenefit))}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm text-white/70">ROI ratio</span>
                  <span className="text-2xl font-extrabold text-yellow-300">{calc.roiRatio.toFixed(1)}x</span>
                </div>
              </div>

              <p className="text-xs text-white/40 leading-relaxed">
                Based on industry data: retailers lose 20–30% of potential transactions to queue abandonment. Revenue recovery uses a conservative 10% recapture estimate. Staff value reflects reallocation, not headcount reduction.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-purple-700 font-bold hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Discuss these numbers with our team
                <ArrowRight size={16} />
              </a>
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
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-300 text-base font-bold rounded-xl text-purple-700 bg-white hover:bg-purple-50 hover:border-purple-400 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
