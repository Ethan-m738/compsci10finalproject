"use strict";

import { reactionStart, endGame } from "./randomizer.js";

let countedTime = 0;

let hasInitialTime = false;

let hasEndingTime = false;

let endingTime = 0;

let startingTime = 0;

let printTime = 0;

let trueEnd = false;

export function update() {

    if(reactionStart == true){

        if(hasInitialTime == false){

            startingTime = Date.now();

            hasInitialTime = true;

        }

        if(endGame == true){

            if(hasEndingTime == false){

                endingTime = Date.now();

                hasEndingTime = true;

                printTime = endingTime - startingTime - 999;

                trueEnd = true;

            }


            
        }

    }

}

export function draw(TEXT) {

    if(trueEnd == true){

        TEXT.innerHTML = printTime;

    }

}
