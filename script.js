window.onload = function () {
    const titles = document.getElementsByClassName("title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].addEventListener("click", showBook, false);
    }
};

function showBook(event) {
    let title = event.target;
    let toHide = title.nextElementSibling;
    if (toHide) {
        title.classList.toggle('minus');
        toHide.classList.toggle('open');
    }
}