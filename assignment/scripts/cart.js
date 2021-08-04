console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

//added this main function just for organization
//I was losing my sanity as I added more details...
function main() {
  //initial basket check
  console.log('Basket items:', basket);

  //add two items
  addItem('apple');
  addItem('banana');

  //list the new items in the basket
  listItems(basket);

  //empty the basket
  empty();
  //relist the new basket
  listItems(basket);

  //use a loop to add past maxItems
  for (var i = 0; i < 6; i++) {
    addItem(i);
  }
  //list again after loop
  //notice how only numbers 0 - 4 were added
  listItems(basket);

  // empty and add item in prep to test removal
  empty();
  addItem('grape');
  addItem('strawberry');

  //remove an item
  removeItem('grape');
  listItems(basket);

  //no item found check
  removeItem('peach');
  listItems(basket);
}

main();

//ADD ITEMS
function addItem(item) {
  if (isFull() === true){
    console.log(`Sorry, the basket is full. "${item}" was not added.`);
    return false;
  }
  console.log('Inserting new item...');
  basket.push(item);
  console.log(`"${item}" has been added.`);
  return true;
}

//LIST ITEMS
function listItems(array) {
  console.log('Listing current items...');
  console.log('Total # of items:', array.length);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//EMPTY BASKET
function empty() {
  console.log('Basket will now be emptied.');
  basket = [];
}

//CHECK IF BASKET IS FULL
function isFull() {
  if (basket.length >= maxItems) {
    return true;
}
  else {
    return false;
  }
}

//REMOVE AN ITEM
function removeItem(item) {
  console.log(`Preparing to remove "${item}"...`);
  console.log('Searching for item...');
  if (basket.indexOf(item) === -1) {
    console.log('No such item exists in the basket.');
    return null;
  }
  console.log(basket.indexOf(item));
  basket.splice(basket.indexOf(item), 1);
  return console.log(`"${item}" was removed.`);
}
