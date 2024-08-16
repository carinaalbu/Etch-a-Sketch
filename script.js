const container = document.querySelector("#container");

function createGrid(size){
    for(let i=0; i<size; i++){
        
        const row = document.createElement('div');
        row.classList.add("row");

        for(let j=0; j<size; j++){
            const gridSquare = document.createElement('div');
            
            gridSquare.classList.add("gridSquare");
            gridSquare.addEventListener('mousemove', ()=>{
                gridSquare.style.backgroundColor='black';
            })

            row.appendChild(gridSquare);
            
        }

        container.appendChild(row);
    }
}

createGrid(16);

button.addEventListener('click', ()=>{
    
    const size = prompt("Please enter the size of the grid");
    container.innerHTML = '';
    if(size<=100){
            createGrid(size);

    }
});

