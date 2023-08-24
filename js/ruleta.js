import {makeQuestion} from './code.js';
let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
const spinSel = document.querySelector(".spinSelec").getBoundingClientRect();
const opts = document.querySelectorAll(".number");
let value = Math.ceil(Math.random() * 3800);


spinBtn.addEventListener("click", ()=>{
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3800);

  soundBtnEffect();

  setTimeout(()=>{
    opts.forEach(o => {
      const optPos = o.getBoundingClientRect();
    
      if(
        (
          (optPos.right > spinSel.right) &&
          (optPos.right > spinSel.left) &&
          (optPos.left < spinSel.right) &&
          (optPos.left < spinSel.left) &&
          (optPos.top < spinSel.top) &&
          (optPos.top < spinSel.bottom) &&
          (optPos.bottom > spinSel.top) &&
          (optPos.bottom > spinSel.bottom)
        ) 
        ||
        (
          (optPos.right > spinSel.right) &&
          (optPos.right > spinSel.left) &&
          (optPos.left < spinSel.right) &&
          (optPos.left < ((spinSel.right)-((spinSel.width)/2))) &&
          (optPos.top < spinSel.top) &&
          (optPos.top < spinSel.bottom) &&
          (optPos.bottom > spinSel.top) &&
          (optPos.bottom > spinSel.bottom)
        )
        ||
        (
          (optPos.left < spinSel.right) &&
          (optPos.left < spinSel.left) &&
          (optPos.right > spinSel.left) &&
          (optPos.right > ((spinSel.right)-((spinSel.width)/2))) &&
          (optPos.top < spinSel.top) &&
          (optPos.top < spinSel.bottom) &&
          (optPos.bottom > spinSel.top) &&
          (optPos.bottom > spinSel.bottom)
        )
      ){

        const textSpan = (o.querySelector(".miSpan"));
        const cate = textSpan.textContent;
        const numCate = textSpan.classList[1];      

        makeQuestion(cate, numCate);
      }
    })
  }, 5500);
});



const soundBtnEffect = ()=>{
  let audio = new Audio("../sounds/boton.mp3");
  audio.play();
}





