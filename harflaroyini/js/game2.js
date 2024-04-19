let clickNoResults  = document.querySelectorAll('.click-result-btn');
let clickResult1  = document.querySelector('.click-result-btn.active2');

for (let clickNoResult of clickNoResults) {
    clickNoResult.addEventListener('click', function() {
        this.classList.add('change-bg');
    });
}

clickResult1.addEventListener('click', function() {
    clickResult1.classList.add('sucsess');
});

let result = document.querySelector('.result');
let i = 5;
let error = document.querySelector('.error-text');

let timerId = setInterval(function() {
	//console.log(i--);
	result.innerHTML = i--;
	if (i < 0) {
		clearInterval(timerId);
		window.location.replace("game2-1.html"); 
    //error.innerHTML = 'Время закончилось, Вы проиграли!';
	}
}, 1000);