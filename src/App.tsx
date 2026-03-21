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
        <div className="flex items-center gap-4">
          <div className="h-16 md:h-20 flex items-center justify-center">
            <img 
              src="https://i.imgur.com/k1zlu98.png" 
              alt="CZ Gangwar Logo" 
              className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-neon-blue transition-colors">Home</a>
          <a href="#sneak-peek" className="hover:text-neon-purple transition-colors">Sneak Peek</a>
          <a href="#mods" className="hover:text-neon-blue transition-colors">Mods</a>
          <a href="#support" className="hover:text-neon-blue transition-colors">Support</a>
          <a href="#server-info" className="hover:text-neon-purple transition-colors">Server Info</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neon-blue hover:text-white transition-all duration-300">
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.4] brightness-[0.25]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-7xl md:text-9xl uppercase italic tracking-tighter mb-4">
            CZ <span className="text-neon-blue text-glow-blue">Gangwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-widest uppercase mb-12">
            The Ultimate Gang War Experience
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#sneak-peek"
              className="group relative px-10 py-4 bg-neon-blue text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 glow-blue"
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
  return (
    <section id="sneak-peek" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl uppercase italic mb-4">Sneak <span className="text-neon-blue">Peek</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 glow-blue shadow-[0_0_30px_rgba(0,212,255,0.1)]">
              <img 
                src="https://i.imgur.com/i3Nf4qt.png" 
                alt="Kill Leaderboard" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-white font-bold uppercase tracking-widest mb-1">Kill Leaderboard</p>
                  <p className="text-white/60 text-xs uppercase tracking-tighter">Track your K/D and climb the ranks</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-neon-blue font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> Competitive Edge
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Stay on top of the competition with our real-time Kill Leaderboard. Track your kills, deaths, and K/D ratio as you dominate the streets. The system ranks players dynamically, ensuring that the most skilled warriors are recognized across the entire server.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 glow-blue shadow-[0_0_30px_rgba(0,212,255,0.1)]">
              <img 
                src="https://i.imgur.com/zmCrTMp.png" 
                alt="Inventory System" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-white font-bold uppercase tracking-widest mb-1">Inventory System</p>
                  <p className="text-white/60 text-xs uppercase tracking-tighter">Advanced grid-based gear management</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-neon-blue font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <Package className="w-4 h-4" /> System Overview
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Our custom-built inventory system allows for seamless gear management. Organize your weapons, armor, and consumables with a modern grid interface. Features include quick-drag functionality, detailed item stats, and real-time weight tracking to keep your loadout optimized for the gangwar.
              </p>
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
              <div className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                <AlertTriangle className="text-neon-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase italic tracking-tight">Forbidden Mods</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forbidden.map((mod, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
                  <span className="text-sm font-medium uppercase tracking-wider">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="p-8 border-2 border-neon-blue bg-neon-blue/10 rounded-3xl text-center glow-blue"
        >
          <h4 className="text-3xl font-display uppercase italic mb-4 text-neon-blue text-glow-blue">Zero Tolerance Policy</h4>
          <p className="text-xl font-bold uppercase tracking-[0.2em] text-white">
            ANY USE OF CHEATS RESULTS IN A <span className="text-neon-blue underline decoration-2 underline-offset-8">PERMANENT BAN</span>
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest mb-8">
          <MessageSquare className="w-4 h-4" /> Support System
        </div>
        <h2 className="font-display text-5xl md:text-6xl uppercase italic mb-8">Need <span className="text-neon-blue">Help?</span></h2>
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          Our dedicated staff team is available 24/7 to assist you. 
          Whether it's a technical issue, a player report, or a general question, 
          we've got you covered through our Discord ticket system.
        </p>
        
        <a 
          href="https://discord.gg/YwRwyQq5"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-sm overflow-hidden transition-all hover:bg-neon-blue hover:text-white glow-blue"
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
    { label: "Server Status", value: "Offline", icon: Activity, color: "text-neon-blue" },
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

const Staff = () => {
  const staffMembers = [
    { name: "GrujkoBoss", role: "Server Owner", image: "https://i.imgur.com/6DyhDQB.png" },
    { name: "Svizer", role: "Server Owner", image: "https://i.imgur.com/0uMLw9c.png" },
    { name: "YUNG", role: "Web developer", image: "https://i.imgur.com/2Elmti5.png" },
    { name: "Maki", role: "Developer", image: "https://i.imgur.com/HHFQoV2.png" },
    { name: "riri", role: "Co Owner", image: "https://i.imgur.com/1AqaP4n.png" }
  ];

  return (
    <section id="staff" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl uppercase italic mb-4">Server <span className="text-neon-blue">Owners</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto uppercase tracking-widest text-xs">The team behind the ultimate gangwar experience</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {staffMembers.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glow-blue transition-all group-hover:border-neon-blue/50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-3 h-3 text-neon-blue" />
                    <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest">{member.role}</span>
                  </div>
                  <h4 className="text-white font-display uppercase italic text-lg leading-none mb-1">{member.name}</h4>
                </div>
              </div>
            </motion.div>
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
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/k1zlu98.png" 
                alt="CZ Logo" 
                className="w-full h-full object-contain glow-blue"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-xl tracking-tighter uppercase italic">CZ <span className="text-neon-blue">Gangwar</span></span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://discord.gg/YwRwyQq5" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all glow-purple"
            >
              <MessageSquare className="w-6 h-6" />
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
    <div className="min-h-screen selection:bg-neon-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SneakPeek />
        <Staff />
        <AllowedMods />
        <Support />
        <ServerInfo />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
    </div>
  );
}
