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

const ciaran = new Ninja("Ciaran", 20)
ciaran.sayName();
ciaran.showStats();
ciaran.drinkSake();
ciaran.showStats();

