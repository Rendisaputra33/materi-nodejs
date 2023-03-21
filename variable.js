{
  var init;

  init = 0;

  // membuat variable dengan keyword var
  for (var i = init; i < 3; i++) {
    console.log(i);
  }

  // variable dapat diakses dari global scope
  console.log("variable dari block for : " + i);
}

{
  let init;

  init = 0;

  for (let j = 0; j < 3; j++) {
    console.log(j);
  }

  // ketika mengakses variable j diluar block for yang di deklarasikan menggunakan let maka akan terjadi error j is not defined
  //   console.log(j);
}

{
  // contanta pada javascript ketika dideklarasikan harus langsung di assign ke sebuah value
  // jika tidak maka akan error
  // const init;

  {
    const init = 0;

    console.log(init);

    // mengubah variable contanta dengan value baru akan menimbulkan error
    // init = 3;
  }

  // ketika mengakses variable j diluar block for yang di deklarasikan menggunakan let maka akan terjadi error j is not defined
    // console.log(init);
}
