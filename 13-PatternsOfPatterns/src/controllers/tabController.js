const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const content1 = document.getElementById("content-1");
const content2 = document.getElementById("content-2");
button1.onclick = function openHTML() {
  content1.style.transform = "translateX(80%)"; //show inputs
  content2.style.transform = "translateX(-200%)"; //hide sliders
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
  button1.style.color = "#ff7846";
  button2.style.color = "#000";
};
button2.onclick = function openCSS() { //sliders click - hide inputs and show sliders
  content1.style.transform = "translateX(-200%)"; //hide inputs
  content2.style.transform = "translateX(200%)";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
  button2.style.color = "#ff7846";
  button1.style.color = "#000";
};