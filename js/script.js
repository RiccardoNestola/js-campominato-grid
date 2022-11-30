
const gridContainer = document.querySelector("div.grid");
console.log(gridContainer);



for (let i = 1; i <=100; i++) {

    console.log(i);
    
    }



for (let i = 1; i <= 100; i++) {

    const newSquare = document.createElement("div");

    newSquare.classList.add("square");

    newSquare.innerHTML = (i);

    gridContainer.appendChild(newSquare);
    
}


