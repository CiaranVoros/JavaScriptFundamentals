class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Strength : ${this.strength} Speed : ${this.speed} Health : ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

// const ciaran = new Ninja("Ciaran", 20)
// ciaran.sayName();
// ciaran.showStats();
// ciaran.drinkSake();
// ciaran.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }
    
    speakWisdom() {
        this.drinkSake();
        console.log("a wise message")
    }
}

const superNinja1 = new Sensei("Master Shredder")
superNinja1.speakWisdom();
superNinja1.speakWisdom();
superNinja1.showStats();
superNinja1.sayName();
