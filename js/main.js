function randomName() { // returns a name from the gameData.js file and removes it from the array so it does not repeat (would be weird to have multiple heroes with the same name)
    const usedName = Math.floor(Math.random() * names.length);
    const heroName = names[usedName];
    names.splice(usedName, 1);
    return heroName;
} 
console.log(randomName());




var hero1 = new Object();
hero1 = {
    class: "recruit",
    name: randomName,
    level: 1,
    stats: {
        strength: (this.level * 0.3) * baseHeroStats.strength // CONTINUE HERE
    }
}

var hero2 = new Object();
var hero3 = new Object();
var hero4 = new Object();
var hero5 = new Object();
var hero6 = new Object();