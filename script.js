const btton = document.getElementById("click-me");
const txt = document.getElementById("color-name");
const bs = document.getElementById('body');

const clrs = ['blue', 'green', 'yellow', 'orange', 'cornsilk', 'red', 'crimson', 'gold', 'gray']

btton.addEventListener('click', (e)=>{
    e.preventDefault();
    const pick_color = clrs[Math.floor(Math.random()*9)+0]; 
    txt.innerText = pick_color;
    bs.style.backgroundColor = pick_color;
});
