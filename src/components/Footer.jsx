import { Link } from 'react-router-dom';
import { Phone, MapPin, Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-primary-500" />
              <span className="font-bold text-xl text-white">SS Experts In<br/>Cooling Solutions</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional and affordable AC repair, installation, and maintenance services based in Kukatpally, Hyderabad. Fast and reliable support for all cooling needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm">Plot No.1/56, Road No.13B, Sanjay Puri Colony,<br/>Jagadeer Gutta, Kukatpally, Hyderabad - 500072</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+919908281232" className="text-sm hover:text-primary-400 transition-colors">+91 99082 81232</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
           <span>&copy; {new Date().getFullYear()} SS Experts in Cooling Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
