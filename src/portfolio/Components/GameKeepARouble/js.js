// настройки
// 1 монета скорость 7 (10 монет)
// 2 монеты скорость 7 (каждой по 10)
// 2 монеты скорость 6 (каждой по 10)
// 3 монеты скорость 6 (каждой 10)
// 3 монеты скорость 5 
let frame = document.querySelector(".frame");
let wallet = document.querySelector(".wallet");
let bear = document.querySelector(".bear");
let score = document.querySelector(".score");
let rub1 = document.querySelector(".rub-1");
let rub2 = document.querySelector(".rub-2");
let rub5 = document.querySelector(".rub-5");
let themeSound = document.querySelector("#theme-sound");
let catchSound = document.querySelector("#catch-sound");
let clickSound = document.querySelector("#click-sound");
let muteBtn = document.querySelector("#mute");
let soundOnBtn = document.querySelector("#sound-on");
let startBtn = document.querySelector(".start-btn");
let count = document.querySelector(".count");
let flag = true;

let price = "20$";
let course = "80";
// __________________________________________________________

startBtn.addEventListener("click", function () {
    this.classList.add("animation-btn");
    start();
});

document.querySelector(".else-btn").addEventListener("click", function () {
    history.go(0);
    clickSound.play();
});

document.querySelector(".yes-btn").addEventListener("click", function () {
    clickSound.play();
    $(".bear-message").animate({
        "left": "-535px"
    }, 300);
    $(".bear-message-discount").animate({
        "top": "-200px"
    }, 500).animate({
        "top": "20px"
    }, 300);
    $(".bear-message-discount__value").html((+$(".score").html() / parseFloat(course) / parseFloat(price) * 100).toFixed(1) + "%");
});

document.querySelector(".bear-message-discount__submit").addEventListener("click", function () {
    clickSound.play();
    history.go(0);
});

function start() {
    clickSound.play();
    themeSound.volume = 0.2;
    themeSound.play();

    speed1();

}

// для еще одной игры без перезагрузки страницы 
// function elseStart() {

//     flag = true;
//     $(".bear").animate({"bottom": "-190px"},10);
//     $(".bear-message").animate({"top": "500"}, 100);
//     $(".bear-message__score").html("0");
//     score.innerHTML = "0";
//     bear.classList.remove("rotate");
//     bear.classList.remove("rotate-reverse");
// }


// кнопка отключить звук "mute
soundOnBtn.addEventListener("click", function () {
    themeSound.pause();
    soundOnBtn.style.display = "none";
    muteBtn.style.display = "block";
});
muteBtn.addEventListener("click", function () {
    themeSound.play();
    muteBtn.style.display = "none";
    soundOnBtn.style.display = "block";
});

//  разные точки начала падения 
document.querySelectorAll(".rub").forEach(function (item) {
    item.style.left = parseInt(Math.random() * 980) + "px";
});


// делаю движение кошелька относительно мышки и окна браузера 

frame.addEventListener("mousemove", function (e) {
    if (!flag)
        return;
    if (e.clientX - frame.offsetLeft > 50 && e.clientX - frame.offsetLeft < 950) {
        wallet.style.left = e.clientX - frame.offsetLeft - 105 + "px";
    }
});

// функция возвращения элементу RUB значений исходного положения по оси X И Y 
function loopOfRub(elem) {
    elem.style.left = parseInt(Math.random() * 980) + "px";
    elem.style.top = "0px";

}

// функция Drop падение счетчика 
function dropCount(elem) {
    if (parseFloat(getComputedStyle(elem).top) < 500) {
        elem.style.top = (parseFloat(getComputedStyle(elem).top) + 5) + "px";
    }
}

// функция Drop падение монеты 
function drop(elem) {

    if (!flag)
        return;

    if (parseFloat(getComputedStyle(elem).top) < 500) {
        elem.style.top = (parseFloat(getComputedStyle(elem).top) + 5) + "px";
    }

    let rubY = parseFloat(elem.style.top);
    let rubY1 = parseFloat(rub1.style.top);
    let rubX1 = parseFloat(rub1.style.left);
    let rubY2 = parseFloat(rub2.style.top);
    let rubX2 = parseFloat(rub2.style.left);
    let rubY5 = parseFloat(rub5.style.top);
    let rubX5 = parseFloat(rub5.style.left);
    let wallX = parseFloat(wallet.style.left);

    if ((rubY1 == 450) && (rubX1 > (wallX + 15)) && (rubX1 < (wallX + 150))) {
        catchSound.play();
        score.innerHTML = +score.innerHTML + 1;
        loopOfRub(elem);
    }
    if ((rubY2 == 450) && (rubX2 > (wallX + 15)) && (rubX2 < (wallX + 150))) {
        catchSound.play();
        score.innerHTML = +score.innerHTML + 2;
        loopOfRub(elem);
    }
    if ((rubY5 == 450) && (rubX5 > (wallX + 15)) && (rubX5 < (wallX + 150))) {
        catchSound.play();
        score.innerHTML = +score.innerHTML + 5;
        loopOfRub(elem);
    }

    if ((rubY > 490) && (rubY < 510)) {
        gameOver();
    }
}

function gameOver() {
    if (!flag)
        return;
    $(".wallet").animate({
        "left": "130px"
    });
    $(".bear").animate({
        "left": "130px"
    }).animate({
        "bottom": "50px"
    });
    setTimeout(function () {
        $(".bear-message").animate({
                "top": "-200"
            }, 500)
            .animate({
                "top": "20"
            }, 300)
    }, 1300);
    $(".bear-message__score").html($(".score").html());

    let rubScoreSign = document.querySelector(".bear-message__rub");

    setInterval(function () {
        rubScoreSign.classList.toggle("bear-message__rub--animation");
    }, 2000);

    flag = false;
    themeSound.pause();
    let gameOverSound = document.createElement("audio");
    gameOverSound.setAttribute("src", "audio/game-over.mp3");
    gameOverSound.play();
    setInterval(() => {
        bear.classList.toggle("rotate");
        setTimeout(() => {
            bear.classList.toggle("rotate-reverse");
        }, 500)
    }, 550);

}


let fps = 10;
let flagSpeed1 = true;

function speed1() {
    if (!flagSpeed1)
        return;
    setTimeout(function () {
        requestAnimationFrame(speed1);
        drop(rub1);
    }, fps);
    if (parseFloat(score.innerHTML) > 1) {
        flagSpeed1 = false;
        speed2();
    }
}

let flagSpeed2 = true;
let w;
function speed2() {
    $(".rub-2").css("display", "block");

    if (!flagSpeed2)
        return;
    setTimeout(function () {
        requestAnimationFrame(speed2);
        dropCount(count);
        drop(rub1);
        if (parseFloat(count.style.top) > 250) {
        drop(rub2);
        }
    }, fps);

    /* if (parseFloat(score.innerHTML) > 25) {
        flagSpeed2 = false;
        $(".rub-1").css("display", "none");
        $(".rub-2").css("display", "none");
        // speed3();
    } */
}