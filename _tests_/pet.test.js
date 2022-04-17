const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('has initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('has initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10)
    });

});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('decrease fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
});

describe('checkup', () => {
    it('fitness is 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('hunger is 5 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5
        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('if both are true', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('if neither are true', () => {
        const pet = new Pet('Fido');
        expect(pet.checkUp()).toBe('I feel great!');
    });
});

describe('isAlive', () => {
    it('fitness is 0 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(pet.isAlive()).toEqual(false);
    });

    it('hunger is 10 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        expect(pet.isAlive()).toEqual(false);
    });

    it('age is 30 or more', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.isAlive()).toEqual(false)
    });
});

describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('growup', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});   