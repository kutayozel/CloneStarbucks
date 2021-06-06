var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

document.getElementById("defaultOpen").click();

window.onscroll = function(){
    myFunction()
};

function myFunction(){
    if(window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    } 
    else
    {
        header.classList.remove("sticky");
    }
}

function openTab(evt, drinkSize){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("drink");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabpoints");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(drinkSize).style.display = "flex";
    evt.currentTarget.className += "active";
}

