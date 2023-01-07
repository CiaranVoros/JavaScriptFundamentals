class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${target.name}'s resilience has been lowered by ${this.power} and now has ${target.res} resilience`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat; // true is resilience, false is power
        this.magnitude = magnitude;
    }

    play(target) {
        if(this.stat == true) {
            target.res += this.magnitude;
        }
        else {
            target.power += this.magnitude;
        }
        console.log(`${this.name} has been played on ${target.name} ` + this.text)
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", true, 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", true, -2);
const pairProgramming = new Effect("Pair Programming", 3, "reduce target's power by 2", false, 2);

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
