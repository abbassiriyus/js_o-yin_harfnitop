initGame(document.querySelector('#game1'));
function initGame(game) {
	let field = createGameField(game);
	
	let size = 7;
	
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
				if (this.innerHTML == counter) {
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
	arr = shuffleArr(arr);
	arr = chunkArr(size, arr);
	return createCells(arr, field);
}
// [[1, 2], [3, 4]]
function createCells(arr, elem) {
	let cells = [];
	
	for (let i1 = 0; i1 < arr.length; i1++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < arr[i1].length; j++) {
			let td = document.createElement('td');
			td.innerHTML = arr[i1][j];
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
		arr.push(i2);
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
let i = 45;
let error = document.querySelector('.error-text');

let timerId = setInterval(function() {
	//console.log(i--);
	result.innerHTML = i--;
	if (i < 0) {
		clearInterval(timerId);
		window.location.replace("game-start4.html");
    //error.innerHTML = 'Время закончилось, Вы проиграли!';
	}
}, 1000);

