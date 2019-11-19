// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019


// Initial variable setup

let screen;



function setup() {
    createCanvas(windowWidth, windowHeight);
    screen = "mainScreen";
    textAlign(CENTER, CENTER);


}

function draw() {
    displayScreen();
    startButton.draw();
    
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

function mainButtons() {
    // Start Button elements (using Clickable library)
    startButton = new Clickable(width/2, height/2);
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
}

function playButtons() {

}

function optionsButtons() {

}

