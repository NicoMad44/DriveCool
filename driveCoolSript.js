const btnShortDist = document.querySelector(".btn--shortDist");
const btnLongDist = document.querySelector(".btn--longDist");

const distanceInput = document.getElementById("distance");
const distanceTxtDisplayed = document.querySelector(".distTxt");
let distance = distanceInput.valueAsNumber;

const speedInput = document.getElementById("speed");
let speed = speedInput.valueAsNumber;
const speedTxtDisplayed=document.querySelector(".speedTxt");

/********************************************************
 * Initialisation
*********************************************************/
// initialisation sur short Distance
btnShortDist.classList.add("btn--active");
distanceTxtDisplayed.innerText=`${distance} km`;
speedTxtDisplayed.innerText=`${speed} km/h`;
makeTable(speed,distance);

btnShortDist.addEventListener("click", (event)=>{
    btnShortDist.classList.toggle("btn--active");
    btnLongDist.classList.toggle("btn--active");
    if(btnShortDist.classList.contains("btn--active")){
        distanceInput.max=25;
        distanceInput.step=1;
        distanceInput.value=15
        distance = distanceInput.valueAsNumber;
        distanceTxtDisplayed.innerText=`${distance} km`;
        speedInput.value=90;
        speed = speedInput.valueAsNumber;
        speedTxtDisplayed.innerText=`${speed} km/h`;
    }
    makeTable(speed,distance);
})

btnLongDist.addEventListener("click",()=>{
    btnShortDist.classList.toggle("btn--active");
    btnLongDist.classList.toggle("btn--active");
    if(btnLongDist.classList.contains("btn--active")){
        distanceInput.max=500;
        distanceInput.step=25;
        distanceInput.value=200;
        distance = distanceInput.valueAsNumber;
        distanceTxtDisplayed.innerText=`${distance} km`;
        speedInput.value=130;
        speed = speedInput.valueAsNumber;
        speedTxtDisplayed.innerText=`${speed} km/h`;
    }

    makeTable(speed,distance);
})

/********************************************************
 * Function that check is a btn has been clicked or not
 * and change the apparance by adding or removing a class
*********************************************************/
function checkBtnActive(btn){
    if(btn.classList.contains("btn--active")){
        btn.classList.remove("btn--active");
    } else {
        btn.classList.add("btn--active");
    }
}

/********************************************************
 * Event Listner sur les inputs pour regenerer la table 
 *  automatiquement quand l'utilisateur change les inputs
*********************************************************/
distanceInput.addEventListener("change",()=>{
    distance=distanceInput.valueAsNumber;
    document.querySelector(".distTxt").innerText=`${distance} km`;
    makeTable(speed,distance);
})

speedInput.addEventListener("change",()=>{
    speed = speedInput.valueAsNumber;
    document.querySelector(".speedTxt").innerText=`${speed} km/h`;
    makeTable(speed,distance);
})

makeTable(speed,distance);

/********************************************************
 * Function qui generer la table des output prenant en parametre:
 * une speed et une distance
*********************************************************/
function makeTable(speed, distance){
    const speeds = [speed,0,0,0,0];
    const time = [Math.round((distance/speed)*60),0,0,0,0];
    const deltaTime = [0,0,0,0,0]; 
    
    for (let i=1;i<speeds.length; i++){
    speeds[i]=speeds[i-1]-10;
    time[i]=Math.round((distance/speeds[i])*60);
    deltaTime[i]=-(time[0]-time[i]);
    }

    const table = document.querySelector("tbody");
    table.innerHTML="";
    for(let i=0; i<speeds.length;i++){
        const newRow = document.createElement("tr");
            const speed = document.createElement("td")
            speed.innerText=`${speeds[i]} km/h`;
            newRow.appendChild(speed);
            const timing = document.createElement("td")
            timing.innerText=`${time[i]} min`;
            newRow.appendChild(timing);
            const delta = document.createElement("td")
            delta.innerText=`${deltaTime[i]} min`;
            newRow.appendChild(delta);
    table.appendChild(newRow);    
    }
}

