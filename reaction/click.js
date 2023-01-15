"use strict";

import { endGame, reactionStart } from "./randomizer.js";

export let gameStart = false;

export let endSignal = false;

export let earlyClick = false;

export let trueGameStart = false;

export function update(CLICK_BOX) {

    CLICK_BOX.addEventListener('click', clickCheck);

    function clickCheck() {

        gameStart = true;

        setTimeout(trueGameStartCheck, 100);

        function trueGameStartCheck() {

            trueGameStart = true;

        }

    }

    if (reactionStart == true) {

        CLICK_BOX.addEventListener('click', endGameClickCheck);

        function endGameClickCheck() {

            endSignal = true;



        }

    }

    if (trueGameStart == true && reactionStart == false) {

        if (endGame == false) {

            CLICK_BOX.addEventListener('click', failureClickCheck);

            function failureClickCheck() {

                earlyClick = true;
            }
        }

    }

}

export function draw(TEXT, CLICK_BOX) {

    if (reactionStart == false) {

        if (gameStart == true) {

            TEXT.innerHTML = "Wait";
            console.log("working");

        }

    }

}
