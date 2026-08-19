import { Link } from 'react-router-dom';
import { Search, ChevronRight, Briefcase, Camera, Wrench, Paintbrush, Code, Car, Scissors, Coffee, Star, LayoutTemplate } from 'lucide-react';
import { MOCK_PROFESSIONALS, MOCK_JOBS } from '../data';
import { ProfessionalCard } from '../components/ProfessionalCard';

const CATEGORIES = [
  { name: 'Photography', icon: Camera, color: 'bg-blue-500/20 text-blue-400' },
  { name: 'Engineering', icon: Wrench, color: 'bg-amber-500/20 text-amber-400' },
  { name: 'Design', icon: Paintbrush, color: 'bg-pink-500/20 text-pink-400' },
  { name: 'Technology', icon: Code, color: 'bg-emerald-500/20 text-emerald-400' },
  { name: 'Transport', icon: Car, color: 'bg-indigo-500/20 text-indigo-400' },
  { name: 'Beauty', icon: Scissors, color: 'bg-rose-500/20 text-rose-400' },
  { name: 'Catering', icon: Coffee, color: 'bg-orange-500/20 text-orange-400' },
  { name: 'More', icon: Briefcase, color: 'bg-slate-500/20 text-slate-400' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 md:p-12 relative overflow-hidden shrink-0 shadow-2xl">
        <div className="relative z-10 max-w-xl flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Find a Skill. Find a Job. <br /> <span className="text-indigo-200">Build Your Brand.</span>
          </h1>
          <p className="text-sm md:text-base text-indigo-100 max-w-md">
            ALLJOB brings all professions and services into one powerful marketplace. Hire talent, find work, or promote your business.
          </p>
          
          <div className="bg-[#160D33]/60 backdrop-blur-md rounded-2xl p-2 mt-2 flex items-center border border-white/10">
            <Search className="text-slate-400 ml-3" size={20} />
            <input 
              type="text" 
              placeholder="Search for plumbers, designers, jobs..." 
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-2 placeholder:text-slate-400 text-sm"
            />
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2 rounded-xl font-bold text-sm transition-colors shadow-lg">
              Search
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            <Link to="/services" className="bg-white hover:bg-slate-100 text-indigo-700 px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-colors text-center">
              Find Talent
            </Link>
            <Link to="/jobs" className="bg-indigo-500/30 hover:bg-indigo-500/50 border border-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-sm backdrop-blur-sm transition-colors text-center">
              Find a Job
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 md:w-96 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-10 right-10 w-48 md:w-64 h-48 md:h-64 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 shrink-0">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.name} to={`/services?category=${cat.name}`} className="bg-[#160D33] p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-3 cursor-pointer hover:border-indigo-500 transition-colors group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{cat.name}</span>
            </Link>
          );
        })}
      </section>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Featured Professionals */}
        <section className="flex-[2] bg-[#160D33] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold text-slate-100">Top Rated Professionals</h2>
            <Link to="/services" className="text-indigo-400 text-[10px] font-bold uppercase tracking-wider hover:text-indigo-300 transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_PROFESSIONALS.slice(0, 2).map(pro => (
              <ProfessionalCard key={pro.id} professional={pro} />
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="flex-1 bg-[#1C133E] rounded-3xl border border-indigo-500/20 p-6 md:p-8 flex flex-col relative overflow-hidden text-center justify-center items-center">
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-2 py-1 bg-indigo-500 text-[10px] font-black rounded text-white">AI STUDIO</div>
              <span className="text-sm font-bold text-slate-100">Flyer Generator</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">Create professional marketing materials with one click to promote your business.</p>
            <Link to="/flyers" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl font-bold text-xs transition-all w-full max-w-xs flex justify-center items-center gap-2">
              <LayoutTemplate size={16} /> Open Design Studio
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
        </section>
      </div>
    </div>
  );
}
