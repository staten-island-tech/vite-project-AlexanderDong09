import "../CSS/style.css";
import { DOMSelectors } from "./DOM.js";
import { astronomyObjects } from "./objects.js";

function baseInsertion() {
  astronomyObjects.forEach((object) => {
    const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
  });
}

baseInsertion();

DOMSelectors.allButton.addEventListener("click", function (event) {
  event.preventDefault();
  const clear = ``;

  DOMSelectors.container.innerHTML = clear;

  baseInsertion();
});

function filteredInsertion(type) {
  astronomyObjects
    .filter((object) => object.type == type)
    .forEach((object) => {
      const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

      DOMSelectors.container.insertAdjacentHTML("beforeend", card);
    });
}

function inclusiveInsertion(type) {
  const what =
    astronomyObjects
      .filter((object) => object.type == type)
      .includes("Black Hole") || "Void";

  what.forEach((object) => {
    const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
  });
}

DOMSelectors.galaxyButton.addEventListener("click", function (event) {
  event.preventDefault();
  const clear = ``;
  DOMSelectors.container.innerHTML = clear;

  filteredInsertion("Galaxy");
});

DOMSelectors.nebulaButton.addEventListener("click", function (event) {
  event.preventDefault();
  const clear = ``;
  DOMSelectors.container.innerHTML = clear;

  filteredInsertion("Nebula");
});

DOMSelectors.starsButton.addEventListener("click", function (event) {
  event.preventDefault();
  const clear = ``;
  DOMSelectors.container.innerHTML = clear;

  filteredInsertion("Star");
});

DOMSelectors.othersButton.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  const clear = ``;
  DOMSelectors.container.innerHTML = clear;

  inclusiveInsertion("Black Hole", "Void");
});
