console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log('Basket items:', basket);

function addItem(item) {
  basket.push(item);
  return true;
}
console.log('Inserting new item...');
addItem('apple');
addItem('banana');
console.log('Basket items:', basket);

function listItems(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

console.log('Listing current items...');
listItems(basket);

function empty() {
  console.log('Basket will now be emptied.');
  basket = [];
}

empty();
console.log('Listing current items...');
listItems(basket);
