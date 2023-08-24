const datos = document.getElementById("excel-input");
const selector = document.getElementById("selector");

// datos.addEventListener("change", async ()=>{
//   const content = await readXlsxFile(datos.files[0], {sheet : "Deporte"});
//   console.log(content);
// });

selector.addEventListener("change", async ()=>{
  const selecOp = selector.options[selector.selectedIndex];
  const selecTxt = selecOp.textContent;

  const content = await readXlsxFile(datos.files[0], {sheet : `${selecTxt}`});
  console.log(content);
});

