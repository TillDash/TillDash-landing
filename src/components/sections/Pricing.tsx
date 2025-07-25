import { Check, X, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small retailers just getting started',
    price: {
      monthly: 29,
      yearly: 24
    },
    billing: 'per month/location',
    highlighted: false,
    features: [
      { title: 'Up to 2 checkout points', included: true },
      { title: 'Basic analytics dashboard', included: true },
      { title: 'Standard customer support', included: true },
      { title: 'Basic inventory integration', included: true },
      { title: 'Email receipts', included: true },
      { title: 'Custom branding', included: false },
      { title: 'Advanced analytics', included: false },
      { title: 'Priority support', included: false },
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Business',
    description: 'Ideal for growing retailers with multiple locations',
    price: {
      monthly: 79,
      yearly: 65
    },
    billing: 'per month/location',
    highlighted: true,
    features: [
      { title: 'Up to 10 checkout points', included: true },
      { title: 'Full analytics dashboard', included: true },
      { title: 'Priority customer support', included: true },
      { title: 'Advanced inventory integration', included: true },
      { title: 'Digital & email receipts', included: true },
      { title: 'Custom branding', included: true },
      { title: 'Advanced analytics', included: true },
      { title: 'Priority support', included: true },
    ],
    cta: 'Start free trial',
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large-scale retail operations',
    price: {
      monthly: 'Custom',
      yearly: 'Custom'
    },
    billing: 'Contact for pricing',
    highlighted: false,
    features: [
      { title: 'Unlimited checkout points', included: true },
      { title: 'Advanced analytics with AI insights', included: true },
      { title: 'Dedicated account manager', included: true },
      { title: 'Full API access', included: true },
      { title: 'White-label solution', included: true },
      { title: 'Custom integrations', included: true },
      { title: '24/7 priority support', included: true },
      { title: 'On-site training & setup', included: true },
    ],
    cta: 'Contact sales'
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary/10 text-secondary text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">PRICING</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-gray-500'}`}>
              Monthly
            </span>
            
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full"
            >
              <div className={`w-16 h-8 rounded-full p-1 transition-colors duration-200 ease-in-out ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-300'}`}>
                <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </div>
            </button>
            
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-primary' : 'text-gray-500'}`}>
              Yearly <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                ? 'border-2 border-primary shadow-xl scale-105 md:-mt-4 relative z-10' 
                : 'border border-gray-200 shadow-md'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 absolute top-6 right-6 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl md:text-5xl font-bold">
                      {typeof plan.price[billingCycle] === 'number' ? `$${plan.price[billingCycle]}` : plan.price[billingCycle]}
                    </span>
                    {typeof plan.price[billingCycle] === 'number' && (
                      <span className="text-gray-500 ml-2 mb-1">{plan.billing}</span>
                    )}
                  </div>
                  
                  {typeof plan.price[billingCycle] !== 'number' && (
                    <span className="text-gray-500">{plan.billing}</span>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-white border border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ teaser */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Have questions about our pricing?</h3>
            <p className="text-gray-600 mb-6">
              Check our frequently asked questions or contact our sales team for custom enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#faq" 
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View FAQ
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
