
 const button1 = document.querySelector('button:nth-child(1)')
 const button2 = document.querySelector('button:nth-child(2)')
 const button3 = document.querySelector('button:nth-child(3)')
 const button4 = document.querySelector('button:nth-child(4)')
 const button5 = document.querySelector('button:nth-child(5)')
 const button6 = document.querySelector('button:nth-child(6)')
 const button7 = document.querySelector('button:nth-child(7)')
 const button8 = document.querySelector('button:nth-child(8)')
 const button9 = document.querySelector('button:nth-child(9)')
 const button10 = document.querySelector('button:nth-child(10)')

let ikonaHrace = document.querySelector('#ikona-hrace')

 let currentPlayer = 'circle'

 const pridejZnak = (event) => {
    if (currentPlayer === "circle") {
      ikonaHrace.src = "image/cross.svg"
      event.target.classList.add("board__field--circle")
      return currentPlayer = "cross"
    } else if (currentPlayer === "cross"){
      ikonaHrace.src = "image/circle.svg"
      event.target.classList.add("board__field--cross")
      return currentPlayer = "circle"
    }
  }


 button1.addEventListener("click", pridejZnak)
 button2.addEventListener("click", pridejZnak)
 button3.addEventListener("click", pridejZnak)
 button4.addEventListener("click", pridejZnak)
 button5.addEventListener("click", pridejZnak)
 button6.addEventListener("click", pridejZnak)
 button7.addEventListener("click", pridejZnak)
 button8.addEventListener("click", pridejZnak)
 button9.addEventListener("click", pridejZnak)
 button10.addEventListener("click", pridejZnak)