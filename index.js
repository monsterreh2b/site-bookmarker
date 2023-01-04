const inputEl = document.getElementById("input-el");
console.log(inputEl);

const inputBtn = document.getElementById("input-btn");
console.log(inputBtn);

const deleteBtn = document.getElementById("delete-btn");
console.log(deleteBtn);

const ulEl = document.getElementById("ul-el");
console.log(inputEl);

let links = [];


//let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));

//console.log(leadsFromLocalStorage);

function renderArray(array) {
    let house = "";
    
    for (let i = 0; i < array.length; i++) {
        house += `<li><a target='_blank' href='https://${array[i]}'>${array[i]}</a></li>`;
    }
    console.log(house);
    ulEl.innerHTML = house;
}

if (JSON.parse(localStorage.getItem("leads"))) {
    links = JSON.parse(localStorage.getItem("leads"));
    console.log(links);
}
else {
    links = [];
}




inputBtn.addEventListener("click", function () {
    console.log(inputEl.value);
    links.push(inputEl.value);
    console.log(links);
    inputEl.value = "";
    localStorage.setItem("leads", JSON.stringify(links));
    renderArray(links);
    console.log(localStorage.getItem("leads")); //pull from DB LS
}); 

deleteBtn.addEventListener("click", function () {
    localStorage.clear();
    links = [];
    ulEl.innerHTML = "";
});

