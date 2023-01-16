import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { changePage } from '../common.js';

let gameSpeed = localStorage.getItem("gameSpeed");

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

const NAV_BAR = document.getElementById("navbar");

const REACTION_NAV = document.getElementById("reactionLink");

const MAIN_NAV = document.getElementById("mainNavLink");

const TEXT_NAV = document.getElementById("mainNavLinkText");

const TEXT_REACTION = document.getElementById("reactionLinkText");

REACTION_NAV.addEventListener('click', reactionPortal);

MAIN_NAV.addEventListener('click', mainNavPortal);

function main(currentTime) {
  if(gameOver == true) {
        
    if(confirm("Click OK to restart.\nClick Cancel to end game.") == true) {

        changePage("/snakegame/snakevarsel/snakevarsel.html");

    }

    else {

        NAV_BAR.style.visibility = "visible";

        REACTION_NAV.style.visibility = "visible";

        MAIN_NAV.style.visibility = "visible";

        TEXT_NAV.style.visibility = "visible";

        TEXT_REACTION.style.visibility = "visible";

    }

    return;

}


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / gameSpeed) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function reactionPortal() {

  changePage("/reaction/reaction.html");
  
  }
  
  function mainNavPortal() {
  
    changePage("/nav/index.html");
  
  }