var data=[...a]
var new_data=[]
var randomIndex
var select=[]
var time=60
var ball=0
var key_selelct=0
var start_time=0
var stop=true
function render_data() {
    data=[...a]
    key_selelct=0
    start_time=new Date()
    time=60
    stop=false
    document.querySelector('.body_game').innerHTML=""
    new_data=[]
    document.querySelector('.main_action').style="display:none"
    document.querySelector('.main_game').style="display:block"
    for (let i = 0; i < 16; i++) {
       randomIndex = Math.floor(Math.random() * data.length);
       new_data.push(data[randomIndex])
       data.splice(randomIndex,1)
     }
for (let i = 0; i < new_data.length; i++) {
   
   document.querySelector('.body_game').innerHTML+=`<div onclick="select_tab(${i},${new_data[i].id},'${new_data[i].image}')" class="bukva"> <img class="image_game" src="${new_data[i].image}" alt=""></div>`
}
}

function select_tab(params,id,image) {
   if(!document.querySelectorAll('.image_game')[params].disabled){
   var sendata={
    params,id,image
   }
    if(select.length==0){
        document.querySelectorAll('.image_game')[params].disabled=true
        document.querySelectorAll('.image_game')[params].style="opacity:1;color:green"
        document.querySelectorAll('.bukva')[params].style="color:green"
        select.push(sendata)
    }else if(select.length==1){
    if(select[0].id==sendata.id){
    key_selelct=key_selelct+2
    document.querySelectorAll('.image_game')[params].disabled=true
    document.querySelectorAll('.image_game')[params].style="opacity:1;color:green"
    document.querySelectorAll('.bukva')[params].style="color:green"
    ball+=2
     select=[]   
     }else{
        ball--
        document.querySelectorAll('.image_game')[params].style="opacity:1;color:red"
        document.querySelectorAll('.image_game')[select[0].params].style="opacity:1;color:red"
        document.querySelectorAll('.bukva')[params].style="color:red"
        document.querySelectorAll('.bukva')[select[0].params].style="color:red"
        document.querySelectorAll('.image_game')[select[0].params].disabled=true
         document.querySelectorAll('.image_game')[params].disabled=true
     setTimeout(() => {
        document.querySelectorAll('.image_game')[select[0].params].disabled=false
        document.querySelectorAll('.image_game')[params].disabled=false
        document.querySelectorAll('.image_game')[select[0].params].style="opacity:0;color:black"
        document.querySelectorAll('.image_game')[params].style="opacity:0;color:black"   
        document.querySelectorAll('.bukva')[select[0].params].style="color:black"
        document.querySelectorAll('.bukva')[params].style="color:black" 
         select=[]         
    }, 100);
    
     }
    } 
   } 

  
}
var a12=1
setInterval(() => {
    if(!stop){
        document.querySelector(".timer").innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
        time=(time-0.1).toFixed(1)
        if(key_selelct==16 && a12==1){
            a=2 
            var add1={
                "start":start_time,
                "score": ball,
                "time": time,
                "finish": new Date()
            }
            localStorage.setItem("game_7",JSON.stringify(add1))
            window.location="./index8.html"
        
        }
        if(time<0){
            var add1={
                "start":start_time,
                "score": ball,
                "time": time,
                "finish": new Date()
            }
            localStorage.setItem("game_7",JSON.stringify(add1))
            window.location="./index8.html"    
    }
    }
    }, 100);