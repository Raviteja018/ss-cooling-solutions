import { Check } from 'lucide-react';

export default function ServiceCard({ title, price, description, features, icon: Icon }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <div className="text-3xl font-extrabold text-primary-600 mb-4">{price}</div>
      <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href={`https://wa.me/919908281232?text=${encodeURIComponent(`Hi, I want to book the ${title} service.`)}`} 
         className="mt-auto block w-full text-center py-4 px-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors shadow-md">
        Book Service
      </a>
    </div>
  );
}
