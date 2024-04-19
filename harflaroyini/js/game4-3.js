let items  = document.querySelectorAll('.item');
let item1  = document.querySelector('.item.active2');

for (let item of items) {
    item.addEventListener('click', function() {
        this.classList.add('change-bg');
    });
}

item1.addEventListener('click', function() {
    item1.classList.add('sucsess');
});

let result = document.querySelector('.result');
let i = 10;
let error = document.querySelector('.error-text');

let timerId = setInterval(function() {
	//console.log(i--);
	result.innerHTML = i--;
	if (i < 0) {
		clearInterval(timerId);
		window.location.replace("game4-4.html"); 
    //error.innerHTML = 'Время закончилось, Вы проиграли!';
	}
}, 1000);