$(document).ready(function(){
    $('.start').counterUp({
      delay: 10,
      time: 1200
    });
});

const video = document.querySelector(".history-modal");
const ytVideo = document.querySelector(".history-video");
const historyBody = document.querySelector("body");
const videoCancel = document.querySelector(".vid-remove");

video.addEventListener("click", (event) => {
    event.preventDefault();
    ytVideo.style.display = "block";
    historyBody.style.overflow = "hidden";
});

videoCancel.addEventListener("click", () => {
    ytVideo.style.display = "none";
    historyBody.style.overflow = "auto";
});