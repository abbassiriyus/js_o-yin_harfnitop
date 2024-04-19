let letter = document.querySelector('.letter');
let letterArr = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
let randomExample = getRandomInt(0, 32);
let letterExample = letterArr[randomExample];
letter.innerHTML = letterExample;

initGame(document.querySelector('#game1'));
function initGame(game) {
	let field = createGameField(game);
	
	let size = 4;
	
	newGame();
	
	function newGame() {
		clearGameField(field);
		var cells = drawGameField(size, field);
		addActivateHandler(cells);
	}
	
	function addActivateHandler(cells) {
		let counter = 1;
		
		for (let i = 0; i < cells.length; i++) {
			cells[i].addEventListener('click', function() {
				if (this.innerHTML == letterExample) {//counter
					this.classList.add('active');
					
					//if (counter == size * size) {
						//size++;
						//newGame();
					//}
					
					counter++;
				} else {
          this.classList.add('no-active');
        }
			});
		}
	}
}
function createGameField(game) {
	let table = document.createElement('table');
	game.appendChild(table);
	
	return table;
}

function clearGameField(field) {
	field.innerHTML = '';
}

function drawGameField(size, field) {
	let from = 1;
	let to = size * size;

	let arr = [];
	arr = createArr(from, to);
	//arr = shuffleArr(arr);
	//arr = chunkArr(size, arr);
	return createCells(arr, field);
}
// [[1, 2], [3, 4]]
function createCells(arr, elem) {
	let cells = [];
	let count = 0;
	for (let i1 = 0; i1 < 6; i1++) {//arr.length
		let tr = document.createElement('tr');
		for (let j1 = 0; j1 < 6; j1++) {//arr[i1].length
			let td = document.createElement('td');
            let random = getRandomInt(0, 32);
            let itemLetter = letterArr[random];
			td.innerHTML = itemLetter;
            if (i1 == 1 && j1 == 2) {
                td.innerHTML = letterExample;
            }

            if (i1 == 3 && j1 == 0) {
                td.innerHTML = letterExample;
            }

            if (i1 == 4 && j1 == 1) {
                td.innerHTML = letterExample;
            }

            if (i1 == 1 && j1 == 5) {
                td.innerHTML = letterExample;
            }

			if (i1 == 2 && j1 == 3) {
                td.innerHTML = letterExample;
            }

			if (i1 == 0 && j1 == 1) {
                td.innerHTML = letterExample;
            }

			if (i1 == 5 && j1 == 2) {
                td.innerHTML = letterExample;
            }

			if (i1 == 2 && j1 == 6) {
                td.innerHTML = letterExample;
            }

			if (i1 == 6 && j1 == 5) {
                td.innerHTML = letterExample;
            }

			if (i1 == 4 && j1 == 3) {
                td.innerHTML = letterExample;
            }

			if (i1 == 2 && j1 == 0) {
                td.innerHTML = letterExample;
            }

			if (i1 == 5 && j1 == 1) {
                td.innerHTML = letterExample;
            }

			if (i1 == 3 && j1 == 5) {
                td.innerHTML = letterExample;
            }

			if (i1 == 3 && j1 == 2) {
                td.innerHTML = letterExample;
            }

			if (i1 == 5 && j1 == 5) {
                td.innerHTML = letterExample;
            }

            console.log(count);
            //shuffleArr(letterArr);
			tr.appendChild(td);
			
			cells.push(td);
		}
		
		elem.appendChild(tr);
	}
	
	return cells;
}
function createArr(from, to) {
	let arr = [];
	
	for (let i2 = from; i2 <= to; i2++) {
		arr.push(letterArr[getRandomInt(0, 32)]);
        console.log(arr);
	}
	
	return arr;
}

function shuffleArr(arr) {
	let result = [];
	let length = arr.length;
	
	for (let i3 = 0; i3 < length; i3++) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}
// [1, 2, 3, 4, 5] -> [[1, 2], [3, 4], [5]]
function chunkArr(n, arr) {
	let result = [];
	let iterCount = Math.ceil(arr.length / n);
	
	for (let i4 = 0; i4 < iterCount; i4++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = document.querySelector('.result');
let i = 15;
let error = document.querySelector('.error-text');

let timerId = setInterval(function() {
	//console.log(i--);
	result.innerHTML = i--;
	if (i < 0) {
		clearInterval(timerId);
		window.location.replace("game-start7.html");
    //error.innerHTML = 'Время закончилось, Вы проиграли!';
	}
}, 1000);