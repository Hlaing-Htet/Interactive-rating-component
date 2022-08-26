const submitBtn = document.querySelector(".submit-btn");
const rateBtn = document.querySelectorAll(".btn-hover");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const selected = document.getElementById("selected");
rateBtn.forEach((btn, index, allBtn) => {
  btn.addEventListener("click", (even) => {
    allBtn.forEach((x) => {
      if (x.classList.contains("click")) {
        x.classList.remove("click");
      }
    });
    btn.classList.add("click");
  });
});
submitBtn.addEventListener("click", () => {
  rateBtn.forEach((btn) => {
    if (btn.classList.contains("click")) {
      selected.innerText = btn.innerText;
      card1.classList.add("d-none");
      card2.classList.replace("d-none", "d-block");
    }
  });
  //   card1.classList.add("d-none");
});
