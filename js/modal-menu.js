(() => {
  const refs = {
    // Додати атрибут data-modal-open-menu на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open-menu]"),
    // Додати атрибут data-modal-close-menu на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close-menu]"),
    // Додати атрибут data-modal-menu на бекдроп модалки
    modal: document.querySelector("[data-modal-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();