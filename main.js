let buttons = document.querySelectorAll(".buttonPlus");
let headers = document.querySelectorAll(".accordion_header");
let texts = document.querySelectorAll(".accordion_text");
let minusBtn = document.querySelectorAll(".minus_hidden");
let accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    texts[i].classList.toggle("hidden");

    //Headers`ə click olunanda həmin accordionun borderi dəyişir və ondan başqa hamısı əvvəlki halına qayıdır
    accordions[i].style.border = "2px dashed #fff";
    for (let k = 0; k < accordions.length; k++) {
      if (accordions[k] != accordions[i]) {
        accordions[k].style.border = "2px solid #fff";
      }
    }

    if (getComputedStyle(buttons[i]).display === "block") {
      buttons[i].style.display = "none";
      minusBtn[i].style.display = "block";
      accordions[i].style.border = "2px dashed #fff";
    } else {
      buttons[i].style.display = "block";
      minusBtn[i].style.display = "none";
    }
  });
}

document.addEventListener("click", (e) => {
  let clickedElement = e.target;

  for (let i = 0; i < headers.length; i++) {
    if (
      clickedElement.parentNode.className != "accordion" &&
      clickedElement.parentNode.className != "buttonPlus" &&
      clickedElement.parentNode.className != "accordion_header"
    ) {
      accordions[i].style.border = "2px solid #fff";
    }
  }
});
