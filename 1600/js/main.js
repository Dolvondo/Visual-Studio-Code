var beginningScenarios = ["You wake up in a hospital. It is eerily quiet. You tiptoe to the door and peek out,", 
"You are standing in an open field west of a white house with a boarded front doors. There is a smaill mailbox here.",
"Desparate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods.", 
"The stench burns your nose as you wander in the depths of the city sewers. It is very difficult to see the junk scattered all over",
"Hunger gripes at you as you search for food in a local grocery store."];
function randomNumber(range) {
    return Math.round(Math.random() * range);
}
alert(beginningScenarios[randomNumber(beginningScenarios.length - 1) ] );

var weaponList =["shovel", "crossbow", "baseball bat", "rubberchicken", "drugs", "molotov", "action figure", "baby wipes", "pencil", "crayon", "dice"];
var weapon = weaponList[ randomNumber( weaponList.length - 1) ];
alert("Being that it is the zombie apocalypse, you decide to search  for a weapon first. After surveying your surroundings you notice and grab a " + weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + ".");

var survival = randomNumber(2);

if(survival === 0) {
    alert("The zombie bites you. You Lose!!!");
} else if ( survival > 0) {
    alert("You kill the zombie with your " + weapon + ". You win!");
}