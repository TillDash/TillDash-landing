import { Download, Scan, ShoppingCart, CreditCard, CheckCircle, Phone } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    icon: <Download size={24} />,
    title: "Download the App",
    description: "Get TillDash from the App Store or Google Play Store and create your account in seconds.",
    color: "bg-primary-50",
    highlight: "text-primary",
    animation: "fade-right"
  },
  {
    icon: <Phone size={24} />,
    title: "Enter the Store",
    description: "Open the app when you arrive at any TillDash-enabled retail location.",
    color: "bg-accent-50",
    highlight: "text-accent",
    animation: "fade-left"
  },
  {
    icon: <Scan size={24} />,
    title: "Scan Products",
    description: "Simply point your phone's camera at item barcodes to add them to your virtual cart.",
    color: "bg-primary-50",
    highlight: "text-primary",
    animation: "fade-right"
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "Review Your Cart",
    description: "Check your items and see the total before checkout with taxes and any applicable discounts.",
    color: "bg-accent-50",
    highlight: "text-accent",
    animation: "fade-left"
  },
  {
    icon: <CreditCard size={24} />,
    title: "Pay Securely",
    description: "Choose from multiple payment methods and complete your purchase in the app.",
    color: "bg-primary-50",
    highlight: "text-primary",
    animation: "fade-right"
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Walk Out & Enjoy",
    description: "Show your digital receipt at the exit and you're done - no lines, no waiting!",
    color: "bg-accent-50",
    highlight: "text-accent",
    animation: "fade-left"
  }
];

const getStepGradient = (index: number) => {
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

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-green-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1/5 h-1/5 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-bold px-6 py-3 rounded-full inline-block mb-6 border border-green-200 shadow-lg">🚀 HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Simple Steps to Seamless Shopping</h2>
          <p className="text-lg text-gray-700 font-medium">
            Get started with TillDash in just a few easy steps and transform your shopping experience forever.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile view - simple cards */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border-l-4 border-gradient-to-b from-purple-500 to-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getStepGradient(index)} rounded-xl flex items-center justify-center shadow-lg`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold mr-2">{index + 1}.</span>
                    <span className="text-gray-800">{step.title}</span>
                  </h3>
                </div>
                <p className="text-gray-600 ml-16">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop view - interactive timeline */}
          <div className="hidden md:block relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary opacity-30 rounded-full"></div>

            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${isEven ? '' : 'flex-row-reverse'}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div
                        className={`transition-all duration-300 transform ${activeStep === index ? 'scale-105' : 'scale-100'}`}
                      >
                        <span className={`${step.highlight} text-sm font-bold mb-2 inline-block`}>STEP {index + 1}</span>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Center point */}
                    <div className="w-2/12 flex justify-center relative">
                      <div
                        className={`w-16 h-16 rounded-full bg-white shadow-xl border-4 ${activeStep === index ? 'border-accent scale-110' : 'border-primary scale-100'} z-10 flex items-center justify-center transition-all duration-300`}
                      >
                        <div className={`${activeStep === index ? step.highlight : 'text-gray-600'} transition-colors duration-300`}>
                          {step.icon}
                        </div>
                      </div>
                      <span className="absolute -bottom-10 text-sm font-medium text-gray-500 text-center w-full">
                        {index === 0 ? 'Start' : ''}
                        {index === steps.length - 1 ? 'Finish' : ''}
                      </span>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl text-white shadow-xl max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Ready to transform your shopping experience?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied shoppers who have saved time and enjoyed a seamless checkout experience with TillDash.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-8 text-sm opacity-70">
            Free to download. No credit card required to get started.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
