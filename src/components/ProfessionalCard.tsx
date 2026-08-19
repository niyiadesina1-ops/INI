import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  key?: string | number;
  professional: Professional;
}

export function ProfessionalCard({ professional }: Props) {
  return (
    <Link 
      to={`/professional/${professional.id}`}
      className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-indigo-500 transition-all group flex flex-col gap-4"
    >
      <div className="flex gap-4 items-start">
        <img 
          src={professional.avatar} 
          alt={professional.name} 
          className="w-16 h-16 rounded-xl object-cover border border-white/10 group-hover:border-indigo-500 transition-all"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-400 transition-colors">{professional.name}</h3>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {professional.rating}
            </div>
          </div>
          <p className="text-slate-400 text-[11px] italic">{professional.profession}</p>
          <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
            <MapPin size={12} />
            {professional.location}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {professional.skills.slice(0, 3).map(skill => (
          <span key={skill} className="bg-white/10 border border-white/5 text-slate-300 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
            {skill}
          </span>
        ))}
        {professional.skills.length > 3 && (
          <span className="bg-white/10 border border-white/5 text-slate-300 px-2 py-1 rounded text-[10px] font-bold">
            +{professional.skills.length - 3}
          </span>
        )}
      </div>
      
      <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
        <span className="font-bold text-slate-100 text-sm">{professional.hourlyRate}</span>
        <button className="text-indigo-400 font-bold text-[10px] uppercase tracking-wider hover:text-indigo-300 transition-colors">View Profile</button>
      </div>
    </Link>
  );
}
