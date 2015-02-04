function Frame() {
	this.scores = [];
	this.frameScore = 0;
}

Frame.prototype.score = function(score) {
	this.scores.push(score);
};

Frame.prototype.firstScore = function() {
	if(this.scores[0]){
		return this.scores[0];
	}else{
		return 0;
	}
};

Frame.prototype.secondScore = function() {
	if(this.scores[1]){
		return this.scores[1];
	}else{
		return 0;
	}
};

Frame.prototype.totalScore = function() {
	
	this.frameScore = this.firstScore() + this.secondScore();

};

module.exports = Frame;
