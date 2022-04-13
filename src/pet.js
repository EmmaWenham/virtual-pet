function Pet(name) {
    
    this.hunger = 0;
    this.fitness = 10;
    this.name = name;
    this.age = 0;
    
    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }     
};

Pet.prototype.walk = function() {
    if (this.fitness + 4 <= 10 ) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
};

Pet.prototype.feed = function () {
    this.hunger -= 3;
    if(this.hunger <= 0) {
        return 0;
    }
    }
};




const fido = new Pet('Fido');
const rex = new Pet('Rex');
const MAXIMUM_FITNESS = 10;

module.exports = Pet;
