import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Wrench } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg text-white">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-800 leading-tight">
                SS Experts In<br/><span className="text-primary-600">Cooling Solutions</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `font-medium transition hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'}`}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => `font-medium transition hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'}`}>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `font-medium transition hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'}`}>Contact</NavLink>
            <a href="tel:+919908281232" className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition shadow-md hover:shadow-lg">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-3 font-medium border-b border-slate-50 ${isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600'}`} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => `block px-3 py-3 font-medium border-b border-slate-50 ${isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600'}`} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block px-3 py-3 font-medium mb-4 ${isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600'}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <a href="tel:+919908281232" className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full font-medium shadow-md">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
