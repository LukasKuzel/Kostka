var hody = [];
var button;
button = document.getElementById("game")


document.getElementById('game').addEventListener('click',
    function(){
        button.hidden = true;
        hod();
        audio();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function audio(){
    var zvuk = document.getElementById('Roll');
    zvuk.volume = 0.3
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause()
    },4000);
}

function audio1(){
    var zvuk = document.getElementById('Roll1')
    zvuk.volume = 0.5;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },24000);
}

function audio2(){
    var zvuk = document.getElementById('Roll2')
    zvuk.volume = 0.3;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },14000);
}

function audio3(){
    var zvuk = document.getElementById('Roll3')
    zvuk.volume = 0.3;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },8000);
}

function audio4(){
    var zvuk = document.getElementById('Roll4')
    zvuk.volume = 0.3;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },8000);
}

function audio5(){
    var zvuk = document.getElementById('Roll5')
    zvuk.volume = 0.3;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },16000);
}

function audio6(){
    var zvuk = document.getElementById('Roll6')
    zvuk.volume = 0.3;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },8000);
}


function hod() {
    var random; 
    var obrazek = ["img/kostka1.png","img/kostka2.png","img/kostka3.png","img/kostka4.png","img/kostka5.png","img/kostka6.png","img/baf7.jpg","img/bratr8.jpg","img/Pum9.jpg"];
    let Interval1 = window.setInterval(function(){
        random = Math.floor(Math.random()*obrazek.length);
        document.getElementById('cube').src = obrazek[random];
    },150)
    window.setTimeout(function(){
        window.clearInterval(Interval1);
    },4000)

    window.setTimeout(function(){
        button.hidden = false;
        var h = Math.ceil(Math.random() * 6);
        hody.push(h);    
        if(h==1){
            audio1();
        }
        else if(h==2){
            audio2();
        }
        else if(h==3){
            audio3();
        }
        else if(h==4){
            audio4();
        }
        else if(h==5){
            audio5();
        }
        else if(h == 6){
            audio6();    
        }
        
     
    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<br><p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
    return h;
    },4000)
}