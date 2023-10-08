class Generator{
    constructor(props){
        this.name = props.name
        this.cost = props.cost
        this.cost10 = 0
        this.mult = props.mult
        this.amount = props.amount
        this.bought = props.bought
        this.tier = props.tier
        this.currency = props.currency
        this.production = 0
    }

    multCost(cost, tier) { // cost inc with each buy
        cost *= 1 + (tier+1)*0.25
        return cost
    }

    get canBuy() {
        return this.cost <= player[this.currency]
    }

    get canBuy10() {
        var k = this.cost

        for (let i = 0; i < 9; i++) {
            k = this.multCost(k, this.tier)
        }
        this.cost10 = k
        return k <= player[this.currency]
    }

    buy() {
        // console.log(player.imp)
        if (!this.canBuy) return // not enough
        player[this.currency] -= this.cost // payment
        this.cost = this.multCost(this.cost, this.tier) // new cost
        this.amount += 1 // amount inc
        this.bought += 1 // bought inc

        if (this.bought%100 == 0) this.mult *= 5
        else if (this.bought%10 == 0) this.mult *= 3
    }

    buy10() {
        if (!this.canBuy10) return

        for (let i = 0; i < 9; i++) {
            this.cost = this.multCost(this.cost, this.tier)
        }
        player[this.currency] -= this.cost // payment
        this.cost = this.multCost(this.cost, this.tier) // new cost
        this.amount += 10 // amount inc
        this.bought += 10 // bought inc
        console.log(player[this.currency])

        if (this.bought%100 == 0) this.mult *= 5
        else if (this.bought%10 == 0) this.mult *= 3
    }

    productionPerSecond() {
        let ret = this.amount * this.mult
        if (this.tier !== 0) ret /= 5
        this.production = ret
        return ret
    }
}


// name of generator into number of type
function getColumn(type) {
    switch (type) {
        case "circles":
            return 1;

        case "implosions":
            return 2;
        
        case "warlocks":
            return 3;
    }
}

// name of generator into currency name
function getColumnName(type) {
    switch (type) {
        case "circles":
            return "imp";

        case "implosions":
            return "soulshard";
        
        case "warlocks":
            return "dreadstalker";
    }
}

// names of tiers of generators
const circle_names = ["Summoning Circle"]
const implosion_names = ["Fire Implosion"]
const warlock_names = ["Warlock Initiate"]

const roman_numbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]

function generateGeneratorName(tier, type) {
    switch (type) {
        case "circles":
            return circle_names[tier%circle_names.length];

        case "implosions":
            return implosion_names[tier%implosion_names.length];
        
        case "warlocks":
            return warlock_names[tier%warlock_names.length];
    }
}

// numbers into roman
function getRoman(tier) {
    return roman_numbers[tier]
}

// instead of doing it for every single one, lets make function to create these with template
function createGenerator(tier, type) {
    let col = getColumn(type)

    // packing all things for generator into list of thingies
    const g = {
        name: generateGeneratorName(tier, type) + ' ' + getRoman(tier),
        cost: Math.pow(10, tier * (col + 1)),
        mult: 1,
        amount: 0,
        bought: 0,
        tier: tier,
        currency: getColumnName(type)
    }

    //creating new Generator using list of thingies
    return new Generator(g)
}