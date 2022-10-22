// 変数の宣言
var not = 0; // 何回押したか
var pro = 0; // pro 0 or 1
var max = 0;
// ボタンdisableの関数、etc...
function btnDisable(){
    document.getElementById("btn").disabled = true;
    clearInterval(statusDis);
}
function btnAble(){
    document.getElementById("btn").disabled = false;
    clearInterval(statusAble);
}
function clicked(){
    statusDis  = setInterval(btnDisable , 1);
    statusAble = setInterval(btnAble , 5000);
}
function clicked_ban(){
    statusDis  = setInterval(btnDisable , 1);
    statusAble = setInterval(btnAble , 500);
}
function clicked_ez(){
    statusDis  = setInterval(btnDisable , 1);
    statusAble = setInterval(btnAble , 200);
}
// pro
const func_pro = () => {
    if (pro == 0) {
        // proになる
        pro = 1;
        target = document.getElementById("pro");
        target.innerHTML = "pro version";
        max_count.style.display = "block";
        kakuritu.style.display ="block";
        num.style.display ="block";
        console.log(pro);
    } else {
        // proを解除
        pro = 0;
        target = document.getElementById("pro");
        target.innerHTML = "";
        max_count.style.display ="none";
        kakuritu.style.display ="none";
        num.style.display ="none";
        console.log(pro);
    }
}

// ボタンが押された時の処理
const func_kom = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        }

    var komudotto = "コムドット"
    var ga = "が"
    var tooru = "通る"
    var kara = "から"
    var miti = "道"
    var wo = "を"
    var akero = "あけろ"
    var orera = "俺ら"
    var nihonn = "日本"
    var toru = "獲る"
    var output = ""
    var kakuritu = 100
    output += komudotto
    while (true) {
        output += ga
        randamu = (getRandomInt(2));
        if (randamu >= 1) {
            output += tooru + kara + miti
            kakuritu = kakuritu / 2
        } else {
            output += nihonn
            kakuritu = kakuritu / 2
        }
        output += wo
        randamu = (getRandomInt(2));
        if (randamu >= 1){
            output += toru
            kakuritu = kakuritu / 2
            break
        } else {
            output += akero + orera
            kakuritu = kakuritu / 2
        }
    }
    // 結果
    target = document.getElementById("output");
    target.innerHTML = output;
    // 文字数
    target = document.getElementById("count");
    target.innerHTML = "";
    if (output == "コムドットが通るから道をあけろ俺らが日本を獲る"){
        // ここにコムドットだった時の処理を書く
        target = document.getElementById("count");
        target.innerHTML = "おまえがコムドットだ！";
        // 演出
        if (pro == 0) {
            const music = new Audio('se/fafa-.wav');
            music.volume = 0.1;
            music.play();
            clicked_ez();
        }
    } else {
        // ここにコムドットじゃなかった時の処理を書く
        target = document.getElementById("count");
        target.innerHTML =output.length + "文字";
    }
    if (max < output.length){
        max = output.length
        target = document.getElementById("max_count");
        target.innerHTML = "最長記録：" + max + "文字";
    }
    // rareの処理
    if (kakuritu == 25) {
        target = document.getElementById("rare");
        target.innerHTML = "よわい";
    } else if (kakuritu == 6.25) {
        target = document.getElementById("rare");
        target.innerHTML = "ふつう";
    } else if (kakuritu == 1.5625) {
        target = document.getElementById("rare");
        target.innerHTML = "ぼちぼち";
    } else if (kakuritu == 0.390625) {
        target = document.getElementById("rare");
        target.innerHTML = "まあまあ";
    } else if (kakuritu == 0.09765625) {
        target = document.getElementById("rare");
        target.innerHTML = "そこそこ";
    } else if (kakuritu == 0.0244140625) {
        target = document.getElementById("rare");
        target.innerHTML = "ちょっとだけすごい";
    } else if (kakuritu == 0.006103515625) {
        target = document.getElementById("rare");
        target.innerHTML = "ぼちぼちすごい";
    // 厚い壁
    } else if (kakuritu == 0.00152587890625) {
        target = document.getElementById("rare");
        target.innerHTML = "まあまあすごい";
        if (pro == 0) {
        const music = new Audio('se/kya-yello.wav');
        music.volume = 0.5;
        music.play();
            clicked_ban()
        }
    } else if (kakuritu == 0.0003814697265625) {
        target = document.getElementById("rare");
        target.innerHTML = "すごい";
        const music = new Audio('se/ban1.wav');
        music.volume = 0.5;
        music.play();
        if (pro == 0) {
            clicked_ban()
        }
    } else if (kakuritu == 0.000095367431640625) {
        target = document.getElementById("rare");
        target.innerHTML = "すごすぎる";
        const music = new Audio('se/ban2.wav');
        music.volume = 0.5;
        music.play();
        if (pro == 0) {
            clicked_ban()
        }
    } else if (kakuritu == 0.00002384185791015625) {
        target = document.getElementById("rare");
        target.innerHTML = "まじやばい";
        const music = new Audio('se/ban3.wav');
        music.volume = 0.5;
        music.play();
        if (pro == 0) {
            clicked_ban()
        }
    } else if (kakuritu == 0.0000059604644775390625) {
        target = document.getElementById("rare");
        target.innerHTML = "まじやばすぎる";
        const music = new Audio('se/ban4.wav');
        music.volume = 0.5;
        music.play();
        if (pro == 0) {
            clicked_ban()
        }
    } else {
        target = document.getElementById("rare");
        target.innerHTML = "暇人＾＾;";
        const music = new Audio('se/babanbabann.wav');
        music.volume = 0.5;
        music.play();
        clicked()
    }
    // 確率を表示する
    target = document.getElementById("kakuritu");
    target.innerHTML = kakuritu + "%";
    // 何回押したか
    not++;
    document.getElementById("num").innerHTML = not;
}
