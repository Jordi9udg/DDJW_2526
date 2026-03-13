import {$} from "../library/jquery-4.0.0.slim.module.min.js";
import {clickCard, gameItems, selectCards, startGame, initCard, saveGame} from "./memory.js";

let game = $('#game');
let canvas = game[0].getContext('2d');
let resources = {};
let cards = [];
if (canvas){
    game.attr("width", 800);
    game.attr("height", 600);
    start();
    update();
}

function start(){
    selectCards();
    cards = [...gameItems];
    loadCardResource("../resources/back.png");
    cards.forEach(card => {
        loadCardResource(card);
        initCard(val => card = val);
    });
    // TODO: Vincular events
    startGame();
}

function update(){
//    checkInput();
//    draw();
    // TODO: Com es pot fer per que això sigui LOOP
}

function loadCardResource(src){
    if (!resources[src]){
        let res = {image: null, ready: false}
        res.image = new Image();
        res.image.src = src;
        res.image.onload = ()=> res.ready = true;
        resources[src] = res;
    }
}