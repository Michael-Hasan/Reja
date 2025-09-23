// MITASK - A;
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

//=======================================================//

// MITASK - B;
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("M2I54CH79A0EL9"));
