"use strict";

let exitBox = document.getElementById("exit");

let exitBoxText = document.getElementById("exitText");

exitBox.addEventListener('mouseover', makeBold);

exitBox.addEventListener('mouseout', unBold);

exitBox.addEventListener('click', goBack);

function makeBold() {

    exitBox.style.backgroundColor = "red";

    exitBox.style.opacity = "50%";

}

function unBold() {

    exitBox.style.backgroundColor = "lightblue";

    exitBox.style.opacity = "20%";

}

function goBack() {

    changePage("/nav/index.html");

}