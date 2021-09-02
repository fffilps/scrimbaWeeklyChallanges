import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

let adviceButton = document.getElementById('adviceBtn')
let adviceInput = document.getElementById('adviceDisplay');
let num;

let randomNum = () => num = Math.floor(Math.random() * 6);

adviceButton.addEventListener('click', () => adviceInput.innerHTML=advice[Math.floor(Math.random() * 6)])



// generate random light colors: 
     
    adviceButton.addEventListener('click', () => adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'}))

