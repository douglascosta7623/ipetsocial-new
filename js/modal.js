const getElement = (...queries) => document.querySelector(...queries);

const button = getElement(".open-modal-button");
const container = getElement(".message__container");
const modal = getElement(".message__content");
const buttonClose = getElement(".message__button");

const activeModalClass = "modal-show";

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener("click", openModal);

container.addEventListener("click", (event) => {
  if (modal.contains(event.target)) return;
  closeModal();
});

buttonClose.addEventListener("click", closeModal);
