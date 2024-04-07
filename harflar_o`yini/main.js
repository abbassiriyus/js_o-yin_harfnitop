var a
var qiymat=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]
var randomIndex1
var time=-1
var stop=false
var count_text=0
var my_select=0
function taxmin() { 
    count_text=0
    stop=false
     my_select=0
     randomIndex1 = Math.floor(Math.random() * 36);
    document.querySelector('.main_action').style="display:none;"
    document.querySelector('.main_game').style="display:block;"
    document.querySelector(".body_game").innerHTML=""
    time=15
    a=[]
    for (let i = 0; i < 36; i++) {
     var randomIndex = Math.floor(Math.random() * qiymat.length);
     var taxminiyXarif = qiymat[randomIndex]
    a.push(taxminiyXarif)    
  }
for (let i = 0; i < 13; i++) {
    var randomIndex = Math.floor(Math.random() * qiymat.length);
    a[randomIndex]=a[randomIndex1]
}

for (let i = 0; i < a.length; i++) {
if(a[i]==a[randomIndex1]){
count_text++
} 
}

console.log(a);

for (let i = 0; i < a.length; i++) {
    document.querySelector(".body_game").innerHTML+=`<div onclick="selectP('${a[i]}',${i})" class="bukva">${a[i]}</div>`
}
document.querySelector('.title').innerHTML=`НАЙДИ БУКВУ: ${a[randomIndex1]}`

}


setInterval(() => {
    if(time>0 && !stop){
        time=(time-0.1).toFixed(1)
        document.querySelector('.timer').innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    }else{
    if(time!=-1 && !stop){
        selectP('',-1)
    }
    }
}, 100);






function selectP(b,key){
    console.log(a[randomIndex1],b);
    console.log(key);
if(a[randomIndex1]==b ){
  if(!document.querySelectorAll(".bukva")[key].disabled){
 my_select++
   }
    document.querySelectorAll(".bukva")[key].disabled=true
    document.querySelectorAll(".bukva")[key].style="color:green;"
if(my_select==count_text){
    // stop=true
    document.querySelector('.rekord').innerHTML=`ТАЙМЕР: ${time} секунд`
    taxmin()
}
}else{
    if(key!=-1){
        document.querySelectorAll(".bukva")[key].style="color:red;"
        setTimeout(() => {
            document.querySelectorAll(".bukva")[key].style="color:black !important;"
            }, 1000)
}else{
    setTimeout(() => {
        taxmin()  
        }, 100);
}
}

}