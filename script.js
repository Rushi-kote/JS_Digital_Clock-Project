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


function changeTipText(hourhand){
    if(hourhand>=8 && hourhand<=11){
        tiptxt.innerText="GOOD MORNING !!"
        //timeBasedText.innerText="GOOD MORNING!! WAKE UP !!";
    }else if(hourhand>=12 && hourhand<=16){
        tiptxt.innerText="GOOD AFTERNOON !!";
        // timeBasedText.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        // image[0].style.backgroundImage="url(./Group5183@2x.png)";
    }else if(hourhand>=17 && hourhand<=19){
        tiptxt.innerText="GOOD EVENING !!";
        // timeBasedText.innerText="GOOD EVENING !!";
        // image[0].style.backgroundImage="url(./lunch_image@2x.png)";
    }else if((hourhand>=20 && hourhand<=24)|| (hourhand>=0 && hourhand<=7)){
        tiptxt.innerText="GOOD NIGHT !!"
        // timeBasedText.innerText="GOOD NIGHT !!";
        // image[0].style.backgroundImage="url(./Group5194@2x.png)";
    }
    
}


function updateImageAndText(hourhand){
    let wakeupTimeArr=(smmarywaketime.innerText).split(" ");
    let napTimeArr=(smmarynaptime.innerText).split(" ");
    let lunchTimeArr=(smmarylunchtime.innerText).split(" ");
    let nightTimeArr=(smmarynighttime.innerText).split(" ");

    //console.log(wakeupTimeArr[0]+"=="+hourhand +"&&"+ ampm.innerText+"=="+wakeupTimeArr[1]);

    if(parseInt(wakeupTimeArr[0])==hourhand && ampm.innerText==wakeupTimeArr[1]){
        timeBasedText.innerText="GOOD MORNING!! WAKE UP !!";
        image[0].style.backgroundImage="url(./Component30–1@2x.png)"; 
        //console.log(wakeupTimeArr[0]+"=="+hourhand +"&&"+ ampm.innerText+"=="+wakeupTimeArr[1]); 
    }else if(parseInt(lunchTimeArr[0])==hourhand && ampm.innerText==lunchTimeArr[1]){
        timeBasedText.innerText="LET'S HAVE SOME LUNCH !!";
        image[0].style.backgroundImage="url(./Group5183@2x.png)"; 
        
    }else if(parseInt(napTimeArr[0])==hourhand && ampm.innerText==napTimeArr[1]){
        timeBasedText.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        image[0].style.backgroundImage="url(./lunch_image@2x.png)"; 
        
    }else if(parseInt(nightTimeArr[0])==hourhand && ampm.innerText==nightTimeArr[1]){
        timeBasedText.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        image[0].style.backgroundImage="url(./Group5194@2x.png)"; 
        
    }else{
        timeBasedText.innerText="Select time and click on set alarm ";
        image[0].style.backgroundImage="url(./time-to-invest-represents-return-on-investment-and-growth.jpg)";
        image[0].style.backgroundSize = "contain";
    }

}

function time(){
    let timer = new Date();
    let hourhand= timer.getHours();
    min.innerText= timer.getMinutes();
    sec.innerText= timer.getSeconds();
    changeTipText(hourhand)
    convertTo12HFormat(hourhand);
    updateImageAndText(hourhand);
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

