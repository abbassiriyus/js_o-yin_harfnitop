
var vapros_id=0
var time=30
var score=0
var stop=true
function start_game() {
	stop=false
	document.querySelector('.game_body1').style="display:none"
	document.querySelector('.game_body').innerHTML=`<h1 class="text-example">${data[vapros_id].savol}</h1>
	<div class="game-wrap2">
		<button onclick="select_data(1)" class="click-result-btn">${data[vapros_id].variat1}</button>
		<button onclick="select_data(2)" class="click-result-btn active2">${data[vapros_id].variat2}</button>
		<button onclick="select_data(3)" class="click-result-btn">${data[vapros_id].variat3}</button>
		<button onclick="select_data(4)" class="click-result-btn">${data[vapros_id].variat4}</button>
	</div>`
}

function select_data(params) {
	if(data[vapros_id].otvet==params){
    score+=2
document.querySelectorAll(".click-result-btn")[params-1].style="background: #C3D99B;box-shadow: 0px 2px 4.8px 0px #00000080 inset;border:none"
	vapros_id++
	if(vapros_id==data.length){
		var add1={time,score}
    localStorage.setItem("game_2",JSON.stringify(add1))
	window.location="./index3.html"
	}else{
		setTimeout(() => {
			start_game()
		}, 1000);
	}
}else{	document.querySelectorAll(".click-result-btn")[params-1].style="background: #F79A8B; box-shadow: 0px 2px 4.8px 0px #00000080 inset;border:none "
		
        score--
	}
	
}


setInterval(() => {
    if(time>0 && !stop){
        time=(time-1)
        document.querySelector('.timer').innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    }else{
    if(time==0){
		var add1={time,score}
        localStorage.setItem("game_2",JSON.stringify(add1))
        window.location="./index3.html"
    }
    }
}, 1000);
