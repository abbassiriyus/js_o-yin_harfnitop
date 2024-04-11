

var n = 7;
var pause_time = 5000;
var delta_time = 100;
var stop=true
var picts9 = ['./imgp9/1.png', './imgp9/2.png', './imgp9/3.png', './imgp9/4.png', './imgp9/5.png', './imgp9/6.png', './imgp9/7.png', './imgp9/8.png', './imgp9/9.png', './imgp9/10.png', './imgp9/11.png', './imgp9/12.png', './imgp9/13.png', './imgp9/14.png', './imgp9/15.png', './imgp9/16.png', './imgp9/17.png', './imgp9/18.png', './imgp9/19.png'];
var picts4 = ['./imgp4/1.png', './imgp4/2.png', './imgp4/3.png', './imgp4/4.png', './imgp4/5.png', './imgp4/6.png', './imgp4/7.png', './imgp4/8.png', './imgp4/9.png', './imgp4/10.png', './imgp4/11.png', './imgp4/12.png', './imgp4/13.png', './imgp4/14.png', './imgp4/15.png', './imgp4/16.png', './imgp4/17.png', './imgp4/18.png', './imgp4/19.png'];
var picts5 = ['./imgp5/1.png', './imgp5/2.png', './imgp5/3.png', './imgp5/4.png', './imgp5/5.png', './imgp5/6.png', './imgp5/7.png', './imgp5/8.png', './imgp5/9.png', './imgp5/10.png', './imgp5/11.png', './imgp5/12.png', './imgp5/13.png', './imgp5/14.png', './imgp5/15.png', './imgp5/16.png', './imgp5/17.png', './imgp5/18.png', './imgp5/19.png'];
var picts7 = ['./imgp7/1.png', './imgp7/2.png', './imgp7/3.png', './imgp7/4.png', './imgp7/5.png', './imgp7/6.png', './imgp7/7.png', './imgp7/8.png', './imgp7/9.png', './imgp7/10.png', './imgp7/11.png', './imgp7/12.png', './imgp7/13.png', './imgp7/14.png', './imgp7/15.png', './imgp7/16.png', './imgp7/17.png', './imgp7/18.png', './imgp7/19.png'];
var picts9w = [201, 120, 70, 140, 110, 85, 155, 130, 125, 180, 135, 130, 110, 168, 120, 100, 171, 95, 105];
var picts9h = [110, 71, 69, 125, 77, 59, 146, 95, 130, 65, 94, 143, 72, 90, 120, 74, 90, 120, 50];
var pictsw = new Array(19);
var pictsh = new Array(19);
var picts = new Array(19);
var predm = new Array(n);
var upredm = new Array(n);
var procent_obchei_plochadi = 40;
var state = 0;


function max(a, b) {
    return Math.max(a, b)
}

function min(a, b) {
    return Math.min(a, b)
}


function getSq(w, h) {
    return w * h
}

function getintSq(x1, x2, y1, y2, x3, x4, y3, y4) {
    var x11 = max(min(x1, x2), min(x3, x4));
    var x12 = min(max(x1, x2), max(x3, x4));
    var y11 = max(min(y1, y2), min(y3, y4));
    var y12 = min(max(y1, y2), max(y3, y4));
    if (x12 - x11 > 0 && y12 - y11 > 0) return (x12 - x11) * (y12 - y11)
    return 0;
}


function test_rasp(x1, x2, y1, y2, x3, x4, y3, y4, w, h) {
    return getintSq(x1, x2, y1, y2, x3, x4, y3, y4) > procent_obchei_plochadi / 100 * getSq(w, h)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swap(a, i1, i2) {
    var t = a[i1];
    a[i1] = a[i2];
    a[i2] = t;
}

function copy(a, b) {
    for (var i = 0; i < 19; i++)
        a[i] = b[i];

}

function copyk(a, b, k) {
    for (var i = 0; i < 19; i++)
        a[i] = Math.round(k * b[i]);

}



function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top +  window.pageYOffset
        , left: box.left +  window.pageXOffset
    };

}

 fls= function() {
   return false;
 };

handler0 = function (e) {

   var elem = this;
    var coords = getCoords(elem);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    elem.style.position = 'absolute';
    document.body.appendChild(elem);
    moveAt(e);
    elem.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        elem.style.left = e.pageX - shiftX + 'px';
        elem.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function (e) {
        moveAt(e);
    };

    elem.onmouseup = function () {
        document.onmousemove = null;
        elem.onmouseup = null;
    };
}
      
 handler0m = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var elem = this;
    var coords = getCoords(elem);
    var shiftX = e.changedTouches[0].pageX - coords.left;
    var shiftY = e.changedTouches[0].pageY - coords.top;

    elem.style.position = 'absolute';
    document.body.appendChild(elem);
    moveAt(e);
    elem.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        elem.style.left = e.changedTouches[0].pageX - shiftX + 'px';
        elem.style.top = e.changedTouches[0].pageY - shiftY + 'px';
    }

    handler1 = function (e) {
        e.preventDefault();
        e.stopPropagation();
        moveAt(e);
    }
    handler2 = function (e) {
        e.preventDefault();
        e.stopPropagation();
        document.removeEventListener('touchmove', handler1, false);
        elem.removeEventListener('touchend', handler2, false);

    }

    document.addEventListener('touchmove', handler1, false);
    elem.addEventListener('touchend', handler2, false);

}

var Cons = function (xcord, ycord, elem, w, h, src) {
    this.xs = xcord;
    this.ys = ycord;
    this.elem = elem;
    this.src = src;
    this.w = w;
    this.h = h;

}


function ready() {


    $("#gen2").hide();

    var tablew;
    var tableh;
    var docw = document.documentElement.clientWidth;
    var doch = document.documentElement.clientHeight;

    
    if (docw >= 900 && doch > 770) {
        document.getElementById("table")
            .src = "./img/table900.jpg";
        copy(picts, picts9);
        
        tablew = 900;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 1);
        copyk(pictsh, picts9h, 1);
    }
    if (docw >= 900 && doch <= 770 && doch > 620) {
        document.getElementById("table")
            .src = "./img/table700.jpg";
        document.getElementById("table")
            .style.maxWidth = "700px";
        copy(picts, picts7);
       
        tablew = 700;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 1);
        copyk(pictsh, picts9h, 1);
    }

    if (docw <= 770 && docw > 640) {
        document.getElementById("table")
            .src = "./img/table700.jpg";
        copy(picts, picts7);
       
        tablew = 700;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 700 / 900);
        copyk(pictsh, picts9h, 700 / 900);
    }
    if (docw > 450 && docw <= 640) {
        document.getElementById("table")
            .src = "./img/table500.jpg";
        copy(picts, picts5);
        
        tablew = 500;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 500 / 900);
        copyk(pictsh, picts9h, 500 / 900);
    }


    if (doch <= 620 && doch > 550) {
        document.getElementById("table")
            .src = "./img/table500.jpg";
        document.getElementById("table")
            .style.maxWidth = "500px";
        copy(picts, picts5);
       
        tablew = 500;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 500 / 900);
        copyk(pictsh, picts9h, 500 / 900);
    }

    if (docw <= 450 || doch <= 550) {
        document.getElementById("table")
            .src = "./img/table360.jpg";
        document.getElementById("table")
            .style.maxWidth = "400px";
        copy(picts, picts4);
        
        tablew = 360;
        tableh = tablew / 2;
        copyk(pictsw, picts9w, 360 / 900);
        copyk(pictsh, picts9h, 360 / 900);
        
    }


    document.getElementById('gen2')
        .onclick = function () {

            for (var i = 1; i <= n; i++)
                $("#s" + i)
                .animate({
                    opacity: '0.49'
                }, delta_time);
            $("#gen2")
                .hide();
        }


    document.getElementById('gen')
        .onclick = function () {		    
            $("#gen2")
                .hide();
                document.querySelector('#table').style="display:block  !important;margin-left: auto; display: none;margin-right: auto;"
                document.querySelector('.main_action').style="display:none"
            var tablex = document.getElementById("table")
                .getBoundingClientRect()
                .left;
            var tabley = document.getElementById("table")
                .getBoundingClientRect()
                .top;

            if (state == 0 || state == 2) {
                if (state == 2) {
                    for (var i = 1; i <= n; i++) {
                        $("#s" + i)
                            .remove();
                        $("#p" + i)
                            .remove();
                        delete predm[i - 1];
                        delete upredm[i - 1];
                    }
                }
                
                    for (var i = 0; i < 50; i++) {
                    var temp = getRandomInt(0, 18);
                    var temp2 = getRandomInt(0, 18);
                    swap(picts, temp, temp2);
                    swap(pictsw, temp, temp2);
                    swap(pictsh, temp, temp2);
                }

                for (var i = 0; i < n; i++) {
                    var k = 0;
                    var img = new Image();
                    img = document.createElement("IMG");
                    img.id = "s" + (i + 1);
                    img.src = picts[i];

                    var ycord;
                    var otstup;
                    var xcord;
                    var bool = true;

                    while (bool && k < 70) {
                        ycord = getRandomInt(tabley + 15 / 450 * tableh, tabley + tableh - 50 / 450 * tableh - 120 / 450 * tableh);
                        otstup = (tableh - 50 / 450 * tableh - (ycord - tabley + 15 / 450 * tableh) + 10.4) * 5 / 10.4;
                        xcord = getRandomInt(tablex + otstup, tablex + tablew - otstup - 150 / 900 * tablew);
                        bool = false;
                        
                        for (var j = 0; j < i; j++) {
                            if (!(ycord > (predm[j].ys + predm[j].h) || (ycord + pictsh[i]) < (predm[j].ys) || (xcord + pictsw[i]) < (predm[j].xs) || xcord > (predm[j].xs + predm[j].w)))
                            {
                                k++;
                                bool = true;
                                break;
                            }
                        }

                    }

                   if (bool && k == 70) {
                        for (var ii = 0; ii < i; ii++) predm[ii].elem.remove();
                        i = -1;
                        continue;
                    }
                   
                    document.body.appendChild(img);
                    var elem = document.getElementById("s" + (i + 1));

                    elem.style.position = 'absolute';
                    elem.style.zIndex = 1000;
                    elem.style.left = xcord + 'px';
                    elem.style.top = ycord + 'px';
                    predm[i] = new Cons(xcord, ycord, elem, pictsw[i], pictsh[i], picts[i]);
                }
                $("#gen")
                    .hide();
                document.getElementById('user_res_time')
                    .innerHTML = "Запомните расположение предметов";
                for (var i = 1; i <= n; i++)
                    $("#s" + i)
                    .animate({
                        opacity: '0.995'
                    }, delta_time);

                //скрываем картинки 
                for (var i = 1; i <= n - 1; i++)
                    $("#s" + i)
                    .animate({
                        opacity: '0.99'
                    }, pause_time)
                    .animate({
                        opacity: '0.0'
                    }, delta_time);
                $("#s" + (n))
                    .animate({
                        opacity: '0.99'
                    }, pause_time)
                    .animate({
                        opacity: '0'
                    }, delta_time, function () {

                     //добавляем подвижные картинки вешаем обрабочик перемещений
                        document.getElementById('user_res_time')
                            .innerHTML = "Расставьте предеметы и нажмите готово!";
                        for (var i = 0; i < n; i++) {
                            var img = new Image();
                            img = document.createElement("IMG");
                            img.id = "p" + (i + 1);
                            img.src = picts[i];
                            document.getElementById("nabor")
                                .appendChild(img);
                                img.onmousedown = handler0;
                             img.ondragstart=fls;
                             img.addEventListener('touchstart',handler0m,false);
                                
                        }
                        document.getElementById('gen')
                            .innerHTML = 'Готово!';
                            stop=false
                        $("#gen")
                            .show();
                        state = 1;

                    });
            } else {

                var cc = 0;
                if (state == 1) {
                    for (var i = 0; i < n; i++) {
                        el = document.getElementById("p" + (i + 1));
                        upredm[i] = new Cons(getCoords(el)
                            .left, getCoords(el)
                            .top, el, pictsw[i], pictsh[i], picts[i]);
                    }
                    for (var i = 0; i < n; i++) {
                        if (test_rasp(upredm[i].xs, upredm[i].xs + upredm[i].w, upredm[i].ys, upredm[i].ys + upredm[i].h, predm[i].xs, predm[i].xs + predm[i].w, predm[i].ys, predm[i].ys + predm[i].h, predm[i].w, predm[i].h)) {
                            cc++;
                            upredm[i].elem.style.border = "1px solid green"
                        } else {
                            upredm[i].elem.style.border = "1px solid red"
                        }
                    }
                    document.getElementById('gen')
                        .style = 'display:none';
                        document.getElementById('gen2')
                        .style = 'display:none';
                    $("#gen2")
                        .show();
                    state = 2;
                
                        var add1={
                              "score": cc,
                              "time": time,
                              "finish": new Date()
                          }
                          localStorage.setItem("game_5",JSON.stringify(add1))
                          window.location="./index6.html"
                
                }
            }

        }
}
var time=10

setInterval(() => {
    if(!stop && time>0){
        time=(time-0.1).toFixed(1)
document.querySelector('.timer').innerHTML=`<i class='bx bx-time-five'></i> ТАЙМЕР: ${time} секунд`
    }
    if(time==0){
        var cc = 0;
                if (state == 1) {
                    for (var i = 0; i < n; i++) {
                        el = document.getElementById("p" + (i + 1));
                        upredm[i] = new Cons(getCoords(el)
                            .left, getCoords(el)
                            .top, el, pictsw[i], pictsh[i], picts[i]);
                    }
                    for (var i = 0; i < n; i++) {
                        if (test_rasp(upredm[i].xs, upredm[i].xs + upredm[i].w, upredm[i].ys, upredm[i].ys + upredm[i].h, predm[i].xs, predm[i].xs + predm[i].w, predm[i].ys, predm[i].ys + predm[i].h, predm[i].w, predm[i].h)) {
                            cc++;
                            upredm[i].elem.style.border = "1px solid green"
                        } else {
                            upredm[i].elem.style.border = "1px solid red"
                        }
                    }

                    document.getElementById('gen')
                        .style = 'display:none';
                    // $("#gen2")
                    //     .show();
                    // state = 2;
                        var add1={
                              "score": cc,
                              "time": time,
                              "finish": new Date()
                          }
                          localStorage.setItem("game_5",JSON.stringify(add1))
                          window.location="./index6.html"
               
                }
    }
}, 100);


document.addEventListener("DOMContentLoaded", ready);

