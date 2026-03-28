import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Fix Your AC Today | SS Experts Kukatpally</title>
        <meta name="description" content="Get in touch with SS Experts in Cooling Solutions. Located in Kukatpally, Hyderabad. Same day appointments available." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get In <span className="text-primary-400">Touch</span></h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          We are just a call away. Book your AC service today and experience premium cooling.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Plot No.1/56, Road No.13B, Sanjay Puri Colony,<br/>
                      Jagadeer Gutta, Kukatpally,<br/>
                      Hyderabad, Telangana 500072
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Call Us</h4>
                    <a href="tel:+919908281232" className="text-primary-600 hover:text-primary-700 font-medium text-lg block mb-1">
                      +91 99082 81232
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-lg">
                      Monday - Sunday: 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>


            </div>

            {/* Google Maps Embed */}
            <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
               <iframe 
                 src="https://www.google.com/maps?q=17.5008254,78.4201159&z=17&hl=en&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps Location Kukatpally"
                 className="w-full h-full object-cover"
               ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
