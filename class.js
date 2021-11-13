class Propulsion {
    constructor(
        speed,
        power,
        burnTime
    ){
        this.speed = speed;
        this.power = power;
        this.burnTime = burnTime;
    }
    //list methods
    launch(){
        alert("Spacecraft lifting off");
        return true;
    }

    landing(){
        alert("Spacecraft landing");
        return true;
    }

    loadFuel(fuelType, fuelAmt){
        alert("Loading spacecraft with " + fuelAmt + " gallons of " + fuelType + " fuel.");
        return true;
    }
}

class Mission {
    //properties first
    constructor(
        fuelLevel,
        oxyLvl,
        foodLvl,
        spaceCraftName,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts,
    ){  //substantiate
        this.fuelLevel = fuelLevel;
        this.oxyLvl = oxyLvl;
        this.foodLvl = foodLvl;
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }

    launch(){
        alert("We are taking off")
    }

    disMissionLaunchDate(){
        alert("This mission launches on " + this.launchDateMonth
            + " " + this.launchDateDay + ", " + this.launchDateYear
            + " with " + this.numOfAstronauts + " astronauts aboard.")
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.disMissionLaunchDate();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.disMissionLaunchDate();
}