import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { Wind, Wrench, ArrowDownToLine, Activity, ThermometerSnowflake, Droplets, PlayCircle, Image as ImageIcon } from 'lucide-react';

import Ac1 from '../assets/Ac1.jpeg';
import Ac2 from '../assets/Ac2.jpeg';
import Ac3 from '../assets/Ac3.jpeg';
import Ac4 from '../assets/Ac4.jpeg';

export default function Services() {
  const services = [
    {
      title: "AC Gas Charging",
      price: "₹2800",
      icon: Wind,
      description: "Thorough check and complete refill of refrigerant gas. Ensures your AC cools perfectly during peak summers.",
      features: ["Leakage inspection", "Vacuum test", "High-quality refrigerant", "Cooling performance check"]
    },
    {
      title: "AC Installation",
      price: "₹1500",
      icon: Wrench,
      description: "Professional alignment and secure mounting for split and window AC units by certified technicians.",
      features: ["Indoor unit mounting", "Outdoor unit placing", "Copper pipe routing", "Drainage setup"]
    },
    {
      title: "AC Dismantling",
      price: "₹750",
      icon: ArrowDownToLine,
      description: "Safe uninstallation of your existing AC unit, avoiding gas leakage and preventing component damage.",
      features: ["Refrigerant pump-down", "Wire disconnection", "Safe unmounting", "Pipe sealing"]
    },
    {
      title: "AC Nitrogen Testing",
      price: "₹1600",
      icon: Activity,
      description: "Advanced pressure testing using Nitrogen to identify micro-leaks in the coils or copper lines.",
      features: ["High pressure flush", "Pinpointing micro-leaks", "System purging", "Post-weld testing"]
    },
    {
      title: "AC Cleaning Foam Wash",
      price: "₹800",
      icon: ThermometerSnowflake,
      description: "Deep chemical foam cleaning of the cooling coil, condenser, and blower for a brand-new-like performance.",
      features: ["Foam spray on coils", "Blower fan cleaning", "Odor removal", "Improved air flow"]
    },
    {
      title: "AC Cleaning Water Wash",
      price: "₹599",
      icon: Droplets,
      description: "High-pressure jet water cleaning for removing loose dirt, dust, and debris from the filters and fins.",
      features: ["Filter washing", "Condenser jet wash", "Drain tray cleaning", "Basic dust removal"]
    }
  ];

  const mediaVideos = [
    { title: "AC Water Wash Service", iframeSrc: "https://www.youtube.com/embed/OqbIDzwB7Z0?si=Cp3hg-lg125grXSU&autoplay=1&mute=1&loop=1&playlist=OqbIDzwB7Z0" },
    { title: "AC Service Overview", iframeSrc: "https://www.youtube.com/embed/Qcgw7VrBX20?si=QIQMnLwV_ZUIwDh2&autoplay=1&mute=1&loop=1&playlist=Qcgw7VrBX20" }
  ];

  return (
    <>
      <Helmet>
        <title>AC Services & Pricing Kukatpally | SS Experts</title>
        <meta name="description" content="View our complete list of AC services including gas filling, foam wash, and installation. We serve Kukatpally and surrounding areas." />
      </Helmet>

      {/* Services Header */}
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Premium <span className="text-primary-400">Services</span></h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Transparent pricing, expert technicians, and guaranteed satisfaction for all your cooling needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ServiceCard key={idx} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="work" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">View Our Work</h2>
            <p className="text-slate-600 text-lg">See exactly how we take care of your cooling investments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <PlayCircle className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-slate-800">Video Gallery</h3>
              </div>
              <div className="space-y-6">
                {mediaVideos.map((video, idx) => (
                  <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-lg bg-black aspect-video cursor-pointer">
                    {video.iframeSrc ? (
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={video.iframeSrc} 
                        title={video.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img src={video.url} alt={video.title} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" pointerEvents="none" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-md pointer-events-none">
                          {video.title}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <ImageIcon className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-slate-800">Image Gallery</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[Ac1, Ac2, Ac3, Ac4].map((imgSrc, idx) => (
                   <div key={idx} className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
                     <img src={imgSrc} alt="AC Service Process" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
