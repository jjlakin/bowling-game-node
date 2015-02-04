var Frame = require('../src/frame.js');

describe('Frame', function() {

	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	it('should have a score of 0 by default', function() {
		expect(frame.totalScore()).toEqual(0);
	});

	it('should have an no scores by default', function() {
		expect(frame.scores.length).toEqual(0);
	});

	it('should accept a result', function() {
		frame.score(4)
		expect(frame.totalScore()).toEqual(4);
	});

	it('should accept a second result', function() {
		frame.score(4)
		frame.score(3)
		expect(frame.totalScore()).toEqual(7);
	});

});
