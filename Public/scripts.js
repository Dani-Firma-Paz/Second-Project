const modalOverlay = document.querySelector('.modal-overlay');
const songs = document.querySelectorAll('.song')

for (let song of songs) {
  song.addEventListener("click", function() {
    const videoId = song.getAttribute("id");
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `http://www.youtube.com/embed/${videoId}`
  })
}
document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})
