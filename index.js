import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'



let ikonaHrace = document.querySelector('#ikona-hrace')

 let currentPlayer = 'circle'

 const pridejZnak = (event) => {
    if (currentPlayer === "circle") {
      ikonaHrace.src = "image/cross.svg"
      event.target.classList.add("board__field--circle")
      event.target.disabled = true;
      return currentPlayer = "cross"
    } else if (currentPlayer === "cross"){
      ikonaHrace.src = "image/circle.svg"
      event.target.classList.add("board__field--cross")
      event.target.disabled = true;
      return currentPlayer = "circle"
    }
  }
 

  // const button1 = document.querySelector('button:nth-child(1)').addEventListener("click", pridejZnak)
  // const button2 = document.querySelector('button:nth-child(2)').addEventListener("click", pridejZnak)
  // const button3 = document.querySelector('button:nth-child(3)').addEventListener("click", pridejZnak)
  // const button4 = document.querySelector('button:nth-child(4)').addEventListener("click", pridejZnak)
  // const button5 = document.querySelector('button:nth-child(5)').addEventListener("click", pridejZnak)
  // const button6 = document.querySelector('button:nth-child(6)').addEventListener("click", pridejZnak)
  // const button7 = document.querySelector('button:nth-child(7)').addEventListener("click", pridejZnak)
  // const button8 = document.querySelector('button:nth-child(8)').addEventListener("click", pridejZnak)
  // const button9 = document.querySelector('button:nth-child(9)').addEventListener("click", pridejZnak)
  // const button10 = document.querySelector('button:nth-child(10)').addEventListener("click", pridejZnak)


// bonus

 const Refresh = (event) => {
    const otazka = window.confirm('Opravdu chcete hru spustit znovu?');
    if (otazka === true) {
        window.open("hra.html", 'Refresh...');
      } else {
        event.preventDefault()
      }
}

document.querySelector('#refresh').addEventListener('click', Refresh)


// Ukol 4 posluchac udalosti

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
  button.addEventListener('click', pridejZnak);
});



// const herniPole = [
// '_', 'o', 'x',
// 'x', 'o', '_',
// '_', 'o', '_',
// ]
// const vitez = findWinner(herniPole)
// if (vitez === 'o' || vitez === 'x') {
// 	alert(`Vyhrál hráč se symbolem ${vitez}.`) // Vyhrál hráč se symbolem o.
  
// } if  (vitez === 'x' || vitez === 'o') {
// 	alert(`Vyhrál hráč se symbolem ${vitez}.`) // Vyhrál hráč se symbolem x.
// }