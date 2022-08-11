let linkBar = document.getElementById("bars");
let list = document.getElementById("linkList");
let nav = document.getElementById("Nav");
let cName = document.querySelector(".colorName");
let gear = document.querySelector(".fa-gears");
let icons = document.querySelectorAll(".fa-solid");
let navImage = document.querySelector("#Nav img");
let mainLinks = document.querySelectorAll("#Nav a");
let arrow = document.querySelector(".arrow");
cName.innerHTML = "";
let coloring = document.querySelector(".colors");
coloring.style.transform = "translateX(100%)";
cName.style.transform = "translateX(100%)"
let colorsArr = ["red", "yellow", "green", "blue", "brown", "black",
    "orange", "purple", "aqua"];
let color = document.querySelectorAll(".color");
gear.addEventListener("click", function () {
   if(coloring.style.transform == "translateX(100%)" && cName.style.transform == "translateX(100%)"){
            coloring.style.transform = "translateX(0%)";
            cName.style.transform = "translateX(0%)";
   }
   else{
    coloring.style.transform = "translateX(100%)";
    cName.style.transform = "translateX(100%)";
   }
})
function getColor(lol = []) {
    for (var i = 0; i < lol.length; i++) {
        if (window.scrollY > 0) {
            lol[i].style.color = "black";
        }
        else {
            lol[i].style.color = "white";
        }
    }
}

if (window.scrollY > 0) {
    nav.style.backgroundColor = "white";
    nav.style.transition = "all .5s";
    navImage.setAttribute("src", "IMAGES/bakery-color.png");
    nav.style.borderBottom = "2px solid black";
}
else {
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "all .5s"
    navImage.setAttribute("src", "IMAGES/bakery-light-1.png");
    nav.style.borderBottom = "none";
}
getColor(mainLinks);
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "white";
        nav.style.transition = "all .5s";
        navImage.setAttribute("src", "IMAGES/bakery-color.png");
        nav.style.borderBottom = "2px solid black";
    }
    else {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "all .5s"
        navImage.setAttribute("src", "IMAGES/bakery-light-1.png");
        nav.style.borderBottom = "none";
    }
    getColor(mainLinks);
})
for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = colorsArr[i];
    color[i].addEventListener("mouseenter", function () {
        cName.innerHTML = colorsArr[i];
        cName.style.backgroundColor = colorsArr[i];
    })

    color[i].addEventListener("mouseleave", function () {
        cName.innerHTML = "";
        cName.style.backgroundColor = "white";
    })
    color[i].addEventListener("click", function () {
        for (let j = 0; j < icons.length; j++) {
            icons[j].style.color = color[i].style.backgroundColor;
        }
    })
}
console.log(color);
linkBar.addEventListener("click", function () {
    if (list.style.height == "0px") {
        list.style.height = "250px";
    }
    else {
        list.style.height = "0px";
    }
})
