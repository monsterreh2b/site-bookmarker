const inputEl = document.getElementById("input-el");
console.log(inputEl);

const inputBtn = document.getElementById("input-btn");
console.log(inputBtn);

const ulEl = document.getElementById("ul-el");
console.log(inputEl);

let links = [];


//let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));

//console.log(leadsFromLocalStorage);

function renderArray() {
    let house = "";
    
    for (let i = 0; i < links.length; i++) {
        house += `<li><a target='_blank' href='https://${links[i]}'>${links[i]}</a></li>`;
    }
    console.log(house);
    ulEl.innerHTML = house;
}

links = JSON.parse(localStorage.getItem("leads"));
console.log(links);

inputBtn.addEventListener("click", function () {
    links.push(inputEl.value);
    console.log(links);
    inputEl.value = "";
    localStorage.setItem("leads", JSON.stringify(links));
    renderArray();
    console.log(localStorage.getItem("leads")); //pull from DB LS
}); 

