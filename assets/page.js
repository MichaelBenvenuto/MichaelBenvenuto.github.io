var projectButton = document.getElementById("Projects");
var contactButton = document.getElementById("Contact");
var mainButton = document.getElementById("main");

var buttons = document.getElementsByClassName("button");

var mainpage = document.getElementById("mainpage");
var projectpage = document.getElementById("projectpage");
var contactpage = document.getElementById("contactpage");

var currentPage = mainpage;
mainButton.style.animation = "a-pulse 2s ease-in-out alternate infinite";
mainButton.style.pointerEvents = "none";

mainButton.onclick = function(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.pointerEvents = "auto";
        buttons[i].style.animation = "";
    }
    if(currentPage != mainpage){
        currentPage.style.opacity = "0";
        currentPage.style.pointerEvents = "none";
        mainpage.style.opacity = "1";
        mainpage.style.pointerEvents = "auto"
        currentPage = mainpage;
        mainButton.style.animation = "";
    }
    mainButton.style.animation = "a-pulse 2s ease-in-out alternate infinite";
    mainButton.style.pointerEvents = "none";
}

projectButton.onclick = function(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.pointerEvents = "auto";
        buttons[i].style.animation = "";
    }
    currentPage.style.opacity = "0";
    currentPage.style.pointerEvents = "none";
    projectpage.style.opacity = "1";
    projectpage.style.pointerEvents = "auto";
    currentPage = projectpage;
    projectButton.style.animation = "a-pulse 2s ease-in-out alternate infinite";
    projectButton.style.pointerEvents = "none";
}

contactButton.onclick = function(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.pointerEvents = "auto";
        buttons[i].style.animation = "";
    }
    currentPage.style.opacity = "0";
    currentPage.style.pointerEvents = "none";
    contactpage.style.opacity = "1";
    contactpage.style.pointerEvents = "auto";
    currentPage = contactpage;
    contactButton.style.animation = "a-pulse 2s ease-in-out alternate infinite";
    contactButton.style.pointerEvents = "none";
}