//STRUCTURAL DESIGN PATTERNS

//Adapter
/**
 * Metode adaptor memungkinkan objek dengan interface yang saling bertentangan untuk bekerja sama. 
 * Contoh kasus penggunaan yang bagus untuk pola ini adalah ketika kita ingin mengadaptasi kode lama ke basis kode baru tanpa memperkenalkan perubahan yang merusak:
 */

//create an array with two fields: 
//'name' of a band and the number of 'sold' albums
const groupsWithSoldAlbums = [
  {name: "Twice", sold: 23},
  {name: "Blackpink", sold: 23},
  {name: "Aespa", sold: 40},
  {name: "NewJeans", sold: 45},
];

console.log("Before: ");
console.log(groupsWithSoldAlbums);

//now we want to add this object to the 'groupsWithSoldAlbums' 
//problem: Our array can't accept the 'revenue' field
// we want to change this field to 'sold'
var illit = {name: "illit", revenue: 300};
const COST_PER_ALBUM = 30;
const convertToAlbumsSold = (group) => {
  //make a copy of the object and change its properties
  const tempGroup = { name: group.name, sold: 0 };
  tempGroup.sold = parseInt(group.revenue / COST_PER_ALBUM);
  return tempGroup;
}

//use our adapter to make a compatible copy of the 'illit' object:
illit = convertToAlbumsSold(illit);
//now that our interfaces are compatible, we can add this object to the array
groupsWithSoldAlbums.push(illit);
console.log("After:");
console.log(groupsWithSoldAlbums);
