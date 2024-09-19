/* 
   Задание 1:

   Доделать слайдер с урока

   1. Переписать код слайдера с урока по видео
   2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

setInterval(nextSlide, 2000);

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
/* 
   Задание 2:

   Доделать tabs с урока

   1. Переписать код tabs с урока по видео
   2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

const allTabs = document.querySelectorAll(".tabs");

const changeClass = (tabs, el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

for (const tabs of allTabs) {
  const content = tabs.nextElementSibling.querySelectorAll(":scope > .content");
  tabs.addEventListener("click", (e) => {
    const currTab = e.target.dataset.btn;
    changeClass(tabs, e.target);
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove("active");
      if (content[i].dataset.content === currTab) {
        content[i].classList.add("active");
      }
    }
  });
}
