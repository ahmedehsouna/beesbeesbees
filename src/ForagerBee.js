var ForagerBee = function(age, color, food, job, canFly, treasureChest) {
	Bee.call(this, age || 10, color || undefined, food || undefined, job || 'find pollen');
	this.canFly = canFly === undefined ? true : canFly;
	this.treasureChest  = treasureChest  || [];	
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage  = function() {
	this.treasureChest.push('treasure');
};

