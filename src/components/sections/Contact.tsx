import { Mail, Phone, MapPin, Send, Bell } from 'lucide-react';
import { useState } from 'react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const contactOptions = [
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    description: 'Speak directly with our team',
    detail: '+254 111 539 848',
    action: 'Call now',
    link: 'tel:+254111539848',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    description: 'Inquire about early access or partnerships',
    detail: 'support@tilldash.com',
    action: 'Email now',
    link: 'mailto:support@tilldash.com',
    color: 'bg-accent/10 text-accent'
  },
  {
    icon: <MapPin size={24} />,
    title: 'Visit Us',
    description: 'Come see us at our office',
    detail: 'Mombasa Works, Mombasa',
    action: 'Get directions',
    link: 'https://maps.google.com/?q=Mombasa+Works,+Mombasa,+Kenya',
    color: 'bg-purple-100 text-purple-600'
  }
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  type: string;
};

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  type: 'Join Waitlist / Early Access',
};

const Contact = () => {
  const [formState, setFormState] = useState<FormState>(emptyForm);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `TillDash — ${formState.type}: ${formState.name}`,
          from_name: 'TillDash Landing Page',
          ...formState,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormStatus('success');
        setFormState(emptyForm);
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setFormStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping inline-block"></span>
            PILOT LAUNCHING SOON
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Waitlist</h2>
          <p className="text-lg text-gray-600">
            Our MVP is ready. We're onboarding the first wave of pilot partners — retailers who want to be part of shaping TillDash from day one. Secure your spot below.
          </p>
        </div>

        {/* Contact quick-links */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`${option.color} w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-3">{option.description}</p>
              <p className="font-medium text-gray-800 mb-4">{option.detail}</p>
              <a
                href={option.link}
                className="inline-flex items-center justify-center font-medium text-primary hover:underline"
              >
                {option.action}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Form + Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bell size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Get Early Access</h3>
            </div>

            {formStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div>
                  <p className="font-semibold">You're on the list!</p>
                  <p className="text-sm mt-0.5">We'll be in touch soon with next steps. Thank you for your interest in TillDash.</p>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <p className="font-semibold">Submission failed</p>
                  <p className="text-sm mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Jane Wanjiku"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Business / Store Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Your Store or Business"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in *</label>
                <select
                  id="type"
                  name="type"
                  value={formState.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                >
                  <option value="Join Waitlist / Early Access">Joining the waitlist / Early access</option>
                  <option value="Request a Demo">Requesting a live demo</option>
                  <option value="Pilot Partnership">Becoming a pilot partner</option>
                  <option value="Partnership">Partnership / Integration opportunity</option>
                  <option value="General Inquiry">General inquiry</option>
                  <option value="Press">Press / Media</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="Tell us about your store — size, location, current checkout setup…"
                ></textarea>
              </div>

              <div className="flex items-start mb-6">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 mt-0.5 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted about TillDash.
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-primary/25 transform hover:scale-[1.02]"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    <Bell size={18} />
                    Secure My Spot
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Office info */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-56 flex items-center justify-center shadow-inner border border-gray-200">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                <span className="text-gray-500 text-sm">Mombasa Works, First Floor<br />Mombasa, Kenya</span>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex-1">
              <h3 className="text-xl font-bold mb-5">Office Details</h3>
              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Mombasa Works, First Floor<br />Mombasa, Kenya</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+254111539848" className="text-gray-700 hover:text-primary transition-colors">+254 111 539 848</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@tilldash.com" className="text-gray-700 hover:text-primary transition-colors">info@tilldash.com</a>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
              <table className="text-sm w-full">
                <tbody>
                  <tr>
                    <td className="py-1.5 pr-8 text-gray-500">Monday – Friday</td>
                    <td className="py-1.5 text-gray-800 font-medium">9:00 AM – 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-8 text-gray-500">Saturday</td>
                    <td className="py-1.5 text-gray-800 font-medium">10:00 AM – 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-8 text-gray-500">Sunday</td>
                    <td className="py-1.5 text-gray-500">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
