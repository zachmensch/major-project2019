// MAIN TOWER DEFENSE PROJECT 
// Zach Mensch CS30 2019

//https://juniorgeneral.org/index.php/figure/designer/Dirk%20Schoenberger



class Enemy {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.health = 100;
    }
    display() {
        circle(this.x, this.y, this.size);
    }
    move() {
        if(this.x < width/32 * 27) {
            this.x = this.x + 3;
        }
    }
    checkIfDead() {
        if (this.health <= 0) {
             enemies.splice(this.enemy, 1)
        }
    }
}

let enemies = []

let screen;

let panzer4Tank;
let health = 100;
let towers = [];
let distance;
let roundOn = false;
let enemypos;
let enemiesThisRound = 0;

let isHoldingTower = false;

let currentRound = 0;

class Tower {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    chooseTarget() {

    }

    // fire() {
    //     let thisBullet = {
    //       x: ,
    //       y: ,
    //       radius: ,
    //       angle: gunAngle,
    //       speed: 10
    //     };
    //     bullets.push(thisBullet);
    //   }
      
    // updateBullets() {
    //     for (let h = bullets.length - 1; h > 0; h--) {
    //       if (bullets[h].x < 0 || bullets[h].x > width ||
    //         bullets[h].y < 0 || bullets[h].y > height) {
    //           bullets.splice(h, 1)
    //         }
    //       else {
    //       bullets[h].x += bullets[h].speed * cos(bullets[h].angle);
    //       bullets[h].y += bullets[h].speed * sin(bullets[h].angle);
    //       circle(bullets[h].x, bullets[h].y, bullets[h].radius);
    //       }
    //     }
    //   }
 
}
function preload() {
    CoolFontRegular = loadFont('assets/SF Atarian System.ttf');
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

    let blah = 0;

    if (screen === "playScreen") {
        displayPlay();
        drawTowers();
        towerSelect();
        if (roundOn) {
            for (let p = 0; p < enemies.length; p++) {
                enemies[p].display();
                enemies[blah].move();
                blah = blah + 1;
                enemies[p].checkIfDead();
                
            }

        }
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
    rectMode(CORNER)
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
    rectMode(CORNER)
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
        currentRound = currentRound + 1;
        roundOn = true;
        enemiesThisRound = enemiesThisRound + 1;
        spawnEnemies();

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


function towerSelect() {
    let tower1dmg = 5;
    let tower1range = 10;
    let tower1speed = 3;
    rectMode(CORNER)
    tower1 = new Clickable(width/32 * 29, height/16 * 8);
    tower1.color = "peru";
    tower1.cornerRadius = 0;
    tower1.text = "Tank 1";
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
        selectedTower = new Tower()
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
        rectMode(CENTER)
        rect(towers[i].x, towers[i].y, 50, 50);
    }
}



function spawnEnemies() {
    let enemySpawnX = width/32 + 12.5
    let enemySpawnY = height/2
    for(let q = 0; q < enemiesThisRound; q++) {
        enemies.push(enemy = new Enemy(enemySpawnX, enemySpawnY, 25))
    }
}













// ENEMY: 50, 25  75
// ENEMY: 30, 65 95
// ENEMY: 65, 20 85

//TOWER: 25, 30 55