const fs = require("fs");
const process = require("process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("====== Program penjumlahan ======");
console.log();

readline.question("Masukan angka pertama : ", function (angka1) {
  readline.question("Masukan angka kedua : ", function (angka2) {
    const hasil = Number(angka1) + Number(angka2);
    writeHistory({ first: angka1, second: angka2, result: hasil });
    readline.close();
  });
});

function writeHistory(data) {
  fs.readFile("./history/history.json", "utf-8", function (err, history) {
    // cek jika terdapat error matikan program
    if (err) {
      console.log(err.message);
      process.exit(1);
    }

    // parsing data string ke json agar mudah dimanipulasi
    const oldHistory = JSON.parse(history);
    // tambahkan data terbaru
    oldHistory.push(data);

    // rubah isi history
    fs.writeFileSync("./history/history.json", JSON.stringify(oldHistory));
    //
    console.log();
    console.log("====== Program selesai ======");
  });
}
