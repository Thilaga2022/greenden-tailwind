var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})

var close = document.getElementById("close-nav")
close.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})