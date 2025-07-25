import { Facebook, Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Download App", href: "#download" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Partners", href: "/partners" },
        { name: "Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "GDPR", href: "/gdpr" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4">
        {/* Top section with logo, description, and newsletter */}
        <div className="grid md:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">TillDash</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              TillDash revolutionizes retail with our cutting-edge self-checkout solution. 
              Skip the lines, scan as you shop, and enjoy a seamless checkout experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all p-3 rounded-xl hover:bg-blue-500/20 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all p-3 rounded-xl hover:bg-cyan-500/20 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all p-3 rounded-xl hover:bg-pink-500/20 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all p-3 rounded-xl hover:bg-blue-500/20 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all p-3 rounded-xl hover:bg-purple-500/20 hover:scale-110 transform">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer links */}
          <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-2 gap-8">
            {footerLinks.slice(0, 2).map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-1 grid sm:grid-cols-2 md:grid-cols-2 gap-8">
            {footerLinks.slice(2, 4).map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter subscription */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter to receive updates, news, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* App store badges */}
        <div className="py-12 border-b border-gray-800 text-center">
          <h3 className="text-xl font-semibold mb-6">Download the TillDash App</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white rounded-lg px-4 py-2 transition-colors"
            >
              <div className="mr-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.019-1.153-.242-1.725-.781-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold font-sans -mt-1">App Store</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white rounded-lg px-4 py-2 transition-colors"
            >
              <div className="mr-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M3 20.536C3 21.343 3.589 22 4.308 22c.336 0 .664-.1.946-.294l6.2-4.296h5.236c2.384 0 4.308-2.055 4.308-4.593V7.183C21 4.646 19.075 2.59 16.69 2.59H7.309C4.924 2.59 3 4.646 3 7.183v13.353Z" opacity=".35"></path>
                  <path d="M16.42 13.342 5.372 19.376a.63.63 0 0 1-.312.081c-.377 0-.661-.318-.661-.744V7.183c0-2.1 1.565-3.756 3.537-3.756h9.382c1.972 0 3.537 1.655 3.537 3.756v5.222c0 .307-.116.603-.327.827l-3.421 3.642c-.163.173-.444.175-.607.002a.476.476 0 0 1 0-.627l3.421-3.642a.478.478 0 0 0 .12-.305V7.183c0-1.62-1.215-2.918-2.723-2.918H7.936c-1.508 0-2.723 1.298-2.723 2.918v11.016l10.571-5.828a.432.432 0 0 1 .612.181.52.52 0 0 1-.173.646l-.001.001Z"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold font-sans -mt-1">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TillDash. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
            <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500 flex items-center">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
            <span>in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
