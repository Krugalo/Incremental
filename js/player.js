var player = {
    currOne: 100, // currency 1
    currTwo: 40, // currency 2
    currThree: 30, // currency 3
    genOne: [], // generator 1
    genTwo: [], // generator 2
    genThree: [], // generator 3
    lastUpdate: Date.now(),
    currNames: ["currOne", "currTwo", "currThree"],
    genNames: ["genOne", "genTwo", "genThree"]
}

// first buys of generators
var firstGenOne = {
    tier: 0,
    cost: 10,
    mult: 10,
    amount: 0,
    bought: 0,
    name: player.genNames[0] + " I",
    currency: player.currNames[0]
}

var firstGenTwo = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: player.genNames[1] + " I",
    currency: player.currNames[1]
}

var firstGenThree = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: player.genNames[2] + " I",
    currency: player.currNames[2]
}

// push first prices into tables
player.genOne.push(new Generator(firstGenOne)) 
player.genTwo.push(new Generator(firstGenTwo))
player.genThree.push(new Generator(firstGenThree)) 

