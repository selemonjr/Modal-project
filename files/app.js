const openEl = document.querySelector("#open");
const closeEl = document.querySelector("#close");
const modalContainer = document.querySelector("#modal-container");
// to open the Modal //
openEl.addEventListener("click",() => {
    modalContainer.classList.add("show");
});
// to close the Modal //
closeEl.addEventListener("click",() => {
    modalContainer.classList.remove("show");
})