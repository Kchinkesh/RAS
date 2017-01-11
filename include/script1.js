function showMenu() {
        document.getElementById("menu").classList.toggle("w3-show");
        }
function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}
 
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}
function openTab(evt,tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("page");
    document.getElementById("show").style.display = "none";
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-red");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("w3-red");
    w3_close();
    }