/** @type {HTMLDivElement} */
const blogMedia = document.querySelector(".blog-video__media");
const blogVideo = blogMedia?.querySelector("video");
const blogButton = blogMedia?.querySelector("button");

if (blogVideo && blogButton) {
  blogButton.addEventListener("click", () => {
    blogVideo.play();
    blogVideo.controls = true;
    blogButton.remove();
  });
}
