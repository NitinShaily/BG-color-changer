const btton = document.getElementById("click-me");
const txt = document.getElementById("color-name");
const bs = document.getElementById('body');
const form = document.getElementById('inpt');
const input = document.getElementById('inpt-box');


const clrs = ['blue', 'green', 'yellow', 'orange', 'cornsilk', 'red', 'crimson', 'gold', 'gray']

btton.addEventListener('click', (e)=>{
    e.preventDefault();
    const pick_color = clrs[Math.floor(Math.random()*9)+0]; 
    txt.innerText = pick_color;
    bs.style.backgroundColor = pick_color;
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const pick_color = input.value;

    if(pick_color){
        if(bs.style.backgroundColor=pick_color){
            txt.innerText = pick_color;
            bs.style.backgroundColor = pick_color;
        }
        else{
            alert(pick_color + ' Color not available');
        }
    }
    else{
        alert('Enter a color');
    }
    
    input.value = '';
});

