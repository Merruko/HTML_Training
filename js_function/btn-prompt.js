var calc = function(){
    var num = parseInt(prompt("숫자 입력", "1"));
    var square = num * num;
    document.getElementById("result").innerHTML = square;
}