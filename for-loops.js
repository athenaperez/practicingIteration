
// var counter = 0;
// while ( counter <= 10 ) {
//   console.log(counter);
//   document.write( counter + ' ' );
//   counter += 1;
// }

// for ( var counter = 0; counter <= 10; counter +=1 ) {
// 	document.write( counter + '  ' );
// 	// console.log( counter )
// }


// ______________________________
//INCREMEMNT BY 10
console.log("______________________________")
console.log("INCREMENT BY 10");
console.log("______________________________")



for (var counter = 5; counter <= 120; counter += 10) {
   console.log( counter )
}





// ______________________________
// DECREMENT BY DIVISION

console.log("______________________________")
console.log("DECREMENT BY DIVISION")
console.log("______________________________")


for (var counter = 4096; counter >= 1; counter /= 2) {
   console.log( counter )
}



// ______________________________
// ARRAY ITERATION
console.log("______________________________")
console.log("ARRAY ITERATION");
console.log("______________________________")

// var shoppingList = [
// 'carrots',
// 'milk',
// 'eggs'
// ];
// alert(shoppingList);
// console.log( shoppingList[0] );
// console.log( shoppingList[2] );




// ______________________________
//AMERICAN PRESIDENTS


var americanPresidents = [
	'George Washington',
	'James Adams',
	'Thomas Jefferson',
	'George Bush',
	'Bill Clinton',
	'Jimmy Carter',
	'John Kennedy'
];

for (var i = 0; i < americanPresidents.length; i += 1) {
	console.log( "President #" + (i+1) + " was " + americanPresidents[i] );
}


// ______________________________
// OBJECT ITERATION

console.log("______________________________")
console.log("OBJECT ITERATION");
console.log("______________________________")

var antSpecies = { //object
  argentine: 1, //key: value pairs
  army: 2,
  bigHeaded: 3,
  black: 4,
  bull: 5,
  carpenter: 6,
  crazy: 7,
  fire: 8,
  glider: 9,
  honeyPot: 10,
  jackJumper: 11
};

for (var keys in antSpecies) {

console.log(keys);
console.log(antSpecies[keys])
}

console.log(antSpecies.bull);




















