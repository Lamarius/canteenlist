var data = {
  ingredients: [
    /** Meat **/
    // Courage
    { name: 'Wyvern Thigh', id: 'm00', category: 'meat', type: 'courage', acquired: true, method: 'Starter', location: null, hint: null, url: null },
    { name: 'Wyvern Skirt Steak', id: 'm01', category: 'meat', type: 'courage', acquired: true, method: 'Starter', location: null, hint: null, url: null },
    { name: 'Wyvern Egg', id: 'm02', category: 'meat', type: 'courage', acquired: false, method: 'Quest', location: 'Ancient Forest', hint: 'Gettin\' Yolked in the Forest', url: 'https://monsterhunterworld.wiki.fextralife.com/Gettin\'+Yolked+in+the+Forest' },
    { name: 'Wyvern Tail', id: 'm03', category: 'meat', type: 'courage', acquired: false, method: 'Research Help', location: null, hint: 'Research Help: Woodland Pteryx Capture', url: 'https://monsterhunterworld.wiki.fextralife.com/Woodland+Pteryx' },
    { name: 'Wyvern Head', id: 'm04', category: 'meat', type: 'courage', acquired: false, method: 'Quest', location: 'Ancient Forest', hint: 'Flying Sparks: Tobi-Kadachi', url: 'https://monsterhunterworld.wiki.fextralife.com/Flying+Sparks:+Tobi-Kadachi' },
    { name: 'Wyver Filet', id: 'm05', category: 'meat', type: 'courage', acquired: false, method: 'Gather', location: 'Elder\'s Recess', hint: 'Upsurge: Amber Deposits (Twilight Stone) (Must complete Cultural Exchange: Gajalaka Linguistics II)', url: 'https://monsterhunterworld.wiki.fextralife.com/Twilight+Stone' },
    // Resilience
    { name: 'Tough Meat', id: 'm10', category: 'meat', type: 'resilience', acquired: false, method: 'Quest', location: 'Ancient Forest', hint: 'Flying Sparks: Tobi-Kadachi', url: 'https://monsterhunterworld.wiki.fextralife.com/Flying+Sparks:+Tobi-Kadachi' },
    { name: 'Thorny Meat', id: 'm11', category: 'meat', type: 'resilience', acquired: false, method: 'Quest', location: 'Ancient Forest', hint: 'Flying Sparks: Tobi-Kadachi', url: 'https://monsterhunterworld.wiki.fextralife.com/Flying+Sparks:+Tobi-Kadachi' },
    { name: 'Bullion Meat', id: 'm12', category: 'meat', type: 'resilience', acquired: false, method: 'Quest', location: 'Wildspire Waste', hint: 'Exterminator of the Wastes', url: 'https://monsterhunterworld.wiki.fextralife.com/Exterminator+of+the+Waste' },
    { name: 'Steeled Meat', id: 'm13', category: 'meat', type: 'resilience', acquired: false, method: 'Quest', location: 'Rotten Vale', hint: 'A Rotten Request', url: 'https://monsterhunterworld.wiki.fextralife.com/Chef+Quest!+A+Rotten+Request' },
    { name: 'Wild Chicken', id: 'm14', category: 'meat', type: 'resilience', acquired: false, method: 'Gather', location: 'Elder\'s Recess', hint: 'Amber Deposit (Dragonvein Amber)', url: null },
    { name: 'Marinated Carpaccio', id: 'm15', category: 'meat', type: 'resilience', acquired: false, method: 'Quest', location: 'Rotten Vale', hint: 'The Meat of the Matter', url: 'https://monsterhunterworld.wiki.fextralife.com/The+Meat+of+the+Matter' },
    // Vigor
    { name: 'Aptonoth Meat', id: 'm20', category: 'meat', type: 'vigor', acquired: false, method: 'Quest', location: 'Wildspire Waste', hint: 'Tickled Pink', url: 'https://monsterhunterworld.wiki.fextralife.com/Tickled+Pink' },
    { name: 'Apceroast', id: 'm21', category: 'meat', type: 'vigor', acquired: false, method: 'Quest', location: 'Wildspire Waste', hint: 'Tickled Pink', url: 'https://monsterhunterworld.wiki.fextralife.com/Tickled+Pink' },
    { name: 'Diced Steak', id: 'm22', category: 'meat', type: 'vigor', acquired: false, method: 'Delivery', location: null, hint: 'A Great Help (1 Mega Potion)', url: null },
    { name: 'Giant Sirloin', id: 'm23', category: 'meat', type: 'vigor', acquired: false, method: 'Research Help', location: 'Rotten Vale', hint: 'Research Help: Scavantula Capture', url: 'https://monsterhunterworld.wiki.fextralife.com/Scavantula' },
    { name: 'Big Bite Burger', id: 'm24', category: 'meat', type: 'vigor', acquired: false, method: 'Gather', location: 'Rotten Vale', hint: 'Upsurge: Ancient Fossil (Wicked Fossil)', url: 'https://monsterhunterworld.wiki.fextralife.com/Wicked+Fossil' },
    { name: 'Giga Steak', id: 'm25', category: 'meat', type: 'vigor', acquired: false, method: 'Gather', location: 'Elder\'s Recess', hint: 'Amber Deposit (Ancient Amber)', url: null },
    // Acumen
    { name: 'White Liver', id: 'm30', category: 'meat', type: 'acumen', acquired: true, method: 'Starter', location: null, hint: null, url: null },
    { name: 'Barbecued Short Rib', id: 'm31', category: 'meat', type: 'acumen', acquired: true, method: 'Starter', location: null, hint: null, url: null },
    { name: 'Tangy Tripe', id: 'm32', category: 'meat', type: 'acumen', acquired: false, method: 'Quest', location: 'Rotten Vale', hint: '4 Forgotten Fossils', url: 'https://monsterhunterworld.wiki.fextralife.com/Chef+Quest!+Pumped+to+Deliver' },
    { name: 'Hot Heart', id: 'm33', category: 'meat', type: 'acumen', acquired: false, method: 'Gather', location: 'Coral Highlands', hint: 'Upsurge: Pearl Oysters (Platinum Pearl', url: 'https://monsterhunterworld.wiki.fextralife.com/Platinum+Pearl' },
    { name: 'Rich Rump', id: 'm34', category: 'meat', type: 'acumen', acquired: false, method: 'Delivery', location: null, hint: 'The Juicy Meat Resistance (1 Uragaan Scute) (Triggered by Completing Elder Dragon research after Nergigante)', url: null },
    { name: 'Grand Foie Gras', id: 'm35', category: 'meat', type: 'acumen', acquired: false, method: 'Gather', location: 'Elder\'s Recess', hint: 'Beryl Deposit (True Beryl)', url: null },
    // Artillery
    { name: 'Peon Turkey', id: 'm40', category: 'meat', type: 'artillery', acquired: false, method: 'Research Help', location: 'Wildspire Waste', hint: 'Research Help: Carrier Ant Capture', url: 'https://monsterhunterworld.wiki.fextralife.com/Carrier+Ant' },
    { name: 'Great Mutton', id: 'm41', category: 'meat', type: 'artillery', acquired: false, method: 'Delivery', location: 'Rotten Vale', hint: 'The Bone-In Roast Resistance (1 Radobaan Carapace)', url: null },
    { name: 'Herbivore Egg', id: 'm42', category: 'meat', type: 'artillery', acquired: false, method: 'Quest', location: 'Wildspire Waste', hint: 'Gettin\' Yolked in the Waste', url: 'https://monsterhunterworld.wiki.fextralife.com/Gettin\'+Yolked+in+the+Waste' },
    { name: 'King Turkey', id: 'm43', category: 'meat', type: 'artillery', acquired: false, method: 'Quest', location: 'Coral Highlands', hint: '4* It\'s a Crying Shamos', url: 'https://monsterhunterworld.wiki.fextralife.com/It\'s+a+Crying+Shamos' },
    { name: 'Magma Mutton', id: 'm44', category: 'meat', type: 'artillery', acquired: false, method: 'Research Help', location: 'Elder\'s Recess', hint: 'Research Help: Bomb Beetle Capture', url: 'https://monsterhunterworld.wiki.fextralife.com/Bomb+Beetle' },
    { name: 'Kaiser Turkey', id: 'm45', category: 'meat', type: 'artillery', acquired: false, method: 'Gather', location: 'Elder\'s Recess', hint: 'Beryl Deposit (Abyssal Beryl)', url: null },
    /** Fish **/
    // Courage

    // Resilience

    // Vigor

    // Acumen

    // Artillery

    /** Vegetable **/
    // Courage

    // Resilience

    // Vigor

    // Acumen

    // Artillery

    /** Drink **/
    // Perception

    // Fortune

  ]
};

Vue.component('ingredient-box', {
  props: {
    ingredient: Object
  },
  template: `
    <span>
      <i class="fas" v-bind:class="{ 'fa-check text-success': ingredient.acquired, 'fa-minus text-danger': !ingredient.acquired }"></i>
      &nbsp;{{ ingredient.name }} - {{ ingredient.method }}&nbsp;
    </span>
  `
});

var vm = new Vue({
  el: '#app',
  data: data
});