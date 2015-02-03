function Frame() {
	this.totalScore = 0;
	this.scores = [];
};

Frame.prototype.score = function() {
	return this.totalScore;
};

module.exports = Frame;
