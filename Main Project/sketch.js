// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019


// Initial variable setup

let screen;

function preload() {
    CoolFontRegular = loadFont('assets/SF Atarian System.ttf');
    CoolFontItalic = loadFont('assets/SF Atarian System Italic.ttf');
    CoolFontBold = loadFont('assets/SF Atarian System Bold.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    screen = "mainScreen";
    textAlign(CENTER, CENTER);
    rectMode(CORNER);
    


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
    // Initializing buttons
    mainButtons();
    // Drawing the buttons
    startButton.draw();
    optionsButton.draw();
    // Drawing text on screen
    textSize(100);
    textStyle(BOLD);
    textFont(CoolFontBold);
    text("Game", width/2, height/4);
}

function displayPlay() {
    background("blue");
    playButtons();
}

function displayOptions() {
    background("blue");
    optionsButtons();
    optionsBackButton.draw();
}

function mainButtons() {
    // Start Button elements (using Clickable library)
    textStyle(NORMAL)
    startButton = new Clickable(width/2 - 125, height/2 - 50);
    startButton.resize(250, 100);
    startButton.color = "green";
    startButton.text = "Start Game";
    startButton.textSize = 30;
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
    optionsButton.textSize = 30;
    optionsButton.onPress = function() {
        screen = "optionsScreen";
    }

    
}

function playButtons() {

}

function optionsButtons() {
    optionsBackButton = new Clickable(width/2 - 125, height/2 + 100);
    optionsBackButton.resize(250, 100);
    optionsBackButton.color = "green";
    optionsBackButton.text = "Back";
    optionsBackButton.textSize = 30;
    optionsBackButton.onPress = function() {
        screen = "mainScreen";
    }

}

