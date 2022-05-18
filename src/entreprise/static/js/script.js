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

let b1 = document.getElementById("page1")
let b2 = document.getElementById("page2")
let b3 = document.getElementById("page3")
let b4 = document.getElementById("page4")
let b5 = document.getElementById("page5")
let b6 = document.getElementById("page6")
let b7 = document.getElementById("page7")
let b8 = document.getElementById("page8")
let b9 = document.getElementById("page9")
let b10 = document.getElementById("page10")

function cacher() {
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
    d6.style.display = "none";
    d7.style.display = "none";
    d8.style.display = "none";
    d9.style.display = "none";
    d10.style.display = "none";
}

function decolorer() {
    b1.style.color = "#417D7A";
    b2.style.color = "#417D7A";
    b3.style.color = "#417D7A";
    b4.style.color = "#417D7A";
    b5.style.color = "#417D7A";
    b6.style.color = "#417D7A";
    b7.style.color = "#417D7A";
    b8.style.color = "#417D7A";
    b9.style.color = "#417D7A";
    b10.style.color = "#417D7A";
}

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
b1.style.color = 'red';


togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none" && d2.firstChild.nextSibling != null) {
        d1.style.display = "none";
        d2.style.display = "grid";
        decolorer()
        b2.style.color = 'red';
    } else if (getComputedStyle(d2).display != "none" && d3.firstChild.nextSibling != null) {
        d2.style.display = "none";
        d3.style.display = "grid";
        decolorer()
        b3.style.color = 'red';
    } else if (getComputedStyle(d3).display != "none" && d4.firstChild.nextSibling != null) {
        d3.style.display = "none";
        d4.style.display = "grid";
        decolorer()
        b4.style.color = 'red';

    } else if (getComputedStyle(d4).display != "none" && d5.firstChild.nextSibling != null) {
        d4.style.display = "none";
        d5.style.display = "grid";
        decolorer()
        b5.style.color = 'red';
    } else if (getComputedStyle(d5).display != "none" && d6.firstChild.nextSibling != null) {
        d5.style.display = "none";
        d6.style.display = "grid";
        decolorer()
        b6.style.color = 'red';
    } else if (getComputedStyle(d6).display != "none" && d7.firstChild.nextSibling != null) {
        d6.style.display = "none";
        d7.style.display = "grid";
        decolorer()
        b7.style.color = 'red';
    } else if (getComputedStyle(d7).display != "none" && d8.firstChild.nextSibling != null) {
        d7.style.display = "none";
        d8.style.display = "grid";
        decolorer()
        b8.style.color = 'red';
    } else if (getComputedStyle(d8).display != "none" && d9.firstChild.nextSibling != null) {
        d8.style.display = "none";
        d9.style.display = "grid";
        decolorer()
        b9.style.color = 'red';
    } else if (getComputedStyle(d9).display != "none" && d10.firstChild.nextSibling != null) {
        d9.style.display = "none";
        d10.style.display = "grid";
        decolorer()
        b10.style.color = 'red';
    }
})

togg2.addEventListener("click", () => {
    if (getComputedStyle(d2).display != "none") {
        d1.style.display = "grid";
        d2.style.display = "none";
        decolorer()
        b1.style.color = 'red';
    } else if (getComputedStyle(d3).display != "none") {
        d2.style.display = "grid";
        d3.style.display = "none";
        decolorer()
        b2.style.color = 'red';
    } else if (getComputedStyle(d4).display != "none") {
        d3.style.display = "grid";
        d4.style.display = "none";
        decolorer()
        b3.style.color = 'red';
    } else if (getComputedStyle(d5).display != "none") {
        d4.style.display = "grid";
        d5.style.display = "none";
        decolorer()
        b4.style.color = 'red';
    } else if (getComputedStyle(d6).display != "none") {
        d5.style.display = "grid";
        d6.style.display = "none";
        decolorer()
        b5.style.color = 'red';
    } else if (getComputedStyle(d7).display != "none") {
        d6.style.display = "grid";
        d7.style.display = "none";
        decolorer()
        b6.style.color = 'red';
    } else if (getComputedStyle(d8).display != "none") {
        d7.style.display = "grid";
        d8.style.display = "none";
        decolorer()
        b7.style.color = 'red';
    } else if (getComputedStyle(d9).display != "none") {
        d8.style.display = "grid";
        d9.style.display = "none";
        decolorer()
        b8.style.color = 'red';
    } else if (getComputedStyle(d10).display != "none") {
        d9.style.display = "grid";
        d10.style.display = "none";
        decolorer()
        b9.style.color = 'red';
    }
})

b1.addEventListener("click", () => {
    cacher()
    d1.style.display = "grid";
    decolorer()
    b1.style.color = 'red';
})
b2.addEventListener("click", () => {
    cacher()
    d2.style.display = "grid";
    decolorer()
    b2.style.color = 'red';
})
b3.addEventListener("click", () => {
    cacher()
    d3.style.display = "grid";
    decolorer()
    b3.style.color = 'red';
})
b4.addEventListener("click", () => {
    cacher()
    d4.style.display = "grid";
    decolorer()
    b4.style.color = 'red';
})
b5.addEventListener("click", () => {
    cacher()
    d5.style.display = "grid";
    decolorer()
    b5.style.color = 'red';
})
b6.addEventListener("click", () => {
    cacher()
    d6.style.display = "grid";
    decolorer()
    b6.style.color = 'red';
})
b7.addEventListener("click", () => {
    cacher()
    d7.style.display = "grid";
    decolorer()
    b7.style.color = 'red';
})
b8.addEventListener("click", () => {
    cacher()
    d8.style.display = "grid";
    decolorer()
    b8.style.color = 'red';
})
b9.addEventListener("click", () => {
    cacher()
    d9.style.display = "grid";
    decolorer()
    b9.style.color = 'red';
})
b10.addEventListener("click", () => {
    cacher()
    d10.style.display = "grid";
    decolorer()
    b10.style.color = 'red';
})

if (d1.firstChild.nextSibling == null) {
    b1.style.display = "none"
}
if (d2.firstChild.nextSibling == null) {
    b2.style.display = "none"
}
if (d3.firstChild.nextSibling == null) {
    b3.style.display = "none"
}
if (d4.firstChild.nextSibling == null) {
    b4.style.display = "none"
}
if (d5.firstChild.nextSibling == null) {
    b5.style.display = "none"
}
if (d6.firstChild.nextSibling == null) {
    b6.style.display = "none"
}
if (d7.firstChild.nextSibling == null) {
    b7.style.display = "none"
}
if (d8.firstChild.nextSibling == null) {
    b8.style.display = "none"
}
if (d9.firstChild.nextSibling == null) {
    b9.style.display = "none"
}
if (d10.firstChild.nextSibling == null) {
    b10.style.display = "none"
}