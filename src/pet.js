function Pet(name) {
    
    this.hunger = 0;
    this.fitness = 10;
    this.name = name;
    this.age = 0;

    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };

}

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;