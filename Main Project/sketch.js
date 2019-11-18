// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019


// Initial variable setup

let screen;



function setup() {
    createCanvas(windowWidth, windowHeight);
    screen = "mainScreen";
    textAlign(CENTER, CENTER);
    rectMode(CENTER);

}

function draw() {
    displayScreen();
    
}

// Displaying correct screen
function displayScreen() {
    if (screen === "mainScreen") {
        displayMain();
    }
    
    if (screen === "playScreen") {
        displayPlay();
    }

    if (screen === "optionsScreen") {
        displayOptions();
    }

}

// Elements of each screen
function displayMain() {
    background("blue");
    mainButtons();
}

function displayPlay() {
    background("red");
    playButtons();
}

function displayOptions() {
    background("green");
    optionsButtons();
}

// Buttons for each screen
class Button {
    constructor(x, y, buttonWidth, buttonHeight, colour, text) {
        this.x = x;
        this.y = y;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.colour = colour;
        this.text = text;
    }
    displayButton();
}

function mainButtons() {
    let playButton = new Button(height/2, width/2, 50, 50, "white", "PLAY GAME");
}

function playButtons() {

}

function optionsButtons() {

}
