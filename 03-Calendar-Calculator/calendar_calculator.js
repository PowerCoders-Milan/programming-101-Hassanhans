//insert your pseudocode below
/*
set the numbers
create of them
print and sort them 
*/

//Insert your code below
var numbers;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


numbers = [1, 9, 3];
window.alert(numbers.slice().sort(listsGetSortCompare("NUMERIC", 1)));
