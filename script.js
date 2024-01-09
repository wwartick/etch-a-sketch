/*
NEEDS
start with 16x16
each box is it's own seperate div (loops?)
event listener AFTER div generation
fancy stuff AFTER black/white works at LEAST
*/

const mainContainer = document.querySelector('#container');
const gridHolder = document.createElement('div');
var slider = document.getElementById('slider');
var output=document.getElementById('sliderValue');
output.innerHTML=slider.value;
let gridSize = 16;
gridHolder.id='container';
let color = 'black';

slider.oninput=function(){
    output.innerHTML=this.value;
    gridSize = this.value;
    while (gridHolder.firstChild){
        gridHolder.removeChild(gridHolder.firstChild);
    }
    createGrid(gridSize);

}

//runs a function so that each time a user enters a new box 
//each box is a different random color
const rainbowRoad = function(){
    let x= Math.floor(Math.random() * 256);
    let y= Math.floor(Math.random() * 256);
    let z= Math.floor(Math.random() * 256);
    let rainbow = `rgba(${x},${y},${z})`;
    return rainbow;
}

//sets the color for what the board will be
const colorPicker = function(colorChoice){
    color = colorChoice;
    return color;
}

//clears the board when the user decides to
const clearBoard = function() {
    const clearDivs = document.querySelectorAll('.gridBox');
     clearDivs.forEach(div =>{
        div.style.backgroundColor='white';
     })
}


//creates grid with length/width depending on the users choice
const createGrid = function(length) {
    //loop to create the many divs needed
    for(i=0; i<(length*length); i++) {
        //variable to get the needed length/width of the created divs'
        let gridLength = 70 / length;
        const gridDiv = document.createElement('div');
        //gives each created div a unique id
        gridDiv.id= "r" + i;
        gridDiv.className='gridBox';
        //dynamic length/width depending on users decision
        gridDiv.style.height=gridLength+'vh';
        gridDiv.style.width=gridLength+'vh';
        gridDiv.style.backgroundColor='white';
        //changes color when moused over
        gridDiv.onmouseenter=function(){
            const currentGrid = document.getElementById(this.id);
            if(color=='rainbow'){
            currentGrid.style.backgroundColor=rainbowRoad();
            } else {
            currentGrid.style.backgroundColor='black';  
            }
        }  

        gridHolder.appendChild(gridDiv);
    }
    mainContainer.appendChild(gridHolder);
}

createGrid(gridSize);
//accessGridBoxes()