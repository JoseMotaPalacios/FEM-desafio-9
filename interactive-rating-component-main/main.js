const buttons = document.querySelectorAll(".card-one__btn-cont__btn");
const selected = document.querySelector(".card-two__selection--selected");
const submit = document.querySelector(".card-one__submit");
const cardOne = document.querySelector(".card-one__container");
const cardTwo = document.querySelector(".card-two__container");

buttons.forEach(button => {
    button.addEventListener('click', () => selected.innerHTML = button.id);
});

submit.addEventListener("click", () => cardTwo.style.display = "flex");
submit.addEventListener("click", () => cardOne.style.display = "none");