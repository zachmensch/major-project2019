// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019


// Initial variable setup

let screen;

function preload() {
    CoolFontRegular = loadFont('assets/D Day Stencil.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    screen = "mainScreen";
    textAlign(CENTER, CENTER);
    rectMode(CORNER);
}

function draw() {
    displayScreen();
    console.log("p")

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
    // Initializing buttons
    mainButtons();
    // Drawing the buttons
    startButton.draw();
    optionsButton.draw();
    // Drawing text on screen
    textSize(175);
    textFont(CoolFontRegular);
    fill(0)
    text("Armoured Defense", width/2, height/4);
}

function displayPlay() {
    background("blue");

    playButtons();

    playBackButton.draw();
    nextRoundButton.draw();

    // Drawing playing interface
    fill(255)
    stroke(0)
    strokeWeight(5)
    rect(width/32, height/16, width/32 * 27, height/16 * 14);
    rect(width/32 * 28.5, height/16 * 7.5, width/32 * 3, height/16 * 7.5);
    rect(width/32 * 28.5, height/16 * 4.25, width/32 * 3, height/16 * 3)
}

function displayOptions() {
    background("blue");
    optionsButtons();
    optionsBackButton.draw();
}

function mainButtons() {
    // Start Button elements (using Clickable library)
    startButton = new Clickable(width/2 - 125, height/2 - 50);
    startButton.resize(250, 100);
    startButton.color = "green";
    startButton.text = "Start Game";
    startButton.textSize = 40;
    startButton.textFont = CoolFontRegular;
    startButton.onHover = function() {
        startButton.color = "blue";
    }
    startButton.onPress = function() {
        screen = "playScreen";
    }
    optionsButton = new Clickable(width/2 - 125, height/2 + 100);
    optionsButton.resize(250, 100);
    optionsButton.color = "green";
    optionsButton.text = "Options";
    optionsButton.textSize = 40;
    optionsButton.textFont = CoolFontRegular;
    optionsButton.onPress = function() {
        screen = "optionsScreen";
    }

    
}

function playButtons() {
    playBackButton = new Clickable(width/32 * 29, height/16);
    playBackButton.color = "green";
    playBackButton.text = "Back To Menu"
    playBackButton.textFont = CoolFontRegular;
    playBackButton.textSize = 20;
    playBackButton.onPress = function() {
        screen = "mainScreen";
    }

    nextRoundButton = new Clickable(width/32 * 29, height/16 * 2.5);
    nextRoundButton.color = "green";
    nextRoundButton.text = "Next Round";
    nextRoundButton.textFont = CoolFontRegular;
    nextRoundButton.textSize = 20;
    nextRoundButton.onPress = function() {

    }

}

function optionsButtons() {
    optionsBackButton = new Clickable(width/2 - 125, height/2 + 100);
    optionsBackButton.resize(250, 100);
    optionsBackButton.color = "green";
    optionsBackButton.text = "Back";
    optionsBackButton.textSize = 30;
    optionsBackButton.textFont = CoolFontRegular
    optionsBackButton.onPress = function() {
        screen = "mainScreen";
    }

}

