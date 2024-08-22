document.getElementById("open-sidebar").addEventListener("click", function () {
    let showMenu = window.document.querySelector("header.sidebar");
    let btn = document.querySelector("#open-sidebar");

    var aberto = true;
    var closed = false;
    if (showMenu.style.maxWidth != "200px") {
        showMenu.style.maxWidth = "200px";
        opened = aberto;
        btn.style.transform = "rotate(180deg)";
        btn.style.left = "170px"
        btn.style.top = "30px"
    } else if (opened) {
        showMenu.style.maxWidth = "70px";
        opened = closed;
        btn.style.transform = "rotate(0)";
        btn.style.left = "25px"
        btn.style.top = "30px"
    }
})