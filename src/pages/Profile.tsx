import { User, Settings, Briefcase, Heart, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  return (
    <div className="px-6 md:px-8 py-8 flex flex-col gap-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-100">Your Profile</h1>
        <p className="text-slate-400 mt-1 text-sm">Manage your account and settings.</p>
      </div>

      <div className="bg-[#1C133E] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-6 w-full">
          <div className="w-24 h-24 bg-indigo-500 rounded-2xl rotate-3 flex items-center justify-center text-white text-3xl font-black shadow-lg">
            <div className="-rotate-3">JD</div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-100">John Doe</h2>
            <p className="text-slate-400 text-sm">johndoe@example.com</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-white/10">
                Edit Profile
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-lg shadow-indigo-500/20">
                Switch to Professional
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      </div>

      <div className="grid gap-4">
        <h3 className="font-bold text-slate-400 uppercase tracking-widest text-[10px] ml-2">Account</h3>
        
        <div className="bg-[#160D33] border border-white/5 rounded-3xl overflow-hidden shadow-sm">
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-500/20 text-indigo-400 p-2 rounded-xl"><User size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">Personal Information</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/20 text-amber-400 p-2 rounded-xl"><Briefcase size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">My Jobs & Applications</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-rose-500/20 text-rose-400 p-2 rounded-xl"><Heart size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">Saved Professionals</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-rose-400 transition-colors" />
          </button>
        </div>

        <h3 className="font-bold text-slate-400 uppercase tracking-widest text-[10px] ml-2 mt-4">Settings</h3>
        
        <div className="bg-[#160D33] border border-white/5 rounded-3xl overflow-hidden shadow-sm">
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-white/5 text-slate-400 p-2 rounded-xl"><Bell size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">Notifications</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-white/5 text-slate-400 p-2 rounded-xl"><Shield size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">Privacy & Security</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left group">
            <div className="flex items-center gap-3">
              <div className="bg-white/5 text-slate-400 p-2 rounded-xl"><Settings size={18} /></div>
              <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">Preferences</span>
            </div>
            <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>
        </div>
        
        <button className="mt-4 flex items-center justify-center gap-2 text-rose-400 font-bold text-sm p-4 bg-rose-500/10 hover:bg-rose-500/20 rounded-3xl transition-colors border border-rose-500/10">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </div>
  );
}
