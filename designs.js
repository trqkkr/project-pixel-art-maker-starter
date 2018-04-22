// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const size = document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');
const canvas = document.querySelector('#pixelCanvas');
// clear old grid
function clearOldGrid() {
    canvas.innerHTML = '';
}
//make new grid
function makeGrid() {
    let tr, td;
    //create table
    //for loop runs inside, out
    //so create td, append it to tr
    //create tr, append it to canvas
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
          td = document.createElement('td');
          tr.appendChild(td);
        }
    }
}
//change cell color
function changeCellColor() {
    canvas.addEventListener('click', function(e) {
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}
//after grid size is picked, call makeGrid();
size.addEventListener('submit', function(e) {
    e.preventDefault();
    clearOldGrid();
    makeGrid();
    changeCellColor();
})
