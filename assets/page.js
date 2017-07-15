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

var overlay = document.getElementById("over");
var header = document.getElementById("head");

jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
 
jQuery.fn.loadRepositories = function(username) {
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
     
        var list = $('<dl/>');
        target.append(list);
        $(repos).each(function() {
            if (this.name != (username +'.github.io') && !this.fork) {
                list.append('<div class="projectcontainer"><a target="_blank" href="' + this.html_link 
                + '">'+this.name+'</a>'
                +'<plang>('+this.language+')</plang>' 
                +'<p>' + this.description + '</p></div>');
            }
        });      
      });
};

$(function() {
        $("#over").loadRepositories("MichaelBenvenuto");
});

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