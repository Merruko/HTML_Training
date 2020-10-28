function Book(title, author, pages, price){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
}

//book 배열 객체
var html = new Book("HTML+CSS3", "고경희", 550, 25000);
var javascript = new Book("자바스크립트+제이쿼리", "정인용", 400, 20000);
var jSP = new Book("JSP 웹프로그래밍", "송미영", 630, 27000);

//배열에 저장
var bookList = [html, javascript, jSP];
 
//문서에 출력
document.write("<h1>책 제목으로 살펴보기</h1>")
for(var i=0; i<bookList.length; i++){
    document.write("<p>" + bookList[i].title + "</p>");
}