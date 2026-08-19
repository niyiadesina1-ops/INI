import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Briefcase, Users, LayoutTemplate, MessageSquare, User, Bell } from 'lucide-react';
import clsx from 'clsx';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Jobs', path: '/jobs', icon: Briefcase },
    { name: 'Services', path: '/services', icon: Users },
    { name: 'Flyers', path: '/flyers', icon: LayoutTemplate },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#0A061E] text-slate-100 font-sans pb-16 md:pb-0 md:pt-16">
      {/* Desktop Top Nav */}
      <nav className="hidden md:flex fixed top-0 w-full bg-[#0F0726] border-b border-white/10 z-50 h-16 items-center px-8 justify-between shrink-0">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">A</div>
            <span className="text-xl font-bold tracking-tight text-white">ALLJOB</span>
          </Link>
          <div className="hidden lg:flex gap-6 text-sm font-medium text-slate-400 h-16">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    "flex items-center transition-colors h-full",
                    isActive ? "text-white border-b-2 border-indigo-500 pt-[2px]" : "hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></div>
            <Bell className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
          </div>
          <Link to="/profile" className="w-8 h-8 rounded-full border-2 border-indigo-500 p-0.5 cursor-pointer">
            <img src="https://i.pravatar.cc/150?u=jd" alt="Profile" className="w-full h-full bg-slate-700 rounded-full object-cover" />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#0F0726] border-t border-white/10 z-50 flex justify-around items-center h-16 px-2 safe-area-bottom">
        {[...navItems, { name: 'Profile', path: '/profile', icon: User }].map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={clsx(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                isActive ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
              )}
            >
              <Icon size={20} className={isActive ? "fill-indigo-500/20" : ""} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
