const distanceInput = document.getElementById("distance");
let distance = distanceInput.valueAsNumber;
document.querySelector(".distTxt").innerText=`${distance} km`;
distanceInput.addEventListener("change",()=>{
    distance=distanceInput.valueAsNumber;
    document.querySelector(".distTxt").innerText=`${distance} km`;
    makeTable(speed,distance);
})

const speedInput = document.getElementById("speed");
let speed = speedInput.valueAsNumber;
document.querySelector(".speedTxt").innerText=`${speed} km/h`;
speedInput.addEventListener("change",()=>{
    speed = speedInput.valueAsNumber;
    document.querySelector(".speedTxt").innerText=`${speed} km/h`;
    makeTable(speed,distance);
})

makeTable(speed,distance);

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

