'use strict';

const trigger = document.getElementById("trigger");
const targetImage = document.getElementById("target");

trigger.addEventListener("mouseover", () => {
    targetImage.src = "img/itemB.jpeg";
});

trigger.addEventListener("mouseout", () => {
    targetImage.src = "img/itemA.jpeg";
});