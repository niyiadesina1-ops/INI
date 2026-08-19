import { useState, useRef } from 'react';
import { Download, LayoutTemplate, Type, Image as ImageIcon, Sparkles, Wand2 } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function CreateFlyer() {
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const flyerRef = useRef<HTMLDivElement>(null);
  
  // Basic state for the flyer content
  const [flyerData, setFlyerData] = useState({
    title: 'Your Business Name',
    subtitle: 'Professional Services',
    description: 'We offer the best quality services in town. Contact us today for a free quotation!',
    contact: '+1 234 567 8900 | contact@example.com',
    color: 'from-indigo-500 to-purple-600',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  });

  const handleAiGenerate = () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      setFlyerData({
        title: aiPrompt.split(' ')[0].toUpperCase() + ' PROS',
        subtitle: 'Expert ' + aiPrompt,
        description: `Looking for top-tier ${aiPrompt} services? We deliver excellence, reliability, and guaranteed satisfaction. Book your appointment today!`,
        contact: 'Book Now: www.example.com | 555-0199',
        color: 'from-blue-600 to-cyan-500',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
      });
      setIsGenerating(false);
    }, 1500);
  };

  const exportFlyer = async () => {
    if (flyerRef.current) {
      const canvas = await html2canvas(flyerRef.current, { scale: 2 });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'my-alljob-flyer.png';
      link.click();
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6 h-[calc(100vh-4rem)]">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-100">Design Studio</h1>
        <p className="text-slate-400 mt-1 text-sm">Create professional flyers and advertisements to promote your business.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        
        {/* Editor Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6 overflow-y-auto pr-2">
          
          <div className="bg-[#1C133E] rounded-3xl border border-indigo-500/20 p-6 flex flex-col relative overflow-hidden shrink-0">
            <div className="relative z-10">
              <h3 className="font-bold text-slate-100 flex items-center gap-2 mb-4">
                <div className="px-2 py-1 bg-indigo-500 text-[10px] font-black rounded text-white tracking-wider">AI</div>
                Generator
              </h3>
              <div className="bg-[#0A061E] rounded-xl p-3 border border-white/5 focus-within:border-indigo-500 transition-colors">
                <p className="text-[10px] uppercase text-indigo-400 font-bold mb-2">Prompt</p>
                <textarea 
                  className="w-full bg-transparent border-none outline-none text-white text-sm resize-none"
                  rows={3}
                  placeholder="e.g. Create an advert for my plumbing business..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                ></textarea>
              </div>
              <button 
                onClick={handleAiGenerate}
                disabled={isGenerating}
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-2xl text-xs transition-all flex justify-center items-center gap-2 disabled:opacity-70 shadow-lg shadow-indigo-500/20"
              >
                {isGenerating ? 'Generating...' : <><Wand2 size={16} /> Generate Flyer</>}
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          </div>

          <div className="bg-[#160D33] p-6 rounded-3xl border border-white/5 flex flex-col gap-4">
            <h3 className="font-bold text-slate-100 flex items-center gap-2">
              <Type size={18} className="text-indigo-400" />
              Edit Content
            </h3>
            
            <div>
              <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1 block">Title</label>
              <input 
                type="text" 
                value={flyerData.title}
                onChange={e => setFlyerData({...flyerData, title: e.target.value})}
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" 
              />
            </div>
            
            <div>
              <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1 block">Subtitle</label>
              <input 
                type="text" 
                value={flyerData.subtitle}
                onChange={e => setFlyerData({...flyerData, subtitle: e.target.value})}
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" 
              />
            </div>
            
            <div>
              <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1 block">Description</label>
              <textarea 
                value={flyerData.description}
                onChange={e => setFlyerData({...flyerData, description: e.target.value})}
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none h-24" 
              ></textarea>
            </div>
            
            <div>
              <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1 block">Contact Info</label>
              <input 
                type="text" 
                value={flyerData.contact}
                onChange={e => setFlyerData({...flyerData, contact: e.target.value})}
                className="w-full bg-[#0A061E] border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" 
              />
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-[#160D33] rounded-3xl p-8 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-6 right-6 z-10">
            <button onClick={exportFlyer} className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
              <Download size={16} /> Export PNG
            </button>
          </div>

          {/* The Flyer Itself - Keeping this mostly white/light as it's a generated asset */}
          <div 
            ref={flyerRef}
            className="w-full max-w-[400px] aspect-[4/5] bg-white shadow-2xl relative overflow-hidden flex flex-col border border-white/10 rounded-sm"
          >
            <div className={`h-1/2 w-full bg-gradient-to-br ${flyerData.color} relative`}>
              <img src={flyerData.imageUrl} alt="Background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h2 className="text-4xl font-black uppercase tracking-tight leading-none mb-2">{flyerData.title}</h2>
                <p className="text-lg font-medium opacity-90">{flyerData.subtitle}</p>
              </div>
            </div>
            <div className="h-1/2 p-8 flex flex-col bg-white">
              <p className="text-neutral-700 text-sm leading-relaxed mb-auto">
                {flyerData.description}
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-xs font-bold text-center text-neutral-900 bg-neutral-100 py-3 rounded-lg">
                  {flyerData.contact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
