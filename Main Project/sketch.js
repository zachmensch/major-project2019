// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019

//https://juniorgeneral.org/index.php/figure/designer/Dirk%20Schoenberger

// Initial variable setup

let screen;

function preload() {
    CoolFontRegular = loadFont('assets/AmericanCaptainPatrius02Fre-PvPd.ttf');
    backgroundImage = loadImage('assets/798161.jpg');
    pantherTank = loadImage('assets/Panther.png');
    panzer4Tank = loadImage('assets/Panzer4.png');
    T34_85Tank = loadImage('assets/T34_85.png');
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
    background(backgroundImage);
    // Initializing buttons
    mainButtons();
    // Drawing the buttons
    startButton.draw();
    optionsButton.draw();
    // Drawing text on screen
    textSize(100);
    textFont(CoolFontRegular);
    fill(0)
    text("Armoured Defense", width/2, height/4);
}

function displayPlay() {
    background(backgroundImage);

    playButtons();

    playBackButton.draw();
    nextRoundButton.draw();

    // Drawing playing interface
    fill(255)
    stroke(0)
    strokeWeight(5)
    rect(width/32, height/16, width/32 * 27, height/16 * 14);
    fill("green");
    rect(width/32 * 28.5, height/16 * 7.5, width/32 * 3, height/16 * 7.5);
    line(width/32 * 30, height/16 * 7.5, width/32 * 30, height/16 * 15);
    rect(width/32 * 28.5, height/16 * 4.25, width/32 * 3, height/16 * 3);
    image(panzer4Tank, width/32 * 28.75, height/16 * 7.5);
}

function displayOptions() {
    background(backgroundImage);
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
        startButton.color = "darkgreen";
        startButton.draw();
    }
    startButton.onPress = function() {
        clear()
        screen = "playScreen";
    }
    optionsButton = new Clickable(width/2 - 125, height/2 + 100);
    optionsButton.resize(250, 100);
    optionsButton.color = "green";
    optionsButton.text = "Options";
    optionsButton.textSize = 40;
    optionsButton.textFont = CoolFontRegular;
    optionsButton.onHover = function() {
        optionsButton.color = "darkgreen";
        optionsButton.draw();
    }
    optionsButton.onPress = function() {
        clear()
        screen = "optionsScreen";
    }

    
}

function playButtons() {
    playBackButton = new Clickable(width/32 * 29, height/16);
    playBackButton.color = "green";
    playBackButton.text = "Back To Menu"
    playBackButton.textFont = CoolFontRegular;
    playBackButton.textSize = 15;
    playBackButton.onHover = function() {
        playBackButton.color = "darkgreen";
        playBackButton.draw();
    }
    playBackButton.onPress = function() {
        clear()
        screen = "mainScreen";
    }

    nextRoundButton = new Clickable(width/32 * 29, height/16 * 2.5);
    nextRoundButton.color = "green";
    nextRoundButton.text = "Next Round";
    nextRoundButton.textFont = CoolFontRegular;
    nextRoundButton.textSize = 15;
    nextRoundButton.onHover = function() {
        nextRoundButton.color = "darkgreen";
        nextRoundButton.draw();
    }
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
    optionsBackButton.onHover = function() {
        optionsBackButton.color = "darkgreen"
        optionsBackButton.draw()
    }
    optionsBackButton.onPress = function() {
        clear()
        screen = "mainScreen";
    }

}

