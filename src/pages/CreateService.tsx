import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, MapPin, DollarSign, Image as ImageIcon, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CreateService() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/services');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 md:p-12 flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-100">Profile Created!</h2>
        <p className="text-slate-400 max-w-md">Your professional service profile is now live. Customers can now discover and hire you.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto flex flex-col gap-8 pb-24">
      <div>
        <button 
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6 transition-colors font-bold text-sm"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
        <h1 className="text-3xl font-extrabold text-slate-100">Become a Professional</h1>
        <p className="text-slate-400 mt-1 text-sm">Create your profile to offer services and get hired by clients.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Basic Profile */}
        <div className="bg-[#1C133E] rounded-3xl p-6 md:p-8 border border-white/5 shadow-sm flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Profile Information
          </h2>
          
          <div className="flex items-center gap-6 mb-4">
            <div className="w-24 h-24 bg-[#0A061E] rounded-2xl border border-white/10 flex flex-col items-center justify-center text-slate-500 gap-2 hover:border-indigo-500 transition-colors cursor-pointer group">
              <ImageIcon size={24} className="group-hover:text-indigo-400 transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-wider group-hover:text-indigo-400">Upload</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-200 mb-1">Profile Photo</h3>
              <p className="text-xs text-slate-400">A professional photo builds trust with clients. Recommended size: 400x400px.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Profession Title</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Briefcase size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Master Electrician"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Service Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Chicago, IL"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Hourly Rate</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <DollarSign size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. $45/hr"
                  className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-[#1C133E] rounded-3xl p-6 md:p-8 border border-white/5 shadow-sm flex flex-col gap-5">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Bio & Expertise
          </h2>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">About Me</label>
            <textarea 
              required
              rows={4}
              placeholder="Tell clients about your experience, qualifications, and why they should hire you..."
              className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Skills (Comma separated)</label>
            <input 
              type="text" 
              placeholder="e.g. Wiring, Panel Upgrades, Troubleshooting"
              className="w-full bg-[#0A061E] border border-white/5 rounded-xl py-3.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white w-full py-4 rounded-2xl text-sm font-bold flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
        >
          Publish Profile
        </button>
      </form>
    </div>
  );
}
