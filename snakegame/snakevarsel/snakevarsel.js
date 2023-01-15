"use strict";

let expansionRate = localStorage.getItem("expansionRate") ? localStorage.getItem("expansionRate") : 5;

localStorage.setItem("expansionRate", expansionRate);

let gameSpeed = localStorage.getItem("gameSpeed") ? localStorage.getItem("gameSpeed") : 10;

localStorage.setItem("gameSpeed", gameSpeed);

let start = document.getElementById("start");

let startText = document.getElementById("startText");

let growthUp = document.getElementById("grUp");

let growthDown = document.getElementById("grDown");

let growthDisplay = document.getElementById("grDisplay");

let speedUp = document.getElementById("gsUp");

let speedDown = document.getElementById("gsDown");

let speedDisplay = document.getElementById("gsDisplay");

let exit = document.getElementById("exitBox");

let exitText = document.getElementById("exitBoxText");

main();

function main() {

    if (expansionRate && gameSpeed) {

        growthDisplayChange();

        speedDisplayChange();

        start.addEventListener('click', startSnake);

        exit.addEventListener('mouseover', changeColor);

        exit.addEventListener('mouseout', changeColorBack);

        exit.addEventListener('click', returnHome);

        start.addEventListener('mouseover', startChange);

        start.addEventListener('mouseout', startChangeBack);

        growthUp.addEventListener('click', () => {

            growthRateUp();
            growthDisplayChange();

        });

        growthDown.addEventListener('click', () => {

            growthRateDown();
            growthDisplayChange();

        });

        speedUp.addEventListener('click', () => {

            gameSpeedUp();
            speedDisplayChange();

        });

        speedDown.addEventListener('click', () => {

            gameSpeedDown();
            speedDisplayChange();

        });

        function startSnake() {

            location.replace("../snake.html");

        }

        function changeColor() {

            exit.style.backgroundColor = "red";
            exit.style.opacity = "70%";
            exitText.style.fontSize = "10vw";

        }

        function changeColorBack() {

            exit.style.backgroundColor = "white";
            exit.style.opacity = "30%";
            exitText.style.fontSize = "5vw";

        }

        function returnHome() {

            location.replace("/nav/index.html");

        }

        function startChange() {

            startText.style.fontSize = "7vw";

        }

        function startChangeBack() {

            startText.style.fontSize = "5vw";

        }

        function growthRateUp() {

            expansionRate++;

            localStorage.setItem("expansionRate", expansionRate);

        }

        function growthDisplayChange() {

            growthDisplay.innerHTML = "Growth Rate:" + expansionRate;

        }

        function growthRateDown() {

            if (expansionRate > 1) {

                expansionRate--;

                localStorage.setItem("expansionRate", expansionRate);


            }

        }

        function speedDisplayChange() {

            speedDisplay.innerHTML = "Game Speed:" + gameSpeed;

        }

        function gameSpeedDown() {

            if (gameSpeed > 1) {

                gameSpeed--;

                localStorage.setItem("gameSpeed", gameSpeed);

            }

        }

        function gameSpeedUp() {

            gameSpeed++;

            localStorage.setItem("gameSpeed", gameSpeed);

        }

    }

}
