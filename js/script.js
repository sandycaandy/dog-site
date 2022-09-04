//плавная прокрутка к якорю
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
//блок вопрос-ответ
let content = document.querySelectorAll(".question__answer");
let buttons = document.querySelectorAll(".question__ques");
for (let i = 0; i < content.length; i++) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      content[i].classList.toggle("question__answer--show");
      buttons[i].classList.toggle("question__active-btn");
    };
  }
}


