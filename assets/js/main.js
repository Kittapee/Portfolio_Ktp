// Tab Logic
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  setTimeout(() => {
    document.getElementById(tabName).classList.add("active");
  }, 10);
  evt.currentTarget.classList.add("active");
}

// Lightbox Modal Logic
function openModal(imgSrc, captionText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImg");
  const caption = document.getElementById("modalCaption");
  modalImg.src = imgSrc;
  caption.innerHTML = captionText;
  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("imageModal").classList.remove("show");
}

// ASMS Project Modal Logic
function openAsmsModal() {
  document.getElementById("asmsModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeAsmsModal() {
  document.getElementById("asmsModal").classList.remove("show");
  document.body.style.overflow = "auto";
}