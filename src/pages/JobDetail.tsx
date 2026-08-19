import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building, ArrowLeft, Send } from 'lucide-react';
import { MOCK_JOBS } from '../data';

export default function JobDetail() {
  const { id } = useParams();
  const job = MOCK_JOBS.find(j => j.id === id);

  if (!job) return <div className="p-8 text-center text-slate-500">Job not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-8 pb-20 md:pb-8">
      <Link to="/jobs" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6 transition-colors font-bold text-sm">
        <ArrowLeft size={16} /> Back to Jobs
      </Link>

      <div className="bg-[#1C133E] rounded-3xl border border-white/5 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-full bg-indigo-500/10 skew-x-12 translate-x-20 blur-3xl pointer-events-none"></div>
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/5 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-100">{job.title}</h1>
              <div className="flex items-center gap-2 text-indigo-200 mt-2 text-lg font-medium">
                <Building size={18} /> {job.company}
              </div>
            </div>
            <span className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase whitespace-nowrap">
              {job.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 bg-[#0A061E] border border-white/5 text-slate-300 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
              <MapPin size={16} className="text-indigo-400" />
              {job.location}
            </div>
            <div className="flex items-center gap-2 bg-[#0A061E] border border-white/5 text-emerald-400 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
              <DollarSign size={16} className="text-emerald-400" />
              {job.salary}
            </div>
            <div className="flex items-center gap-2 bg-[#0A061E] border border-white/5 text-slate-300 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
              <Clock size={16} className="text-indigo-400" />
              Posted {job.postedAt}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10 bg-[#160D33]/50">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Job Description
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed">
              <p>{job.description}</p>
              <p className="mt-4">
                We are looking for someone who is passionate about their work and wants to make an impact. 
                You will be working with a team of highly skilled professionals in a fast-paced environment.
              </p>
              
              <h3 className="text-base font-bold text-slate-100 mt-6 mb-3">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-indigo-500">
                <li>Proven experience in the relevant field.</li>
                <li>Excellent communication and teamwork skills.</li>
                <li>Ability to work independently and manage time effectively.</li>
              </ul>
            </div>

            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-8 mb-3 border-t border-white/10 pt-6">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar / Apply */}
          <div className="w-full md:w-72 shrink-0">
            <div className="bg-[#0A061E] rounded-3xl p-6 border border-white/5 sticky top-24 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Application Deadline</h3>
              <p className="text-slate-200 text-sm font-bold mb-6 flex items-center gap-2">
                <Clock size={16} className="text-rose-400" /> {job.deadline}
              </p>
              
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white w-full py-3.5 rounded-2xl text-xs font-bold flex justify-center items-center gap-2 transition-colors mb-3 shadow-lg shadow-indigo-500/20">
                <Send size={16} /> Apply Now
              </button>
              <button className="bg-[#1C133E] border border-white/10 text-slate-300 hover:text-white w-full py-3.5 rounded-2xl text-xs font-bold transition-colors">
                Save Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
