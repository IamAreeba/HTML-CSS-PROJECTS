const endDate = "2 September 2023 12:00 AM";

// Making the date dynamic
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

/*
1 Day = 24 hours
1 Hour = 60 min
60 Minutes = 3600 sec
*/


function clock(){
    // we have to make milli sec of end Date so we passed the obj to date 
    const end = new Date(endDate);
    const now = new Date(); // now Date
    const diff = (end - now) / 1000;


    if(diff < 0){ return; }
    // Convert into day
    inputs[0].value = Math.floor(diff/3600/24);
    console.log("Days = " + Math.floor(diff/3600)/24);

    //Convert into Hours
    inputs[1].value = Math.floor(diff/3600)%24;
    console.log("Hours = " + Math.floor(diff/3600)%24);

    //Convert into Minutes
    inputs[2].value = Math.floor(diff/60) % 60;
    console.log("Min = " + Math.floor(diff/60) % 60);

    // Convert into Seconds
    inputs[3].value = Math.floor(diff) % 60;
    console.log("Sec = " + Math.floor(diff) % 60);





    console.log("Now = " + now);
    console.log("End = " + end);
    console.log("Diff in sec = " + diff);   
}

clock();
setInterval(clock, 1000);

