var position = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "S", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
var audio=new Audio
var time=60

var ball=0
 var sound_count =3
var sound_speed =4
var select_music={} 
var stop=true

function start_game() { 
    document.querySelector('.body_game').innerHTML=""
    document.querySelector('.main_action').style = "display:none"
    document.querySelector('.main_game').style = "display:block"
    stop=false
    audio.pause();
    time=60
    var sound = data.filter(item => (item.count == sound_count && item.speed == sound_speed))
    console.log(sound);
    if(sound.length==0){
      console.log(sound_speed);
        console.log(sound_count);  
    if(sound_count<10){ 
        
     sound_count++
     start_game()
    }else{
        sound_count=3
     if(sound_speed>0){
        sound_speed--
        start_game()
    }else{
     var add1={
                "score": ball,
                "time": time,
                "finish": new Date()
            }
            localStorage.setItem("game_9",JSON.stringify(add1))
            alert("Game Over")
            stop=true
        }
    }
    }else{
      randomIndex1 = Math.floor(Math.random() * sound.length);
     select_music = sound[randomIndex1]
    var soundUrl = decodeURIComponent(select_music.sound)
    document.querySelector(".ee").innerHTML="Слушайте аудио . . ."
     audio = new Audio(soundUrl)
    audio.play()
    audio.addEventListener("ended", function() {
        document.querySelector(".ee").innerHTML = "Установите окончательный маршрут";
      });
    for (let i = 0; i < position.length; i++) {
        document.querySelector('.body_game').innerHTML += `<div onclick="select_position(${i})" class="bukva">${position[i]}</div>
        `
    }    
    }
  
}

function select_position(position) {
  if(select_music.position==position){
document.querySelectorAll('.bukva')[position].style="color:green"
ball+=2
audio.pause();
setTimeout(() => {
    if(sound_count<10){ 
        sound_count++
        start_game()
       }else{
           sound_count=3
        if(sound_speed>0){
           sound_speed--
           start_game()
       }else{
        var add1={
                   "score": ball,
                   "time": time,
                   "finish": new Date()
               }
               localStorage.setItem("game_9",JSON.stringify(add1))
               stop=true
               alert("Game Over")
           }
       }
}, 1000);
   }else{
     document.querySelectorAll('.bukva')[position].style="color:red"
    setTimeout(() => {
    document.querySelectorAll('.bukva')[position].style="color:black"
    }, 1000);
    ball--
    audio.pause();
    if(sound_count<10){ 
        sound_count++
        start_game()
       }else{
           sound_count=3
        if(sound_speed>0){
           sound_speed--
           start_game()
       }else{
        var add1={
                   "score": ball,
                   "time": time,
                   "finish": new Date()
               }
               localStorage.setItem("game_9",JSON.stringify(add1))
               stop=true
               alert("Game Over")
           }
       }
   
   }


}


setInterval(() => {
    if(!stop){
        document.querySelector(".timer").innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
        time=(time-0.1).toFixed(1)
        if(time==0){
            if(sound_count<10){ 
                sound_count++
                start_game()
               }else{
                   sound_count=3
                if(sound_speed>0){
                   sound_speed--
                   start_game()
               }else{
                stop=true
                var add1={
                           "score": ball,
                           "time": time,
                           "finish": new Date()
                       }
                       localStorage.setItem("game_9",JSON.stringify(add1))
                       alert("Game Over")
                   }
               }
        }
    }
    }, 100);

function game_Over(){
    var game_1=localStorage.getItem("game_1")
    var game_2=localStorage.getItem("game_2")
    var game_3=localStorage.getItem("game_3")
    var game_4=localStorage.getItem("game_4")
    var game_5=localStorage.getItem("game_5")
    var game_6=localStorage.getItem("game_6")
    var game_7=localStorage.getItem("game_7")
    var game_8=localStorage.getItem("game_8")
    var game_9=localStorage.getItem("game_9")
    if(game_1){
        
    }

}