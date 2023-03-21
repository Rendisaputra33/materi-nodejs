{
  const buah = ["nanas", "melon", "semangka"];

  // perulangan menggunakan for i
  for (let index = 0; index < buah.length; index++) {
    const element = buah[index];
    console.log("For : " + element);
  }
}

{
  console.log();
  console.log("While Loop");
  const buah = ["nanas", "melon", "semangka"];

  // perulangan menggunakan white
  var index = 0;

  while (index < buah.length) {
    const element = buah[index];
    console.log("While : " + element);
    index++;
  }
}

{
  console.log();
  console.log("For in Loop");
  const buah = ["nanas", "melon", "semangka"];

  // perulangan menggunakan for in
  for (const key in buah) {
    console.log(key);
  }
}

{
  console.log();
  console.log("For in Loop");
  const buah = ["nanas", "melon", "semangka"];

  // perulangan menggunakan for of
  for (const data of buah) {
    console.log(data);
  }
}
