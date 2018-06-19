const assert = require('assert');
const Park = require('../models/park.js');


describe('Park', function (){

  let park;

  beforeEach(function () {
  // arrange
      park = new Park('Jurrassic Park', 50.00, []);
  })

  it('should have a name', function (){
    assert.strictEqual(park.name, 'Jurrassic Park');
  });
  //
  it('should have a ticket price', function (){
    assert.strictEqual(park.ticketPrice, 50.00);
  });
  //
  // it('should have visitorsPerDay', function (){
  //   assert.strictEqual(dinosaur.visitorsPerDay, 500);
  // });


});
