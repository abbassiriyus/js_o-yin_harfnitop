var a
var qiymat=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]
var randomIndex1 = Math.floor(Math.random() * 36);
var time=-1
function taxmin() { 
    document.querySelector('.main_action').style="display:none;"
    document.querySelector('.body_game').style="display:grid;"
    document.querySelector(".body_game").innerHTML=""
    time=15
    a=[]
    for (let i = 0; i < 36; i++) {
     var randomIndex = Math.floor(Math.random() * qiymat.length);
     var taxminiyXarif = qiymat[randomIndex]
    a.push(taxminiyXarif)    
  }
for (let i = 0; i < a.length; i++) {
    document.querySelector(".body_game").innerHTML+=`<div onclick="selectP('${a[i]}',${i})" class="bukva">${a[i]}</div>`
}
document.querySelector('.title').innerHTML=`НАЙДИ БУКВУ: ${a[randomIndex1]}`

}

setInterval(() => {
    if(time>0){
        time=time-1
        document.querySelector('.timer').innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    }else{
    if(time!=-1){
        selectP('',-1)
    }
    }
}, 1000);






function selectP(b,key){
    console.log(a[randomIndex1],b);
    console.log(key);
if(a[randomIndex1]==b ){
    document.querySelectorAll(".bukva")[key].style="color:green !important;"
}else{
    if(key!=-1){
        document.querySelectorAll(".bukva")[key].style="color:red !important;"
}
}
setTimeout(() => {
taxmin()  
}, 1000);
}