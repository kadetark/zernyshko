let buttonCoffee = document.getElementsByClassName("block-menu__button")[0];

let buttonDesserts = document.getElementsByClassName("block-menu__button")[1];

// buttonCoffee.style.background = "rgb(162, 101, 57)";
// buttonCoffee.style.color = "rgb(255, 255, 255)"; 

function coffee() {
    document.getElementById("coffee").style.display = "grid";
    document.getElementById("desserts").style.display = "none";

    // Активируем кнопку "Кофе"
    buttonCoffee.classList.add('active');
    buttonDesserts.classList.remove('active');
}

function desserts() {
    document.getElementById("desserts").style.display = "grid";
    document.getElementById("coffee").style.display = "none";

    // Активируем кнопку "Десерты"
    buttonDesserts.classList.add('active');
    buttonCoffee.classList.remove('active');
}
