import { useState } from 'react';
import { Search, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { MOCK_MESSAGES } from '../data';

export default function Messages() {
  const [activeChat, setActiveChat] = useState(MOCK_MESSAGES[0].senderId);

  return (
    <div className="flex h-[calc(100vh-4rem)] md:border-x border-white/10 bg-[#0A061E] max-w-5xl mx-auto shadow-sm">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-white/10 flex flex-col h-full bg-[#160D33]">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-slate-100 mb-4">Messages</h2>
          <div className="bg-[#0A061E] border border-white/5 rounded-xl p-2 flex items-center focus-within:border-indigo-500 transition-colors">
            <Search className="text-slate-400 ml-2" size={18} />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="flex-1 bg-transparent border-none outline-none text-white px-3 text-sm placeholder:text-slate-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {MOCK_MESSAGES.map(msg => (
            <button 
              key={msg.id}
              onClick={() => setActiveChat(msg.senderId)}
              className={`w-full p-4 flex items-start gap-3 border-b border-white/5 transition-colors text-left ${activeChat === msg.senderId ? 'bg-indigo-500/10 border-l-2 border-l-indigo-500' : 'hover:bg-white/5'}`}
            >
              <img src={msg.senderAvatar} alt={msg.senderName} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-100 truncate text-sm">{msg.senderName}</h4>
                  <span className="text-[10px] text-slate-500 font-bold">{msg.timestamp}</span>
                </div>
                <p className={`text-sm truncate ${!msg.isRead && activeChat !== msg.senderId ? 'font-bold text-white' : 'text-slate-400'}`}>
                  {msg.content}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col h-full bg-[#0A061E]">
        {/* Chat Header */}
        <div className="h-16 border-b border-white/10 bg-[#1C133E] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <img src={MOCK_MESSAGES.find(m => m.senderId === activeChat)?.senderAvatar} alt="Avatar" className="w-10 h-10 rounded-xl object-cover border border-white/10" />
            <div>
              <h3 className="font-bold text-slate-100">{MOCK_MESSAGES.find(m => m.senderId === activeChat)?.senderName}</h3>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-indigo-400 transition-colors"><Phone size={18} /></button>
            <button className="hover:text-indigo-400 transition-colors"><Video size={18} /></button>
            <button className="hover:text-indigo-400 transition-colors"><MoreVertical size={18} /></button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          <div className="text-center text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">Today</div>
          
          <div className="flex gap-3 max-w-[80%]">
            <img src={MOCK_MESSAGES.find(m => m.senderId === activeChat)?.senderAvatar} alt="Avatar" className="w-8 h-8 rounded-xl object-cover mt-auto border border-white/10" />
            <div className="bg-[#160D33] border border-white/5 p-3 rounded-2xl rounded-bl-none shadow-sm">
              <p className="text-sm text-slate-300">{MOCK_MESSAGES.find(m => m.senderId === activeChat)?.content}</p>
              <span className="text-[9px] text-slate-500 mt-1 block font-bold">10:30 AM</span>
            </div>
          </div>
          
          <div className="flex gap-3 max-w-[80%] self-end flex-row-reverse">
            <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-none shadow-sm">
              <p className="text-sm">Hi! Yes, next Tuesday works perfectly. Can you send me the booking link?</p>
              <span className="text-[9px] text-indigo-200 mt-1 block text-right font-bold">10:32 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#1C133E] border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2 bg-[#0A061E] border border-white/5 rounded-full p-1 pr-2 focus-within:border-indigo-500 transition-colors">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-sm text-white placeholder:text-slate-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
              <Send size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
