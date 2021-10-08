let image = document.getElementById("hero-image");
let leftButton = document.getElementsByClassName("carousel-left")[0];
let rightButton = document.getElementsByClassName("carousel-right")[0];
leftButton.onclick = function () {
    
    if(image.getAttribute("src") == "./Images/Web-Development-Books.png")
        image.src = "Images/Calculus-Books.png";
    else
        image.src = "./Images/Web-Development-Books.png";

};
rightButton.onclick = function () {
    if(image.getAttribute("src") == "Images/Calculus-Books.png")
        image.src = "./Images/Web-Development-Books.png";
    else
        image.src = "Images/Calculus-Books.png";
};