// ============================================
// QUESTION BANKS
// One array per category
// quizs.html loads this file first
// then script.js picks the right array
// based on what was selected on Games.html
// ============================================


// ============================================
// CATEGORY 1: GENERAL GAMING 🎮
// ============================================

const generalQuestions = [
    {
        question: "What company developed the original PlayStation console?",
        answers: ["Sega", "Nintendo", "Sony", "Microsoft"],
        correctAnswer: 2
    },
    {
        question: "What game won Game of the Year in 2017?",
        answers: [
            "Horizon Zero Dawn",
            "Call of Duty: WWII",
            "Super Mario Odyssey",
            "The Legend of Zelda: Breath of the Wild"
        ],
        correctAnswer: 3
    },
    {
        question: "What year did the Human-Covenant war start in the Halo series?",
        answers: ["2505", "2553", "2515", "2525"],
        correctAnswer: 3
    },
    {
        question: "As of 2026 how many Pokemon are there in the Pokemon universe?",
        answers: ["898", "1028", "1200", "1500"],
        correctAnswer: 1
    },
    {
        question: "What is the original name of Sonic the Hedgehog's arch nemesis Dr. Eggman?",
        answers: ["Dr. Robotnik", "Dr. Ivo", "Dr. Eggman", "Dr. Ovi"],
        correctAnswer: 0
    },
    {
        question: "How many franchises are in the Super Smash Bros. Ultimate roster?",
        answers: ["20", "30", "42", "50"],
        correctAnswer: 1
    },
    {
        question: "How many franchises has Akira Toriyama contributed to in the gaming industry?",
        answers: ["5", "17", "6", "4"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the main protagonist in the Legend of Zelda series?",
        answers: ["Zelda", "Link", "Ganon", "Navi"],
        correctAnswer: 1
    },
    {
        question: "What game popularized the battle royale genre?",
        answers: ["Fortnite", "Overwatch", "PlayerUnknown's Battlegrounds", "Call of Duty: Warzone"],
        correctAnswer: 2
    },
    {
        question: "What is the last game released for the Nintendo DS?",
        answers: [
            "Legend of Zelda: Spirit Tracks",
            "Big Bang Mini",
            "The World Ends With You",
            "Big Hero 6: Battle in the Bay"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the name of the ring in Halo: Combat Evolved?",
        answers: ["Reach", "Cairo Station", "Alpha Halo", "The Pillar of Autumn"],
        correctAnswer: 2
    },
    {
        question: "Which company manufactures the Xbox console?",
        answers: ["Sony", "Nintendo", "Microsoft", "Sega"],
        correctAnswer: 2
    },
    {
        question: "What year was the original Game Boy released?",
        answers: ["1985", "1987", "1989", "1991"],
        correctAnswer: 2
    },
    {
        question: "In which game do you play as a Spartan supersoldier fighting an alien alliance?",
        answers: ["Destiny", "Halo", "Mass Effect", "Gears of War"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the fictional state in Grand Theft Auto V?",
        answers: ["San Andreas", "Vice City", "Liberty City", "Los Santos"],
        correctAnswer: 0
    },
    {
        question: "Which studio developed the God of War series?",
        answers: ["Naughty Dog", "Insomniac Games", "Santa Monica Studio", "Rockstar Games"],
        correctAnswer: 2
    },
    {
        question: "What is the highest selling gaming console of all time?",
        answers: ["PlayStation 2", "Nintendo DS", "Game Boy", "PlayStation 4"],
        correctAnswer: 0
    },
    {
        question: "In Minecraft what material makes the strongest tools and armour?",
        answers: ["Gold", "Iron", "Diamond", "Netherite"],
        correctAnswer: 3
    },
    {
        question: "What year was the first Grand Theft Auto game released?",
        answers: ["1995", "1997", "1999", "2001"],
        correctAnswer: 1
    },
    {
        question: "Which game features the fictional currency called 'Gil'?",
        answers: ["Dragon Quest", "Final Fantasy", "Kingdom Hearts", "Chrono Trigger"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the main antagonist in the Super Mario series?",
        answers: ["Wario", "Waluigi", "Bowser", "Kamek"],
        correctAnswer: 2
    },
    {
        question: "Which console was the first to introduce a built in DVD player?",
        answers: ["Nintendo GameCube", "Sega Dreamcast", "PlayStation 2", "Xbox"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the currency used in the Animal Crossing series?",
        answers: ["Coins", "Bells", "Rupees", "Gold"],
        correctAnswer: 1
    },
    {
        question: "In what year did Atari release the iconic Pong arcade game?",
        answers: ["1970", "1972", "1975", "1978"],
        correctAnswer: 1
    },
    {
        question: "Which game series features the characters Soap, Ghost and Captain Price?",
        answers: ["Battlefield", "Medal of Honor", "Call of Duty", "Halo"],
        correctAnswer: 2
    }
];


// ============================================
// CATEGORY 2: LORE & RPG ⚔️
// ============================================

const loreQuestions = [
    {
        question: " In the legend of Zelda what is the name are the three names of the triforces",
        answers: ["Strenght Smarts And Bravery", "Power Interlect and Courage", " Power Wisdom and Courage", "Force Wisdom and Courage"],
        correctAnswer: 3
    },
    {
        question: "In the Legend of Zelda the Minish cap what is the name of the main antagonist",
        answers: ["Gannon", "Vaati", "Gannondorf", "Griahim"],
        correctAnswer: 1
    },
    {
        question: "In Halo 2 what is the name of the civil war within the Covanant",
        answers: ["Covanant Schism", "The Great Civil War", "The Covanant War of Secession", "Great Schism"],
        correctAnswer: 3

    },
    {
        question: "In the game Steller Blade what religon is heavliy referenced in the game",
        answers: ["Islam", "Buddishm", "Christianty", "Shintoism"],
        correctAnswer: 2
    },
    {
        question: "In regards to the Star Ocean franchise what is last game in the chronological timeline",
        answers: ["The Last Hope", "First Departure", "Till the End of Time", "Integrity and Faithlessness" ],
        correctAnswer: 2

    },
    {
        question: "In Final Fantasy 7 what is the name of Cloud and Tifa's hometown",
        answers: ["Midgaard", "Juno", "Nibelheim", "Destiny Island"],
        correctAnswer: 2
    },
    {
        question: "What was the name of the AI who started the Derangment in Horizon Zero Dawn",
        answers: ["HADES", "GAIA", "APOLLO", "HEPHAESTUS"],
        correctAnswer: 3
    },
    {
        question: "In The Last of Us what is the name of the infection that causes the outbreak",
        answers: ["Cordyceps","The Wildfire Virus", "Toxoplasma", "Ophiocordyceps"],
        correctAnswer: 0
    },
    {
        question: "In what Fire Emblem game did Marth make his debut in?",
        answers: ["Fire Emblem: The Blazing Blade", "Fire Emblem: Mystery of the Emblem", "Fire Emblem:  Shadow Dragon and the Blade of Light", "Fire Emblem: Awakening"],
        correctAnswer: 2
    },
    {
        question: "What Machine War were the YoRHa fighting in NIER Automata?",
        answers: ["16th", "2nd", "10th", "14th"],
        correctAnswer: 3
    },
    {
        question: "What is the name of The Master Chiefs AI companion?",
        answers: ["Siri", "Gork", "Cortana", "Jarvis"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the dragon you defeat at the start of Skyrim?",
        answers: ["Paarthurnax", "Mirmulnir", "Alduin", "Odahviing"],
        correctAnswer: 1
    },
    {
        question: "In Pokémon Red and Blue what is the name of the evil organisation?",
        answers: ["Team Rocket", "Team Aqua", "Team Magma", "Team Galactic"],
        correctAnswer: 0
    },
   
    {
        question: "What is the name of the main villain in Final Fantasy VII?",
        answers: ["Kefka", "Sephiroth", "Ultimecia", "Exdeath"],
        correctAnswer: 0
    },
    {
        question: "In The Witcher 3 what is the name of the group hunting Ciri?",
        answers: ["The Black Ones", "The Wild Hunt", "Nilfgaard", "The Lodge"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the dragon the Gittish empire ally themselves with in Dragon Quest 9",
        answers: [" Draco", "Barbarus", "Greygnarl", "Styrmling"],
        correctAnswer: 1
    },
    {
        question: "What is Megaman in the Megaman Battle Network series",
        answers: ["Robot", "Reploid", "BioMetal", " NetNavi"],
        correctAnswer: 3
    },
    {
        question: "How many versions of Ridley is there",
        answers: ["4", "3", "8", "5"],
        correctAnswer: 2
    },
    {
        question: "What is the underground cavern Samus traverses",
        answers: ["Hollow Earth", "The Hollows", "Brinstar", "Zebes"],
        correctAnswer: 2
    },
    {
        question: "In Cyberpunk 2077 what city is the game set in?",
        answers: ["Neo Tokyo", "Night City", "New Vegas", "Mega City One"],
        correctAnswer: 1
    },
    {
        question: "In Red Dead Redemption 2 what gang does Arthur Morgan ride with?",
        answers: ["Lemoyne Raiders", "O'Driscoll Boys", "Van der Linde Gang", "Skinner Brothers"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the world in Final Fantasy X?",
        answers: ["Eos", "Spira", "Gaia", "Terra"],
        correctAnswer: 1
    },
    {
        question: "Whats the name of the event before every Expedition sets out in Expedition 33",
        answers: [" Erasure", "Gommage", "Smoothing", "Removal"],
        correctAnswer: 1
    },
    {
        question: "In Bloodborne what city is the game primarily set in?",
        answers: ["Lordran", "Yharnam", "Latria", "Cainhurst"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the organisation Solid Snake works for in Metal Gear Solid?",
        answers: ["FOXHOUND", "Outer Heaven", "Philanthropy", "Diamond Dogs"],
        correctAnswer: 0
    },
    {
        question: "What causes the Necromorph outbreak in Dead Space?",
        answers: ["A virus", "The Black Marker", "Radiation", "An alien parasite"],
        correctAnswer: 1
    },

];

// ============================================
// CATEGORY 3: CONSOLE WARS 🏆
// ============================================
const consoleQuestions = [
    {
        question: "Which company manufactures the Xbox console?",
        answers: ["Sony", "Nintendo", "Microsoft", "Sega"],
        correctAnswer: 2
    },
    {
        question: "What was the first commercially successful home video game console?",
        answers: ["Atari 2600", "Magnavox Odyssey", "Colecovision", "Intellivision"],
        correctAnswer: 1
    },
    {
        question: "What year was the Nintendo Entertainment System released in North America?",
        answers: ["1983", "1985", "1987", "1989"],
        correctAnswer: 1
    },
    {
        question: "Which console lost the 16-bit console war to the SNES?",
        answers: ["Atari Jaguar", "Sega Genesis", "NEC TurboGrafx-16", "Neo Geo"],
        correctAnswer: 1
    },
    {
        question: "What was the last Sega console ever made?",
        answers: ["Sega Saturn", "Sega 32X", "Sega Dreamcast", "Sega CD"],
        correctAnswer: 2
    },
    {
        question: "Which console was the first to introduce a built in DVD player?",
        answers: ["Nintendo GameCube", "Sega Dreamcast", "PlayStation 2", "Xbox"],
        correctAnswer: 2
    },
    {
        question: "What was the original price of the PlayStation 3 at launch in the US?",
        answers: ["$299", "$399", "$499", "$599"],
        correctAnswer: 3
    },
    {
        question: "Which console introduced the motion sensing Wiimote controller?",
        answers: ["PlayStation 3", "Xbox 360", "Nintendo Wii", "Sega Dreamcast"],
        correctAnswer: 2
    },
    {
        question: "What was the codename for the Nintendo GameCube during development?",
        answers: ["Dolphin", "Orca", "Manta", "Marlin"],
        correctAnswer: 0
    },
    {
        question: "Which was the first console to include an online gaming service built in?",
        answers: ["PlayStation 2", "Dreamcast", "Xbox", "GameCube"],
        correctAnswer: 1
    },
    {
        question: "What year did the original PlayStation launch in Japan?",
        answers: ["1992", "1993", "1994", "1995"],
        correctAnswer: 2
    },
    {
        question: "What is the best selling console of all time?",
        answers: ["PlayStation 2", "Nintendo DS", "Game Boy", "PlayStation 4"],
        correctAnswer: 0
    },
    {
        question: "Which console generation did the Xbox 360 and PS3 belong to?",
        answers: ["5th generation", "6th generation", "7th generation", "8th generation"],
        correctAnswer: 2
    },
    {
        question: "What was the Nintendo 64 originally called during development?",
        answers: ["Ultra 64", "Super Nintendo 2", "Project Reality", "N64 Pro"],
        correctAnswer: 0
    },
    {
        question: "Which company made the Dreamcast?",
        answers: ["Nintendo", "Sony", "Atari", "Sega"],
        correctAnswer: 3
    },
    {  
        question: "How many bits was the Sega Genesis?",
        answers: ["8-bit", "16-bit", "32-bit", "64-bit"],
        correctAnswer: 1
    },
    { 
        question: "What year did the original Game Boy launch in Japan?",
        answers: ["1987", "1989", "1991", "1993"],
        correctAnswer: 1
    },
    {
        question: "Which console introduced the DualShock controller with analog sticks?",
        answers: ["PlayStation 1", "Nintendo 64", "Sega Saturn", "Atari Jaguar"],
        correctAnswer: 0
    },
    {
        question: "What was the Xbox One's controversial always-online check interval?",
        answers: ["Every hour", "Every 24 hours", "Every week", "No offline mode at all"],
        correctAnswer: 1
    },
    {
        question: "Which handheld console competed directly with the original Game Boy?",
        answers: ["Atari Lynx", "Sega Game Gear", "NEC PC Engine GT", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What was the launch price of the original Xbox in 2001?",
        answers: ["$199", "$249", "$299", "$349"],
        correctAnswer: 2
    },
    {
        question: "Which PlayStation console introduced the trophy system?",
        answers: ["PS2", "PS3", "PS4", "PSP"],
        correctAnswer: 1
    },
    {
        question: "What was the Nintendo Switch's original release date?",
        answers: ["January 2017", "March 2017", "June 2017", "November 2017"],
        correctAnswer: 1
    },
    {
        question: "What was Sega's 32-bit add-on for the Genesis called?",
        answers: ["Sega CD", "Sega 32X", "Sega Saturn", "Sega Neptune"],
        correctAnswer: 1
    },
    {
        question: "Which console had the tagline 'Do you have what it takes'?",
        answers: ["Sega Saturn", "Atari Jaguar", "3DO", "Neo Geo"],
        correctAnswer: 1
    }
];
   



// ============================================
// CATEGORY 4: RETRO & CLASSICS 👾
// ============================================
const retroQuestions = [
    {
        question: "In what year did Atari release the iconic Pong arcade game?",
        answers: ["1970", "1972", "1975", "1978"],
        correctAnswer: 1
    },
    {
        question: "What was the first video game to feature a high score table?",
        answers: ["Pong", "Space Invaders", "Asteroids", "Galaxian"],
        correctAnswer: 1
    },
    {
        question: "Which company created Pac-Man?",
        answers: ["Atari", "Nintendo", "Namco", "Konami"],
        correctAnswer: 2
    },
    {
        question: "What year was Donkey Kong first released in arcades?",
        answers: ["1979", "1981", "1983", "1985"],
        correctAnswer: 1
    },
    {
        question: "What was the original name of Mario before he was called Mario?",
        answers: ["Jumpman", "Superman", "Plumber Pete", "Mr. Video"],
        correctAnswer: 0
    },
    {
        question: "What was the first Nintendo console ever released?",
        answers: ["NES", "Game Boy", "Color TV-Game", "Famicom"],
        correctAnswer: 2
    },
    {
        question: "In Space Invaders which coloured invader is worth the most points?",
        answers: ["Green", "White", "The UFO", "Pink"],
        correctAnswer: 2
    },
    {
        question: "What was the name of the hero in the original Legend of Zelda on NES?",
        answers: ["Zelda", "Link", "Ganon", "Arthur"],
        correctAnswer: 1
    },
    {
        question: "Which classic Konami game featured the famous Konami Code?",
        answers: ["Castlevania", "Metal Gear", "Contra", "Gradius"],
        correctAnswer: 2
    },
    {
        question: "What year was Tetris first created?",
        answers: ["1982", "1984", "1986", "1988"],
        correctAnswer: 1
    },
    {
        question: "Who created Tetris?",
        answers: ["Shigeru Miyamoto", "Alexey Pajitnov", "Nolan Bushnell", "Tomohiro Nishikado"],
        correctAnswer: 1
    },
    {
        question: "What was the first game to be packaged with the original Game Boy?",
        answers: ["Super Mario Land", "Tetris", "Alleyway", "Baseball"],
        correctAnswer: 1
    },
    {
        question: "In the original Street Fighter II who was the main playable character?",
        answers: ["Ken", "Ryu", "Guile", "Chun-Li"],
        correctAnswer: 1
    },
    {
        question: "What year was Sonic the Hedgehog first released?",
        answers: ["1989", "1991", "1993", "1995"],
        correctAnswer: 1
    },
    {
        question: "Which game is considered the first first-person shooter?",
        answers: ["Wolfenstein 3D", "Doom", "Maze War", "Quake"],
        correctAnswer: 2
    },
    {
        question: "What classic game required you to guide a character across a busy road and river?",
        answers: ["Pitfall", "Frogger", "Q-bert", "Centipede"],
        correctAnswer: 1
    },
    {
        question: "Who was the creator of Mario and Donkey Kong?",
        answers: ["Gunpei Yokoi", "Shigeru Miyamoto", "Hiroshi Yamauchi", "Masahiro Sakurai"],
        correctAnswer: 1
    },
    {
        question: "What was the first game to use digitized human actors for sprites?",
        answers: ["Double Dragon", "Mortal Kombat", "Street Fighter II", "Killer Instinct"],
        correctAnswer: 1
    },
    {
        question: "In the original Metroid what was the shocking reveal about Samus?",
        answers: ["Samus was an alien", "Samus was a robot", "Samus was a woman", "Samus was a clone"],
        correctAnswer: 2
    },
    {
        question: "What was the name of the first commercially released 3D fighting game?",
        answers: ["Tekken", "Virtua Fighter", "Soul Edge", "Battle Arena Toshinden"],
        correctAnswer: 1
    },
    {
        question: "Which classic game had you building and managing a city?",
        answers: ["Theme Park", "SimCity", "Civilization", "Caesar"],
        correctAnswer: 1
    },
    {
        question: "What year was the original Doom released?",
        answers: ["1991", "1993", "1995", "1997"],
        correctAnswer: 1
    },
    {
        question: "Which console was Nintendo's first major commercial failure?",
        answers: ["Virtual Boy", "GameCube", "Wii U", "Nintendo 64"],
        correctAnswer: 0
    },
    {
        question: "What game introduced the save battery to preserve game progress?",
        answers: ["Super Mario Bros", "Metroid", "The Legend of Zelda", "Castlevania"],
        correctAnswer: 2
    },
    {
        question: "Which company developed the Neo Geo console?",
        answers: ["Capcom", "SNK", "Konami", "Taito"],
        correctAnswer: 1
    }
];

// ============================================
// CATEGORY 5: FPS & SHOOTERS 🔫
// ============================================

const fpsQuestions = [
    {
        question: "Which game features the character Master Chief as the protagonist?",
        answers: ["Call of Duty", "Halo", "Gears of War", "Destiny"],
        correctAnswer: 1
    },
    {
        question: "What year did the Human-Covenant war start in the Halo series?",
        answers: ["2505", "2553", "2515", "2525"],
        correctAnswer: 3
    },
    {
        question: "Which game series features characters Soap, Ghost and Captain Price?",
        answers: ["Battlefield", "Medal of Honor", "Call of Duty", "Halo"],
        correctAnswer: 2
    },
    {
        question: "What was the first Call of Duty game set in a modern era?",
        answers: ["Call of Duty 2", "Call of Duty 3", "Call of Duty 4: Modern Warfare", "Call of Duty: World at War"],
        correctAnswer: 2
    },
    {
        question: "In which game do you fight in the Galactic Civil War between the Empire and Rebels?",
        answers: ["Halo", "Star Wars Battlefront", "Titanfall", "Republic Commando"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the main AI companion in Halo?",
        answers: ["GLaDOS", "EDI", "Cortana", "SAM"],
        correctAnswer: 2
    },
    {
        question: "Which game popularized the battle royale genre?",
        answers: ["Fortnite", "Overwatch", "PlayerUnknown's Battlegrounds", "Call of Duty: Warzone"],
        correctAnswer: 2
    },
    {
        question: "In Doom what is the name of the player character?",
        answers: ["Commander Keen", "Duke Nukem", "The Doom Slayer", "BJ Blazkowicz"],
        correctAnswer: 2
    },
    {
        question: "Which game introduced regenerating health that became standard in FPS games?",
        answers: ["Halo: Combat Evolved", "Call of Duty 2", "Quake", "Half-Life"],
        correctAnswer: 0
    },
    {
        question: "In Counter-Strike what are the two teams called?",
        answers: ["Cops and Robbers", "Terrorists and Counter-Terrorists", "Attackers and Defenders", "Red and Blue"],
        correctAnswer: 1
    },
    {
        question: "What year was the original Half-Life released?",
        answers: ["1996", "1997", "1998", "1999"],
        correctAnswer: 2
    },
    {
        question: "In Overwatch what is the name of the gorilla scientist hero?",
        answers: ["Doomfist", "Winston", "Roadhog", "Reinhardt"],
        correctAnswer: 1
    },
    {
        question: "Which studio developed the original Halo trilogy?",
        answers: ["343 Industries", "Rare", "Bungie", "Epic Games"],
        correctAnswer: 2
    },
    {
        question: "In Titanfall what are the large mechs called?",
        answers: ["Mechs", "Titans", "Colossi", "Goliaths"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the villain in Halo 2?",
        answers: ["The Flood", "The Didact", "The Arbiter", "The Gravemind"],
        correctAnswer: 3
    },
    {
        question: "Which game features a battle between the IMC and the Frontier Militia?",
        answers: ["Halo 5", "Destiny", "Titanfall", "Warframe"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the alien Covenant ship in Halo: Combat Evolved?",
        answers: ["The Pillar of Autumn", "The Truth and Reconciliation", "High Charity", "The Forward Unto Dawn"],
        correctAnswer: 1
    },
    {
        question: "In Rainbow Six Siege what country does the operator Sledge come from?",
        answers: ["USA", "France", "UK", "Germany"],
        correctAnswer: 2
    },
    {
        question: "What year was the original Battlefield game released?",
        answers: ["2000", "2002", "2004", "2006"],
        correctAnswer: 1
    },
    {
        question: "In Apex Legends what planet does the game take place on?",
        answers: ["Earth", "Mars", "Kings Canyon", "Talos"],
        correctAnswer: 3
    },
    {
        question: "What is the name of the private military company in Call of Duty: Modern Warfare 2?",
        answers: ["Makarov's Army", "Shadow Company", "Task Force 141", "OpFor"],
        correctAnswer: 1
    },
    {
        question: "Which game featured the controversial No Russian mission?",
        answers: ["Call of Duty: World at War", "Call of Duty: Modern Warfare 2", "Battlefield Bad Company 2", "Spec Ops: The Line"],
        correctAnswer: 1
    },
    {
        question: "In Wolfenstein what is the name of the main protagonist?",
        answers: ["Doom Guy", "William BJ Blazkowicz", "Duke Nukem", "John MacTavish"],
        correctAnswer: 1
    },
    {
        question: "Which game introduced the ping system that changed multiplayer communication?",
        answers: ["Fortnite", "Apex Legends", "Warzone", "Overwatch"],
        correctAnswer: 1
    },
    {
        question: "What is the name of the map in the original Counter-Strike that is still played today?",
        answers: ["Dust", "Dust2", "Inferno", "Nuke"],
        correctAnswer: 1
    }
];