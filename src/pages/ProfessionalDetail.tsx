import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Mail, Calendar, ArrowLeft } from 'lucide-react';
import { MOCK_PROFESSIONALS, MOCK_REVIEWS } from '../data';

export default function ProfessionalDetail() {
  const { id } = useParams();
  const pro = MOCK_PROFESSIONALS.find(p => p.id === id);
  const reviews = pro ? MOCK_REVIEWS[pro.id] || [] : [];

  if (!pro) return <div className="p-8 text-center text-slate-500">Professional not found.</div>;

  return (
    <div className="pb-16 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white pt-8 pb-32 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <Link to="/services" className="relative z-10 inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition-colors font-bold text-sm">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-end max-w-5xl mx-auto">
          <img src={pro.avatar} alt={pro.name} className="w-32 h-32 rounded-3xl border-4 border-[#0A061E] object-cover shadow-2xl" />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight">{pro.name}</h1>
            <p className="text-indigo-200 text-lg font-medium">{pro.profession}</p>
            <div className="flex flex-wrap gap-3 mt-4 text-[10px] font-bold tracking-wider uppercase">
              <span className="flex items-center gap-1 bg-black/20 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-white">
                <Star size={12} className="fill-amber-400 text-amber-400" /> {pro.rating} ({pro.reviewsCount} reviews)
              </span>
              <span className="flex items-center gap-1 bg-black/20 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-white">
                <MapPin size={12} /> {pro.location}
              </span>
              <span className="flex items-center gap-1 bg-black/20 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-white">
                <CheckCircle size={12} /> {pro.experience} Exp
              </span>
            </div>
          </div>
          <div className="text-right w-full md:w-auto mt-4 md:mt-0">
            <div className="text-3xl font-extrabold">{pro.hourlyRate}</div>
            <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">Hourly Rate</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 -mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-20">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* About */}
          <section className="bg-[#1C133E] rounded-3xl p-6 md:p-8 shadow-sm border border-white/5">
            <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> About Me
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">{pro.about}</p>
            
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-8 mb-3">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {pro.skills.map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          {pro.portfolio.length > 0 && (
            <section className="bg-[#1C133E] rounded-3xl p-6 md:p-8 shadow-sm border border-white/5">
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Portfolio
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {pro.portfolio.map((img, i) => (
                  <img key={i} src={img} alt="Portfolio item" className="w-full aspect-square object-cover rounded-2xl shadow-sm border border-white/5 hover:border-indigo-500 transition-colors cursor-pointer" />
                ))}
              </div>
            </section>
          )}

          {/* Reviews */}
          <section className="bg-[#1C133E] rounded-3xl p-6 md:p-8 shadow-sm border border-white/5">
            <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div> Customer Reviews
            </h2>
            <div className="flex flex-col gap-4">
              {reviews.map(review => (
                <div key={review.id} className="bg-[#0A061E] rounded-2xl border border-white/5 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-xl object-cover border border-white/10" />
                    <div>
                      <h4 className="font-bold text-slate-100 text-sm">{review.author}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-700 text-slate-700"} />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{review.comment}</p>
                </div>
              ))}
              {reviews.length === 0 && <p className="text-slate-500 italic text-sm">No reviews yet.</p>}
            </div>
          </section>
        </div>

        {/* Right Column (Services & Contact) */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#160D33] rounded-3xl p-6 border border-white/5 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-slate-100 mb-6">Hire Me</h2>
            <div className="flex flex-col gap-3 mb-8">
              <Link to="/messages" className="bg-indigo-600 hover:bg-indigo-500 text-white w-full py-3.5 rounded-2xl text-xs font-bold flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
                <Mail size={16} /> Message Professional
              </Link>
              <button className="bg-[#0A061E] border border-white/10 text-slate-300 hover:text-white w-full py-3.5 rounded-2xl text-xs font-bold flex justify-center items-center gap-2 transition-colors">
                <Calendar size={16} /> Request Quotation
              </button>
            </div>

            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-t border-white/10 pt-6">Available Services</h3>
            <div className="flex flex-col gap-3">
              {pro.services.map(service => (
                <div key={service.id} className="bg-[#0A061E] border border-white/5 rounded-2xl p-4 hover:border-indigo-500 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors text-sm">{service.title}</h4>
                    <span className="font-bold text-indigo-400 text-sm">{service.price}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
