	//생성자 함수로 객체 만들기 
	function Book(title, author, pages, price){
		this.title = title,
		this.author = author,
		this.pages = pages,
		this.price = price
		this.info = function(){
			alert(this.title+"의 저자는"+this.author+"이고, 가격은 "+this.price+"원 입니다.")
		}
	}
	
	var jsp = new Book("JSP Web Programming", "Song miyeong", 620, 27000);
	var html = new Book("HTML5+CSS3", "Kong miyu", 540, 47000);
	var java = new Book("Java Programming", "Kim su", 230, 17000);
	
	var bookList = [jsp, html, java];
	
	document.write("<h1>책 제목으로 살펴보기</h1>");
	for(var i=0; i<bookList.length; i++){
		document.write("<p>"+bookList[i].title+"</p>");
	}	