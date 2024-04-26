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
         document.querySelector(".win_game").style="display:flex"
         game_Over()
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
document.querySelectorAll('.bukva')[position].style="background:green"
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
           setTimeout(() => {
            start_game()
           }, 1000);
       }else{
        var add1={
                   "score": ball,
                   "time": time,
                   "finish": new Date()
               }
               localStorage.setItem("game_9",JSON.stringify(add1))
               stop=true
               document.querySelector(".win_game").style="display:flex"
               game_Over()

           }
       }
}, 1000);
   }else{
     document.querySelectorAll('.bukva')[position].style="background:red"
    setTimeout(() => {
    document.querySelectorAll('.bukva')[position].style="background:black"
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
               document.querySelector(".win_game").style="display:flex"
               game_Over()

           }
       }  }, 1000);
  
   
   }


}


setInterval(() => {
    if(!stop){
        document.querySelector(".timer").innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
        time=(time-1)
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
                       document.querySelector(".win_game").style="display:flex"
                       game_Over()

                   }
               }
        }
    }
    }, 1000);

function game_Over(){
    var user=JSON.parse(localStorage.getItem("user"))
    console.log(user,"user");
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
     var data1=new FormData()
     data1.append("result",(JSON.parse(game_1)).score)
     data1.append("time", 60)
     data1.append("game_number", 1)
     data1.append("game_title",'Корректурная проба')
     data1.append("user_id",user.id) 
          fetch('https://api.abbas.uz/api/v1/game_user/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data1
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
    if(game_2){
      var data1=new FormData()
      data1.append("result",(JSON.parse(game_2)).score)
      data1.append("time", (JSON.parse(game_2)).time)
      data1.append("game_number", 2)
      data1.append("game_title",'Выбери подходящее выражение')
      data1.append("user_id", user.id)
           fetch('https://api.abbas.uz/api/v1/game_user/', {
             method: 'POST',
             body: data1
           })
           .then(response => response.json())
           .then(data => {
             console.log('Success:', data);
           })
           .catch((error) => {
             console.error('Error:', error);
           });
     }
     if(game_3){
      var data1=new FormData()
      data1.append("result",(JSON.parse(game_3)).score)
      data1.append("time", 30)
      data1.append("game_number", 3)
      data1.append("game_title",'Таблица Шульте')
      data1.append("user_id", user.id)
           fetch('https://api.abbas.uz/api/v1/game_user/', {
             method: 'POST',
             body: data1
           })
           .then(response => response.json())
           .then(data => {
             console.log('Success:', data);
           })
           .catch((error) => {
             console.error('Error:', error);
           });
     }
     if(game_4){
      var data1=new FormData()
      data1.append("result",(JSON.parse(game_4)).score)
      data1.append("time", (JSON.parse(game_4)).time)
      data1.append("game_number", 4)
      data1.append("game_title",'Сосчитай фигуры')
      data1.append("user_id", user.id)
           fetch('https://api.abbas.uz/api/v1/game_user/', {
             method: 'POST',
             body: data1
           })
           .then(response => response.json())
           .then(data => {
             console.log('Success:', data);
           })
           .catch((error) => {
             console.error('Error:', error);
           });
     }
    if(game_5){
        var data1=new FormData()
        data1.append("result",(JSON.parse(game_5)).score)
        data1.append("time", 10)
        data1.append("game_number", 5)
        data1.append("game_title",'Расставь предметы')
        data1.append("user_id", user.id)
             fetch('https://api.abbas.uz/api/v1/game_user/', {
               method: 'POST',
               body: data1
             })
             .then(response => response.json())
             .then(data => {
               console.log('Success:', data);
             })
             .catch((error) => {
               console.error('Error:', error);
             });
       }
    if(game_6){
        var data1=new FormData()
        data1.append("result",(JSON.parse(game_6)).score)
        data1.append("time", 15-(JSON.parse(game_6)).time)
        data1.append("game_number", 6)
        data1.append("game_title",'Поиск букв')
        data1.append("user_id", user.id)
      
             fetch('https://api.abbas.uz/api/v1/game_user/', {
               method: 'POST',
               body: data1
             })
             .then(response => response.json())
             .then(data => {
               console.log('Success:', data);
             })
             .catch((error) => {
               console.error('Error:', error);
             });
       }
    if(game_7){
        var data1=new FormData()
        data1.append("result",(JSON.parse(game_7)).score)
        data1.append("time", 60-(JSON.parse(game_7)).time)
        data1.append("game_number", 7)
        data1.append("game_title",'Пары по картинкам')
        data1.append("user_id", user.id)
        fetch('https://api.abbas.uz/api/v1/game_user/', {
               method: 'POST',
               body: data1
             })
             .then(response => response.json())
             .then(data => {
               console.log('Success:', data);
             })
             .catch((error) => {
               console.error('Error:', error);
             });
       }
  
       if(game_8){
        var data1=new FormData()
        data1.append("result",(JSON.parse(game_8)).score)
        data1.append("time", 30-(JSON.parse(game_8)).time)
        data1.append("game_number", 8)
        data1.append("game_title",'Выбери вид сверху')
        data1.append("user_id", user.id)
        fetch('https://api.abbas.uz/api/v1/game_user/', {
               method: 'POST',
               body: data1
             })
             .then(response => response.json())
             .then(data => {
               console.log('Success:', data);
             })
             .catch((error) => {
               console.error('Error:', error);
             });
       }
       if(game_9){
        var data1=new FormData()
        data1.append("result",(JSON.parse(game_9)).score)
        data1.append("time", 60)
        data1.append("game_number", 9)
        data1.append("game_title",'Правильный маршрут')
        data1.append("user_id", user.id)
        fetch('https://api.abbas.uz/api/v1/game_user/', {
               method: 'POST',
               body: data1
             })
             .then(response => response.json())
             .then(data => {
               console.log('Success:', data);
             })
             .catch((error) => {
               console.error('Error:', error);
             });
       }
}