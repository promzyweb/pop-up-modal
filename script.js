// grabbing and storing the various elements inside my variables

const modal = document.querySelector(".modal");
const btn = document.querySelector("#btn");
const close = document.querySelector(".close");

// // The open modal function
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// // The close modal function
function closeModal() {
  modal.style.display = "none";
}

// // Event listeners
btn.addEventListener("click", openModal);

close.addEventListener("click", closeModal);

modal.addEventListener("click", closeModal);

// function toggleModal(e) {
//   e.preventDefault();
//   if (modal.classList.contains("display")) {
//     modal.classList.remove("display");
//   } else {
//     modal.classList.add("display");
//   }
// }

// btn.addEventListener("click", toggleModal);
// close.addEventListener("click", toggleModal);
// modal.addEventListener("click", toggleModal);








