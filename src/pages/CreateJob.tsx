import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Building, MapPin, DollarSign, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CreateJob() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/jobs');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 md:p-12 flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-100">Job Posted!</h2>
        <p className="text-slate-400 max-w-md">Your job listing has been successfully published to the ALLJOB board. Redirecting you back to jobs...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto flex flex-col gap-8 pb-24">
      <div>
        <button 
          onClick={() => navigate('/jobs')}
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6 transition-colors font-bold text-sm"
        >
          <ArrowLeft size={16} /> Back to Jobs
        </button>
        <h1 className="text-3xl font-extrabold text-slate-100">Post a New Job</h1>
        <p className="text-slate-400 mt-1 text-sm">Fill out the details below to publish your job listing to thousands of professionals.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Basic Info */}
        <div className="bg-[#1C133E] rounded-3xl p-6 md:p-8 border border-white/5 shadow-sm flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Job Details
          </h2>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Job Title</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Briefcase size={18} />
              </div>
              <input 
                type="text" 
                required
                placeholder="e.g. Senior Frontend Developer"
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Building size={18} />
              </div>
              <input 
                type="text" 
                required
                placeholder="e.g. TechCorp Inc."
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Remote, or New York, NY"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Salary Range</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <DollarSign size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. $80k - $100k / year"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Job Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-1">
              {['Full-time', 'Part-time', 'Contract', 'Freelance'].map(type => (
                <label key={type} className="bg-[#0A061E] border border-white/5 rounded-xl p-3 flex items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors group has-[:checked]:bg-indigo-500/10 has-[:checked]:border-indigo-500">
                  <input type="radio" name="jobType" value={type} className="hidden" defaultChecked={type === 'Full-time'} />
                  <span className="text-xs font-bold text-slate-400 group-has-[:checked]:text-indigo-400">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-[#1C133E] rounded-3xl p-6 md:p-8 border border-white/5 shadow-sm flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Description & Requirements
          </h2>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Description</label>
            <textarea 
              required
              rows={6}
              placeholder="Describe the role, responsibilities, and ideal candidate..."
              className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Required Skills (Comma separated)</label>
            <input 
              type="text" 
              placeholder="e.g. React, TypeScript, UI/UX Design"
              className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white w-full py-4 rounded-2xl text-sm font-bold flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
        >
          Publish Job Listing
        </button>
      </form>
    </div>
  );
}
