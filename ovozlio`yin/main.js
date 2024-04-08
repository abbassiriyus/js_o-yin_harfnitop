var position = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "S", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
var audio
var time=30
var ball=0
var select_music={} 
var stop=true
function start_game() {
    stop=false
    time=30
    var sound_count = document.querySelector("#count").value
var sound_speed = document.querySelector("#speed").value
    document.querySelector(".game_button").style="display:none"
    var sound = data.filter(item => (item.count == sound_count && item.speed == sound_speed))
    randomIndex1 = Math.floor(Math.random() * sound.length);
     select_music = sound[randomIndex1]
    var soundUrl = decodeURIComponent(select_music.sound)
     audio = new Audio(soundUrl)
    audio.play()
    document.querySelector('.body_game').innerHTML = ""
    document.querySelector('.main_action').style = "display:none"
    document.querySelector('.main_game').style = "display:block"
    for (let i = 0; i < position.length; i++) {
        document.querySelector('.body_game').innerHTML += ` <div onclick="select_position(${i})" class="bukva">${position[i]}</div>
        `
    }
}

function select_position(position) {
  if(select_music.position==position){
document.querySelectorAll('.bukva')[position].style="color:green"
document.querySelector(".game_button").style="display:block"
ball+=2
document.querySelector('.rekord').innerHTML=`Очки: ${ball}`
stop=true
audio.pause();
   }else{
    ball--
    document.querySelector('.rekord').innerHTML=`Очки: ${ball}`
    document.querySelectorAll('.bukva')[position].style="color:red"
    setTimeout(() => {
    document.querySelectorAll('.bukva')[position].style="color:black"
    }, 1000);
   }


}


setInterval(() => {
    if(!stop){
        document.querySelector(".timer").innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
        time=(time-0.1).toFixed(1)
      
            // document.querySelector('.rekord').innerHTML=`ТАЙМЕР: ${time} секунд`
            // render_data()

        
        if(time==0){
        time=30
        start_game()
        }
    }
    }, 100);

