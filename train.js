// MITASK - C;
function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("michael", "leahci"));

//=======================================================//

// // MITASK - B;
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("M2I54CH79A0EL9"));

//=======================================================//

// // MITASK - A;
// function countLetter(letter, word) {
//   let count = 0;
//   for (let char of word) {
//     if (char === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));
