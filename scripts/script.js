var button = document.querySelector(".header__menu-btn");
var menu = document.querySelector(".header__nav");
var swap = 0;

var swapColopHeader = document.querySelector(".header__btns")

button.onclick = function(){
    
    if(swap == 0){
        menu.style.marginTop = "0px";
        menu.style.height = "100vh";
        button.style.color = "#eaeaea";
        button.style.textDecoration = "line-through";
        swap++
    }
    
    else{
        menu.style.marginTop = "-250px";
        menu.style.height = "0px";
        button.style.color = "#000";
        button.style.textDecoration = "none";
        swap--
    }
}