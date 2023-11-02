//Elementleri yaratdim
const modal = document.createElement("div");
const btn = document.createElement("button");
const closeModal = document.createElement("span");
const modalTitle = document.createElement("h2");
const modalContent = document.createElement("p");
//elementleri html e elave etdim
document.body.append(modal);
document.body.append(btn);
modal.append(closeModal);
modal.append(modalTitle);
modal.append(modalContent);
//elementlere class verdim
modal.classList.add("modal");
btn.classList.add("btn");
closeModal.classList.add("close");
modalTitle.classList.add("title");
modalContent.classList.add("content");
//elementlere text yazdim
btn.textContent = "OPEN MODAL";
closeModal.textContent = "CLOSE";
modalTitle.textContent = "MODAL TITLE";
modalContent.textContent = "Here is the modal text content";
//eventleri yazdim
btn.addEventListener("click", () => {
  modal.style.visibility = "visible";
  document.body.style.backgroundColor = "#afb9b2";
});
closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  document.body.style.backgroundColor = "#c0ccc4";
});
