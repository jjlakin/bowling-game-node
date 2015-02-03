var Frame = require('../src/frame.js');

describe('Frame', function() {

	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	it('should have a score of 0 by default', function() {
		expect(frame.score()).toEqual(0);
	});

	it('should have an no scores by default', function() {
		expect(frame.scores.length).toEqual(0);
	});

});
