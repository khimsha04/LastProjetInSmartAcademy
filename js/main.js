// let indexValue = 1;
// showImg(indexValue);
// function blockall(e) {
//   showImg((indexValue = e));
// }
// function showImg(e) {
//   let i;
//   const img = document.querySelectorAll(".sectionsecondblock");
//   const slider = document.querySelectorAll(".blockall .blocks");
//   if (e > img.length) {
//     indexValue = 1;
//   }
//   if (e < 1) {
//     indexValue = img.length;
//   }
//   for (i = 0; i < img.length; i++) {
//     img[i].style.display = "none";
//   }
//   for (i = 0; i < slider.length; i++) {
//     slider[i].style.background = "#f9f9f9";
//   }
//   img[indexValue - 1].style.display = "block";
//   slider[indexValue - 1].style.background = "#15263e";
// }
/////
let indexValue1 = 1;
showImg1(indexValue1);
function pxblockall(e) {
  showImg1((indexValue1 = e));
}
function showImg1(e) {
  let i;
  const img1 = document.querySelectorAll(".slide");
  const slider1 = document.querySelectorAll(".pxblockall .pxblock");
  if (e > img1.length) {
    indexValue1 = 1;
  }
  if (e < 1) {
    indexValue1 = img1.length;
  }
  for (i = 0; i < img1.length; i++) {
    img1[i].style.display = "none";
  }
  for (i = 0; i < slider1.length; i++) {
    slider1[i].style.background = "#f9f9f9";
  }
  img1[indexValue1 - 1].style.display = "flex";
  slider1[indexValue1 - 1].style.background = "#e93656";
}
