'use client';

const wordDatabase = [
  {
    id: 'everyday',
    name: 'Objects and Things',
    entries: [
      {
        difficulty: 'easy',
        word: 'apple',
        hint: 'Fruit',
        imposterWords: ['cider bottle', 'fruit basket', 'snack cup'],
      },
      {
        difficulty: 'easy',
        word: 'blanket',
        hint: 'Bedding',
        imposterWords: ['tablecloth', 'poncho', 'picnic mat'],
      },
      {
        difficulty: 'easy',
        word: 'coffee',
        hint: 'Drink',
        imposterWords: ['tea', 'protein shake', 'diet coke'],
      },
      {
        difficulty: 'easy',
        word: 'pillow',
        hint: 'Bedding',
        imposterWords: ['bean bag', 'armchair', 'yoga ball'],
      },
      {
        difficulty: 'easy',
        word: 'wallet',
        hint: 'Carry',
        imposterWords: ['lanyard', 'keychain', 'pocket notebook'],
      },
      {
        difficulty: 'easy',
        word: 'toothbrush',
        hint: 'Bathroom',
        imposterWords: ['dental mirror', 'mouthguard', 'floss pick'],
      },
      {
        difficulty: 'easy',
        word: 'sandwich',
        hint: 'Lunch',
        imposterWords: ['bento box', 'burrito bowl', 'stuffed pepper'],
      },
      {
        difficulty: 'medium',
        word: 'calendar',
        hint: 'Planning',
        imposterWords: ['whiteboard', 'countdown chain', 'chalkboard'],
      },
      {
        difficulty: 'medium',
        word: 'umbrella',
        hint: 'Rain gear',
        imposterWords: ['car visor', 'rain boots', 'windshield cover'],
      },
      {
        difficulty: 'medium',
        word: 'headphones',
        hint: 'Audio',
        imposterWords: ['noise shield', 'earmuffs', 'conference speaker'],
      },
      {
        difficulty: 'medium',
        word: 'microwave',
        hint: 'Kitchen',
        imposterWords: ['steam basket', 'warming drawer', 'slow cooker'],
      },
      {
        difficulty: 'medium',
        word: 'staircase',
        hint: 'Stairs',
        imposterWords: ['rock steps', 'rope ladder', 'cargo ramp'],
      },
      {
        difficulty: 'medium',
        word: 'passport',
        hint: 'Travel',
        imposterWords: ['travel wallet', 'customs form', 'boarding tag'],
      },
      {
        difficulty: 'medium',
        word: 'highlighter',
        hint: 'Office',
        imposterWords: ['page flag', 'bold pen', 'laser pointer'],
      },
      {
        difficulty: 'hard',
        word: 'thermostat',
        hint: 'Climate',
        imposterWords: ['weather station', 'door chime', 'light dimmer'],
      },
      {
        difficulty: 'hard',
        word: 'power strip',
        hint: 'Power',
        imposterWords: ['charging cube', 'UPS battery', 'desk grommet'],
      },
      {
        difficulty: 'hard',
        word: 'flashlight',
        hint: 'Lighting',
        imposterWords: ['signal flare', 'glow bracelet', 'nightlight'],
      },
      {
        difficulty: 'hard',
        word: 'vacuum cleaner',
        hint: 'Cleaning',
        imposterWords: ['lint roller', 'dustpan', 'leaf blower'],
      },
      {
        difficulty: 'hard',
        word: 'router',
        hint: 'Networking',
        imposterWords: ['cable modem', 'ethernet switch', 'range extender'],
      },
      {
        difficulty: 'hard',
        word: 'tool kit',
        hint: 'Repairs',
        imposterWords: ['junk drawer', 'sewing kit', 'first aid bag'],
      },
      {
        difficulty: 'hard',
        word: 'dish sponge',
        hint: 'Cleaning',
        imposterWords: ['scrub brush', 'microfiber cloth', 'steel mesh pad'],
      },
      {
        difficulty: 'easy',
        word: 'notebook',
        hint: 'Office',
        imposterWords: ['sketch pad', 'receipt stack', 'clipboard'],
      },
      {
        difficulty: 'easy',
        word: 'backpack',
        hint: 'Carry',
        imposterWords: ['rolling suitcase', 'messenger tube', 'camera sling'],
      },
      {
        difficulty: 'medium',
        word: 'remote control',
        hint: 'Electronics',
        imposterWords: ['game controller', 'light switch', 'wall thermostat'],
      },
      {
        difficulty: 'medium',
        word: 'water bottle',
        hint: 'Drinkware',
        imposterWords: ['thermos', 'hydration pack', 'shaker cup'],
      },
      {
        difficulty: 'hard',
        word: 'charger',
        hint: 'Power',
        imposterWords: ['power bank', 'docking stand', 'solar panel'],
      },
      {
        difficulty: 'hard',
        word: 'doormat',
        hint: 'Home',
        imposterWords: ['bath mat', 'area rug', 'seat cushion'],
      },
      {
        difficulty: 'easy',
        word: 'raincoat',
        hint: 'Rain gear',
        imposterWords: ['poncho', 'windbreaker', 'umbrella'],
      },
      {
        difficulty: 'easy',
        word: 'bicycle',
        imposterWords: ['bike'],
      },
      {
        difficulty: 'easy',
        word: 'campfire',
        hint: 'Gather around to roast marshmallows.',
        imposterWords: ['bonfire', 'fireplace', 'grill'],
      },
      {
        difficulty: 'easy',
        word: 'bug spray',
        hint: 'Protection',
        imposterWords: ['sunscreen', 'hand sanitizer', 'fabric softener'],
      },
      {
        difficulty: 'medium',
        word: 'hammock',
      },
      {
        difficulty: 'medium',
        word: 'footbridge',
      },
      {
        difficulty: 'medium',
        word: 'snowshoes',
      },
      {
        difficulty: 'medium',
        word: 'kayak',
      },
      {
        difficulty: 'medium',
        word: 'headlamp',
        hint: 'Lighting',
        imposterWords: ['glow stick', 'lantern hook', 'bike light'],
      },
      {
        difficulty: 'medium',
        word: 'camp chair',
        hint: 'Seating',
        imposterWords: ['folding stool', 'yoga block', 'tree stump'],
      },
      {
        difficulty: 'hard',
        word: 'canteen',
        hint: 'Hydration',
        imposterWords: ['water pouch', 'metal flask', 'hydration hose'],
      },
      {
        difficulty: 'hard',
        word: 'hiking boots',
        hint: 'Footwear',
        imposterWords: ['trail sandals', 'rain boots', 'crampons'],
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    entries: [
      { difficulty: 'easy', word: 'pizza', imposterWords: ['flatbread'] },
      { difficulty: 'easy', word: 'pancake' },
      { difficulty: 'easy', word: 'burger', imposterWords: ['sandwich'] },
      { difficulty: 'easy', word: 'noodles' },
      { difficulty: 'easy', word: 'salad' },
      { difficulty: 'easy', word: 'taco', imposterWords: ['burrito'] },
      { difficulty: 'easy', word: 'cookie' },
      {
        difficulty: 'easy',
        word: 'trail mix',
        hint: 'Snack',
        imposterWords: ['protein bar', 'dried fruit pack', 'granola cup'],
      },
      { difficulty: 'medium', word: 'paella' },
      { difficulty: 'medium', word: 'dumpling', imposterWords: ['wonton'] },
      { difficulty: 'medium', word: 'lasagna' },
      { difficulty: 'medium', word: 'risotto' },
      { difficulty: 'medium', word: 'sushi roll', imposterWords: ['maki'] },
      { difficulty: 'medium', word: 'cupcake' },
      { difficulty: 'medium', word: 'curry' },
      { difficulty: 'hard', word: 'souffle', imposterWords: ['custard'] },
      { difficulty: 'hard', word: 'ceviche' },
      { difficulty: 'hard', word: 'bouillabaisse' },
      { difficulty: 'hard', word: 'ratatouille' },
      { difficulty: 'hard', word: 'tiramisu', imposterWords: ['trifle'] },
      { difficulty: 'hard', word: 'charcuterie' },
      { difficulty: 'hard', word: 'gnocchi' },
      {
        difficulty: 'easy',
        word: 'smoothie',
        hint: 'Drink',
        imposterWords: ['juice box', 'milkshake powder', 'protein shake'],
      },
      {
        difficulty: 'easy',
        word: 'tortilla',
        hint: 'Staple',
        imposterWords: ['naan bread', 'crepe sheet', 'pita pocket'],
      },
      {
        difficulty: 'medium',
        word: 'omelet',
        hint: 'Breakfast',
        imposterWords: ['quiche slice', 'breakfast wrap', 'scramble bowl'],
      },
      {
        difficulty: 'medium',
        word: 'stew',
        hint: 'Dinner',
        imposterWords: ['chili pot', 'curry bowl', 'soup stock'],
      },
      {
        difficulty: 'hard',
        word: 'popsicle',
        hint: 'Dessert',
        imposterWords: ['frozen yogurt cup', 'snow cone', 'ice tray cubes'],
      },
      {
        difficulty: 'hard',
        word: 'cheese board',
        hint: 'Snack',
        imposterWords: ['cracker tray', 'veggie platter', 'dip flight'],
      },
    ],
  },
  {
    id: 'famousPeople',
    name: 'Famous People',
    entries: [
      { difficulty: 'easy', word: 'singer', hint: 'Performer', imposterWords: ['dancer', 'actor', 'presenter'] },
      { difficulty: 'easy', word: 'athlete', hint: 'Sports', imposterWords: ['coach', 'referee', 'trainer'] },
      { difficulty: 'easy', word: 'teacher', hint: 'School', imposterWords: ['tutor', 'assistant', 'counselor'] },
      { difficulty: 'medium', word: 'scientist', hint: 'Discovery', imposterWords: ['researcher', 'professor', 'analyst'] },
      { difficulty: 'medium', word: 'inventor', hint: 'Creation', imposterWords: ['entrepreneur', 'designer', 'engineer'] },
      { difficulty: 'medium', word: 'president', hint: 'Leader', imposterWords: ['senator', 'prime minister', 'governor'] },
      { difficulty: 'hard', word: 'philosopher', hint: 'Ideas', imposterWords: ['historian', 'poet', 'theologian'] },
      { difficulty: 'hard', word: 'astronaut', hint: 'Space', imposterWords: ['pilot', 'cosmonaut', 'engineer'] },
      { difficulty: 'hard', word: 'composer', hint: 'Music', imposterWords: ['conductor', 'producer', 'songwriter'] },
    ],
  },
  {
    id: 'history',
    name: 'History',
    entries: [
      { difficulty: 'easy', word: 'pyramid', hint: 'Ancient', imposterWords: ['obelisk', 'ziggurat', 'temple'] },
      { difficulty: 'easy', word: 'castle', hint: 'Fortress', imposterWords: ['palace', 'fort', 'manor'] },
      { difficulty: 'easy', word: 'scroll', hint: 'Document', imposterWords: ['map', 'letter', 'tablet'] },
      { difficulty: 'medium', word: 'renaissance', hint: 'Era', imposterWords: ['baroque', 'enlightenment', 'medieval'] },
      { difficulty: 'medium', word: 'revolution', hint: 'Upheaval', imposterWords: ['protest', 'coup', 'rebellion'] },
      { difficulty: 'medium', word: 'colony', hint: 'Settlement', imposterWords: ['city-state', 'outpost', 'province'] },
      { difficulty: 'hard', word: 'armistice', hint: 'Truce', imposterWords: ['treaty', 'ceasefire', 'surrender'] },
      { difficulty: 'hard', word: 'dynasty', hint: 'Ruling family', imposterWords: ['empire', 'kingdom', 'republic'] },
      { difficulty: 'hard', word: 'artifact', hint: 'Relic', imposterWords: ['fossil', 'replica', 'heirloom'] },
    ],
  },
  {
    id: 'mathTheorems',
    name: 'Math Theorems',
    entries: [
      { difficulty: 'easy', word: 'pythagorean theorem', hint: 'Right triangle', imposterWords: ['sine rule', 'cosine rule', 'triangle inequality'] },
      { difficulty: 'medium', word: 'prime number theorem', hint: 'Distribution', imposterWords: ['goldbach conjecture', 'riemann hypothesis', 'twin prime conjecture'] },
      { difficulty: 'medium', word: 'fermat last theorem', hint: 'No whole solutions', imposterWords: ['beal conjecture', 'abc conjecture', 'catalan conjecture'] },
      { difficulty: 'hard', word: 'godel incompleteness', hint: 'Limits of proof', imposterWords: ['consistency', 'completeness', 'compactness'] },
      { difficulty: 'hard', word: 'central limit theorem', hint: 'Normal emerges', imposterWords: ['law of large numbers', 'chebyshev inequality', 'ergodic theorem'] },
    ],
  },
  {
    id: 'conspiracyTheories',
    name: 'Conspiracy Theories',
    entries: [
      { difficulty: 'easy', word: 'flat earth', hint: 'Shape', imposterWords: ['hollow earth', 'expanding earth', 'cube earth'] },
      { difficulty: 'easy', word: 'moon landing hoax', hint: 'Apollo doubt', imposterWords: ['area 51', 'secret moon base', 'project blue beam'] },
      { difficulty: 'medium', word: 'chemtrails', hint: 'Sky', imposterWords: ['cloud seeding', 'geoengineering', 'smog alerts'] },
      { difficulty: 'medium', word: 'new world order', hint: 'Global control', imposterWords: ['shadow government', 'deep state', 'trilateral commission'] },
      { difficulty: 'hard', word: 'lizard people', hint: 'Shapeshifters', imposterWords: ['men in black', 'time travelers', 'android doubles'] },
      { difficulty: 'hard', word: 'project mkultra', hint: 'Mind control', imposterWords: ['operation paperclip', 'project stargate', 'operation northwoods'] },
    ],
  },
  {
    id: 'musicEntertainment',
    name: 'Movies, Music, and Shows',
    entries: [
      { difficulty: 'easy', word: 'guitar', hint: 'Instrument', imposterWords: ['ukulele', 'banjo', 'bass'] },
      { difficulty: 'easy', word: 'concert', hint: 'Live show', imposterWords: ['festival', 'parade', 'recital'] },
      { difficulty: 'easy', word: 'movie', hint: 'Screen', imposterWords: ['short film', 'trailer', 'ad'] },
      { difficulty: 'medium', word: 'musical', hint: 'Stage', imposterWords: ['opera', 'ballet', 'play'] },
      { difficulty: 'medium', word: 'podcast', hint: 'Audio', imposterWords: ['radio show', 'audiobook', 'livestream'] },
      { difficulty: 'medium', word: 'orchestra', hint: 'Ensemble', imposterWords: ['quartet', 'band', 'choir'] },
      { difficulty: 'hard', word: 'symphony', hint: 'Composition', imposterWords: ['concerto', 'suite', 'sonata'] },
      { difficulty: 'hard', word: 'documentary', hint: 'Nonfiction', imposterWords: ['biopic', 'news special', 'mockumentary'] },
      { difficulty: 'hard', word: 'improvisation', hint: 'On the spot', imposterWords: ['rehearsal', 'arrangement', 'cover'] },
    ],
  },
  {
    id: 'videoGames',
    name: 'Video Game Culture',
    entries: [
      { difficulty: 'easy', word: 'boss fight', hint: 'End of level', imposterWords: ['mini boss', 'raid', 'puzzle room'] },
      { difficulty: 'easy', word: 'respawn', hint: 'Back again', imposterWords: ['checkpoint', 'save point', 'reload'] },
      { difficulty: 'easy', word: 'loot box', hint: 'Random rewards', imposterWords: ['battle pass', 'season ticket', 'dlc pack'] },
      { difficulty: 'medium', word: 'speedrun', hint: 'Fast finish', imposterWords: ['time trial', 'challenge mode', 'leaderboard'] },
      { difficulty: 'medium', word: 'patch notes', hint: 'Update log', imposterWords: ['dev diary', 'roadmap', 'changelog'] },
      { difficulty: 'medium', word: 'metagame', hint: 'Prevailing strategy', imposterWords: ['macro', 'micro', 'build order'] },
      { difficulty: 'hard', word: 'frame perfect', hint: 'Tight timing', imposterWords: ['lag cancel', 'animation skip', 'buffered input'] },
      { difficulty: 'hard', word: 'aggro table', hint: 'Threat list', imposterWords: ['loot table', 'drop rate', 'spawn pool'] },
      { difficulty: 'hard', word: 'sandbox', hint: 'Open world', imposterWords: ['roguelike', 'linear campaign', 'arena'] },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    entries: [
      { difficulty: 'easy', word: 'island', hint: 'Surrounded', imposterWords: ['peninsula', 'cay', 'atoll'] },
      { difficulty: 'easy', word: 'river', hint: 'Flowing', imposterWords: ['canal', 'stream', 'delta'] },
      { difficulty: 'easy', word: 'desert', hint: 'Arid', imposterWords: ['savanna', 'steppe', 'tundra'] },
      { difficulty: 'easy', word: 'beach', imposterWords: ['shore'] },
      { difficulty: 'easy', word: 'mountain', imposterWords: ['hill'] },
      { difficulty: 'medium', word: 'peninsula', hint: 'Landform', imposterWords: ['isthmus', 'cape', 'headland'] },
      { difficulty: 'medium', word: 'delta', hint: 'Mouth', imposterWords: ['estuary', 'lagoon', 'bayou'] },
      { difficulty: 'medium', word: 'volcano', hint: 'Mountain', imposterWords: ['geyser', 'caldera', 'crater'] },
      { difficulty: 'medium', word: 'waterfall', imposterWords: ['cascade'] },
      { difficulty: 'medium', word: 'orchard' },
      { difficulty: 'medium', word: 'trailhead', imposterWords: ['trail marker'] },
      { difficulty: 'hard', word: 'isthmus', hint: 'Narrow link', imposterWords: ['strait', 'corridor', 'pass'] },
      { difficulty: 'hard', word: 'meridian', hint: 'Longitude', imposterWords: ['parallel', 'equator', 'tropic'] },
      { difficulty: 'hard', word: 'tectonic plate', hint: 'Crust', imposterWords: ['fault line', 'rift', 'ridge'] },
      { difficulty: 'hard', word: 'fjord', hint: 'Glacial inlet', imposterWords: ['bay', 'sound', 'inlet'] },
      { difficulty: 'hard', word: 'switchback', hint: 'Zigzag trail', imposterWords: ['hairpin', 'curve', 'serpentine road'] },
      { difficulty: 'hard', word: 'archipelago', hint: 'Island chain', imposterWords: ['peninsula group', 'reef', 'shoal'] },
      { difficulty: 'hard', word: 'mesa', hint: 'Flat top', imposterWords: ['butte', 'plateau', 'table mountain'] },
      { difficulty: 'hard', word: 'headland', hint: 'Coastal point', imposterWords: ['cape', 'point', 'promontory'] },
      { difficulty: 'hard', word: 'overlook', hint: 'Scenic view', imposterWords: ['vista', 'viewpoint', 'scenic point'] },
      { difficulty: 'hard', word: 'lichen', hint: 'Mossy growth', imposterWords: ['moss', 'algae', 'fungus'] },
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    entries: [
      { difficulty: 'easy', word: 'laptop', hint: 'Computer', imposterWords: ['tablet', 'desktop', 'netbook'] },
      { difficulty: 'easy', word: 'smartphone', hint: 'Mobile', imposterWords: ['pager', 'feature phone', 'smartwatch'] },
      { difficulty: 'easy', word: 'wifi', hint: 'Signal', imposterWords: ['bluetooth', 'hotspot', 'ethernet'] },
      { difficulty: 'easy', word: 'compass', hint: 'Direction', imposterWords: ['map', 'gps', 'sundial'] },
      { difficulty: 'medium', word: 'server', hint: 'Backend', imposterWords: ['router', 'switch', 'gateway'] },
      { difficulty: 'medium', word: 'algorithm', hint: 'Steps', imposterWords: ['formula', 'script', 'workflow'] },
      { difficulty: 'medium', word: 'database', hint: 'Storage', imposterWords: ['spreadsheet', 'cache', 'filesystem'] },
      { difficulty: 'hard', word: 'blockchain', hint: 'Ledger', imposterWords: ['hash', 'smart contract', 'node'] },
      { difficulty: 'hard', word: 'quantum computer', hint: 'Qubits', imposterWords: ['supercomputer', 'simulator', 'gpu cluster'] },
      { difficulty: 'hard', word: 'neural network', hint: 'ML', imposterWords: ['decision tree', 'regression', 'random forest'] },
    ],
  },
  {
    id: 'locations',
    name: 'Locations',
    entries: [
      { difficulty: 'easy', word: 'airport', hint: 'Flights', imposterWords: ['train station', 'bus terminal', 'harbor'] },
      { difficulty: 'easy', word: 'museum', hint: 'Exhibits', imposterWords: ['gallery', 'library', 'aquarium'] },
      { difficulty: 'easy', word: 'beach boardwalk', hint: 'Shorefront', imposterWords: ['pier', 'marina', 'promenade'] },
      { difficulty: 'medium', word: 'subway station', hint: 'Underground', imposterWords: ['tram stop', 'bus depot', 'light rail'] },
      { difficulty: 'medium', word: 'amphitheater', hint: 'Outdoor venue', imposterWords: ['stadium', 'arena', 'playhouse'] },
      { difficulty: 'medium', word: 'conference center', hint: 'Events', imposterWords: ['hotel ballroom', 'auditorium', 'expo hall'] },
      { difficulty: 'hard', word: 'embassy', hint: 'Diplomatic', imposterWords: ['consulate', 'mission', 'trade office'] },
      { difficulty: 'hard', word: 'observatory', hint: 'Telescopes', imposterWords: ['planetarium', 'lab', 'control room'] },
      { difficulty: 'hard', word: 'catacombs', hint: 'Underground tunnels', imposterWords: ['sewers', 'mines', 'crypt'] },
    ],
  },
  {
    id: 'countriesCities',
    name: 'Countries and Cities',
    entries: [
      { difficulty: 'easy', word: 'paris', hint: 'France', imposterWords: ['lyon', 'marseille', 'nice'] },
      { difficulty: 'easy', word: 'tokyo', hint: 'Japan', imposterWords: ['osaka', 'kyoto', 'nagoya'] },
      { difficulty: 'easy', word: 'new york', hint: 'USA', imposterWords: ['chicago', 'los angeles', 'boston'] },
      { difficulty: 'easy', word: 'london', hint: 'UK', imposterWords: ['manchester', 'edinburgh', 'cardiff'] },
      { difficulty: 'easy', word: 'sydney', hint: 'Australia', imposterWords: ['melbourne', 'brisbane', 'perth'] },
      { difficulty: 'medium', word: 'cairo', hint: 'Egypt', imposterWords: ['alexandria', 'giza', 'luxor'] },
      { difficulty: 'medium', word: 'istanbul', hint: 'Straddles two continents', imposterWords: ['ankara', 'izmir', 'sofia'] },
      { difficulty: 'medium', word: 'mexico city', hint: 'High altitude capital', imposterWords: ['guadalajara', 'monterrey', 'puebla'] },
      { difficulty: 'medium', word: 'mumbai', hint: 'India', imposterWords: ['delhi', 'bangalore', 'chennai'] },
      { difficulty: 'medium', word: 'toronto', hint: 'Canada', imposterWords: ['vancouver', 'montreal', 'ottawa'] },
      { difficulty: 'medium', word: 'nairobi', hint: 'Kenya', imposterWords: ['mombasa', 'kampala', 'addis ababa'] },
      { difficulty: 'hard', word: 'reykjavik', hint: 'Iceland', imposterWords: ['oslo', 'helsinki', 'stockholm'] },
      { difficulty: 'hard', word: 'lagos', hint: 'Nigeria', imposterWords: ['accra', 'abuja', 'luanda'] },
      { difficulty: 'hard', word: 'sao paulo', hint: 'Brazil megacity', imposterWords: ['rio de janeiro', 'brasilia', 'salvador'] },
      { difficulty: 'hard', word: 'singapore', hint: 'City-state', imposterWords: ['hong kong', 'macau', 'dubai'] },
      { difficulty: 'hard', word: 'doha', hint: 'Qatar', imposterWords: ['abu dhabi', 'kuwait city', 'muscat'] },
      { difficulty: 'hard', word: 'auckland', hint: 'New Zealand', imposterWords: ['wellington', 'christchurch', 'queenstown'] },
      { difficulty: 'hard', word: 'amsterdam', hint: 'Netherlands', imposterWords: ['rotterdam', 'utrecht', 'brussels'] },
      { difficulty: 'hard', word: 'cape town', hint: 'South Africa', imposterWords: ['johannesburg', 'durban', 'port elizabeth'] },
      { difficulty: 'hard', word: 'dover', hint: 'White cliffs', imposterWords: ['calais', 'portsmouth', 'plymouth'] },
    ],
  },
  {
    id: 'animals',
    name: 'Animals',
    entries: [
      { difficulty: 'easy', word: 'cat', imposterWords: ['kitten', 'lynx', 'ocelot'] },
      { difficulty: 'easy', word: 'dog', imposterWords: ['wolf', 'fox', 'coyote'] },
      { difficulty: 'easy', word: 'rabbit', imposterWords: ['hare', 'ferret', 'guinea pig'] },
      { difficulty: 'easy', word: 'sunflower', hint: 'Plant', imposterWords: ['daisy', 'marigold', 'black-eyed susan'] },
      { difficulty: 'medium', word: 'dolphin', hint: 'Marine', imposterWords: ['porpoise', 'orca', 'shark'] },
      { difficulty: 'medium', word: 'eagle', hint: 'Bird', imposterWords: ['hawk', 'falcon', 'vulture'] },
      { difficulty: 'medium', word: 'octopus', hint: 'Tentacles', imposterWords: ['squid', 'cuttlefish', 'jellyfish'] },
      { difficulty: 'hard', word: 'platypus', hint: 'Odd mammal', imposterWords: ['beaver', 'otter', 'water rat'] },
      { difficulty: 'hard', word: 'chameleon', hint: 'Camouflage', imposterWords: ['gecko', 'iguana', 'anole'] },
      { difficulty: 'hard', word: 'narwhal', hint: 'Arctic', imposterWords: ['beluga', 'walrus', 'manatee'] },
    ],
  },
  {
    id: 'abstract',
    name: 'Abstract and Miscelaneous',
    entries: [
      { difficulty: 'easy', word: 'luck', hint: 'Fortune', imposterWords: ['chance', 'fate', 'karma'] },
      { difficulty: 'easy', word: 'dream', hint: 'Sleep', imposterWords: ['wish', 'goal', 'plan'] },
      { difficulty: 'easy', word: 'time', hint: 'Clock', imposterWords: ['schedule', 'timeline', 'deadline'] },
      { difficulty: 'medium', word: 'memory', hint: 'Recall', imposterWords: ['habit', 'routine', 'instinct'] },
      { difficulty: 'medium', word: 'strategy', hint: 'Plan', imposterWords: ['tactic', 'approach', 'method'] },
      { difficulty: 'medium', word: 'myth', hint: 'Story', imposterWords: ['legend', 'fable', 'rumor'] },
      { difficulty: 'hard', word: 'paradox', hint: 'Contradiction', imposterWords: ['irony', 'anomaly', 'dilemma'] },
      { difficulty: 'hard', word: 'justice', hint: 'Fairness', imposterWords: ['law', 'order', 'verdict'] },
      { difficulty: 'hard', word: 'entropy', hint: 'Disorder', imposterWords: ['chaos', 'decay', 'friction'] },
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
  const entry = pool.length ? randomFrom(pool) : { word: 'mystery' };
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
