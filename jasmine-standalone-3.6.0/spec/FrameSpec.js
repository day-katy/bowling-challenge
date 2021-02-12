'use strict';

describe("Frame", function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("the first nine frames of a bowling game", function() {
    it("has two rolls", function() {
      expect(frame.isFirstNineFrames()).toEqual(true)
    });
  });
});