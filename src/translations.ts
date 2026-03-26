export type Language = 'en' | 'sr';

export const translations = {
  en: {
    nav: {
      home: "Home",
      sneakPeek: "Sneak Peek",
      mods: "Mods",
      support: "Support",
      serverInfo: "Server Info",
      playNow: "Play Now",
      donation: "Donation"
    },
    hero: {
      title: "CZ Gangwar",
      subtitle: "The Ultimate Gang War Experience",
      sneakPeek: "Sneak Peek",
      joinDiscord: "Join Discord"
    },
    sneakPeek: {
      title: "Sneak",
      titleSpan: "Peek",
      leaderboard: "Kill Leaderboard",
      leaderboardDesc: "Track your K/D and climb the ranks",
      competitiveEdge: "Competitive Edge",
      competitiveEdgeDesc: "Stay on top of the competition with our real-time Kill Leaderboard. Track your kills, deaths, and K/D ratio as you dominate the streets. The system ranks players dynamically, ensuring that the most skilled warriors are recognized across the entire server.",
      inventory: "Inventory System",
      inventoryDesc: "Advanced grid-based gear management",
      systemOverview: "System Overview",
      systemOverviewDesc: "Our custom-built inventory system allows for seamless gear management. Organize your weapons, armor, and consumables with a modern grid interface. Features include quick-drag functionality, detailed item stats, and real-time weight tracking to keep your loadout optimized for the gangwar."
    },
    mods: {
      title: "Mod",
      titleSpan: "Guidelines",
      desc: "We maintain a strict competitive environment. Ensure your game client follows these rules to avoid disciplinary action.",
      allowed: "Allowed Mods",
      forbidden: "Forbidden Mods",
      policyTitle: "Zero Tolerance Policy",
      policyDesc: "ANY USE OF CHEATS RESULTS IN A PERMANENT BAN"
    },
    support: {
      badge: "Support System",
      title: "Need",
      titleSpan: "Help?",
      desc: "Our dedicated staff team is available 24/7 to assist you. Whether it's a technical issue, a player report, or a general question, we've got you covered through our Discord ticket system.",
      button: "Open Ticket",
      responseTime: "Average response time: < 15 minutes"
    },
    serverInfo: {
      status: "Server Status",
      offline: "Offline",
      players: "Players",
      ip: "Server IP",
      maintenance: "Under Maintenance"
    },
    staff: {
      title: "Server",
      titleSpan: "Owners",
      desc: "The team behind the ultimate gangwar experience",
      roles: {
        owner: "Server Owner",
        webDev: "Web developer",
        dev: "Developer",
        coOwner: "Co Owner"
      }
    },
    proveraTeam: {
      title: "PC",
      titleSpan: "Checker",
      desc: "The team responsible for PC checks and fair play",
      roles: {
        head: "Head of PC Checkers"
      }
    },
    footer: {
      rights: "© 2026 CZ Gangwar. All rights reserved. Not affiliated with Rockstar Games or Take-Two Interactive."
    },
    donation: {
      title: "Support",
      titleSpan: "Server",
      desc: "Support CZ Gangwar and help us keep the server running. All donations go directly towards server maintenance and development.",
      button: "Purchase Now",
      items: [
        {
          id: "donation",
          title: "Server Donation",
          stock: "∞ Stock",
          price: "€5.00 - €100.00",
          oldPrice: "",
          detailsTitle: "What you get",
          features: [
            "Custom Discord Role",
            "Exclusive In-game Tag",
            "Priority Queue Access",
            "Support the development"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        },
        {
          id: "organization",
          title: "Organization",
          stock: "∞ Stock",
          price: "€50.00",
          oldPrice: "€75.00",
          detailsTitle: "Organization Benefits",
          features: [
            "Custom Gang/Org Name",
            "Private Discord Channel",
            "In-game Base/HQ",
            "Custom Org Clothing/Items"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        },
        {
          id: "staff",
          title: "Discord / Staff",
          stock: "∞ Stock",
          price: "€15.00 - €30.00",
          oldPrice: "€20.00 - €45.00",
          detailsTitle: "Staff/Role Perks",
          features: [
            "Custom Discord Role",
            "Staff Channel Access",
            "Special Badge",
            "Unique Permissions"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        }
      ]
    },
    leaderboard: {
      title: "CZ GANGWAR",
      subtitle: "KILL LEADERBOARD",
      kills: "KILLS",
      deaths: "DEATHS",
      kd: "K/D",
      player: "PLAYER",
      close: "PRESS ESC TO CLOSE"
    }
  },
  sr: {
    nav: {
      home: "Početna",
      sneakPeek: "Sneak Peek",
      mods: "Modovi",
      support: "Podrška",
      serverInfo: "Info Servera",
      playNow: "Igraj Odmah",
      donation: "Donacije"
    },
    hero: {
      title: "CZ Gangwar",
      subtitle: "Vrhunsko Gang War Iskustvo",
      sneakPeek: "Sneak Peek",
      joinDiscord: "Pridruži se Discordu"
    },
    sneakPeek: {
      title: "Sneak",
      titleSpan: "Peek",
      leaderboard: "Kill Leaderboard",
      leaderboardDesc: "Pratite svoj K/D i penjite se na rang listi",
      competitiveEdge: "Takmičarska Prednost",
      competitiveEdgeDesc: "Ostanite na vrhu takmičenja sa našim Kill Leaderboard-om u realnom vremenu. Pratite svoja ubistva, smrti i K/D odnos dok dominirate ulicama. Sistem dinamički rangira igrače, osiguravajući da najveštiji ratnici budu prepoznati na celom serveru.",
      inventory: "Sistem Inventara",
      inventoryDesc: "Napredno upravljanje opremom zasnovano na mreži",
      systemOverview: "Pregled Sistema",
      systemOverviewDesc: "Naš prilagođeni sistem inventara omogućava besprekorno upravljanje opremom. Organizujte svoje oružje, oklope i potrošni materijal pomoću modernog mrežnog interfejsa. Karakteristike uključuju funkciju brzog prevlačenja, detaljnu statistiku predmeta i praćenje težine u realnom vremenu kako bi vaš loadout bio optimizovan za gangwar."
    },
    mods: {
      title: "Smernice",
      titleSpan: "Modova",
      desc: "Održavamo strogo takmičarsko okruženje. Uverite se da vaš klijent igre prati ova pravila kako biste izbegli disciplinske mere.",
      allowed: "Dozvoljeni Modovi",
      forbidden: "Zabranjeni Modovi",
      policyTitle: "Politika Nulte Tolerancije",
      policyDesc: "SVAKA UPOTREBA ČITOVA REZULTIRA TRAJNOM ZABRANOM (BAN)"
    },
    support: {
      badge: "Sistem Podrške",
      title: "Treba vam",
      titleSpan: "Pomoć?",
      desc: "Naš posvećeni tim osoblja dostupan je 24/7 da vam pomogne. Bilo da se radi o tehničkom problemu, prijavi igrača ili opštem pitanju, pokriveni ste putem našeg Discord ticket sistema.",
      button: "Otvori Ticket",
      responseTime: "Prosečno vreme odgovora: < 15 minuta"
    },
    serverInfo: {
      status: "Status Servera",
      offline: "Offline",
      players: "Igrači",
      ip: "IP Servera",
      maintenance: "U toku održavanja"
    },
    staff: {
      title: "Vlasnici",
      titleSpan: "Servera",
      desc: "Tim koji stoji iza vrhunskog gangwar iskustva",
      roles: {
        owner: "Vlasnik Servera",
        webDev: "Web programer",
        dev: "Programer",
        coOwner: "Suvlasnik"
      }
    },
    proveraTeam: {
      title: "Provera",
      titleSpan: "Team",
      desc: "Tim zadužen za proveru igrača i fer plej",
      roles: {
        head: "Glavni za Provera Team"
      }
    },
    footer: {
      rights: "© 2026 CZ Gangwar. Sva prava zadržana. Nije povezano sa Rockstar Games ili Take-Two Interactive."
    },
    donation: {
      title: "Podrži",
      titleSpan: "Server",
      desc: "Podržite CZ Gangwar i pomozite nam da održimo server. Sve donacije idu direktno za održavanje i razvoj servera.",
      button: "Kupi Odmah",
      items: [
        {
          id: "donation",
          title: "Donacija Serveru",
          stock: "∞ Na stanju",
          price: "€5.00 - €100.00",
          oldPrice: "",
          detailsTitle: "Šta dobijate",
          features: [
            "Poseban Discord Rank",
            "Ekskluzivan In-game Tag",
            "Prioritet pri ulasku na server",
            "Podrška razvoju servera"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        },
        {
          id: "organization",
          title: "Organizacija",
          stock: "∞ Na stanju",
          price: "€50.00",
          oldPrice: "€75.00",
          detailsTitle: "Prednosti Organizacije",
          features: [
            "Ime Bande/Organizacije po želji",
            "Privatni Discord Kanal",
            "In-game Baza/HQ",
            "Custom Odeća/Predmeti"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        },
        {
          id: "staff",
          title: "Discord / Staff",
          stock: "∞ Na stanju",
          price: "€15.00 - €30.00",
          oldPrice: "€20.00 - €45.00",
          detailsTitle: "Staff/Role Pogodnosti",
          features: [
            "Poseban Discord Rank",
            "Pristup Staff Kanalima",
            "Specijalni Badge",
            "Unikatne Permisije"
          ],
          link: "https://czgangwar.mysellauth.com/product/cz-gangwar"
        }
      ]
    },
    leaderboard: {
      title: "CZ GANGWAR",
      subtitle: "KILL LEADERBOARD",
      kills: "KILOVI",
      deaths: "SMRTI",
      kd: "K/D",
      player: "IGRAC",
      close: "PRITISNI ESC DA ZATVORIS"
    }
  }
};
