const getElement = (...queries) => document.querySelector(...queries);

const button = getElement(".open__modal");
const container = getElement(".modal-post");
const modal = getElement(".modal__content");
const buttonClose = getElement(".closed");

const activeModalClass = "modal-show";

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener("click", openModal);

container.addEventListener("click", (event) => {
  if (modal.contains(event.target)) return;
  closeModal();
});

buttonClose.addEventListener("click", closeModal);
