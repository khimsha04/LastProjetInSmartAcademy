// let i = 0;
// let images = [];
// let time = 1000;

// images[0] = document.querySelector(".zuka1");
// images[1] = document.querySelector("zuka2");
// images[2] = document.querySelector("zuka3");
// console.log(images[0]);
// function changeImages() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   }
//   setTimeout("changeImages()", time);
// }
// window.onload = changeImages;
////
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i = 0;
//   let slides = document.querySelector(".slidesphoto");
//   let dots = document.querySelector(".blocks");
//   console.log(slides);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" blocks", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
