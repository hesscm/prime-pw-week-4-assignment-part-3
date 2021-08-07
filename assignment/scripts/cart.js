console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//declare two global cariables
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
  for (let i = 0; i < 6; i++) {
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

//run the main function
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
  //log text for clarity
  console.log('Listing current items...');
  console.log('Total # of items:', array.length);
  //loop that lists items in the array on separate lines
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//EMPTY BASKET
function empty() {
  //log text for clarity
  console.log('Basket will now be emptied.');
  //delete all elements in the basket array
  basket = [];
}

//CHECK IF BASKET IS FULL
function isFull() {
  //return true if basket elements are > or = maxItems
  if (basket.length >= maxItems) {
    return true;
  }
  else {
    return false;
  }
}

//REMOVE AN ITEM
function removeItem(item) {
  //log text for clarity
  console.log(`Preparing to remove "${item}"...`);
  console.log('Searching for item...');
  //.indexOf returns -1 if the value does not exist
  if (basket.indexOf(item) === -1) {
    console.log('No such item exists in the basket.');
    //return null if not item is found
    return null;
  }
  //list element # with context
  console.log(`${item} is element ${basket.indexOf(item)} in the basket.`);
//remove only the 1 item from the array
  basket.splice(basket.indexOf(item), 1);
  //log text for clarity
  return console.log(`"${item}" was removed.`);
}
