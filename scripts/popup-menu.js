// Открытие и закрытие меню бургера
const menuOpenButton = document.querySelector(".menu__open-button");
const menuPopup = document.querySelector(".menu");
const menuCloseButton = document.querySelector(".menu__close-button");

function openPopup (menuElement) {
  menuElement.classList.add("menu__open")
}

function closePopup (popupElement) {
  popupElement.classList.remove("menu__open")
}

menuOpenButton.addEventListener("click", function(evt) {
  openPopup(menuPopup);
});

menuCloseButton.addEventListener("click", function(evt) {
  closePopup(menuPopup);
});


