//Select the elements on the page 
//canvas, shake button

//Set up our canvas for drawing



//write a draw function 
//write a handler for the keys
// clear/shake function
//listen for arrow keys

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

//Set up canvas for drawing
// make a variable called height and width from the
//same properties on our canvas.
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random()* height);
//create x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();    //start the drawing
ctx.moveTo(200,200);
ctx.lineTo(200,200);
ctx.stroke();

//write a draw function 
function draw({ key }){
    //increment the hue
    hue += 1;
    //ctx.strokeStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
    console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x,y);
    //move our x and y values depending on
    //what the user did
    switch(key){
        case 'ArrowUp':
            y-=MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y+=MOVE_AMOUNT;
                break;
        case 'ArrowRight':
            x+=MOVE_AMOUNT;
            break;  
        case 'ArrowLeft':
            x-=MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

//write a handler for the keys
function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        console.log(e.key);
        draw({key: e.key});
        console.log('HANDLING KEY');
    }
}
//clear/shake function
function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        function(){
            canvas.classList.remove('shake');
        },
          {once: true}
    )
}

//listen for arrow keys

window.addEventListener('keydown',handleKey);
shakebutton.addEventListener('click',clearCanvas);

