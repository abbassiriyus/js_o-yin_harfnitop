initGame(document.querySelector('#game2'));
let gameImg  = document.querySelector('#game-img');
let tableImges = document.querySelectorAll('.img-table');
function initGame(game) {
	let field = createGameField(game);
	
	let sizeHeight = 8;
  	let sizeWidth = 3;
	
	newGame();
	
	function newGame() {
		clearGameField(field);
		var cells = drawGameField(sizeHeight, sizeWidth, field);
		addActivateHandler(cells);
	}
	
	function addActivateHandler(cells, tds) {
		var counter = 1;
		let imgExample = document.querySelector('.img-example');

			let tdes = document.getElementsByTagName('td');
			

			for (let item of tdes) {
				item.addEventListener('click', function() {
					
						if (item.classList.contains('fine')) {
							console.log('ok');
							let imgNew = item.innerHTML;
							item.classList.add('active1');
							
							for (let tableImg of tableImges) {
								tableImg.addEventListener('click', function() {
									
										this.classList.add('active-img');
									
									
								});


							}
							
						} else {
							console.log('not-ok');
							item.classList.add('no-active1');

							for (let tableImg of tableImges) {
								tableImg.addEventListener('click', function() {
									
									this.classList.add('noactive-img');
								});
						}
					
					
						}
				});
			}


		}
	}

function createGameField(game) {
	var table = document.createElement('table');
	game.appendChild(table);
	
	return table;
}

function clearGameField(field) {
	field.innerHTML = '';
}

function drawGameField(sizeHeight, sizeWidth, field) {
	var from = 1;
	var to = sizeHeight * sizeWidth;

	var arr = [];
	arr = createArr(from, to);
	//arr = shuffleArr(arr);
	//arr = chunkArr(sizeHeight, sizeWidth, arr);
	return createCells(arr, field);
}
// [[1, 2], [3, 4]]
function createCells(arr, elem) {
	var cells = [];
	
	for (var i = 0; i < 8; i++) {
		var tr = document.createElement('tr');
		for (var j = 0; j < 5; j++) {
			var td = document.createElement('td');
      let randomImgNumber = getRandomInt(0, 2);
	  let imgExample = document.querySelector('.img-example');
      //console.log(randomImgNumber);
      //var arrImg = ['img1', 'img2', 'img3'];
	  var arr = [];
	var image1 = new Image();
      image1.src = "../img/plus-90.svg";//сделать массив путей и сравнивать в цикле!!! в game7.js
        arr.push(image1);
        var image2 = new Image();
      image2.src = "../img/circle1.svg";
        arr.push(image2);
        var image3 = new Image();
        image3.src = "../img/rectangle.svg";
          arr.push(image3);
		  let srcNew = arr[randomImgNumber].src;
			td.innerHTML = '<img class="img-table" src = '+ srcNew + ' alt = "img-example">';

			if (srcNew === imgExample.src) {
				//td.style.background = 'red';
				td.classList.add('fine');
				//let imgTable1 = document.querySelector('.ing-table');
				//imgTable1.classList.add('img-fine');
				//cells.classList.add('fine1');
			}

			
			tr.appendChild(td);
			
			cells.push(td);

		}
		
		elem.appendChild(tr);
	}
	//console.log(cells);
	return cells;
}
function createArr(from, to) {
  let arr = [];
	//var arrImg = ['img1', 'img2', 'img3'];
	var arrImg = [];
	var image1 = new Image();
      image1.src = "../img/plus-90.svg";
        arrImg.push(image1);
        var image2 = new Image();
      image2.src = "../img/circle1.svg";
        arrImg.push(image2);
        var image3 = new Image();
        image3.src = "../img/rectangle.svg";
          arrImg.push(image3);
          let randomImgNumber1 = getRandomInt(0, 2);
          let gameImg  = document.querySelector('#game-img');
          let srcNew1 = arrImg[randomImgNumber1].src;
          gameImg.innerHTML = '<img class="img-example" src = '+ srcNew1 + ' alt = "img">';
	for (var i = from; i <= to; i++) {
    let randomImgNumber = getRandomInt(0, 2);
    //console.log(randomImgNumber);
		arr.push(arrImg[randomImgNumber]);
	}
  //console.log(arr);
	
	return arr;
}

// [1, 2, 3, 4, 5] -> [[1, 2], [3, 4], [5]]


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = document.querySelector('.result');
let i = 60;
let error = document.querySelector('.error-text');

let timerId = setInterval(function() {
	//console.log(i--);
	result.innerHTML = i--;
	if (i < 0) {
		clearInterval(timerId);
		window.location.replace("game-start2.html");
    //error.innerHTML = 'Время закончилось, Вы проиграли!';
	}
}, 1000);