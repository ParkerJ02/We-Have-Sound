//The playCraps function allows the website viewer to roll two die.
//When the user rolls two die with the same value, they win.
//If the user rolls two die with a value that adds up to 7 or 11, they lose.
//If the user rolls two die with a different outcome than the two already mentioned, it results in a draw.
function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {
        document.getElementById("finalRes").innerHTML = "Draw - you did not win or lose, please try agian.";
    }
}

//This blastOff function is the same one that we had in the HTML originally
//but now its it is in an external .js file and now only runs when pressing the start button.
function blastOff() {
    var currTime = 50;
    document.getElementById("countDownTimer").innerHTML = currTime
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
    }, 50000);
}

//This is the new and improved blast off function that takes up less space
//and uses for, if, and else to create a "smarter" function.
function btrBlastOff() {
    console.log("btrBlastOff() started");
    debugger;
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        console.log(i);
        setTimeout(function () {
            if(currTime > 20){
                debugger;
                document.getElementById("countDownTimer").innerHTML = currTime;
            }else {
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        }, 50000);
    }

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playStar(){
    console.log("playStar() started");
    mySound = new sound("ShootingStarSummit.mp3");
    mySound.play();
}