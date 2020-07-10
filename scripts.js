// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeOff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let posX = 0;
    let posY = 0;


    takeOff.onclick = function() {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        
        if (response) {            
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "blue";
            let miles = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            document.getElementById("spaceShuttleHeight").innerHTML = (miles + 10000);
        }
    };

    land.onclick = function() {
        alert( "The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    };

    abort.onclick = function() {
        let response = confirm("Confirm that you want to abort the mission.");
        flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    };

    up.onclick = function() {
        moveRocket(0, -10);
    };
    down.onclick = function() {
        moveRocket(0, 10);
    };
    left.onclick = function() {
        moveRocket(-10, 0);
    };
    right.onclick = function() {//RIGHTBOUND 250 //// LEFTBOUND -250 /// DOWNBOUND 280
        moveRocket(10, 0);
    };

    function moveRocket(moveX, moveY) {
        posY += moveY;
        posX += moveX;
        rocket.style.transform = `translate(${posX}px, ${posY}px)`;

        if(posY < 0 || posX > 250 || posX < -250) {// || posY > 280
            rocket.style.transform = "rotate(180deg)";
            while (posY <= 280) {
                posY++;
                window.setTimeout(()=> { rocket.style.transform = `translate(${posX}px, ${posY}px)`; }, 100);
            }
            //rocket.setAttribute("src", "./images/explosion-blue.gif");

        }
    }
}




window.onload = init;