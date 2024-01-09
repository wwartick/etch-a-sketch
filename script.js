/*
NEEDS
start with 16x16
each box is it's own seperate div (loops?)
event listener AFTER div generation
fancy stuff AFTER black/white works at LEAST
*/

const mainContainer = document.querySelector('#container');
const gridHolder = document.createElement('div');
gridHolder.id='container';

const changeColor = function(id) {
  const currentGrid = document.getElementById(id);
  currentGrid.style.backgroundColor='white';
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
    //div styling
    gridDiv.style.border='1px solid black'
    gridDiv.style.height=gridLength+'vh';
    gridDiv.style.width=gridLength+'vh';
    gridDiv.onmouseenter=function(){changeColor(this.id);}
    gridHolder.appendChild(gridDiv);
    }
    mainContainer.appendChild(gridHolder);
}

/* function accessGridBoxes() {
    const gridBoxes = gridHolder.getElementsByClassName('gridBox');

    console.log(gridBoxes);
} */

//accessGridBoxes()
createGrid(50);