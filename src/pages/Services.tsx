import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, Plus } from 'lucide-react';
import { MOCK_PROFESSIONALS } from '../data';
import { ProfessionalCard } from '../components/ProfessionalCard';

export default function Services() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [searchTerm, setSearchTerm] = useState(initialCategory);
  const navigate = useNavigate();

  const filteredPros = MOCK_PROFESSIONALS.filter(pro => 
    pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pro.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pro.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-100">Professional Services</h1>
          <p className="text-slate-400 mt-1 text-sm">Hire top-rated talent for your projects and needs.</p>
        </div>
        <button 
          onClick={() => navigate('/services/create')}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
        >
          <Plus size={18} />
          Offer a Service
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1 bg-[#160D33] border border-white/10 rounded-xl p-2 flex items-center shadow-sm focus-within:border-indigo-500 transition-colors">
          <Search className="text-slate-400 ml-3" size={20} />
          <input 
            type="text" 
            placeholder="Search professions, names, or skills..." 
            className="flex-1 bg-transparent border-none outline-none text-white px-4 py-2 text-sm placeholder:text-slate-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-[#160D33] border border-white/10 hover:border-indigo-500 p-4 rounded-xl transition-colors group">
          <Filter size={20} className="text-slate-400 group-hover:text-indigo-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPros.map(pro => (
          <ProfessionalCard key={pro.id} professional={pro} />
        ))}
        {filteredPros.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 bg-[#160D33] rounded-3xl border border-white/5">
            No professionals found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
