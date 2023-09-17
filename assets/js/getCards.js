var cardsContainer = document.querySelector(".cards-container")
var trashHTML = cardsContainer.innerHTML

cardsContainer.innerHTML = ``
const pathData = "../../cards.json";
const urlData = "https://romhenri.github.io/rdesign/cards.json";

getData()

function getData() {
  fetch(urlData)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(item => {
          createCard(item)
        });
        initGight()
      })
      .catch(error => console.error('Erro:', error));
}

function createCard(item) {
  var card = document.createElement("div")
  card.className = "col-xl-3 col-lg-4 col-md-6"
  card.innerHTML = `
    <div class="gallery-item h-100">
      <img
        src="${item.src}"
        class="img-fluid"
        alt="${item.name}"
      />
      <div
        class="gallery-links d-flex align-items-center justify-content-center"
      >
        <a
          href="${item.src}"
          title="${item.name}"
          class="glightbox preview-link"
          ><i
            class="bi bi-arrows-angle-expand"
          ></i
        ></a>
      </div>
    </div>
  `
  cardsContainer.appendChild(card)
}

function initGight() {
  const glightbox = GLightbox({
    selector: '.glightbox',
  })
}