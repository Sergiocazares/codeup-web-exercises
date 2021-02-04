"use strict";

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
const colors = ["blue", "red", "white", "black", "yellow", "green", "orange"];
let sequencePosition = 0;
let intervalID;

$(document).keyup(function(event){

    if (event.keyCode === konamiCode[sequencePosition]) {
        let elements = $("#konami").children();
        $(elements[sequencePosition]).addClass("cheatcode");
        sequencePosition++;
    } else {

        for (let element of $("#konami").children()) {
            $(element).removeClass("cheatcode");
            sequencePosition = 0;
        }
    }

    if (sequencePosition === 11) {
        sequencePosition = 0;

        if (intervalID === undefined) {
            intervalID = setInterval(function(){
                for (let element of $("#konami").children()) {
                    let randomNumber = Math.floor(Math.random() * 7);
                    $(element).css("color", colors[randomNumber]);
                }
            }, 100);
        }
    }
});