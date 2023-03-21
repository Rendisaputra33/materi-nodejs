// cara deklarasi sebuah function
// * parameter boleh kosong/optional
// return boleh kosong atau void(tidak mengembalikan apapun)
function nama_fungsi(param1, param2) {
  return param1 * param2;
}

// cara memanggil fungsi yang telah dibuat
// masukan parameter yang diperlukan
nama_fungsi(3, 5);

// nilai kembalian dari fungsi dapat ditampung pada sebuah variable jika ingin di manipulasi
// contoh :
const hasilPerkalian = nama_fungsi(3, 5);
console.log(hasilPerkalian);
