var player = {
    imp: 100, // circles
    soulshard: 40, // implosions
    dreadstalker: 30, // warlocks
    circles: [],
    implosions: [],
    warlocks: [],
    lastUpdate: Date.now(),
}

// first buys of generators
var firstCircle = {
    tier: 0,
    cost: 10,
    mult: 10,
    amount: 0,
    bought: 0,
    name: "Summoning Circle I",
    currency: "imp"
}

var firstImplosion = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Fire Implosion I",
    currency: "soulshard"
}

var firstWarlock = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Warlock Initiate I",
    currency: "dreadstalker"
}

// push first prices into tables
player.circles.push(new Generator(firstCircle)) 
player.implosions.push(new Generator(firstImplosion))
player.warlocks.push(new Generator(firstWarlock)) 

