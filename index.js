
const data = {
    num: 16
}
const DOMstrings = {
    container: document.querySelector("#container")
}

function createGrid(num) {
    //Number.isInteger(num) ? num : 16;
    let cur = 100 / num;
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            DOMstrings.container.insertAdjacentHTML('afterbegin', `<div style="height: ${cur}%; width: ${cur}%" class="asd"></div>`);
        }
    }
}

DOMstrings.container.addEventListener("mouseover", (e) => {
    if(e.target && e.target.className == "asd") {
        e.target.classList.toggle('turnBlack');
    }
}) 

function clear1() {
    let myNodeList = document.querySelectorAll(".asd");
    myNodeList.forEach(el => el.classList.remove('turnBlack'));
}

function reset() {
    let myNodeList = document.querySelectorAll(".asd");
    myNodeList.forEach(el => DOMstrings.container.removeChild(el));
    do {
        data.num = parseInt(prompt("Input desired amount of squares per side(1-64):", 16), 10);
    } while (!(data.num >= 1 && data.num <= 64)); // asd
    createGrid(data.num);
}

(function(){
    createGrid(data.num);
})();
