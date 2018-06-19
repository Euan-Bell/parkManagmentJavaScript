const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');


describe('Dinosaur', function (){

  let dinosaur;

  beforeEach(function () {
  // arrange
      dinosaur = new Dinosaur('Trex', 'Carnivore', 500);
  })

  it('should have a species', function (){
    assert.strictEqual(dinosaur.species, 'Trex');
  });

  it('should have a diet', function (){
    assert.strictEqual(dinosaur.diet, 'Carnivore');
  });

  it('should have visitorsPerDay', function (){
    assert.strictEqual(dinosaur.visitorsPerDay, 500);
  });


});
