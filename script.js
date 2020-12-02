let mylist = [[ " Milk", 6 ],[ "Bread", 5 ],[ "Butter", 3 ],["Tea", 7 ],[" Sardine", 8 ]];

// var array = new Array( 2, 3 ); Array Object for multidimensional array declaration

// let firstArray = mylist.pop();
// console.log( firstArray );

// let secondArray = mylist.shift() ;
// console.log(secondArray);

let subList = [];
subList.push(mylist.shift());
subList.push(mylist.pop());

console.log(subList);

mylist.splice( 2, 1, ["Orange Juice", 17] );
// console.log(mylist);

