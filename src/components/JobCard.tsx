import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';
import { Job } from '../types';

interface Props {
  key?: string | number;
  job: Job;
}

export function JobCard({ job }: Props) {
  return (
    <Link 
      to={`/job/${job.id}`}
      className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-indigo-500 transition-all group flex flex-col gap-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-slate-100 text-lg group-hover:text-indigo-400 transition-colors">{job.title}</h3>
          <div className="flex items-center gap-2 text-slate-400 text-[11px] italic mt-1">
            <Building size={14} />
            {job.company}
          </div>
        </div>
        <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase whitespace-nowrap">
          {job.type}
        </span>
      </div>
      
      <p className="text-slate-300 text-sm line-clamp-2 mt-1">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {job.skills.map(skill => (
          <span key={skill} className="bg-white/10 border border-white/5 text-slate-300 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
            {skill}
          </span>
        ))}
      </div>
      
      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center text-xs text-slate-500 mt-auto">
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          {job.location}
        </div>
        <div className="flex items-center gap-1 font-medium text-slate-300">
          <DollarSign size={14} />
          {job.salary}
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Clock size={14} />
          {job.postedAt}
        </div>
      </div>
    </Link>
  );
}
