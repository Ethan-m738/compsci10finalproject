"use strict";

import { gameStart, endSignal } from "./click.js";

export const CHANCE = 1;

export let endGame = false;

let random;

export let reactionStart = false;

export function update() {

    if (reactionStart == false) {

        if (gameStart == true) {

            while (endGame == false) {

                random = Math.floor(Math.random() * 100);

                console.log(random);

                break;

            }

            if (random < CHANCE) {

                console.log(random);

                reactionStart = true;

            }

        }

    }

    if (endSignal == true) {

        endGame = true;

    }
    
}

export function draw(CLICK_BOX, TEXT, BACKGROUND) {

    if (reactionStart == true) {

        CLICK_BOX.style.backgroundColor = "white";

        TEXT.style.color = "black";

        BACKGROUND.style.backgroundColor = "black";

        TEXT.innerHTML = "Click"

    }

}