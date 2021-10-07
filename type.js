
const toAlpha = (num) => {
    const leveller = 97;
    const splev = 32;
    if ((num > 25) && (num < 0))
        return 'z';
    return String.fromCharCode(num + leveller);
};
var str = "";
var s = "";
var correct = "";
var stopped = 0;
function randString() {

    var size = 100;
    for (let i = 0; i < 100; i++) {
        var r = Math.floor(Math.random() * 26);
        var ch = toAlpha(r);
        str += ch;

    }
    return str;
}
let k = 0;
var index = 0;
var count = 0;
var w = 5;
var time;
var timeh;
var timem;
var times;
function start() {
    var element = document.getElementById("res-btn");
    element.classList.add("none");
    const btn = document.getElementById("start-btn");
    btn.disabled = true;
    if (stopped == 0) {
        str = "";
        correct = "";
        k = 0;
        index = 0;
        count = 0;
    }
    s = randString();
    document.getElementById("to-type").innerHTML = s;
    var today = new Date();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    timeh = today.getHours();
    timem = today.getMinutes();
    times = today.getSeconds();
    document.addEventListener('keydown', (event) => {
        count++;
        var name = event.key;
        var code = event.code;
        if (name != str[index]) {
            index--;

        }
        else {
            correct += s[0];
            s = s.substring(1);
            document.getElementById("typed").innerHTML = correct;
            document.getElementById("to-type").innerHTML = s;
        }
        index++;
        if (index == 100) {
            console.log("Check");
            stopped = 1;
            s = "";
            str = "";
            correct = "";
            document.getElementById("typed").innerHTML = correct;
            document.getElementById("to-type").innerHTML = s;
            stop();
        }
        k++;
        var km = k.toString();

    }, false);

};
function stop() {
    const btn = document.getElementById("start-btn");
    btn.disabled = false;
    var todaydone = new Date();
    var timed = todaydone.getHours() + ":" + todaydone.getMinutes() + ":" + todaydone.getSeconds();
    var timedh;
    var timedm;
    var timeds;
    timedh = todaydone.getHours();
    timedm = todaydone.getMinutes();
    timeds = todaydone.getSeconds();
    var diffh = timedh - timeh;
    var diffm = timedm - timem;
    var diffs = timeds - times;
    document.getElementById("disp7").innerHTML = Math.round(k / (5 * ((diffh * 60) + (diffm) + (diffs / 60))));
    document.getElementById("disp9").innerHTML = Math.round((100 / count) * 100) + "%";
    str = "";
    s = "";
    correct = "";
    k = 0;
    index = 0;
    count = 0;

    var element = document.getElementById("res-btn");
    element.classList.remove("none");

}
