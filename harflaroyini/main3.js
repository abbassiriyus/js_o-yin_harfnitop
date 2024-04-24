var a=[]
for (let i = 0; i < 45; i++) {
a.push(i+1)
}


function gamestart(){
	document.querySelector('#game1').innerHTML=""
var game=[]
for (let i = 0; i < 45; i++) {
	randomIndex = Math.floor(Math.random() * a.length);
   game.push(a[randomIndex])
   a.splice(randomIndex,1)
}
console.log(game);
for (let i = 0; i < game.length; i++) {
document.querySelector('#game1').innerHTML+=`<div class="card11">${game[i]}</div>`
}

}