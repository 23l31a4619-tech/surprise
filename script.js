// Welcome Elements
const welcomePage = document.getElementById("welcomePage");
const bookSection = document.getElementById("bookSection");
const finalPage = document.getElementById("finalPage");

const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");

const pages = document.querySelectorAll(".photo-page");
const nextButtons = document.querySelectorAll(".next-btn");

let currentPage = 0;

// Start the surprise
startBtn.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    bookSection.classList.remove("hidden");
});

// Next buttons
nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        pages[currentPage].classList.add("turn");

        setTimeout(() => {

            pages[currentPage].classList.remove("active");
            pages[currentPage].style.display = "none";

            currentPage++;

            if (currentPage < pages.length) {

                pages[currentPage].style.display = "flex";

                setTimeout(() => {
                    pages[currentPage].classList.add("active");
                }, 50);

            }

        }, 700);

    });

});

// Finish Button
finishBtn.addEventListener("click", () => {

    pages[currentPage].classList.add("turn");

    setTimeout(() => {

        bookSection.classList.add("hidden");

        finalPage.classList.remove("hidden");

    }, 700);

});