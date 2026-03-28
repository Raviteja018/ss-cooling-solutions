import { Helmet } from 'react-helmet-async';
import { Shield, Clock, IndianRupee, ThermometerSnowflake, Wrench, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import Ac1 from '../assets/Ac1.jpeg';

export default function Home() {
  const services = [
    { title: "AC Gas Charging", price: "₹2800", icon: Wind, desc: "Complete gas top-up and leakage check" },
    { title: "AC Installation", price: "₹1500", icon: Wrench, desc: "Professional split and window AC fitting" },
    { title: "Foam Wash", price: "₹800", icon: ThermometerSnowflake, desc: "Deep cleaning for cooling efficiency" }
  ];

  return (
    <>
      <Helmet>
        <title>AC Repair Services in Kukatpally | SS Experts in Cooling Solutions</title>
        <meta name="description" content="Affordable AC repair, installation, gas charging and cleaning services in Kukatpally. Fast, Reliable & Affordable AC Services." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1590483424119-98ed18545e14?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-300 font-medium text-sm mb-6 border border-primary-500/30">
            Top Rated in Hyderabad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Expert AC Repair & <br className="hidden md:block" />
            <span className="text-primary-400">Cooling Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Fast, Reliable & Affordable AC Services near you. From installation to advanced gas charging, we have you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919908281232" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold text-lg transition shadow-[0_0_20px_rgba(2,132,199,0.4)]">
              Call Now
            </a>
            <a href="https://wa.me/919908281232?text=Hi,%20I%20need%20AC%20service" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold text-lg transition backdrop-blur-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Top Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
              We offer comprehensive AC repair services in Kukatpally to keep your home cool and comfortable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 transition duration-300">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <svc.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-primary-600 font-semibold mb-4 text-lg">{svc.price}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 hover:underline">
              View All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={Ac1} alt="Professional AC technician working" className="rounded-3xl shadow-xl border border-slate-100 w-full h-80 lg:h-[500px] object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose SS Experts?</h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                With years of experience in Kukatpally, our certified professionals deliver top-notch air conditioning services right to your doorstep.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Fast Service</h4>
                    <p className="text-slate-600">Quick response times and same-day service availability across Kukatpally.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <IndianRupee className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Affordable Pricing</h4>
                    <p className="text-slate-600">Transparent costs with no hidden fees. High-quality repairs that don't break the bank.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Expert Technicians</h4>
                    <p className="text-slate-600">Fully trained, certified, and experienced AC mechanics handling all brands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Preview CTA */}
      <section className="bg-primary-600 text-white py-20 text-center">
         <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl font-bold mb-6">See Our Work in Action</h2>
             <p className="text-primary-100 mb-10 text-lg max-w-2xl mx-auto">Browse our gallery of AC repair and cleaning videos to see the quality of service we provide every single day.</p>
             <Link to="/services#work" className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-slate-50 transition shadow-lg shrink-0">
               Watch Service Videos
             </Link>
         </div>
      </section>
    </>
  );
}
