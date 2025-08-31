
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });


  const clickSound = new Audio("click.mp3"); // Use a short click sound
  function openLightbox(src) {
    clickSound.play();
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.remove('hidden');
  }




  //filter
  function filterSections(value) {
    const allSections = document.querySelectorAll('main > h2, main > div.whitespace-nowrap');
    let show = false;
    value = value.toLowerCase();

    for (let i = 0; i < allSections.length; i += 2) {
      const heading = allSections[i];
      const section = allSections[i + 1];
      const match = heading.id.includes(value);

      heading.style.display = match || value === "" ? "block" : "none";
      section.style.display = match || value === "" ? "flex" : "none";
    }
  }

 


