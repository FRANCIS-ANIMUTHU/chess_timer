var start=document.getElementById('start');

var swap=document.getElementById('swap');
//console.log(swap);

var swap2=document.getElementById('swap2');

var reset=document.getElementById('reset');

var paragraph=document.getElementById('paragraph');

var paragraph2=document.getElementById('paragraph2');

//input timer
var minutes=05;
var seconds=minutes * 60;
var seconds2=minutes * 60;

//get start
start.addEventListener('click',startgame);
function startgame() {
    clear=setInterval(timerun,1000);
    start.setAttribute('disabled','disabled');
    //start.disabled=true;
}

 //work at swap button both players
swap.addEventListener('click',function stop(){
    clearInterval(clear);
    erace=setInterval(timerun2,1000);
})
swap2.addEventListener('click',function stop2(){
  clearInterval(erace);
  clear=setInterval(timerun,1000);
})

//reset function
reset.addEventListener('click',refresh)
function refresh(){
    clearInterval(clear);
    clearInterval(erace);
    paragraph.innerHTML= 05 + ':' + 00;
    paragraph2.innerHTML= 05 + ':' + 00;
    start.disabled=false;
    
}

//1st player function
function timerun(){
    var getminutes=Math.floor(seconds / 60);
    var roundsecond=seconds % 60;
    paragraph.innerHTML=getminutes + ':' + roundsecond;
    seconds--;

    if(getminutes==0 && roundsecond==0){
       clearInterval(clear);
        seconds=stop;
    }
    
}






//2nd player timer function
function timerun2(){
    var getminutes2=Math.floor(seconds2 / 60);
    var roundsecond2=seconds2 % 60;
    paragraph2.innerHTML=getminutes2 + ':' + roundsecond2;
    seconds2--;
//stoped timer to 0 condition
    if(getminutes2==0 && roundsecond2==0){
        clearInterval(erace);
        seconds2=stop;
    }
    
}



















// var reset=document.getElementById('reset');

// // var start=document.getElementById('start');
// // start.addEventListener('click',chess);



// var minutes=05;
// var seconds=minutes*60;
// console.log(seconds);

// var paragraph=document.getElementById('paragraph');
// setInterval(timer,1000);
// //swap
// var swap=document.getElementById('swap');
//     swap.addEventListener('click',function suddenstop(){
//     stoptimer=setInterval(timer,1000);
//      clearInterval(stoptimer2);
//     });
// //timer function
// function timer(){
//     var getminutes=Math.floor(seconds/60);
//     //  console.log(getminutes);
//     let lettime= seconds%60;
//     paragraph.innerHTML=getminutes+':'+lettime;
//     seconds--;
// }


// //2nd player
// var minutes2=05;
// var seconds2=minutes2*60;
// console.log(seconds2);
// var paragraph2=document.getElementById('paragraph2');
// setInterval(timer2,1000);

// //swap
// var swap2=document.getElementById('swap2');
//     swap2.addEventListener('click',suddenstop2);
//     function suddenstop2(){
//     stoptimer2=setInterval(timer2,1000);
//      clearInterval(stoptimer);
//     }
    
    
//     //timer function
// function timer2(){
//     var getminutes2=Math.floor(seconds2/60);
//     //  console.log(getminutes);
//     let lettime2= seconds%60;
//     paragraph2.innerHTML=getminutes2 +':'+ lettime2;
//     seconds2--;

    
//     // start.setAttribute('disabled','disabled');

// }










