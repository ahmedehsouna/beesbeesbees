var RetiredForagerBee = function(age, color, food, job, canFly, treasureChest) {
	ForagerBee.call(this, age || 40, color || 'grey', food || undefined, job || 'gamble', canFly || false, treasureChest || undefined);
	
};
//age, color, food, job, canFly, treasureChest
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

ForagerBee.prototype.forage  = function() {
	this.treasureChest.push('treasure');
	return 'I am too old, let me play cards instead';
}

ForagerBee.prototype.gamble = function() {
	this.treasureChest.push('treasure');
}