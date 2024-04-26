var a=[]
for (let i = 0; i < 45; i++) {
a.push(i+1)
}

var game_ot=1
var game=[]
var time=45
var score=0
var stop=true
function gamestart(){
	 stop=false
	 time=45
	game_ot=1
	game=[]
	document.querySelector('.game_body').style="display:block"
	document.querySelector('.game_body1').style="display:none"

	document.querySelector('#game1').innerHTML=""

for (let i = 0; i < 45; i++) {
	randomIndex = Math.floor(Math.random() * a.length);
   game.push(a[randomIndex])
   a.splice(randomIndex,1)
}
for (let i = 0; i < game.length; i++) {
document.querySelector('#game1').innerHTML+=`<div class="card11" onclick="select_data(${game[i]},${i})" >${game[i]}</div>`
}
}


function select_data(id,key) {
	console.log(id,key);
	if(id==game_ot){
score+=2
		document.querySelectorAll('.card11')[key].disabled=true
   document.querySelectorAll('.card11')[key].style='background:green'
   game_ot++
	}else{
		if(!document.querySelectorAll('.card11')[key].disabled){
		document.querySelectorAll('.card11')[key].style='background:red'
		score--
		setTimeout(() => {
			document.querySelectorAll('.card11')[key].style='background:white'
		}, 1000);}
	}
}


setInterval(() => {
    if(time>0 && !stop){
        time=(time-1)
        document.querySelector('.timer').innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    }else{
    if(time==0){
		var add1={time,score}
        localStorage.setItem("game_3",JSON.stringify(add1))
        window.location="./index4.html"
    }
    }
}, 1000);