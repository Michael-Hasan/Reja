// // MITASK - D;

class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non,
      lagmon,
      cola,
    };
  }

  _getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  qoldiq() {
    const time = this._getTime();
    const { non, lagmon, cola } = this.products;
    console.log(
      `Hozir ${time}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`
    );
  }

  sotish(nomi, soni) {
    if (this.products[nomi] === undefined) {
      console.log(`Bunday mahsulot mavjud emas: ${nomi}`);
      return;
    }

    if (this.products[nomi] < soni) {
      console.log(
        `Yetarli ${nomi} yo‘q. Faqat ${this.products[nomi]}ta mavjud.`
      );
      return;
    }

    this.products[nomi] -= soni;
    const time = this._getTime();
    console.log(`Hozir ${time}da ${soni}ta ${nomi} sotildi.`);
  }

  qabul(nomi, soni) {
    if (this.products[nomi] === undefined) {
      console.log(`Yangi mahsulot qabul qilinmaydi: ${nomi}`);
      return;
    }

    this.products[nomi] += soni;
    const time = this._getTime();
    console.log(`Hozir ${time}da ${soni}ta ${nomi} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

//=======================================================//

// // MITASK - C;

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("michael", "leahci"));

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
