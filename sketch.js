/**
 * @author Azan Muhammad
 * Date of Information From JSON File: Decemeber 18th
 */
var restaurantFile = [];
var restaurantInfo = [];
var ratingSearch = 3.9; //The restaurant with this rating is what we're looking for

//Function loads the the json
function preload() {
  restaurantFile = loadJSON("Restaurant.json");
}

//Puts all the restaurant ratings into an array
function setup() {
  for (var i = 0; i < restaurantFile.results.length; i++) {
    restaurantInfo.push(restaurantFile.results[i].rating);
  }
  linearSearch(); //run the linearSearch function
}

//Function does a linear search on the rating's array, checking which indexes match the rating we're searching for
function linearSearch() {
  var result = []; //temporary array to store results
  for (var i = 0; i < restaurantInfo.length - 1; i++) {
    if (restaurantInfo[i] == ratingSearch) { //checks to see if number is same as the one being looked for, add to result array.
      result.push(restaurantFile.results[i].name);
    }
  }
  if (result.length > 0) { //if there's something in the array, display the names of the places with the rating
    return console.log(result);
  } else { //if there's nothing in the array, display that no restaurants exist with that rating
    return console.log('No restaurants exist with that rating.');
  }
}