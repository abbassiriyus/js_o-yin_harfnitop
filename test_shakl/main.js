var key_test=0
var time=30
var stop=true

function start_test() {
    time=30
    document.querySelector('.main_game_body').innerHTML=""
    if(key_test<data.length){
   document.querySelector('.main_action').style = "display:none"
    document.querySelector('.main_game_body').style = "display:block"
    stop=false
    }else{
 document.querySelector('.main_action').style = "display:block"
        document.querySelector('.main_game_body').style = "display:none"
        key_test=0
        stop=true
    }
 
    if (data[key_test].image6) {
        document.querySelector('.main_game_body').innerHTML = `
<div class="main_body">
<img src="${data[key_test].gl_img}" alt="" class="img_gl">
<div class="mini_cards">
    <div class="mini_card">
        <img src="${data[key_test].image1}" alt=""><br>
    1</div>
    <div class="mini_card">
        <img src="${data[key_test].image2}" alt=""><br>
    2
    </div>
    <div class="mini_card">
        <img src="${data[key_test].image3}" alt=""><br>
    3
    </div>
    <div class="mini_card">
        <img src="${data[key_test].image4}" alt=""><br>
    4
    </div>
    <div class="mini_card">
    <img src="${data[key_test].image5}" alt=""><br>
     5
     </div>
    <div class="mini_card">

     <img src="${data[key_test].image6}" alt=""><br>
     6
     </div>
     </div>
    </div>
    <div class="main_test">
        <button onclick="select_button(1)">
        1
        </button>
        <button onclick="select_button(2)">
          2
        </button>
        <button onclick="select_button(3)">
         3
        </button>
        <button onclick="select_button(4)">
        4
        </button>
        <button onclick="select_button(5)">
        5
        </button>
        <button onclick="select_button(6)">
        6
        </button>
    </div>
`
    } else if(data[key_test].image5){
        document.querySelector('.main_game_body').innerHTML = `
        <div class="main_body">
        <img src="${data[key_test].gl_img}" alt="" class="img_gl">
        <div class="mini_cards">
            <div class="mini_card">
                <img src="${data[key_test].image1}" alt=""><br>
            1</div>
            <div class="mini_card">
                <img src="${data[key_test].image2}" alt=""><br>
            2
            </div>
            <div class="mini_card">
                <img src="${data[key_test].image3}" alt=""><br>
            3
            </div>
            <div class="mini_card">
                <img src="${data[key_test].image4}" alt=""><br>
            4
            </div>
            <div class="mini_card">
            <img src="${data[key_test].image5}" alt=""><br>
             5
             </div>
             </div>
            </div>
            <div class="main_test">
                <button onclick="select_button(1)">
                1
                </button>
                <button onclick="select_button(2)">
                  2
                </button>
                <button onclick="select_button(3)">
                 3
                </button>
                <button onclick="select_button(4)">
                4
                </button>
                <button onclick="select_button(5)">
                5
                </button>
            </div>
        `
    }else{
        document.querySelector('.main_game_body').innerHTML = `
        <div class="main_body">
        <img src="${data[key_test].gl_img}" alt="" class="img_gl img_gl1">
        <div class="mini_cards mini_cards1">
            <div class="mini_card">
                <img src="${data[key_test].image1}" alt=""><br>
            1</div>
            <div class="mini_card">
                <img src="${data[key_test].image2}" alt=""><br>
            2
            </div>
            <div class="mini_card">
                <img src="${data[key_test].image3}" alt=""><br>
            3
            </div>
            <div class="mini_card">
                <img src="${data[key_test].image4}" alt=""><br>
            4
            </div>
        
        </div>
            </div>
            <div class="main_test main_test1">
                <button onclick="select_button(1)">
        1
                </button>
                <button onclick="select_button(2)">
        2
                </button>
                <button onclick="select_button(3)">
        3
                </button>
                <button onclick="select_button(4)">
        4
                </button>
            </div>
        `
    }
}

setInterval(() => {
if(!stop){
    document.querySelector(".timer").innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    time=(time-0.1).toFixed(1)
    if(time==0){
    time=30
    start_test()
    key_test=0
    }
}
}, 100);

function select_button(params) {
    console.log(data.length,key_test);
if(data[key_test].otver==params){
 document.querySelectorAll('button')[params].style="background:green !important"
setTimeout(() => {
    key_test++
    start_test()
}, 1000);
}else{
 document.querySelectorAll('button')[params].style="background:#F79A8B !important"
}}