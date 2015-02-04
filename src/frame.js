function Frame() {
	// this.totalScore = 0;
	this.scores = [];
	this.firstScore = undefined;
	this.secondScore = undefined;
}

Frame.prototype.score = function(score) {
	this.scores.push(score);
	
};

Frame.prototype.totalScore = function() {
	
	if(this.scores[0]){
		return this.scores[0];
	}else{
		return 0;
	}
	
	
};

module.exports = Frame;
