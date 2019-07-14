let num = 16;
const target12 = document.querySelector("#container");

function createGrid(num) {
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            target12.insertAdjacentHTML('afterbegin', `<div class="asd"></div>`);
        }
    }
}

target12.addEventListener("mouseover", (e) => {
    if(e.target && e.target.className == "asd") {
        e.target.classList.toggle('turnBlack');
    }
}) 

function clear12() {
    let myNodeList = document.querySelectorAll(".asd");
    myNodeList.forEach(el => el.classList.remove('turnBlack'));
}

createGrid(num);
