//alert("JavaScript works!");
/*
 *Michael Cothran
 *SDI 1308
 *Project 3
 *Rowen Journey
 */
// make javascript object a string
var jsonstring = JSON.stringify(jsonSpellBook);

// make string a javascript object
var receivedjson = JSON.parse(jsonstring);

// Global Variables
var witch = "Rowen",
    spellCast = receivedjson["spells"];
    knownSpells = true;


// my object
var witch = {
    fullName:	"Rowen Haven",// property
    rank:	"apprentace",
    skills:	["casting spells", "making potions"],
    announce: 	function(message) {
    var quotes = "\"";
    announcement = quotes + message + quotes;
    console.log(announcement);
},
    checkSpells: function(knownSpells) {
    var spellStatus = knownSpells;
    if (spellStatus === true) {
    witch.announce("That's " + spellStatus + ". I do know a few spells.");
    witch.countSpells(spellStatus, spellCast);
    } else {
    witch.announce("Im sorry thats " + spellStatus + ". I don't know any spells.");
    };
},
// method: procedure
    countSpells: function(spellStatus , spellCast) {
	if (spellStatus === true) {
	witch.announce("Good! said Jinx. Lets get started We have ");
	for (var n=0; n <= spellCast.length; n++){
	    var spellsToLearn = n;
	    witch.announce(spellsToLearn);
}
	    witch.announce(" spells to practice.");
	    return spellStatus;
	} else {
	    witch.announce("We have no spells to practice. ");
};
},
    getFullName: function(name){
	var fullName = name;
	return fullName;
},
// method: accessor
    getData: function(json) {
	var i = 0;
	while (i<json.spells.length){
		var spells = json.spells[i];
		witch.announce("This spell is called " + spells.spellName + ", It has a power of " + spells.spellPower + ", and is an " + spells.spellLevel + " level");
		i++;
};
		return json;
},
    getSpell: function() {
	for (var n=0; n < receivedjson["spells"].length; n++) {
	var name = receivedjson["spells"][n].spellName;
	witch.announce("I have learned, " + name + "!"); // return string
}
},
// method: mutator
    castSpell: function(spellName, spellLevel){
	var magick = [];
	var prepareFood = function(item) {
	    if (item == spellLevel) {
		magick.push(item);
		witch.announce(magick);
	} else {
		witch.announce("I need to learn some more spells!");
}
}
	var preparedFood = "Good said Jinx! Now its time for some target practice. Shoot those " + spellLevel + " off the " + spellName + ".";
	    witch.announce(preparedFood);
},
// method: function
    shootLimbs: function(limbs){
	witch.announce("Aww man. Now I have to clean because " + limbs);
	var limbs = limbs.length;
	for (var limbsShot = 1; limbsShot < limbs; limbsShot +=7) {
	witch.announce(limbsShot + " limbs shot down.");
	    if (limbs > limbsShot) {
	
	var limbsLeft = limbs - limbsShot;
	witch.announce(limbsLeft + " more to go!");
};
}
	witch.announce("Very good. Said Jinx Now lets just hope, that the only thing we run into in these woods are trees.");

} 
},
    targetPractice = {
	shoot: function(shoot,target) {
	var shootTarget = shoot + " fell from the " + target + " as Rowen cast her spells.";
	console.log(shootTarget);
	return shootTarget;
}
};

    
console.log("The witch's apprentace has prepaired for her journey.");
console.log("Shadow, Jinx and Rowen begin their quest.");
console.log("As the three set out on their journey Rowen asks... Jinx as a witch's familier you know her spells right?");
witch.announce("Thats right and if we are going to make it through the dark woods you will need to practice " + witch.skills[0] + " young " + witch.rank + "."); 
witch.checkSpells(knownSpells);
witch.announce("Here's their information.");
witch.getData(jsonSpellBook);
console.log("After about a mile, Rowen succesfully makes a branch fall from a tall tree by waiving her wand at it.");
var myName = witch.getFullName(witch.fullName); 
console.log("That was very...average said Jinx.");
witch.announce("Young " + myName + " gasped and let out an unintional smile.");
witch.getSpell();
witch.castSpell("trees", "limbs"); 
var limbs = targetPractice.shoot("limbs", "trees"); 
witch.shootLimbs(limbs); 
