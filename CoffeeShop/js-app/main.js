const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const beansButton = document.querySelector("#run-button");
beansButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const coffeeButton = document.querySelector("#coffee-button");
beansButton.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}