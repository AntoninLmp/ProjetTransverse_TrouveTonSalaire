let togg1 = document.getElementById("buttonSuiv");
let d1 = document.getElementById("div1");
let d2 = document.getElementById("div2");

//cacher toutes les autres div
d2.style.display = "none";

togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
        d2.style.display = "grid";
    } else if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
        d1.style.display = "grid";
    }
})