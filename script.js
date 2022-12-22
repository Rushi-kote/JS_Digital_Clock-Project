let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

let wakeupTime = document.getElementById("wakeup-time");
let napTime = document.getElementById("nap-time");
let lunchTime = document.getElementById("lunch-time");
let nightTime = document.getElementById("night-time");
let timeBasedText = document.getElementById("timeBasedText");

let setAlarmBtn = document.getElementById("setAlarmBtn");

let smmarywaketime = document.getElementById("smmarywaketime");
let smmarylunchtime = document.getElementById("smmarylunchtime");
let smmarynaptime = document.getElementById("smmarynaptime");
let smmarynighttime = document.getElementById("smmarynighttime");

let tiptxt = document.getElementById("tiptxt");
let image = document.getElementsByClassName("image");

let AM='AM';
let PM='PM';


setAlarmBtn.addEventListener("click",function(){
    smmarywaketime.innerText= wakeupTime[wakeupTime.selectedIndex].value;
    smmarynaptime.innerText= napTime[napTime.selectedIndex].value;
    smmarylunchtime.innerText= lunchTime[lunchTime.selectedIndex].value;
    smmarynighttime.innerText= nightTime[nightTime.selectedIndex].value;
});

setAlarmBtn.addEventListener("mouseover",function(){
    setAlarmBtn.innerText="Party Time!";
});
setAlarmBtn.addEventListener("mouseout",function(){
    setAlarmBtn.innerText="Set Alarm";
});


function changeImageText(hourhand){
    if(hourhand>=10 && hourhand<=11){
        tiptxt.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
        timeBasedText.innerText="GOOD MORNING!! WAKE UP !!";
    }else if(hourhand>=12 && hourhand<=16){
        tiptxt.innerText="LET'S HAVE SOME LUNCH !!"
        timeBasedText.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        image[0].style.backgroundImage="url(./Group5183@2x.png)";
    }else if(hourhand>=17 && hourhand<=19){
        tiptxt.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        timeBasedText.innerText="GOOD EVENING !!";
        image[0].style.backgroundImage="url(./lunch_image@2x.png)";
    }else if((hourhand>=20 && hourhand<=24)|| (hourhand>=0 && hourhand<=9)){
        tiptxt.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        timeBasedText.innerText="GOOD NIGHT !!";
        image[0].style.backgroundImage="url(./Group5194@2x.png)";
    }  
}

function time(){
    let timer = new Date();
    let hourhand= timer.getHours();
    min.innerText= timer.getMinutes();
    sec.innerText= timer.getSeconds();
    changeImageText(hourhand)
    convertTo12HFormat(hourhand);
    //console.log(hour.innerText);
    
}


function convertTo12HFormat(hourhand){
    

    if(hourhand>=12){
        ampm.innerText = "PM";
    }else{
        ampm.innerText = "AM";
    }
    hourhand= hourhand%12;
    hour.innerText= hourhand ? hourhand : 12;
}

setInterval(()=>{
    time();
},1000);

