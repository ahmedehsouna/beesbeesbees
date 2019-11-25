var HoneyMakerBee = function(age, color, food, job, honeyPot) {
	Bee.call(this, age || 10, undefined, undefined, job || 'make honey');
	this.honeyPot = 0;	
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney  = function() {
	this.honeyPot--;
}