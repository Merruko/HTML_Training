function calPrice(){
    var originPrice = document.getElementById("oPrice").value; //원래가격
    var rate = document.getElementById("rate").value; //할인율
    var savedPrice = originPrice * (rate/100);  //할인금액
    var resultPrice = originPrice - savedPrice; //최종금액

    document.getElementById("showResult").innerHTML = "상품의 원래 가격은 " +
    originPrice + "원이고,<br> 할인율은 " + rate + "%입니다.<br>계산결과 " + savedPrice + "원을 절약한<br>세일가 " +
    resultPrice + "원에 살 수 있습니다.";
}