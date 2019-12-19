// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019

//https://juniorgeneral.org/index.php/figure/designer/Dirk%20Schoenberger

// Initial variable setup

let screen;
let panzer4Tank;

let towers = [];

let defending = false;

let isHoldingTower = false;

let currentRound = 0;

function preload() {
    CoolFontRegular = loadFont('assets/SF Atarian System.ttf');
    backgroundImage = loadImage('assets/798161.jpg');
    pantherTank = loadImage('assets/Panther.png');
    panzer4Tank = loadImage('assets/Panzer4.png');
    T34_85Tank = loadImage('assets/T34_85.png');
}
let panzer = {
    x: 0,
    y: 0,
    image: panzer4Tank

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    screen = "mainScreen";
    textAlign(CENTER, CENTER);
    rectMode(CORNER);
}

function draw() {
    displayScreen();
    //console.log("p");
    //console.log(mouseX, mouseY);
    // if (mouseIsPressed) {
    //     console.log(mouseX, mouseY);
    // }
}

// Displaying correct screen
function displayScreen() {
    if (screen === "mainScreen") {
        displayMain();
    }
    
    if (screen === "playScreen") {
        displayPlay();
        startGame();
        drawTowers();
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
    fill(0);
    text("Armoured Defense", width/2, height/4);
}

function displayPlay() {
    background(backgroundImage);

    playButtons();

    playBackButton.draw();
    nextRoundButton.draw();


    // Drawing playing interface
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(width/32, height/16, width/32 * 27, height/16 * 14);
    fill("green");
    rect(width/32 * 28.5, height/16 * 7.5, width/32 * 3, height/16 * 7.5);
    rect(width/32 * 28.5, height/16 * 4.25, width/32 * 3, height/16 * 3);




}

function displayOptions() {
    background(backgroundImage);
    optionsButtons();
    optionsBackButton.draw();
}

function mainButtons() {
    // Start Button elements
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
        clear();
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
        clear();
        screen = "optionsScreen";
    }

    
}

function playButtons() {
    playBackButton = new Clickable(width/32 * 29, height/16);
    playBackButton.color = "green";
    playBackButton.text = "Back To Menu";
    playBackButton.textFont = CoolFontRegular;
    playBackButton.textSize = 20;
    playBackButton.onHover = function() {
        playBackButton.color = "darkgreen";
        playBackButton.draw();
    }
    playBackButton.onPress = function() {
        clear();
        screen = "mainScreen";
    }

    nextRoundButton = new Clickable(width/32 * 29, height/16 * 2.5);
    nextRoundButton.color = "green";
    nextRoundButton.text = "Next Round";
    nextRoundButton.textFont = CoolFontRegular;
    nextRoundButton.textSize = 20;
    nextRoundButton.onHover = function() {
        nextRoundButton.color = "darkgreen";
        nextRoundButton.draw();
    }
    nextRoundButton.onPress = function() {
        currentRound = currentRound++
        defending = true;
        startRound();

    }



}

function optionsButtons() {
    optionsBackButton = new Clickable(width/2 - 125, height/2 + 100);
    optionsBackButton.resize(250, 100);
    optionsBackButton.color = "green";
    optionsBackButton.text = "Back";
    optionsBackButton.textSize = 30;
    optionsBackButton.textFont = CoolFontRegular;
    optionsBackButton.onHover = function() {
        optionsBackButton.color = "darkgreen";
        optionsBackButton.draw();
    }
    optionsBackButton.onPress = function() {
        clear();
        screen = "mainScreen";
    }

}

function startGame() {
    towerSelect();
    if (defending) {
        spawnEnemies();
    }

}

function towerSelect() {
    let tower1dmg = 5;
    let tower1range = 10;
    let tower1speed = 3;
    tower1 = new Clickable(width/32 * 29, height/16 * 8);
    tower1.color = "peru";
    tower1.cornerRadius = 0;
    tower1.text = "Panzer 4";
    tower1.textFont = CoolFontRegular;
    tower1.textSize = 20;
    tower1.onHover = function() {
        fill("peru");
        stroke(0);
        rect(width/32 * 29 - 130, height/16 * 8, 130, 50);
        textAlign(CORNER);
        textSize(17);
        fill("black");
        noStroke();
        text("Dmg: " + tower1dmg + " Rng: " + tower1range + " Spd: " + tower1speed, width/32 * 29 - 125, height/16 * 8 + 25);
        tower1.draw();
    }
    tower1.onPress = function() {
        isHoldingTower = true;
        selectedTower = panzer
    }
    tower1.draw();
}



function mouseReleased() {
    if (isHoldingTower) {
        towers.push(selectedTower)
        isHoldingTower = false;
        selectedTower = 0;
        towers[towers.length-1].x = pmouseX;
        towers[towers.length-1].y = pmouseY;
    }

}

function drawTowers() {
    for (let i = 0; i < towers.length; i++) {
        rect(towers[i].x, towers[i].y, 50, 50);
    }
}

let enemies = []

function startRound() {
    enemies.push(enemy)


}
let enemy = {
    x: 0,
    y: 0
}
let enemySpawned = 0;

function spawnEnemies() {
    let waitTime = 500;
    let i;
    for (i; i < enemies.length; i++) {
        if (millis() > enemySpawned + waitTime) {
            enemySpawned = millis();
            rect(enemies[i].x, enemies[i].y, 50, 50)

        }
    }
}

function enemyKilled() {

}
