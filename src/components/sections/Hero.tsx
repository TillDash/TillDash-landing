import { ArrowRight, Check, ShoppingCart, Clock, Bell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-dark)] to-[var(--dark-blue)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-pink-400 opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] left-[70%] w-48 h-48 rounded-full bg-green-400 opacity-10 blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="bg-white/20 backdrop-blur-sm inline-flex items-center px-4 py-2 rounded-full mb-6 border border-white/30">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mr-2 shadow-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping inline-block"></span>
                LAUNCHING SOON
              </span>
              <span className="text-white text-sm font-medium hidden sm:inline">Mobile self-checkout built for Africa</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Skip the Line,</span> <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-extrabold">Shop & Pay</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-yellow-400/40 to-pink-400/40 rounded-full -z-0 blur-sm"></span>
              </span>
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"> with Ease</span>
            </h1>
            
            <p className="text-base sm:text-xl max-w-xl mb-8 text-white font-medium drop-shadow-md leading-relaxed">
              TillDash is the only self-checkout solution built for Africa's retail reality — shoppers scan products, pay instantly via M-Pesa or card, and walk out. No queues. No cashier lines. Built for the African market.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 font-bold py-4 px-8 md:px-10 rounded-xl text-lg transition-all flex items-center gap-2 hover:gap-3 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105"
              >
                <Bell size={20} />
                Request Early Access
                <ArrowRight size={20} className="transition-all group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="border-2 border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white font-semibold py-4 px-8 md:px-10 rounded-xl text-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-white/10"
              >
                Request a Demo
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm">No hardware required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm">Limited pilot spots</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm">No commitment needed</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 shadow-2xl border border-white/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-2xl"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="rounded-2xl shadow-2xl max-w-md w-full bg-white border border-gray-200 aspect-[9/16] flex flex-col relative overflow-hidden">
                  {/* Phone frame */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center rounded-t-2xl">
                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  
                  {/* Screen content */}
                  <div className="flex-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h8v2H6v-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">TillDash</h3>
                    <p className="text-gray-700 text-center text-sm mb-4 font-medium">Self-Checkout Made Simple</p>
                    
                    {/* Mock interface elements */}
                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-md flex items-center border border-purple-100">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mr-3 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded mb-1"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-200 to-purple-100 rounded w-2/3"></div>
                        </div>
                        <div className="text-green-600 font-bold text-xs">$4.99</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-md flex items-center border border-blue-100">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mr-3 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded mb-1"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-200 to-blue-100 rounded w-1/2"></div>
                        </div>
                        <div className="text-orange-600 font-bold text-xs">$2.49</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                      Scan & Pay
                    </div>
                  </div>
                  
                  {/* Bottom phone frame */}
                  <div className="bg-gray-900 h-6 rounded-b-2xl"></div>
                </div>
              </div>
              
              {/* Feature highlights — hidden on small screens to avoid overflow */}
              <div className="absolute -right-5 top-10 transform rotate-12 hidden sm:block">
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShoppingCart size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Cart Total</div>
                      <div className="text-sm font-bold">$67.99</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-16 transform -rotate-6 hidden sm:block">
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Clock size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Time Saved</div>
                      <div className="text-sm font-bold">15 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        {/* <div className="mt-16 md:mt-24 flex flex-col items-center">
          <div className="text-white/60 text-sm uppercase tracking-wider mb-4">Trusted by leading retailers</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-8 px-4 py-2 bg-white/10 rounded text-white/60 font-medium text-sm">RetailCorp</div>
            <div className="h-8 px-4 py-2 bg-white/10 rounded text-white/60 font-medium text-sm">ShopMart</div>
            <div className="h-8 px-4 py-2 bg-white/10 rounded text-white/60 font-medium text-sm">QuickBuy</div>
            <div className="h-8 px-4 py-2 bg-white/10 rounded text-white/60 font-medium text-sm">FreshMarket</div>
            <div className="h-8 px-4 py-2 bg-white/10 rounded text-white/60 font-medium text-sm">TechStore</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
