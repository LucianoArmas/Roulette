const datos = document.getElementById("excel-input");
const selDif = document.getElementById("selectorD");
let arrayNums = [
  [],
  [],
  [],
  []
];


const containerShow = document.getElementById("popup");
const rightBtn = document.getElementById("right");
const wrongBtn = document.getElementById("wrong");


let lastNumPreg = 0;
let lastNumCate = 0;


export const makeQuestion = (cate,numCate) =>{
  const selecD = selDif.options[selDif.selectedIndex];
  const selecTxtD = selecD.textContent;

  console.log(arrayNums);
  console.log(arrayNums[numCate]);

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
            const msg = containerShow.querySelector(".msg");
            msg.innerHTML = e[2];

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

  console.log(lastNumCate);
  console.log(lastNumPreg);
  console.log(arrayNums);
  (arrayNums[lastNumCate]).push(lastNumPreg);
  soundEffect("correct")
});


wrongBtn.addEventListener("click",()=>{
  containerShow.classList.add("hidden");
  containerShow.classList.remove("popup");
  soundEffect("incorrect")
});



const soundEffect = (answer) =>{
  let audio = new Audio(`../sounds/${answer}.mp3`);
  audio.play();
}
