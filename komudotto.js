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

    output += komudotto
    while (true) {
        output += ga
        randamu = (getRandomInt(2));
        if (randamu >= 1) {
            output += tooru + kara + miti
        } else {
            output += nihonn
        }
        output += wo
        randamu = (getRandomInt(2));
        if (randamu >= 1){
            output += toru
            break
        } else {
            output += akero + orera
        }
    }
    target = document.getElementById("output");
    target.innerHTML = output;
    target = document.getElementById("count");
    target.innerHTML = "";
    if (output == "コムドットが通るから道をあけろ俺らが日本を獲る"){
        // ここにコムドットだった時の処理を書く
        target = document.getElementById("count");
        target.innerHTML = "おまえがコムドットだ！";
        const music = new Audio('se/fafa-.wav');
        music.play();
    } else {
        // ここにコムドットじゃなかった時の処理を書く
        var output = document.getElementById("output").innerHTML;
        var count = output.length;
        document.getElementById("count").innerHTML = count;
    }
}
