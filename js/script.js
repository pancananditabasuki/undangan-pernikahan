const sr = ScrollReveal({
  distance: "65px",
  duration: 2000,
  delay: 450,
  reset: true,
});

// Start Gallery
sr.reveal(".gallery span", { delay: 200, origin: "bottom" });
sr.reveal(".gallery h2", { delay: 200, origin: "bottom" });
sr.reveal(".gallery p", { delay: 200, origin: "bottom" });
sr.reveal(".image-grid .col1 a", { delay: 300, origin: "bottom" });
sr.reveal(".image-grid .col2 a", { delay: 400, origin: "bottom" });
sr.reveal(".image-grid .col3 a", { delay: 500, origin: "bottom" });
sr.reveal(".image-grid .col4 a", { delay: 600, origin: "bottom" });
sr.reveal(".image-grid .col5 a", { delay: 300, origin: "bottom" });
sr.reveal(".image-grid .col6 a", { delay: 400, origin: "bottom" });
sr.reveal(".image-grid .col7 a", { delay: 500, origin: "bottom" });
sr.reveal(".image-grid .col8 a", { delay: 600, origin: "bottom" });
// End Gallery

// Start Story
sr.reveal(".timeline", { delay: 200, origin: "bottom" });
sr.reveal(".timeline-heading", { delay: 200, origin: "bottom" });
sr.reveal(".timeline-body", { delay: 200, origin: "bottom" });
sr.reveal(".timeline-panel", { delay: 200, origin: "bottom" });
sr.reveal(".timeline-image", { delay: 200, origin: "bottom" });
sr.reveal(".story span", { delay: 200, origin: "bottom" });
sr.reveal(".story p", { delay: 200, origin: "bottom" });
sr.reveal(".story h2", { delay: 200, origin: "bottom" });

// Start Info
sr.reveal(".info iframe", { delay: 400, origin: "bottom" });
sr.reveal(".info h2", { delay: 200, origin: "bottom" });
sr.reveal(".info p", { delay: 300, origin: "bottom" });
sr.reveal(".info a", { delay: 500, origin: "bottom" });
sr.reveal(".card", { delay: 500, origin: "bottom" });

// Start Home
sr.reveal(".home h2", { delay: 200, origin: "bottom" });
sr.reveal(".home h6", { delay: 300, origin: "bottom" });
sr.reveal(".home h3", { delay: 400, origin: "bottom" });
sr.reveal(".home p", { delay: 500, origin: "bottom" });
sr.reveal(".home span", { delay: 400, origin: "bottom" });
sr.reveal(".home h4", { delay: 400, origin: "bottom" });
sr.reveal(".home img", { delay: 400, origin: "bottom" });

// Start rsvp
sr.reveal(".rsvp h2", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp p", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp label", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp input", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp textarea", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp select", { delay: 200, origin: "bottom" });
sr.reveal(".rsvp button", { delay: 200, origin: "bottom" });

// Start gifts
sr.reveal(".gifts span", { delay: 200, origin: "bottom" });
sr.reveal(".gifts h2", { delay: 200, origin: "bottom" });
sr.reveal(".gifts p", { delay: 200, origin: "bottom" });
sr.reveal(".gifts ul", { delay: 200, origin: "bottom" });

// Start kirimkado
sr.reveal(".kirimkado span", { delay: 200, origin: "bottom" });
sr.reveal(".kirimkado h2", { delay: 200, origin: "bottom" });
sr.reveal(".kirimkado p", { delay: 200, origin: "bottom" });
sr.reveal(".kirimkado h3", { delay: 200, origin: "bottom" });
sr.reveal(".kirimkado .container", { delay: 200, origin: "bottom" });

// Start vendor
sr.reveal(".vendor span", { delay: 200, origin: "bottom" });
sr.reveal(".vendor h2", { delay: 200, origin: "bottom" });
sr.reveal(".vendor p", { delay: 200, origin: "bottom" });
sr.reveal(".vendor h3", { delay: 200, origin: "bottom" });
sr.reveal(".vendor a", { delay: 200, origin: "bottom" });

// Start berbahagia
sr.reveal(".berbahagia", { delay: 200, origin: "bottom" });

sr.reveal(".turutmengundang h1", { delay: 200, origin: "bottom" });
sr.reveal(".turutmengundang h2", { delay: 300, origin: "bottom" });
sr.reveal(".turutmengundang p", { delay: 300, origin: "bottom" });

// Start Copied Code
const copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  const input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 500);
});

const copyText1 = document.querySelector(".copy-text1");
copyText1.querySelector("button").addEventListener("click", function () {
  const input = copyText1.querySelector("input.text1");
  input.select();
  document.execCommand("copy");
  copyText1.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText1.classList.remove("active");
  }, 500);
});

let copyText2 = document.querySelector(".copy-text2");
copyText2.querySelector("button").addEventListener("click", function () {
  let input = copyText2.querySelector("input.text2");
  input.select();
  document.execCommand("copy");
  copyText2.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText2.classList.remove("active");
  }, 500);
});

let copyText3 = document.querySelector(".copy-text3");
copyText3.querySelector("button").addEventListener("click", function () {
  let input = copyText3.querySelector("input.text3");
  input.select();
  document.execCommand("copy");
  copyText3.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText3.classList.remove("active");
  }, 500);
});

// End Copied Code

// Start Image-grid

const imageGrid = document.querySelector(".image-grid");
const links = imageGrid.querySelectorAll("a");
const imgs = imageGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = document.querySelector(".modal-body .container-fluid");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const currentImg = link.querySelector("img");
    const lightboxCarousel = document.getElementById("lightboxCarousel");
    if (lightboxCarousel) {
      const parentCol = link.parentElement.parentElement;
      const index = [...parentCol.parentElement.children].indexOf(parentCol);
      const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
      bsCarousel.to(index);
    } else {
      createCarousel(currentImg);
    }
    bsModal.show();
  });
}

function createCarousel(img) {
  const markup = `
    <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000">
      <div class="carousel-inner">
        ${createSlides(img)}
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;

  modalBody.innerHTML = markup;
}

function createSlides(img) {
  let markup = "";
  const currentImgSrc = img.getAttribute("src");

  for (const img of imgs) {
    const imgSrc = img.getAttribute("src");
    const imgAlt = img.getAttribute("alt");
    const imgCaption = img.getAttribute("data-caption");

    markup += `
    <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
      <img src=${imgSrc} alt=${imgAlt}>
      ${imgCaption ? createCaption(imgCaption) : ""}
    </div>
    `;
  }

  return markup;
}

function createCaption(caption) {
  return `<div class="carousel-caption">
     <p class="m-0">${caption}</p>
    </div>`;
}

// End Image-grid
