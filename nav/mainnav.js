"use strict";

import { changePage } from "../common.js";

let background = document.getElementById("background");

let titleBox = document.getElementById("titleBox");

let trueTitleBox = document.getElementById("trueTitleBox");

let title = document.getElementById("title");

let trueTitle = document.getElementById("trueTitle");

let belowTitle = document.getElementById("belowTitle");

let navBar = document.getElementById("navbar");

let snakeNav = document.getElementById("snakeLink");

let reactionNav = document.getElementById("reactionLink");

let startButton = document.getElementById("start");

let creditsButton = document.getElementById("credits");

let snakeText = document.getElementById("snakeLinkText");

let reactionText = document.getElementById("reactionLinkText");

titleBox.addEventListener('click', startAnimation);

startButton.addEventListener('click', startRandom);

creditsButton.addEventListener('click', startCredits);

snakeNav.addEventListener('click', snakePortal);

reactionNav.addEventListener('click', reactionPortal);

function startAnimation() {

    let interval1;

    let i = 0;

    let colorChange = 0;

    let opacity = 0;

    let opacity2 = 0;

    let opacity3 = 0;

    let increment = 0;

    interval1 = setInterval(animationStarter, 10);

    console.log("start");

    function animationStarter() {

        changeBackground();

        moveFirstBox();

        addNavBar();

        addOtherElements();

        counter();

    }

    function changeBackground() {

        background.style.backgroundColor = "rgb(" + colorChange + "," + colorChange + "," + colorChange + ")";

        colorChange++;

    }

    function moveFirstBox() {

        title.style.color = "rgb(" + colorChange + "," + colorChange + "," + colorChange + ")";

        belowTitle.style.color = "rgb(" + colorChange + "," + colorChange + "," + colorChange + ")";

        if (i >= 256) {

            titleBox.style.display = "none";

            title.style.display = "none";

            belowTitle.style.display = "none";

        }

        if (i >= 256) {

            trueTitleBox.style.opacity = opacity + "%";

            trueTitle.style.opacity = opacity + "%";

            opacity++;

        }

    }

    function addNavBar() {

        if (i >= 356) {

            navBar.style.opacity = opacity2 + "%";

            snakeNav.style.opacity = opacity2 + "%";

            snakeText.style.opacity = opacity2 + "%";

            reactionText.style.opacity = opacity2 + "%";

            reactionNav.style.opacity = opacity2 + "%";

            opacity2++;

        }

    }

    function addOtherElements() {

        if (i >= 456) {

            startButton.style.opacity = opacity3 + "%";

            creditsButton.style.opacity = opacity3 + "%";

            opacity3++;

        }

    }

    function counter() {

        i++;

        if (i >= 557) {

            clearInterval(interval1);

        }

    }

}

function startRandom() {

    let ran = 0;

    ran = Math.random() * 10;

    if (ran >= 5) {

        changePage("/reaction/reaction.html");

    }

    else if (ran < 5) {

        changePage("/snakegame/snakevarsel/snakevarsel.html");

    }

}

function startCredits() {

    changePage("/nav/credits.html");
    
}

function snakePortal() {

    changePage("/snakegame/snakevarsel/snakevarsel.html");

}

function reactionPortal() {

    changePage("/reaction/reaction.html");

}