// Soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let hasil = [];
  let kelA = [], kelC = [], kelK = [], kelU = [];
  for (let a of animals) {
    if (a[0] == "a") kelA.push(a);
    if (a[0] == "c") kelC.push(a);
    if (a[0] == "k") kelK.push(a);
    if (a[0] == "u") kelU.push(a);
  }
  if (kelA.length > 0) hasil.push(kelA); 
  if (kelC.length > 0) hasil.push(kelC); 
  if (kelK.length > 0) hasil.push(kelK); 
  if (kelU.length > 0) hasil.push(kelU); 
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]