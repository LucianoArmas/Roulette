const datos = document.getElementById("excel-input");
const btnDif = document.querySelector(".btnDif");
let categoria = "";
let numCategoria = 0;

let arrayNums = [
  [],
  [],
  [],
  []
];


const containerShow = document.getElementById("popup");
const rightBtn = document.getElementById("right");
const wrongBtn = document.getElementById("wrong");

const popDif = document.getElementById("popupDif");


let lastNumPreg = 0;
let lastNumCate = 0;

export const selectDif = (cate,numCate) =>{
  popDif.classList.remove("hidden");
  popDif.classList.add("popup");
  
  numCategoria = numCate;
  categoria = cate;

};


const makeQuestion = (cate,numCate, selecTxtD) =>{

  readXlsxFile(datos.files[0], {sheet : `${cate}`}).then(
    (rows)=>{
      rows.forEach(e => {
        let numeroAleatorio = Math.floor(Math.random() * 3) + 1;

        while((e[1] != numeroAleatorio) && ((arrayNums[numCate]).includes(e[1]))){
          numeroAleatorio = Math.floor(Math.random() * 3) + 1;
          }
        
          if((e[3] == selecTxtD) && (!arrayNums[numCate].includes(e[1]))){
            containerShow.classList.remove("hidden");
            containerShow.classList.add("popup");
            const titCAte = containerShow.querySelector(".cate");
            titCAte.innerHTML = cate;
            titCAte.setAttribute("style",`background: ${e[4]}`);
            const msg = containerShow.querySelector(".msg");
            msg.innerHTML = `${e[1]}- ${e[2]}`;

            lastNumCate = numCate;
            lastNumPreg = e[1];
          }
      });
    }
  );
}




rightBtn.addEventListener("click",()=>{
  containerShow.classList.add("hidden");
  containerShow.classList.remove("popup");

  (arrayNums[lastNumCate]).push(lastNumPreg);
  soundEffect("correct")
});


wrongBtn.addEventListener("click",()=>{
  containerShow.classList.add("hidden");
  containerShow.classList.remove("popup");
  soundEffect("incorrect")
});


btnDif.addEventListener("click", ()=>{
  popDif.classList.remove("popup");
  popDif.classList.add("hidden");
  const selDif = document.getElementById("selectorD");
  const selecD = selDif.options[selDif.selectedIndex];
  const selecTxtD = selecD.textContent;
  
  makeQuestion(categoria, numCategoria, selecTxtD);
});


const soundEffect = (answer) =>{
  let audio = new Audio(`../sounds/${answer}.mp3`);
  audio.play();
}
