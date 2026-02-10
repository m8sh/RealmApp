'use client';

const wordDatabase = [
  {
    id: 'everyday',
    name: 'Objects and Things',
    entries: [
      {
        difficulty: 'easy',
        word: 'Apple',
        hint: 'Fruit',
        imposterWords: ['cider bottle', 'fruit basket', 'snack cup'],
      },
      {
        difficulty: 'easy',
        word: 'Blanket',
        hint: 'Bedding',
        imposterWords: ['tablecloth', 'poncho', 'picnic mat'],
      },
      {
        difficulty: 'easy',
        word: 'Coffee',
        hint: 'Drink',
        imposterWords: ['tea', 'protein shake', 'diet coke'],
      },
      {
        difficulty: 'easy',
        word: 'Pillow',
        hint: 'Bedding',
        imposterWords: ['bean bag', 'armchair', 'yoga ball'],
      },
      {
        difficulty: 'easy',
        word: 'Wallet',
        hint: 'Carry',
        imposterWords: ['lanyard', 'keychain', 'pocket notebook'],
      },
      {
        difficulty: 'easy',
        word: 'Toothbrush',
        hint: 'Bathroom',
        imposterWords: ['dental mirror', 'mouthguard', 'floss pick'],
      },
      {
        difficulty: 'easy',
        word: 'Sandwich',
        hint: 'Lunch',
        imposterWords: ['bento box', 'burrito bowl', 'stuffed pepper'],
      },
      {
        difficulty: 'medium',
        word: 'Calendar',
        hint: 'Planning',
        imposterWords: ['whiteboard', 'countdown chain', 'chalkboard'],
      },
      {
        difficulty: 'medium',
        word: 'Umbrella',
        hint: 'Rain gear',
        imposterWords: ['car visor', 'rain boots', 'windshield cover'],
      },
      {
        difficulty: 'medium',
        word: 'Headphones',
        hint: 'Audio',
        imposterWords: ['noise shield', 'earmuffs', 'conference speaker'],
      },
      {
        difficulty: 'medium',
        word: 'Microwave',
        hint: 'Kitchen',
        imposterWords: ['steam basket', 'warming drawer', 'slow cooker'],
      },
      {
        difficulty: 'medium',
        word: 'Staircase',
        hint: 'Stairs',
        imposterWords: ['rock steps', 'rope ladder', 'cargo ramp'],
      },
      {
        difficulty: 'medium',
        word: 'Passport',
        hint: 'Travel',
        imposterWords: ['travel wallet', 'customs form', 'boarding tag'],
      },
      {
        difficulty: 'medium',
        word: 'Highlighter',
        hint: 'Office',
        imposterWords: ['page flag', 'bold pen', 'laser pointer'],
      },
      {
        difficulty: 'hard',
        word: 'Thermostat',
        hint: 'Climate',
        imposterWords: ['weather station', 'door chime', 'light dimmer'],
      },
      {
        difficulty: 'hard',
        word: 'Power Strip',
        hint: 'Power',
        imposterWords: ['charging cube', 'UPS battery', 'desk grommet'],
      },
      {
        difficulty: 'hard',
        word: 'Flashlight',
        hint: 'Lighting',
        imposterWords: ['signal flare', 'glow bracelet', 'nightlight'],
      },
      {
        difficulty: 'hard',
        word: 'Vacuum Cleaner',
        hint: 'Cleaning',
        imposterWords: ['lint roller', 'dustpan', 'leaf blower'],
      },
      {
        difficulty: 'hard',
        word: 'Router',
        hint: 'Networking',
        imposterWords: ['cable modem', 'ethernet switch', 'range extender'],
      },
      {
        difficulty: 'hard',
        word: 'Tool Kit',
        hint: 'Repairs',
        imposterWords: ['junk drawer', 'sewing kit', 'first aid bag'],
      },
      {
        difficulty: 'hard',
        word: 'Dish Sponge',
        hint: 'Cleaning',
        imposterWords: ['scrub brush', 'microfiber cloth', 'steel mesh pad'],
      },
      {
        difficulty: 'easy',
        word: 'Notebook',
        hint: 'Office',
        imposterWords: ['sketch pad', 'receipt stack', 'clipboard'],
      },
      {
        difficulty: 'easy',
        word: 'Backpack',
        hint: 'Carry',
        imposterWords: ['rolling suitcase', 'messenger tube', 'camera sling'],
      },
      {
        difficulty: 'medium',
        word: 'Remote Control',
        hint: 'Electronics',
        imposterWords: ['game controller', 'light switch', 'wall thermostat'],
      },
      {
        difficulty: 'medium',
        word: 'Water Bottle',
        hint: 'Drinkware',
        imposterWords: ['thermos', 'hydration pack', 'shaker cup'],
      },
      {
        difficulty: 'hard',
        word: 'Charger',
        hint: 'Power',
        imposterWords: ['power bank', 'docking stand', 'solar panel'],
      },
      {
        difficulty: 'hard',
        word: 'Doormat',
        hint: 'Home',
        imposterWords: ['bath mat', 'area rug', 'seat cushion'],
      },
      {
        difficulty: 'easy',
        word: 'Raincoat',
        hint: 'Rain gear',
        imposterWords: ['poncho', 'windbreaker', 'umbrella'],
      },
      {
        difficulty: 'easy',
        word: 'Bicycle',
        imposterWords: ['bike'],
      },
      {
        difficulty: 'easy',
        word: 'Campfire',
        hint: 'Gather around to roast marshmallows.',
        imposterWords: ['bonfire', 'fireplace', 'grill'],
      },
      {
        difficulty: 'easy',
        word: 'Bug Spray',
        hint: 'Protection',
        imposterWords: ['sunscreen', 'hand sanitizer', 'fabric softener'],
      },
      {
        difficulty: 'medium',
        word: 'Hammock',
      },
      {
        difficulty: 'medium',
        word: 'Footbridge',
      },
      {
        difficulty: 'medium',
        word: 'Snowshoes',
      },
      {
        difficulty: 'medium',
        word: 'Kayak',
      },
      {
        difficulty: 'medium',
        word: 'Headlamp',
        hint: 'Lighting',
        imposterWords: ['glow stick', 'lantern hook', 'bike light'],
      },
      {
        difficulty: 'medium',
        word: 'Camp Chair',
        hint: 'Seating',
        imposterWords: ['folding stool', 'yoga block', 'tree stump'],
      },
      {
        difficulty: 'hard',
        word: 'Canteen',
        hint: 'Hydration',
        imposterWords: ['water pouch', 'metal flask', 'hydration hose'],
      },
      {
        difficulty: 'hard',
        word: 'Hiking Boots',
        hint: 'Footwear',
        imposterWords: ['trail sandals', 'rain boots', 'crampons'],
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    entries: [
      { difficulty: 'easy', word: 'Pizza', imposterWords: ['flatbread'] },
      { difficulty: 'easy', word: 'Pancake' },
      { difficulty: 'easy', word: 'Burger', imposterWords: ['sandwich'] },
      { difficulty: 'easy', word: 'Noodles' },
      { difficulty: 'easy', word: 'Salad' },
      { difficulty: 'easy', word: 'Taco', imposterWords: ['burrito'] },
      { difficulty: 'easy', word: 'Cookie' },
      {
        difficulty: 'easy',
        word: 'Trail Mix',
        hint: 'Snack',
        imposterWords: ['protein bar', 'dried fruit pack', 'granola cup'],
      },
      { difficulty: 'medium', word: 'Paella' },
      { difficulty: 'medium', word: 'Dumpling', imposterWords: ['wonton'] },
      { difficulty: 'medium', word: 'Lasagna' },
      { difficulty: 'medium', word: 'Risotto' },
      { difficulty: 'medium', word: 'Sushi Roll', imposterWords: ['maki'] },
      { difficulty: 'medium', word: 'Cupcake' },
      { difficulty: 'medium', word: 'Curry' },
      { difficulty: 'hard', word: 'Souffle', imposterWords: ['custard'] },
      { difficulty: 'hard', word: 'Ceviche' },
      { difficulty: 'hard', word: 'Bouillabaisse' },
      { difficulty: 'hard', word: 'Ratatouille' },
      { difficulty: 'hard', word: 'Tiramisu', imposterWords: ['trifle'] },
      { difficulty: 'hard', word: 'Charcuterie' },
      { difficulty: 'hard', word: 'Gnocchi' },
      {
        difficulty: 'easy',
        word: 'Smoothie',
        hint: 'Drink',
        imposterWords: ['juice box', 'milkshake powder', 'protein shake'],
      },
      {
        difficulty: 'easy',
        word: 'Tortilla',
        hint: 'Staple',
        imposterWords: ['naan bread', 'crepe sheet', 'pita pocket'],
      },
      {
        difficulty: 'medium',
        word: 'Omelet',
        hint: 'Breakfast',
        imposterWords: ['quiche slice', 'breakfast wrap', 'scramble bowl'],
      },
      {
        difficulty: 'medium',
        word: 'Stew',
        hint: 'Dinner',
        imposterWords: ['chili pot', 'curry bowl', 'soup stock'],
      },
      {
        difficulty: 'hard',
        word: 'Popsicle',
        hint: 'Dessert',
        imposterWords: ['frozen yogurt cup', 'snow cone', 'ice tray cubes'],
      },
      {
        difficulty: 'hard',
        word: 'Cheese Board',
        hint: 'Snack',
        imposterWords: ['cracker tray', 'veggie platter', 'dip flight'],
      },
    ],
  },
  {
    id: 'famousPeople',
    name: 'Famous People',
    entries: [
      { difficulty: 'easy', word: 'Singer', hint: 'Performer', imposterWords: ['dancer', 'actor', 'presenter'] },
      { difficulty: 'easy', word: 'Athlete', hint: 'Sports', imposterWords: ['coach', 'referee', 'trainer'] },
      { difficulty: 'easy', word: 'Teacher', hint: 'School', imposterWords: ['tutor', 'assistant', 'counselor'] },
      { difficulty: 'medium', word: 'Scientist', hint: 'Discovery', imposterWords: ['researcher', 'professor', 'analyst'] },
      { difficulty: 'medium', word: 'Inventor', hint: 'Creation', imposterWords: ['entrepreneur', 'designer', 'engineer'] },
      { difficulty: 'medium', word: 'President', hint: 'Leader', imposterWords: ['senator', 'prime minister', 'governor'] },
      { difficulty: 'hard', word: 'Philosopher', hint: 'Ideas', imposterWords: ['historian', 'poet', 'theologian'] },
      { difficulty: 'hard', word: 'Astronaut', hint: 'Space', imposterWords: ['pilot', 'cosmonaut', 'engineer'] },
      { difficulty: 'hard', word: 'Composer', hint: 'Music', imposterWords: ['conductor', 'producer', 'songwriter'] },
    ],
  },
  {
    id: 'history',
    name: 'History',
    entries: [
      { difficulty: 'easy', word: 'Pyramid', hint: 'Ancient', imposterWords: ['obelisk', 'ziggurat', 'temple'] },
      { difficulty: 'easy', word: 'Castle', hint: 'Fortress', imposterWords: ['palace', 'fort', 'manor'] },
      { difficulty: 'easy', word: 'Scroll', hint: 'Document', imposterWords: ['map', 'letter', 'tablet'] },
      { difficulty: 'medium', word: 'Renaissance', hint: 'Era', imposterWords: ['baroque', 'enlightenment', 'medieval'] },
      { difficulty: 'medium', word: 'Revolution', hint: 'Upheaval', imposterWords: ['protest', 'coup', 'rebellion'] },
      { difficulty: 'medium', word: 'Colony', hint: 'Settlement', imposterWords: ['city-state', 'outpost', 'province'] },
      { difficulty: 'hard', word: 'Armistice', hint: 'Truce', imposterWords: ['treaty', 'ceasefire', 'surrender'] },
      { difficulty: 'hard', word: 'Dynasty', hint: 'Ruling family', imposterWords: ['empire', 'kingdom', 'republic'] },
      { difficulty: 'hard', word: 'Artifact', hint: 'Relic', imposterWords: ['fossil', 'replica', 'heirloom'] },
    ],
  },
  {
    id: 'mathTheorems',
    name: 'Math Theorems',
    entries: [
      { difficulty: 'easy', word: 'Pythagorean Theorem', hint: 'Right triangle', imposterWords: ['sine rule', 'cosine rule', 'triangle inequality'] },
      { difficulty: 'medium', word: 'Prime Number Theorem', hint: 'Distribution', imposterWords: ['goldbach conjecture', 'riemann hypothesis', 'twin prime conjecture'] },
      { difficulty: 'medium', word: 'Fermat Last Theorem', hint: 'No whole solutions', imposterWords: ['beal conjecture', 'abc conjecture', 'catalan conjecture'] },
      { difficulty: 'hard', word: 'Godel Incompleteness', hint: 'Limits of proof', imposterWords: ['consistency', 'completeness', 'compactness'] },
      { difficulty: 'hard', word: 'Central Limit Theorem', hint: 'Normal emerges', imposterWords: ['law of large numbers', 'chebyshev inequality', 'ergodic theorem'] },
    ],
  },
  {
    id: 'conspiracyTheories',
    name: 'Conspiracy Theories',
    entries: [
      { difficulty: 'easy', word: 'Flat Earth', hint: 'Shape', imposterWords: ['hollow earth', 'expanding earth', 'cube earth'] },
      { difficulty: 'easy', word: 'Moon Landing Hoax', hint: 'Apollo doubt', imposterWords: ['area 51', 'secret moon base', 'project blue beam'] },
      { difficulty: 'medium', word: 'Chemtrails', hint: 'Sky', imposterWords: ['cloud seeding', 'geoengineering', 'smog alerts'] },
      { difficulty: 'medium', word: 'New World Order', hint: 'Global control', imposterWords: ['shadow government', 'deep state', 'trilateral commission'] },
      { difficulty: 'hard', word: 'Lizard People', hint: 'Shapeshifters', imposterWords: ['men in black', 'time travelers', 'android doubles'] },
      { difficulty: 'hard', word: 'Project Mkultra', hint: 'Mind control', imposterWords: ['operation paperclip', 'project stargate', 'operation northwoods'] },
    ],
  },
  {
    id: 'musicEntertainment',
    name: 'Movies, Music, and Shows',
    entries: [
      { difficulty: 'easy', word: 'Guitar', hint: 'Instrument', imposterWords: ['ukulele', 'banjo', 'bass'] },
      { difficulty: 'easy', word: 'Concert', hint: 'Live show', imposterWords: ['festival', 'parade', 'recital'] },
      { difficulty: 'easy', word: 'Movie', hint: 'Screen', imposterWords: ['short film', 'trailer', 'ad'] },
      { difficulty: 'medium', word: 'Musical', hint: 'Stage', imposterWords: ['opera', 'ballet', 'play'] },
      { difficulty: 'medium', word: 'Podcast', hint: 'Audio', imposterWords: ['radio show', 'audiobook', 'livestream'] },
      { difficulty: 'medium', word: 'Orchestra', hint: 'Ensemble', imposterWords: ['quartet', 'band', 'choir'] },
      { difficulty: 'hard', word: 'Symphony', hint: 'Composition', imposterWords: ['concerto', 'suite', 'sonata'] },
      { difficulty: 'hard', word: 'Documentary', hint: 'Nonfiction', imposterWords: ['biopic', 'news special', 'mockumentary'] },
      { difficulty: 'hard', word: 'Improvisation', hint: 'On the spot', imposterWords: ['rehearsal', 'arrangement', 'cover'] },
    ],
  },
  {
    id: 'videoGames',
    name: 'Video Game Culture',
    entries: [
      { difficulty: 'easy', word: 'Boss Fight', hint: 'End of level', imposterWords: ['mini boss', 'raid', 'puzzle room'] },
      { difficulty: 'easy', word: 'Respawn', hint: 'Back again', imposterWords: ['checkpoint', 'save point', 'reload'] },
      { difficulty: 'easy', word: 'Loot Box', hint: 'Random rewards', imposterWords: ['battle pass', 'season ticket', 'dlc pack'] },
      { difficulty: 'medium', word: 'Speedrun', hint: 'Fast finish', imposterWords: ['time trial', 'challenge mode', 'leaderboard'] },
      { difficulty: 'medium', word: 'Patch Notes', hint: 'Update log', imposterWords: ['dev diary', 'roadmap', 'changelog'] },
      { difficulty: 'medium', word: 'Metagame', hint: 'Prevailing strategy', imposterWords: ['macro', 'micro', 'build order'] },
      { difficulty: 'hard', word: 'Frame Perfect', hint: 'Tight timing', imposterWords: ['lag cancel', 'animation skip', 'buffered input'] },
      { difficulty: 'hard', word: 'Aggro Table', hint: 'Threat list', imposterWords: ['loot table', 'drop rate', 'spawn pool'] },
      { difficulty: 'hard', word: 'Sandbox', hint: 'Open world', imposterWords: ['roguelike', 'linear campaign', 'arena'] },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    entries: [
      { difficulty: 'easy', word: 'Island', hint: 'Surrounded', imposterWords: ['peninsula', 'cay', 'atoll'] },
      { difficulty: 'easy', word: 'River', hint: 'Flowing', imposterWords: ['canal', 'stream', 'delta'] },
      { difficulty: 'easy', word: 'Desert', hint: 'Arid', imposterWords: ['savanna', 'steppe', 'tundra'] },
      { difficulty: 'easy', word: 'Beach', imposterWords: ['shore'] },
      { difficulty: 'easy', word: 'Mountain', imposterWords: ['hill'] },
      { difficulty: 'medium', word: 'Peninsula', hint: 'Landform', imposterWords: ['isthmus', 'cape', 'headland'] },
      { difficulty: 'medium', word: 'Delta', hint: 'Mouth', imposterWords: ['estuary', 'lagoon', 'bayou'] },
      { difficulty: 'medium', word: 'Volcano', hint: 'Mountain', imposterWords: ['geyser', 'caldera', 'crater'] },
      { difficulty: 'medium', word: 'Waterfall', imposterWords: ['cascade'] },
      { difficulty: 'medium', word: 'Orchard' },
      { difficulty: 'medium', word: 'Trailhead', imposterWords: ['trail marker'] },
      { difficulty: 'hard', word: 'Isthmus', hint: 'Narrow link', imposterWords: ['strait', 'corridor', 'pass'] },
      { difficulty: 'hard', word: 'Meridian', hint: 'Longitude', imposterWords: ['parallel', 'equator', 'tropic'] },
      { difficulty: 'hard', word: 'Tectonic Plate', hint: 'Crust', imposterWords: ['fault line', 'rift', 'ridge'] },
      { difficulty: 'hard', word: 'Fjord', hint: 'Glacial inlet', imposterWords: ['bay', 'sound', 'inlet'] },
      { difficulty: 'hard', word: 'Switchback', hint: 'Zigzag trail', imposterWords: ['hairpin', 'curve', 'serpentine road'] },
      { difficulty: 'hard', word: 'Archipelago', hint: 'Island chain', imposterWords: ['peninsula group', 'reef', 'shoal'] },
      { difficulty: 'hard', word: 'Mesa', hint: 'Flat top', imposterWords: ['butte', 'plateau', 'table mountain'] },
      { difficulty: 'hard', word: 'Headland', hint: 'Coastal point', imposterWords: ['cape', 'point', 'promontory'] },
      { difficulty: 'hard', word: 'Overlook', hint: 'Scenic view', imposterWords: ['vista', 'viewpoint', 'scenic point'] },
      { difficulty: 'hard', word: 'Lichen', hint: 'Mossy growth', imposterWords: ['moss', 'algae', 'fungus'] },
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    entries: [
      { difficulty: 'easy', word: 'Laptop', hint: 'Computer', imposterWords: ['tablet', 'desktop', 'netbook'] },
      { difficulty: 'easy', word: 'Smartphone', hint: 'Mobile', imposterWords: ['pager', 'feature phone', 'smartwatch'] },
      { difficulty: 'easy', word: 'Wifi', hint: 'Signal', imposterWords: ['bluetooth', 'hotspot', 'ethernet'] },
      { difficulty: 'easy', word: 'Compass', hint: 'Direction', imposterWords: ['map', 'gps', 'sundial'] },
      { difficulty: 'medium', word: 'Server', hint: 'Backend', imposterWords: ['router', 'switch', 'gateway'] },
      { difficulty: 'medium', word: 'Algorithm', hint: 'Steps', imposterWords: ['formula', 'script', 'workflow'] },
      { difficulty: 'medium', word: 'Database', hint: 'Storage', imposterWords: ['spreadsheet', 'cache', 'filesystem'] },
      { difficulty: 'hard', word: 'Blockchain', hint: 'Ledger', imposterWords: ['hash', 'smart contract', 'node'] },
      { difficulty: 'hard', word: 'Quantum Computer', hint: 'Qubits', imposterWords: ['supercomputer', 'simulator', 'gpu cluster'] },
      { difficulty: 'hard', word: 'Neural Network', hint: 'ML', imposterWords: ['decision tree', 'regression', 'random forest'] },
    ],
  },
  {
    id: 'locations',
    name: 'Locations',
    entries: [
      { difficulty: 'easy', word: 'Airport', hint: 'Flights', imposterWords: ['train station', 'bus terminal', 'harbor'] },
      { difficulty: 'easy', word: 'Museum', hint: 'Exhibits', imposterWords: ['gallery', 'library', 'aquarium'] },
      { difficulty: 'easy', word: 'Beach Boardwalk', hint: 'Shorefront', imposterWords: ['pier', 'marina', 'promenade'] },
      { difficulty: 'medium', word: 'Subway Station', hint: 'Underground', imposterWords: ['tram stop', 'bus depot', 'light rail'] },
      { difficulty: 'medium', word: 'Amphitheater', hint: 'Outdoor venue', imposterWords: ['stadium', 'arena', 'playhouse'] },
      { difficulty: 'medium', word: 'Conference Center', hint: 'Events', imposterWords: ['hotel ballroom', 'auditorium', 'expo hall'] },
      { difficulty: 'hard', word: 'Embassy', hint: 'Diplomatic', imposterWords: ['consulate', 'mission', 'trade office'] },
      { difficulty: 'hard', word: 'Observatory', hint: 'Telescopes', imposterWords: ['planetarium', 'lab', 'control room'] },
      { difficulty: 'hard', word: 'Catacombs', hint: 'Underground tunnels', imposterWords: ['sewers', 'mines', 'crypt'] },
    ],
  },
  {
    id: 'countriesCities',
    name: 'Countries and Cities',
    entries: [
      { difficulty: 'easy', word: 'Paris', hint: 'France', imposterWords: ['lyon', 'marseille', 'nice'] },
      { difficulty: 'easy', word: 'Tokyo', hint: 'Japan', imposterWords: ['osaka', 'kyoto', 'nagoya'] },
      { difficulty: 'easy', word: 'New York', hint: 'USA', imposterWords: ['chicago', 'los angeles', 'boston'] },
      { difficulty: 'easy', word: 'London', hint: 'UK', imposterWords: ['manchester', 'edinburgh', 'cardiff'] },
      { difficulty: 'easy', word: 'Sydney', hint: 'Australia', imposterWords: ['melbourne', 'brisbane', 'perth'] },
      { difficulty: 'medium', word: 'Cairo', hint: 'Egypt', imposterWords: ['alexandria', 'giza', 'luxor'] },
      { difficulty: 'medium', word: 'Istanbul', hint: 'Straddles two continents', imposterWords: ['ankara', 'izmir', 'sofia'] },
      { difficulty: 'medium', word: 'Mexico City', hint: 'High altitude capital', imposterWords: ['guadalajara', 'monterrey', 'puebla'] },
      { difficulty: 'medium', word: 'Mumbai', hint: 'India', imposterWords: ['delhi', 'bangalore', 'chennai'] },
      { difficulty: 'medium', word: 'Toronto', hint: 'Canada', imposterWords: ['vancouver', 'montreal', 'ottawa'] },
      { difficulty: 'medium', word: 'Nairobi', hint: 'Kenya', imposterWords: ['mombasa', 'kampala', 'addis ababa'] },
      { difficulty: 'hard', word: 'Reykjavik', hint: 'Iceland', imposterWords: ['oslo', 'helsinki', 'stockholm'] },
      { difficulty: 'hard', word: 'Lagos', hint: 'Nigeria', imposterWords: ['accra', 'abuja', 'luanda'] },
      { difficulty: 'hard', word: 'Sao Paulo', hint: 'Brazil megacity', imposterWords: ['rio de janeiro', 'brasilia', 'salvador'] },
      { difficulty: 'hard', word: 'Singapore', hint: 'City-state', imposterWords: ['hong kong', 'macau', 'dubai'] },
      { difficulty: 'hard', word: 'Doha', hint: 'Qatar', imposterWords: ['abu dhabi', 'kuwait city', 'muscat'] },
      { difficulty: 'hard', word: 'Auckland', hint: 'New Zealand', imposterWords: ['wellington', 'christchurch', 'queenstown'] },
      { difficulty: 'hard', word: 'Amsterdam', hint: 'Netherlands', imposterWords: ['rotterdam', 'utrecht', 'brussels'] },
      { difficulty: 'hard', word: 'Cape Town', hint: 'South Africa', imposterWords: ['johannesburg', 'durban', 'port elizabeth'] },
      { difficulty: 'hard', word: 'Dover', hint: 'White cliffs', imposterWords: ['calais', 'portsmouth', 'plymouth'] },
    ],
  },
  {
    id: 'animals',
    name: 'Animals',
    entries: [
      { difficulty: 'easy', word: 'Cat', imposterWords: ['kitten', 'lynx', 'ocelot'] },
      { difficulty: 'easy', word: 'Dog', imposterWords: ['wolf', 'fox', 'coyote'] },
      { difficulty: 'easy', word: 'Rabbit', imposterWords: ['hare', 'ferret', 'guinea pig'] },
      { difficulty: 'easy', word: 'Sunflower', hint: 'Plant', imposterWords: ['daisy', 'marigold', 'black-eyed susan'] },
      { difficulty: 'medium', word: 'Dolphin', hint: 'Marine', imposterWords: ['porpoise', 'orca', 'shark'] },
      { difficulty: 'medium', word: 'Eagle', hint: 'Bird', imposterWords: ['hawk', 'falcon', 'vulture'] },
      { difficulty: 'medium', word: 'Octopus', hint: 'Tentacles', imposterWords: ['squid', 'cuttlefish', 'jellyfish'] },
      { difficulty: 'hard', word: 'Platypus', hint: 'Odd mammal', imposterWords: ['beaver', 'otter', 'water rat'] },
      { difficulty: 'hard', word: 'Chameleon', hint: 'Camouflage', imposterWords: ['gecko', 'iguana', 'anole'] },
      { difficulty: 'hard', word: 'Narwhal', hint: 'Arctic', imposterWords: ['beluga', 'walrus', 'manatee'] },
    ],
  },
  {
    id: 'abstract',
    name: 'Abstract and Miscelaneous',
    entries: [
      { difficulty: 'easy', word: 'Luck', hint: 'Fortune', imposterWords: ['chance', 'fate', 'karma'] },
      { difficulty: 'easy', word: 'Dream', hint: 'Sleep', imposterWords: ['wish', 'goal', 'plan'] },
      { difficulty: 'easy', word: 'Time', hint: 'Clock', imposterWords: ['schedule', 'timeline', 'deadline'] },
      { difficulty: 'medium', word: 'Memory', hint: 'Recall', imposterWords: ['habit', 'routine', 'instinct'] },
      { difficulty: 'medium', word: 'Strategy', hint: 'Plan', imposterWords: ['tactic', 'approach', 'method'] },
      { difficulty: 'medium', word: 'Myth', hint: 'Story', imposterWords: ['legend', 'fable', 'rumor'] },
      { difficulty: 'hard', word: 'Paradox', hint: 'Contradiction', imposterWords: ['irony', 'anomaly', 'dilemma'] },
      { difficulty: 'hard', word: 'Justice', hint: 'Fairness', imposterWords: ['law', 'order', 'verdict'] },
      { difficulty: 'hard', word: 'Entropy', hint: 'Disorder', imposterWords: ['chaos', 'decay', 'friction'] },
    ],
  },
];

const difficulties = ['easy', 'medium', 'hard'];

function randomFrom(list) {
  if (!list?.length) return '';
  return list[Math.floor(Math.random() * list.length)];
}

export function listCategories() {
  return wordDatabase.map((category) => ({ id: category.id, label: category.name }));
}

export function listDifficulties() {
  return difficulties.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) }));
}

export function pickWord(categoryIds, difficultyIds) {
  const allowedDifficulties = Array.isArray(difficultyIds)
    ? difficultyIds.filter(Boolean)
    : difficultyIds
    ? [difficultyIds]
    : [];
  const allowed = categoryIds?.length
    ? wordDatabase.filter((c) => categoryIds.includes(c.id))
    : wordDatabase;
  const categoryPool = allowed.length ? allowed : wordDatabase;
  const category = randomFrom(categoryPool) || wordDatabase[0];
  const filtered =
    category?.entries.filter((entry) => {
      if (!allowedDifficulties.length) return false;
      return allowedDifficulties.includes(entry.difficulty);
    }) || [];
  const pool = filtered.length ? filtered : category.entries;
  const entry = pool.length ? randomFrom(pool) : { word: 'Mystery' };
  const altPool = entry.imposterWords?.length
    ? entry.imposterWords
    : pool.map((item) => item.word).filter((word) => word && word !== entry.word);
  const imposterWord = randomFrom(altPool) || `${entry.word}*`;
  return {
    word: entry.word,
    imposterWord,
    hint: entry.hint || '',
  };
}
