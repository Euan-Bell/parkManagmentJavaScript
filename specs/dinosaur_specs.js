const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');


describe('Dinosaur', function (){

  it('should have a species', function (){
      dinosaur = new Dinosaur('Trex', 'Carnivore', 500);
    // // act
    // const actualValue = taxi.manufacturer;
    // // assert
    assert.strictEqual(dinosaur.species, 'Trex');
  });
});
