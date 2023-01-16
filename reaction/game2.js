"use strict";

import { update as updateRandom, draw as drawRandom, CHANCE, endGame, reactionStart } from './randomizer.js';
import { update as updateClick, draw as drawClick, gameStart, earlyClick, trueGameStart } from './click.js';
import { update as updateTimer, draw as drawTimer } from './timer.js';
import { changePage } from "../common.js";

let lastRenderTime = 0;

const TICKS_PER_SECOND = 1;

const CLICK_BOX = document.getElementById("click-box");

const TEXT = document.getElementById("header1");

const BACKGROUND = document.getElementById("background");

const NAV_BAR = document.getElementById("navbar");

const SNAKE_NAV = document.getElementById("snakeLink");

const MAIN_NAV = document.getElementById("mainNavLink");

const TEXT_NAV = document.getElementById("mainNavLinkText");

const TEXT_SNAKE = document.getElementById("snakeLinkText");

SNAKE_NAV.addEventListener('click', snakePortal);

MAIN_NAV.addEventListener('click', mainNavPortal);

function main(currentTime) {

    if (endGame == true) {

        if (confirm("Click OK to restart.\nClick Cancel to end game.\nTime in miliseconds is displayed below.") == true) {

            window.location.reload();

        }

        else {

            NAV_BAR.style.visibility = "visible";

            SNAKE_NAV.style.visibility = "visible";

            MAIN_NAV.style.visibility = "visible";

            TEXT_NAV.style.visibility = "visible";

            TEXT_SNAKE.style.visibility = "visible";

        }

        return;

    }

    if (earlyClick == true && reactionStart == false && trueGameStart == true) {

        if (confirm("You clicked too early.\nClick OK to restart.\nClick Cancel to end game.") == true) {

            window.location.reload();

        }

        else {

            NAV_BAR.style.visibility = "visible";

            SNAKE_NAV.style.visibility = "visible";

            MAIN_NAV.style.visibility = "visible";

            TEXT_NAV.style.visibility = "visible";

            TEXT_SNAKE.style.visibility = "visible";

        }

        return;

    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / TICKS_PER_SECOND) return;

    lastRenderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);

function update() {

    updateRandom();
    updateClick(CLICK_BOX);
    updateTimer();


}

function draw() {

    drawRandom(CLICK_BOX, TEXT, BACKGROUND);
    drawClick(TEXT);
    drawTimer(TEXT);

}

function snakePortal() {

    changePage("/snakegame/snakevarsel/snakevarsel.html");

}

function mainNavPortal() {

    changePage("/nav/index.html");

}
