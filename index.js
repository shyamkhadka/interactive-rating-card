// the DOMContentLoaded helps to ensure the document has been fully loaded and wraps the entire Code.

document.addEventListener("DOMContentLoaded", function () {
    const rating = document.querySelector(".rating-card");
    const thanksCard = document.querySelector(".thanks-card");
    const submit = document.querySelector(".submit");
    const selection = document.querySelector(".selection");
    const numBtn = document.querySelectorAll(".btn");

    // display for the thankscard is set to none
    thanksCard.style.display = "none";

    // using a forEach loop, we write a function to check when a button is clicked and selected rating is saved
    numBtn.forEach(function (button) {
        button.addEventListener("click", function () {
            const selected = button.innerHTML;

            selection.innerText = "You selected " + selected + " out of 5";
        });
    });
    // when the submit button is clicked, the selected rating and thanks card is displayed

    submit.addEventListener("click", function () {
        rating.style.display = "none";
        thanksCard.style.display = "flex";
    });
});
