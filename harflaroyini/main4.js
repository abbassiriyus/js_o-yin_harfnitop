
var vapros_id=0
var time=30
var score=0
var stop=true
function start_game() {
	stop=false
	document.querySelector('.game_body1').style="display:none"
	document.querySelector('.game_body').innerHTML=`<h1 class="text-example wrap">${data[vapros_id].vapros}</h1>
    <div class="game-img">
        <img src="${data[vapros_id].image}" alt="image">
    </div>
    <div class="wrapper">
        <div class="haf-part">
          <div onclick="select_data('${data[vapros_id].variant1}',0)" class="item active2">${data[vapros_id].variant1}</div>
          <div onclick="select_data('${data[vapros_id].variant2}',1)"  class="item">${data[vapros_id].variant2}</div>
        </div>
        <div class="haf-part">
          <div class="item" onclick="select_data('${data[vapros_id].variant3}',2)" >${data[vapros_id].variant3}</div>
          <div class="item" onclick="select_data('${data[vapros_id].variant4}',3)" >${data[vapros_id].variant4}</div>
        </div>
        
      </div>`
}

function select_data(params,key) {
  console.log(params,key);
	if(data[vapros_id].otvet==params){
    score+=2
document.querySelectorAll(".item")[key].style="background: #C3D99B;box-shadow: 0px 2px 4.8px 0px #00000080 inset;border:none"
	vapros_id++
	if(vapros_id==data.length){
		var add1={time,score}
    localStorage.setItem("game_4",JSON.stringify(add1))
	window.location="./index5.html"
	}else{
		setTimeout(() => {
			start_game()
		}, 100);
	}
}else{	document.querySelectorAll(".item")[key].style="background: #F79A8B; box-shadow: 0px 2px 4.8px 0px #00000080 inset;border:none"
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
        localStorage.setItem("game_4",JSON.stringify(add1))
        window.location="./index5.html"
    }
    }
}, 1000);
