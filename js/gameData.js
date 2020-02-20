const names = ["Jurand", "Zawisza", "Siegfried", "Ironskin", "Harald", "Marco", "Francis", "Wilhelm", "Robin", "Jean", "Baldwin", "Vasyl", "Tanja", "Xiu", "Avicenna", "Hyppokrates", "Guldorf", "Coronavix", "Thomas", "Marcel", "Mia", "Merlin", "Strange", "Alucard", "Houdini", "Maryanna", "Victoria", "Weldermort"]
const baseHeroStats = {
    strength: 8,
    agility: 8,
    dexterity: 8,
    vitality: 8,
    intelligence: 8,
    willpower: 8
}


var characterClassesData = {
    recruit: {
        codeName: "recruit",
        className: "Recruit",
    },    
    warrior: {
        codeName: "warrior",
        className: "Warrior",
        primaryStats: ["strength", "vitality"],
        secondaryStats: ["agilty", "dexterity"]
    },
    ranger: {
        codeName: "ranger",
        className: "Ranger",
        primaryStats: ["dexterity", "agility"],
        secondaryStats: ["strength", "vitality"]
    },
    cleric: {
        codeName: "cleric",
        className: "Cleric",
        primaryStats: ["willpower", "vitality"],
        secondaryStats: ["intelligence", "strength"]
    },
    mage: {
        codeName: "mage",
        className: "Mage",
        primaryStats: ["intelligence", "willpower"],
        secondaryStats: ["agility", "vitality"]
    }
}