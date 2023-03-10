let adviceText = document.getElementById('adviceText')
let adviceId = document.getElementById('adviceId')
let diceBtn = document.getElementById('diceBtn')

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice',{cache: 'no-cache'})
    const data = await res.json();
    
    adviceText.innerText = data.slip.advice;
    adviceId.innerText = data.slip.id
}

window.onload = () =>{
    getAdvice();
}

diceBtn.addEventListener("click", () => {
    getAdvice();
})

