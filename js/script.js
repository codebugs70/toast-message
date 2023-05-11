const btn = document.querySelector(".btn");

btn.addEventListener("click", handleClickBtn);
function handleClickBtn(e) {
  const clickedBtn = e.target;
  clickedBtn.style.pointerEvents = "none";
  clickedBtn.style.userSelect = "none";
  setInterval(() => {
    clickedBtn.removeAttribute("style");
  }, 3000);
  renderToast();
}

const removeToast = () => {
  const toast = document.querySelector(".toast");
  toast.classList.add("hide");
  setTimeout(() => toast.parentNode.removeChild(toast), 500);
};

function renderToast() {
  const template = `<div class="toast">
    <div class="toast-content">
      <div class="row">
        <i class="fa-solid fa-check"></i>
        <p>This is success toast!</p>
      </div>
      <span onClick="handleCloseToast()" class="close-toast">
        <i class="fa-solid fa-xmark"></i>
      </span>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
  setTimeout(() => removeToast(), 3000);
}

function handleCloseToast() {
  const toast = document.querySelector(".toast");
  toast.classList.add("hide");
}
