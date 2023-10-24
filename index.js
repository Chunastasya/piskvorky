import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'



let ikonaHrace = document.querySelector('#ikona-hrace')

 let currentPlayer = 'circle'



 const pridejZnak = (event) => {
    if (currentPlayer === "circle") {
      ikonaHrace.src = "image/cross.svg"
      event.target.classList.add("board__field--circle")
      event.target.disabled = true;
       currentPlayer = "cross"
    } else if (currentPlayer === "cross"){
      ikonaHrace.src = "image/circle.svg"
      event.target.classList.add("board__field--cross")
      event.target.disabled = true;
       currentPlayer = "circle"
    };
    const buttons = document.querySelectorAll('.buttons button');
    
    console.log(buttons);
    const herniPole = Array.from(buttons).map((button2) => {
      if (button2.classList.contains('board__field--circle')){
        return 'o';
      }
      if (button2.classList.contains('board__field--cross')){
        return 'x';
      }
      return '_';
    });
   

    
const vitez = findWinner(herniPole)
if (vitez === 'o' || vitez === 'x') {
  
  const zobrazAlert = () => {
    alert(`Vyhrál hráč se symbolem ${vitez}.`);
    location.reload();
  };
  setTimeout(zobrazAlert, 100);
 
  
 
}

const hrac = async () => {
  const player = 'x';

  const API = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board: herniPole,
        player: player,
      }),
    },
  );
  const data = await API.json();
  const { x, y } = data.position;
  const tlacitka = buttons[x + y * 10];
  tlacitka.click();
};

if (currentPlayer.classList.contains('#ikona-hrace')) {
  hrac();
}
  };
 
  
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






