const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let trex1;
  let trex2;
  let trex3;
  let tritops1;
  let tritops2;
  let tritops3;
  let teradac;
  let brancio;
  let park;

  this.beforeEach(function () {
    trex1 = new Dinosaur("T-Rex", "carnivore", 53)
    trex2 = new Dinosaur("T-Rex", "carnivore", 46)
    trex3 = new Dinosaur("T-Rex", "carnivore", 38)
    tritops1 = new Dinosaur("Triceratops", "herbivore", 25)
    tritops2 = new Dinosaur("Triceratops", "herbivore", 32)
    tritops3 = new Dinosaur("Triceratops", "herbivore", 39)
    teradac = new Dinosaur("Pterodactyl", "carnivore", 44)
    brancio = new Dinosaur("Branchiosaurus", "herbivore", 49)

    park = new Park("Jurassic World", 25)

    });

  

  it('should have a name', function () { 
    const actual = park.name
    assert.strictEqual(actual, "Jurassic World")
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 25)
  });
    
  describe("dinosaur", function() {
    it('should have a collection of dinosaurs', function () {
      park.dinosaurs = [trex1, trex2, trex3, tritops1, tritops2, tritops3, teradac, brancio] 
      actual = park.dinosaurs
      assert.deepStrictEqual(actual, [park.dinosaurs])
    })
  })

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur(trex1)
      const actual = park.dinosaurs
      assert.deepStrictEqual(actual, [park.dinosaurs])
  

    // it('should be able to remove a dinosaur from its collection');

    // it('should be able to find the dinosaur that attracts the most visitors');

    // it('should be able to find all dinosaurs of a particular species');
  });
  
  // it('should be able to calculate the total number of visitors per day');

  // it('should be able to calculate the total number of visitors per year');

  // it('should be able to calculate total revenue for one year');
})
