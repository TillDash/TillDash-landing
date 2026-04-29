import { Download, Scan, ShoppingCart, CreditCard, CheckCircle, QrCode } from 'lucide-react';
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
    icon: <QrCode size={24} />,
    title: "Check In",
    description: "Scan the store's QR code or enter the store code in the app to start your shopping session.",
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
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-[var(--light-blue)] via-purple-50 to-[var(--light-gray)] relative overflow-hidden">
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

        <div className="mt-24 text-center bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-cyan)] p-8 md:p-12 rounded-2xl text-[var(--dark-blue)] shadow-xl max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black/10 text-[var(--dark-blue)] text-xs font-bold px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[var(--dark-blue)] rounded-full animate-ping inline-block"></span>
            PILOT LAUNCHING SOON
          </div>
          <h3 className="text-3xl font-bold mb-6">This is exactly how it will work — be first to experience it</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our MVP is ready. We're onboarding the first wave of pilot partners and shoppers. Secure your spot now and help shape the future of checkout in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--dark-blue)] text-white font-bold rounded-xl hover:bg-[var(--dark-blue)]/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Early Access
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-[var(--dark-blue)] font-bold rounded-xl border-2 border-[var(--dark-blue)]/30 hover:bg-white/30 transition-all"
            >
              Request a Demo
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-70">
            <span>App coming soon to App Store &amp; Google Play</span>
            <span className="hidden sm:inline">·</span>
            <span>No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
