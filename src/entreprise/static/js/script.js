let togg1 = document.getElementById("buttonSuiv");
let togg2 = document.getElementById("buttonPre");
let d1 = document.getElementById("div1");
let d2 = document.getElementById("div2");
let d3 = document.getElementById("div3");
let d4 = document.getElementById("div4");
let d5 = document.getElementById("div5");
let d6 = document.getElementById("div6");
let d7 = document.getElementById("div7");
let d8 = document.getElementById("div8");
let d9 = document.getElementById("div9");
let d10 = document.getElementById("div10");

//cacher toutes les autres div
d2.style.display = "none";
d3.style.display = "none";
d4.style.display = "none";
d5.style.display = "none";
d6.style.display = "none";
d7.style.display = "none";
d8.style.display = "none";
d9.style.display = "none";
d10.style.display = "none";

togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
        d2.style.display = "grid";
    } else if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
        d3.style.display = "grid";
    } else if (getComputedStyle(d3).display != "none") {
        d3.style.display = "none";
        d4.style.display = "grid";
    } else if (getComputedStyle(d4).display != "none") {
        d4.style.display = "none";
        d5.style.display = "grid";
    } else if (getComputedStyle(d5).display != "none") {
        d5.style.display = "none";
        d6.style.display = "grid";
    } else if (getComputedStyle(d6).display != "none") {
        d6.style.display = "none";
        d7.style.display = "grid";
    } else if (getComputedStyle(d7).display != "none") {
        d7.style.display = "none";
        d8.style.display = "grid";
    } else if (getComputedStyle(d8).display != "none") {
        d8.style.display = "none";
        d9.style.display = "grid";
    } else if (getComputedStyle(d9).display != "none") {
        d9.style.display = "none";
        d10.style.display = "grid";
    }
})

togg2.addEventListener("click", () => {
    if (getComputedStyle(d2).display != "none") {
        d1.style.display = "grid";
        d2.style.display = "none";
    } else if (getComputedStyle(d3).display != "none") {
        d2.style.display = "grid";
        d3.style.display = "none";
    } else if (getComputedStyle(d4).display != "none") {
        d3.style.display = "grid";
        d4.style.display = "none";
    } else if (getComputedStyle(d5).display != "none") {
        d4.style.display = "grid";
        d5.style.display = "none";
    } else if (getComputedStyle(d6).display != "none") {
        d5.style.display = "grid";
        d6.style.display = "none";
    } else if (getComputedStyle(d7).display != "none") {
        d6.style.display = "grid";
        d7.style.display = "none";
    } else if (getComputedStyle(d8).display != "none") {
        d7.style.display = "grid";
        d8.style.display = "none";
    } else if (getComputedStyle(d9).display != "none") {
        d8.style.display = "grid";
        d9.style.display = "none";
    } else if (getComputedStyle(d10).display != "none") {
        d9.style.display = "grid";
        d10.style.display = "none";
    }
})