const datos = document.getElementById("excel-input");
const selector = document.getElementById("selector");
const selDif = document.getElementById("selectorD");
let arrayNums = [
  [],
  []
];


const containerShow = document.getElementById("popup");
const rightBtn = document.getElementById("right");
const wrongBtn = document.getElementById("wrong");


let lastNumPreg = 0;
let lastNumCate = 0;


selector.addEventListener("change",  ()=>{
  const selecOp = selector.options[selector.selectedIndex];
  const selecTxt = selecOp.textContent;
  const selectOpClass = selecOp.classList[0];
  // console.log(selectOpClass)

  const selecD = selDif.options[selDif.selectedIndex];
  const selecTxtD = selecD.textContent;
  

  readXlsxFile(datos.files[0], {sheet : `${selecTxt}`}).then(
    (rows)=>{
      rows.forEach(e => {
        let numeroAleatorio = Math.floor(Math.random() * 3) + 1;

        while((e[1] != numeroAleatorio) && ((arrayNums[selectOpClass]).includes(e[1]))){
          numeroAleatorio = Math.floor(Math.random() * 3) + 1;
          }
        
          if((e[3] == selecTxtD) && (!arrayNums[selectOpClass].includes(e[1]))){
            containerShow.classList.remove("hidden");
            containerShow.classList.add("popup");
            const msg = containerShow.querySelector(".msg");
            msg.innerHTML = e[2];

            lastNumCate = selectOpClass;
            lastNumPreg = e[1];

            // console.log(e[2]);
            // (arrayNums[selectOpClass]).push(e[1]);
            // console.log(arrayNums);
        }

        
          // if((numeroAleatorio == e[1]) && (!(arrayNums[selectOpClass]).includes(e[1])) && (e[3] == selecTxtD)){
          //   console.log(e);
          //   (arrayNums[selectOpClass]).push(e[1]);
          //   console.log(arrayNums)
          // }          
        // if(!arrayNums[selectOpClass].includes(e[1])){
        //   console.log(e);
        //   arrayNums[selectOpClass].push(e[1]);
        // }

        // if(selecTxt == "Entretenimiento"){
        //   do {
        //     const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        //     if((!arrayNumsEntre.includes(e[1])) && (e[3] == selecTxtD)){
        //       console.log(e);
        //       arrayNumsEntre.push(e[1]);
        //     }            
        //   } while (condition);

        // }else if(selecTxt == "Deporte"){
        //   if((!arrayNumsDeportes.includes(e[1])) && (e[3] == selecTxtD)){
        //     console.log(e);
        //     arrayNumsDeportes.push(e[1]);
        //   }
        // }
      });
      // console.log(rows);
    });
});


rightBtn.addEventListener("click",()=>{
  containerShow.classList.add("hidden");
  containerShow.classList.remove("popup");

  console.log(lastNumCate);
  console.log(lastNumPreg);
  console.log(arrayNums);
  (arrayNums[lastNumCate]).push(lastNumPreg);
});


wrongBtn.addEventListener("click",()=>{
  containerShow.classList.add("hidden");
  containerShow.classList.remove("popup");
});
