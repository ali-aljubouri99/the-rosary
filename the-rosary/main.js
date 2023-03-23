let input = document.querySelector(".content input")
let resetBtn = document.querySelector(".btn-reset");
let countBtn = document.querySelector(".count");
let countUp = 0;

if (window.localStorage.getItem("num")) {
    input.value = window.localStorage.getItem("num");
}
countBtn.addEventListener("click", function(e) {
    countUp = window.localStorage.getItem("num")
    window.localStorage.setItem("num", ++countUp);
    input.value = window.localStorage.getItem("num");
})
resetBtn.addEventListener("click", function(e) {
    input.value = 0;
    window.location.reload()
    window.localStorage.removeItem("num")
})


// Start Change Color
let listColor = document.querySelectorAll("ul li");
listColor.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        listColor.forEach((ele) => {
            ele.classList.remove("active")
        })
        ele.classList.add("active");
        window.localStorage.setItem("color", e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"));
    })
})

if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"));
    listColor.forEach((ele) => {
        ele.classList.remove("active");
        if (ele.dataset.color === window.localStorage.getItem("color")) {
            ele.classList.add("active");
        }
    })
}
// End Change Color