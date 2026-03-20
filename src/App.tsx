import { useState, useEffect } from 'react';
import { 
  Sword, 
  Map, 
  Code, 
  Coins, 
  Eye, 
  ShieldCheck, 
  Volume2, 
  MessageSquare, 
  Server, 
  Users, 
  Activity, 
  ChevronRight,
  Github,
  Twitter,
  AlertTriangle,
  Trophy,
  Package,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-red rounded-lg flex items-center justify-center glow-red rotate-3">
            <Sword className="text-white w-6 h-6" />
          </div>
          <span className="font-display text-2xl tracking-tighter uppercase italic">CZ <span className="text-neon-red">Gangwar</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-neon-red transition-colors">Home</a>
          <a href="#sneak-peek" className="hover:text-neon-purple transition-colors">Sneak Peek</a>
          <a href="#mods" className="hover:text-neon-blue transition-colors">Mods</a>
          <a href="#support" className="hover:text-neon-red transition-colors">Support</a>
          <a href="#server-info" className="hover:text-neon-purple transition-colors">Server Info</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neon-red hover:text-white transition-all duration-300">
          Play Now
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-7xl md:text-9xl uppercase italic tracking-tighter mb-4">
            CZ <span className="text-neon-red text-glow-red">Gangwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-widest uppercase mb-12">
            The Ultimate Gang War Experience
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#sneak-peek"
              className="group relative px-10 py-4 bg-neon-red text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 glow-red"
            >
              <span className="relative z-10 flex items-center gap-2">
                Sneak Peek <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
            
            <a 
              href="https://discord.gg/YwRwyQq5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/20 hover:border-neon-purple hover:bg-neon-purple/10 text-white font-bold uppercase tracking-widest transition-all"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const LeaderboardMockup = () => {
  const players = [
    { rank: 1, name: "6스위져6", kills: 13, deaths: 6, kd: 2.33 },
    { rank: 2, name: "SLOWRABBIT3516", kills: 21, deaths: 11, kd: 1.75 },
    { rank: 3, name: "マキ.EXE", kills: 25, deaths: 19, kd: 1.25 },
    { rank: 4, name: "ZLEBAK", kills: 17, deaths: 40, kd: 0.45 },
    { rank: 5, name: "GRUJKOBOSS", kills: 0, deaths: 0, kd: 0.00 },
    { rank: 6, name: "JOHN", kills: 0, deaths: 0, kd: 0.00 },
  ];

  return (
    <div className="w-full max-w-md bg-[#0a1a1a] border border-neon-blue/30 rounded-lg overflow-hidden font-sans shadow-2xl mx-auto">
      <div className="p-4 border-b border-neon-blue/20 flex justify-between items-center bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-neon-blue/20 flex items-center justify-center">
            <Trophy className="text-neon-blue w-4 h-4" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-neon-blue uppercase tracking-widest leading-none">CZ GANGWAR</h4>
            <p className="text-[8px] text-white/40 uppercase tracking-widest">KILL LEADERBOARD</p>
          </div>
        </div>
        <div className="flex gap-4 text-right">
          <div className="text-center">
            <p className="text-[8px] text-white/40 uppercase">KILOVI</p>
            <p className="text-xs font-bold">0</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-white/40 uppercase">SMRTI</p>
            <p className="text-xs font-bold">0</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-neon-blue uppercase">K/D</p>
            <p className="text-xs font-bold text-neon-blue">0.00</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-12 text-[8px] font-bold text-neon-blue/60 uppercase tracking-widest mb-2 px-2">
          <div className="col-span-1">#</div>
          <div className="col-span-6">IGRAC</div>
          <div className="col-span-2 text-right">KILOVI</div>
          <div className="col-span-1 text-right">SMRTI</div>
          <div className="col-span-2 text-right">K/D</div>
        </div>
        <div className="space-y-1">
          {players.map((p) => (
            <div key={p.rank} className="grid grid-cols-12 items-center text-[10px] py-2 px-2 bg-white/5 rounded hover:bg-white/10 transition-colors">
              <div className="col-span-1 font-bold text-orange-500">{p.rank}</div>
              <div className="col-span-6 font-bold uppercase truncate pr-2">{p.name}</div>
              <div className="col-span-2 text-right font-bold">{p.kills}</div>
              <div className="col-span-1 text-right font-bold text-white/40">{p.deaths}</div>
              <div className="col-span-2 text-right font-bold text-neon-blue">{p.kd.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 bg-black/40 border-t border-neon-blue/10 flex justify-between items-center">
        <span className="text-[8px] text-neon-blue/40 uppercase tracking-widest">CZ GANGWAR</span>
        <span className="text-[8px] text-white/20 uppercase tracking-widest italic">PRITISNI ESC DA ZATVORIS</span>
      </div>
    </div>
  );
};

const InventoryMockup = () => {
  return (
    <div className="w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 font-sans shadow-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest">Don Diego</span>
          <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] font-bold">5</span>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-[10px] font-bold">7.945</span>
            <span className="text-[8px] text-white/40">/24kg</span>
          </div>
          <div className="w-32 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
            <div className="w-1/3 h-full bg-neon-blue glow-blue"></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-2 mb-4">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-lg flex items-center justify-center relative group hover:border-white/20 transition-all">
            {i === 0 && (
              <div className="text-center">
                <Sword className="w-6 h-6 text-white/40 mb-1 mx-auto" />
                <p className="text-[6px] uppercase font-bold text-white/20">AP PISTOL</p>
                <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-neon-blue"></div>
              </div>
            )}
            {i === 1 && (
              <div className="text-center">
                <TrendingUp className="w-6 h-6 text-white/40 mb-1 mx-auto" />
                <p className="text-[6px] uppercase font-bold text-white/20">9MM</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 py-2 border-t border-white/5">
        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
          <Package className="w-3 h-3 text-white/40" />
        </div>
        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
          <Activity className="w-3 h-3 text-white/40" />
        </div>
        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
          <Users className="w-3 h-3 text-white/40" />
        </div>
      </div>
    </div>
  );
};

const SneakPeek = () => {
  const features = [
    {
      title: "Gang Wars",
      desc: "Intense large-scale battles for dominance and respect.",
      icon: Sword,
      color: "text-neon-red",
      bg: "bg-neon-red/10",
      border: "border-neon-red/20"
    },
    {
      title: "Territory Control",
      desc: "Capture and defend strategic zones across the city.",
      icon: Map,
      color: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20"
    },
    {
      title: "Custom Scripts",
      desc: "Unique mechanics built from scratch for the best gameplay.",
      icon: Code,
      color: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    },
    {
      title: "Economy System",
      desc: "Balanced financial system to fuel your gang's growth.",
      icon: Coins,
      color: "text-neon-red",
      bg: "bg-neon-red/10",
      border: "border-neon-red/20"
    },
    {
      title: "Kill Leaderboard",
      desc: "Track your performance and climb the global rankings.",
      icon: Trophy,
      color: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20"
    },
    {
      title: "Custom Inventory",
      desc: "Modern, grid-based inventory with weight management.",
      icon: Package,
      color: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    }
  ];

  return (
    <section id="sneak-peek" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl uppercase italic mb-4">Sneak <span className="text-neon-purple">Peek</span></h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl border ${f.border} ${f.bg} backdrop-blur-sm transition-all`}
            >
              <f.icon className={`${f.color} w-12 h-12 mb-6`} />
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="bg-[#050505] rounded-lg p-2">
                <LeaderboardMockup />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-neon-blue">
              <h4 className="text-2xl font-bold uppercase italic mb-2 tracking-tight">Competitive Leaderboards</h4>
              <p className="text-white/60">See where you stand against the city's most dangerous players. Real-time K/D tracking and global rankings.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-1 bg-gradient-to-r from-neon-purple to-neon-red rounded-xl overflow-hidden shadow-[0_0_30px_rgba(157,0,255,0.2)]">
              <div className="bg-[#050505] rounded-lg p-2">
                <InventoryMockup />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-neon-purple">
              <h4 className="text-2xl font-bold uppercase italic mb-2 tracking-tight">Advanced Inventory</h4>
              <p className="text-white/60">A clean, intuitive interface for managing your gear. Drag-and-drop mechanics with realistic weight limits.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AllowedMods = () => {
  const allowed = [
    "Reshade", "Tracers", "Custom Roads", "Kill Effects", 
    "Sound Pack", "Weapon Skins", "Citizen", "BloodFX", "No Water"
  ];

  const forbidden = [
    "Damage Boost", "Hitbox", "Bullet Pen", "Quick Reload", 
    "No Props", "No Fall", "Explosive Bullet", "No Reload", 
    "Quick Roll / No Roll", "No Recoil", "Quick Enter", 
    "No Stamina", "No Bush", "Magic Bullet", "Fast Climbing", "No Mountain"
  ];

  return (
    <section id="mods" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-blue/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl uppercase italic mb-4">Mod <span className="text-neon-blue">Guidelines</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We maintain a strict competitive environment. Ensure your game client follows these rules to avoid disciplinary action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <ShieldCheck className="text-green-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase italic tracking-tight">Allowed Mods</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allowed.map((mod, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium uppercase tracking-wider">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
                <AlertTriangle className="text-neon-red w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase italic tracking-tight">Forbidden Mods</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forbidden.map((mod, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-red"></div>
                  <span className="text-sm font-medium uppercase tracking-wider">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="p-8 border-2 border-neon-red bg-neon-red/10 rounded-3xl text-center glow-red"
        >
          <h4 className="text-3xl font-display uppercase italic mb-4 text-neon-red text-glow-red">Zero Tolerance Policy</h4>
          <p className="text-xl font-bold uppercase tracking-[0.2em] text-white">
            ANY USE OF CHEATS RESULTS IN A <span className="text-neon-red underline decoration-2 underline-offset-8">PERMANENT BAN</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Support = () => {
  return (
    <section id="support" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-red/10 border border-neon-red/20 text-neon-red text-xs font-bold uppercase tracking-widest mb-8">
          <MessageSquare className="w-4 h-4" /> Support System
        </div>
        <h2 className="font-display text-5xl md:text-6xl uppercase italic mb-8">Need <span className="text-neon-red">Help?</span></h2>
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          Our dedicated staff team is available 24/7 to assist you. 
          Whether it's a technical issue, a player report, or a general question, 
          we've got you covered through our Discord ticket system.
        </p>
        
        <a 
          href="https://discord.gg/YwRwyQq5"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-sm overflow-hidden transition-all hover:bg-neon-red hover:text-white glow-red"
        >
          <span className="relative z-10">Open Ticket</span>
        </a>
        
        <p className="mt-8 text-white/30 text-sm uppercase tracking-widest">Average response time: &lt; 15 minutes</p>
      </div>
    </section>
  );
};

const ServerInfo = () => {
  const stats = [
    { label: "Server Status", value: "Offline", icon: Activity, color: "text-neon-red" },
    { label: "Players", value: "0 / 64", icon: Users, color: "text-neon-purple" },
    { label: "Server IP", value: "Under Maintenance", icon: Server, color: "text-neon-blue" }
  ];

  return (
    <section id="server-info" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl text-center group hover:border-white/30 transition-all">
              <s.icon className={`${s.color} w-10 h-10 mx-auto mb-6 group-hover:scale-110 transition-transform`} />
              <p className="text-white/40 uppercase text-xs font-bold tracking-widest mb-2">{s.label}</p>
              <h4 className="text-2xl font-display uppercase italic tracking-tight">{s.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-red rounded flex items-center justify-center glow-red">
              <Sword className="text-white w-5 h-5" />
            </div>
            <span className="font-display text-xl tracking-tighter uppercase italic">CZ <span className="text-neon-red">Gangwar</span></span>
          </div>

          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Rules</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://discord.gg/YwRwyQq5" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-red hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-white/20 text-[10px] uppercase tracking-[0.4em]">
          &copy; 2026 CZ Gangwar. All rights reserved. Not affiliated with Rockstar Games or Take-Two Interactive.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SneakPeek />
        <AllowedMods />
        <Support />
        <ServerInfo />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
    </div>
  );
}
