const kenny = document.getElementById('kenny');
let deathCounter = 0


function killKenny () {
    if (parseInt(kenny.style.left) < 40) {
        alert("Ho les batards !! Ils ont tuer Kenny !!");
        kenny.style.left = "200px"
        kenny.style.top = "200px"
        deathCounter++
        document.getElementById("kennyDeathCounter").innerHTML = "Tu as tuer " + deathCounter + " fois Kenny batard."
    }
}


function up () {
    if (parseInt(kenny.style.top) > 0) {
        kenny.style.top = (parseInt(kenny.style.top) - 10) + 'px';
    }
}


function down () {
    if (parseInt(kenny.style.top) < 470) {
        kenny.style.top = (parseInt(kenny.style.top) + 10) + 'px';
    }
}


function left () {
    if (parseInt(kenny.style.left) > 0){
        kenny.style.left = (parseInt(kenny.style.left) - 10) + 'px';
    }
    killKenny()
}


function right () {
    if (parseInt(kenny.style.left) < 470) {
        kenny.style.left = (parseInt(kenny.style.left) + 10) + 'px';
    }
}


document.getElementById('up').addEventListener('click',function() {
    up()
});


document.getElementById('down').addEventListener('click',function() {
    down()
});


document.getElementById('left').addEventListener('click',function() {
    left()
});


document.getElementById('right').addEventListener('click',function() {
    right()
});


document.onkeydown = function handleKeyDown(e) {
    let key = e.keyCode;
    switch (key) {
        case 37:
            left()
            break;
        case 38:
            up()
            break;
        case 39:
            right()
            break;
        case 40:
            down()
            break;
    }
}