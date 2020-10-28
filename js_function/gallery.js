var num = 1;

function prevGallery(){
    num--;
    if(num < 1)
        num = 7;
    document.getElementById("gallery").src = "../zmain_images/img" + num + ".jpg";
}

function nextGallery(){
    num++;
    if(num > 7)
        num = 1;
    document.getElementById("gallery").src = "../zmain_images/img" + num + ".jpg";
}