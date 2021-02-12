'use strict';

describe("BowlingScorecard", function(){
  let bowlingScorecard; 
  let frame;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  describe("in the first nine frames of a bowling game", function() {
    describe("when the score is not a strike or a spare", function() {
      it ("should return a score of the number of pins knocked down", function() {
        expect(bowlingScorecard.notStrikeOrSpare(4, 5)).toEqual (9)
      })
    })
  
  });

});