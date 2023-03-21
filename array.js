// cara mendeklarasikan array
// dimulai dengan tanda kurung siku dan data dimasukan didalamnya
const buah = ["nanas", "melon", "semangka"];

// manipulasi array ada banyak dan salah satu contoh yang sering digunakan adalah
// array map menghasilkan array baru setelah array lama dimanipulasi tanpa merubah array lama
const tentukanBuahNanas = buah.map(function (dataBuah) {
  if (dataBuah === "nanas") return true;
  return false;
});

// hasil : [true, false, false]
console.log(tentukanBuahNanas);

// untuk fungsi fungsi lain dapat dibaca di : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
