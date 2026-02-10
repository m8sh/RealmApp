'use client';

const wordDatabase = [
  {
    id: 'everyday',
    name: 'Objects and Things',
    entries: [
      // Easy — Kitchen Items
      { difficulty: 'easy', word: 'Mug', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Coaster', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Apron', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Mixing Bowl', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Cutting Board', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Spice Rack', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Tray', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Peeler', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Oven Mitt', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Tongs', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Spatula', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Toaster', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Refrigerator', hint: 'Kitchen Items' },
      { difficulty: 'easy', word: 'Stove', hint: 'Kitchen Items' },

      // Easy — Office and School Supplies
      { difficulty: 'easy', word: 'Folder', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Notebook', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Sticky Notes', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Paper Clips', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Tape', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Marker', hint: 'Office And School Supplies' },
      { difficulty: 'easy', word: 'Stapler', hint: 'Office And School Supplies' },

      // Easy - Accessories
      { difficulty: 'easy', word: 'Wallet', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Backpack', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Sunglasses', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Bracelet', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Belt', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Keychain', hint: 'Accessories' },
      { difficulty: 'easy', word: 'Gloves', hint: 'Accessories' },

      // Easy - Outdoor Items
      { difficulty: 'easy', word: 'Umbrella', hint: 'Outdoor Items' },
      { difficulty: 'easy', word: 'Raincoat', hint: 'Outdoor Items' },
      { difficulty: 'easy', word: 'Campfire', hint: 'Outdoor Items' },
      { difficulty: 'easy', word: 'Bug Spray', hint: 'Outdoor Items' },
      { difficulty: 'easy', word: 'Bicycle', hint: 'Outdoor Items' },
      { difficulty: 'easy', word: 'Picnic Basket', hint: 'Outdoor Items' },

      // Easy - Plants
      { difficulty: 'easy', word: 'Sunflower', hint: 'Plants' },
      { difficulty: 'easy', word: 'Maple Tree', hint: 'Plants' },
      { difficulty: 'easy', word: 'Bamboo Shoot', hint: 'Plants' },

      // Easy - Bedroom Items
      { difficulty: 'easy', word: 'Blanket', hint: 'Bedroom Items' },
      { difficulty: 'easy', word: 'Pillow', hint: 'Bedroom Items' },
      { difficulty: 'easy', word: 'Curtain', hint: 'Bedroom Items' },

      // Easy - Tools and Equipment
      { difficulty: 'easy', word: 'Flashlight', hint: 'Tools And Equipment' },
      { difficulty: 'easy', word: 'Scissors', hint: 'Tools And Equipment' },
      { difficulty: 'easy', word: 'Tape Measure', hint: 'Tools And Equipment' },
      { difficulty: 'easy', word: 'Hard Hat', hint: 'Tools And Equipment' },
      { difficulty: 'easy', word: 'Hammer', hint: 'Tools And Equipment' },

      // Easy - Objects and Things
      { difficulty: 'easy', word: 'Toothbrush', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Trash Can', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Candle', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Picture Frame', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Bookmark', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Wind Chime', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Paperweight', hint: 'Objects And Things' },
      { difficulty: 'easy', word: 'Remote Control', hint: 'Objects And Things' },

      // Medium - Kitchen Items
      { difficulty: 'medium', word: 'Microwave', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Measuring Cup', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Electric Kettle', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Blender', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Air Fryer', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Skillet', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Teapot', hint: 'Kitchen Items' },
      { difficulty: 'medium', word: 'Juicer', hint: 'Kitchen Items' },

      // Medium - Office and School Supplies
      { difficulty: 'medium', word: 'Calendar', hint: 'Office And School Supplies' },
      { difficulty: 'medium', word: 'Whiteboard', hint: 'Office And School Supplies' },
      { difficulty: 'medium', word: 'Projector', hint: 'Office And School Supplies' },
      { difficulty: 'medium', word: 'Standing Desk', hint: 'Office And School Supplies' },
      { difficulty: 'medium', word: 'File Cabinet', hint: 'Office And School Supplies' },
      { difficulty: 'medium', word: 'Shredder', hint: 'Office And School Supplies' },

      // Medium - Accessories
      { difficulty: 'medium', word: 'Lanyard', hint: 'Accessories' },
      { difficulty: 'medium', word: 'Neck Pillow', hint: 'Accessories' },
      { difficulty: 'medium', word: 'Pocket Square', hint: 'Accessories' },
      { difficulty: 'medium', word: 'Money Clip', hint: 'Accessories' },

      // Medium — Outdoor Items
      { difficulty: 'medium', word: 'Hammock', hint: 'Outdoor Items' },
      { difficulty: 'medium', word: 'Kayak', hint: 'Outdoor Items' },
      { difficulty: 'medium', word: 'Headlamp', hint: 'Outdoor Items' },
      { difficulty: 'medium', word: 'Canteen', hint: 'Outdoor Items' },
      { difficulty: 'medium', word: 'Hiking Boots', hint: 'Outdoor Items' },

      // Medium - Tools and Equipment
      { difficulty: 'medium', word: 'Thermostat', hint: 'Tools And Equipment' },
      { difficulty: 'medium', word: 'Vacuum Cleaner', hint: 'Tools And Equipment' },
      { difficulty: 'medium', word: 'Air Purifier', hint: 'Tools And Equipment' },
      { difficulty: 'medium', word: 'Pulley', hint: 'Tools And Equipment' },

      // Medium - Objects and Things
      { difficulty: 'medium', word: 'Bookshelf', hint: 'Objects And Things' },
      { difficulty: 'medium', word: 'Clock', hint: 'Objects And Things' },
      { difficulty: 'medium', word: 'Globe', hint: 'Objects And Things' },
      { difficulty: 'medium', word: 'Mirror', hint: 'Objects And Things' },

      // Hard - Accessories
      { difficulty: 'hard', word: 'Shoe Horn', hint: 'Accessories' },

      // Hard - Outdoor Items
      { difficulty: 'hard', word: 'Snowshoes', hint: 'Outdoor Items' },
      { difficulty: 'hard', word: 'Axe', hint: 'Outdoor Items' },
      { difficulty: 'hard', word: 'Beacon', hint: 'Outdoor Items' },
      { difficulty: 'hard', word: 'Climbing Harness', hint: 'Outdoor Items' },
      { difficulty: 'hard', word: 'Tent', hint: 'Outdoor Items' },
      { difficulty: 'hard', word: 'Crampons', hint: 'Outdoor Items' },

      // Hard - Kitchen Items
      { difficulty: 'hard', word: 'Pressure Cooker', hint: 'Kitchen Items' },
      { difficulty: 'hard', word: 'Espresso Machine', hint: 'Kitchen Items' },
      { difficulty: 'hard', word: 'Smoker', hint: 'Kitchen Items' },
      { difficulty: 'hard', word: 'Ice Cream Maker', hint: 'Kitchen Items' },
      { difficulty: 'hard', word: 'Meat Grinder', hint: 'Kitchen Items' },
      { difficulty: 'hard', word: 'Mortar And Pestle', hint: 'Kitchen Items' },

      // Hard - Tools and Equipment
      { difficulty: 'hard', word: '3D Printer', hint: 'Tools And Equipment' },
      { difficulty: 'hard', word: 'Anvil', hint: 'Tools And Equipment' },
      { difficulty: 'hard', word: 'Laser Cutter', hint: 'Tools And Equipment' },
      { difficulty: 'hard', word: 'Blowtorch', hint: 'Tools And Equipment' },
      { difficulty: 'hard', word: 'Vacuum Sealer', hint: 'Tools And Equipment' },
    ]
      },
  {
    id: 'food',
    name: 'Food',
    entries: [
      { difficulty: 'easy', word: 'Pizza' },
      { difficulty: 'easy', word: 'Pancake' },
      { difficulty: 'easy', word: 'Burger' },
      { difficulty: 'easy', word: 'Noodles' },
      { difficulty: 'easy', word: 'Salad' },
      { difficulty: 'easy', word: 'Taco' },
      { difficulty: 'easy', word: 'Cookie' },
      { difficulty: 'easy', word: 'Coffee', hint: 'Drink' },
      { difficulty: 'easy', word: 'Sandwich', hint: 'Lunch' },
      {
        difficulty: 'easy',
        word: 'Apple',
        hint: 'Fruit'
      },
      {
        difficulty: 'easy',
        word: 'Trail Mix',
        hint: 'Snack'
      },
      { difficulty: 'medium', word: 'Paella' },
      { difficulty: 'medium', word: 'Dumpling' },
      { difficulty: 'medium', word: 'Lasagna' },
      { difficulty: 'medium', word: 'Risotto' },
      { difficulty: 'medium', word: 'Sushi Roll' },
      { difficulty: 'medium', word: 'Cupcake' },
      { difficulty: 'medium', word: 'Curry' },
      { difficulty: 'hard', word: 'Souffle' },
      { difficulty: 'hard', word: 'Ceviche' },
      { difficulty: 'hard', word: 'Bouillabaisse' },
      { difficulty: 'hard', word: 'Ratatouille' },
      { difficulty: 'hard', word: 'Tiramisu' },
      { difficulty: 'hard', word: 'Charcuterie' },
      { difficulty: 'hard', word: 'Gnocchi' },
      {
        difficulty: 'easy',
        word: 'Smoothie',
        hint: 'Drink'
      },
      {
        difficulty: 'easy',
        word: 'Tortilla',
        hint: 'Staple'
      },
      {
        difficulty: 'medium',
        word: 'Omelet',
        hint: 'Breakfast'
      },
      {
        difficulty: 'medium',
        word: 'Stew',
        hint: 'Dinner'
      },
      {
        difficulty: 'hard',
        word: 'Popsicle',
        hint: 'Dessert'
      },
      {
        difficulty: 'hard',
        word: 'Cheese Board',
        hint: 'Snack'
      },
    ]
      },
  {
    id: 'famousPeople',
    name: 'Famous People',
    entries: [
      {
        difficulty: 'easy',
        word: 'Michael Jordan',
        hint: 'Basketball Legend'
      },
      {
        difficulty: 'easy',
        word: 'Oprah Winfrey',
        hint: 'Talk Show Icon'
      },
      {
        difficulty: 'medium',
        word: 'Albert Einstein',
        hint: 'Relativity'
      },
      {
        difficulty: 'medium',
        word: 'Marilyn Monroe',
        hint: 'Old Hollywood'
      },
      {
        difficulty: 'medium',
        word: 'Elvis Presley',
        hint: 'Rock And Roll'
      },
      {
        difficulty: 'hard',
        word: 'Frida Kahlo',
        hint: 'Mexican Artist'
      },
      {
        difficulty: 'hard',
        word: 'Ada Lovelace',
        hint: 'Computing Pioneer'
      },
      {
        difficulty: 'hard',
        word: 'Nikola Tesla',
        hint: 'Inventor'
      },
    ]
      },
  {
    id: 'history',
    name: 'History',
    entries: [
      { difficulty: 'easy', word: 'Pyramid', hint: 'Ancient' },
      { difficulty: 'easy', word: 'Castle', hint: 'Fortress' },
      { difficulty: 'easy', word: 'Scroll', hint: 'Document' },
      { difficulty: 'medium', word: 'Renaissance', hint: 'Era' },
      { difficulty: 'medium', word: 'Revolution', hint: 'Upheaval' },
      { difficulty: 'medium', word: 'Colony', hint: 'Settlement' },
      { difficulty: 'hard', word: 'Armistice', hint: 'Truce' },
      { difficulty: 'hard', word: 'Dynasty', hint: 'Ruling Family' },
      { difficulty: 'hard', word: 'Artifact', hint: 'Relic' },
    ]
      },
  {
    id: 'mathTheorems',
    name: 'Math Theorems',
    entries: [
      { difficulty: 'easy', word: 'Pythagorean Theorem', hint: 'Right Triangle' },
      { difficulty: 'medium', word: 'Prime Number Theorem', hint: 'Distribution' },
      { difficulty: 'medium', word: 'Fermat Last Theorem', hint: 'No Whole Solutions' },
      { difficulty: 'hard', word: 'Godel Incompleteness', hint: 'Limits Of Proof' },
      { difficulty: 'hard', word: 'Central Limit Theorem', hint: 'Normal Emerges' },
    ]
      },
  {
    id: 'conspiracyTheories',
    name: 'Conspiracy Theories',
    entries: [
      { difficulty: 'easy', word: 'Flat Earth', hint: 'Shape' },
      { difficulty: 'easy', word: 'Moon Landing Hoax', hint: 'Apollo Doubt' },
      { difficulty: 'medium', word: 'Chemtrails', hint: 'Sky' },
      { difficulty: 'medium', word: 'New World Order', hint: 'Global Control' },
      { difficulty: 'hard', word: 'Lizard People', hint: 'Shapeshifters' },
      { difficulty: 'hard', word: 'Project Mkultra', hint: 'Mind Control' },
    ]
      },
  {
    id: 'musicEntertainment',
    name: 'Movies, Music, and Shows',
    entries: [
      { difficulty: 'easy', word: 'Guitar', hint: 'Instrument' },
      { difficulty: 'easy', word: 'Concert', hint: 'Live Show' },
      { difficulty: 'easy', word: 'Movie', hint: 'Screen' },
      { difficulty: 'medium', word: 'Musical', hint: 'Stage' },
      { difficulty: 'medium', word: 'Podcast', hint: 'Audio' },
      { difficulty: 'medium', word: 'Orchestra', hint: 'Ensemble' },
      { difficulty: 'hard', word: 'Symphony', hint: 'Composition' },
      { difficulty: 'hard', word: 'Documentary', hint: 'Nonfiction' },
      { difficulty: 'hard', word: 'Improvisation', hint: 'On The Spot' },
    ]
      },
  {
    id: 'videoGames',
    name: 'Video Game Culture',
    entries: [
      { difficulty: 'easy', word: 'Boss Fight', hint: 'End Of Level' },
      { difficulty: 'easy', word: 'Respawn', hint: 'Back Again' },
      { difficulty: 'easy', word: 'Loot Box', hint: 'Random Rewards' },
      { difficulty: 'medium', word: 'Speedrun', hint: 'Fast Finish' },
      { difficulty: 'medium', word: 'Patch Notes', hint: 'Update Log' },
      { difficulty: 'medium', word: 'Metagame', hint: 'Prevailing Strategy' },
      { difficulty: 'hard', word: 'Frame Perfect', hint: 'Tight Timing' },
      { difficulty: 'hard', word: 'Aggro Table', hint: 'Threat List' },
      { difficulty: 'hard', word: 'Sandbox', hint: 'Open World' },
    ]
      },
  {
    id: 'geography',
    name: 'Geography',
    entries: [
      { difficulty: 'easy', word: 'Island', hint: 'Surrounded' },
      { difficulty: 'easy', word: 'River', hint: 'Flowing' },
      { difficulty: 'easy', word: 'Desert', hint: 'Arid' },
      { difficulty: 'easy', word: 'Beach' },
      { difficulty: 'easy', word: 'Mountain' },
      { difficulty: 'medium', word: 'Peninsula', hint: 'Landform' },
      { difficulty: 'medium', word: 'Delta', hint: 'Mouth' },
      { difficulty: 'medium', word: 'Volcano', hint: 'Mountain' },
      { difficulty: 'medium', word: 'Waterfall' },
      { difficulty: 'medium', word: 'Orchard' },
      { difficulty: 'medium', word: 'Trailhead' },
      { difficulty: 'hard', word: 'Isthmus', hint: 'Narrow Link' },
      { difficulty: 'hard', word: 'Meridian', hint: 'Longitude' },
      { difficulty: 'hard', word: 'Tectonic Plate', hint: 'Crust' },
      { difficulty: 'hard', word: 'Fjord', hint: 'Glacial Inlet' },
      { difficulty: 'hard', word: 'Switchback', hint: 'Zigzag Trail' },
      { difficulty: 'hard', word: 'Archipelago', hint: 'Island Chain' },
      { difficulty: 'hard', word: 'Mesa', hint: 'Flat Top' },
      { difficulty: 'hard', word: 'Headland', hint: 'Coastal Point' },
      { difficulty: 'hard', word: 'Overlook', hint: 'Scenic View' },
      { difficulty: 'hard', word: 'Lichen', hint: 'Mossy Growth' },
    ]
      },
  {
    id: 'technology',
    name: 'Technology',
    entries: [
      { difficulty: 'easy', word: 'Laptop', hint: 'Computer' },
      { difficulty: 'easy', word: 'Smartphone', hint: 'Mobile' },
      { difficulty: 'easy', word: 'Wifi', hint: 'Signal' },
      { difficulty: 'easy', word: 'Compass', hint: 'Direction' },
      { difficulty: 'easy', word: 'Headphones', hint: 'Audio' },
      { difficulty: 'easy', word: 'Remote Control', hint: 'Electronics' },
      { difficulty: 'medium', word: 'Bluetooth Speaker', hint: 'Portable Audio' },
      { difficulty: 'medium', word: 'Server', hint: 'Backend' },
      { difficulty: 'medium', word: 'Algorithm', hint: 'Steps' },
      { difficulty: 'medium', word: 'Database', hint: 'Storage' },
      { difficulty: 'medium', word: 'Router', hint: 'Networking' },
      { difficulty: 'medium', word: 'Power Strip', hint: 'Power' },
      { difficulty: 'medium', word: 'Charger', hint: 'Power' },
      { difficulty: 'medium', word: 'Smartwatch', hint: 'Wearable' },
      { difficulty: 'hard', word: 'Blockchain', hint: 'Ledger' },
      { difficulty: 'hard', word: 'Quantum Computer', hint: 'Qubits' },
      { difficulty: 'hard', word: 'Neural Network', hint: 'ML' },
    ]
      },
  {
    id: 'locations',
    name: 'Locations',
    entries: [
      { difficulty: 'easy', word: 'Airport', hint: 'Flights' },
      { difficulty: 'easy', word: 'Museum', hint: 'Exhibits' },
      { difficulty: 'easy', word: 'Beach Boardwalk', hint: 'Shorefront' },
      { difficulty: 'medium', word: 'Subway Station', hint: 'Underground' },
      { difficulty: 'medium', word: 'Amphitheater', hint: 'Outdoor Venue' },
      { difficulty: 'medium', word: 'Conference Center', hint: 'Events' },
      { difficulty: 'hard', word: 'Embassy', hint: 'Diplomatic' },
      { difficulty: 'hard', word: 'Observatory', hint: 'Telescopes' },
      { difficulty: 'hard', word: 'Catacombs', hint: 'Underground Tunnels' },
    ]
      },
  {
    id: 'countriesCities',
    name: 'Countries and Cities',
    entries: [
      { difficulty: 'easy', word: 'Paris', hint: 'France' },
      { difficulty: 'easy', word: 'Tokyo', hint: 'Japan' },
      { difficulty: 'easy', word: 'New York', hint: 'USA' },
      { difficulty: 'easy', word: 'London', hint: 'UK' },
      { difficulty: 'easy', word: 'Sydney', hint: 'Australia' },
      { difficulty: 'medium', word: 'Cairo', hint: 'Egypt' },
      { difficulty: 'medium', word: 'Istanbul', hint: 'Straddles Two Continents' },
      { difficulty: 'medium', word: 'Mexico City', hint: 'High Altitude Capital' },
      { difficulty: 'medium', word: 'Mumbai', hint: 'India' },
      { difficulty: 'medium', word: 'Toronto', hint: 'Canada' },
      { difficulty: 'medium', word: 'Nairobi', hint: 'Kenya' },
      { difficulty: 'hard', word: 'Reykjavik', hint: 'Iceland' },
      { difficulty: 'hard', word: 'Lagos', hint: 'Nigeria' },
      { difficulty: 'hard', word: 'Sao Paulo', hint: 'Brazil Megacity' },
      { difficulty: 'hard', word: 'Singapore', hint: 'City-State' },
      { difficulty: 'hard', word: 'Doha', hint: 'Qatar' },
      { difficulty: 'hard', word: 'Auckland', hint: 'New Zealand' },
      { difficulty: 'hard', word: 'Amsterdam', hint: 'Netherlands' },
      { difficulty: 'hard', word: 'Cape Town', hint: 'South Africa' },
      { difficulty: 'hard', word: 'Dover', hint: 'White Cliffs' },
    ]
      },
  {
    id: 'animals',
    name: 'Animals',
    entries: [
      { difficulty: 'easy', word: 'Cat' },
      { difficulty: 'easy', word: 'Dog' },
      { difficulty: 'easy', word: 'Rabbit' },
      { difficulty: 'medium', word: 'Dolphin', hint: 'Marine' },
      { difficulty: 'medium', word: 'Eagle', hint: 'Bird' },
      { difficulty: 'medium', word: 'Octopus', hint: 'Tentacles' },
      { difficulty: 'hard', word: 'Platypus', hint: 'Odd Mammal' },
      { difficulty: 'hard', word: 'Chameleon', hint: 'Camouflage' },
      { difficulty: 'hard', word: 'Narwhal', hint: 'Arctic' },
    ]
      },
  {
    id: 'abstract',
    name: 'Abstract and Miscelaneous',
    entries: [
      { difficulty: 'easy', word: 'Luck', hint: 'Fortune' },
      { difficulty: 'easy', word: 'Dream', hint: 'Sleep' },
      { difficulty: 'easy', word: 'Time', hint: 'Clock' },
      { difficulty: 'medium', word: 'Memory', hint: 'Recall' },
      { difficulty: 'medium', word: 'Strategy', hint: 'Plan' },
      { difficulty: 'medium', word: 'Myth', hint: 'Story' },
      { difficulty: 'hard', word: 'Paradox', hint: 'Contradiction' },
      { difficulty: 'hard', word: 'Justice', hint: 'Fairness' },
      { difficulty: 'hard', word: 'Entropy', hint: 'Disorder' },
    ]
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
  const sameHintPool = categoryPool
    .flatMap((cat) => cat.entries.filter((e) => e.hint === entry.hint).map((e) => e.word))
    .filter((w) => w && w !== entry.word);
  const fallbackPool = pool.map((item) => item.word).filter((word) => word && word !== entry.word);
  const altPool = sameHintPool.length ? sameHintPool : fallbackPool;
  const imposterWord = randomFrom(altPool) || `${entry.word}*`;
  return {
    word: entry.word,
    imposterWord,
    hint: entry.hint || '',
    categoryName: category.name,
  };
}
