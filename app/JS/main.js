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
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
  });
}

function filteredInsertion(ObjectType) {
  astronomyObjects
    .filter((object) => object.type == ObjectType)
    .forEach((object) => {
      const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

      DOMSelectors.container.insertAdjacentHTML("beforeend", card);
    });
}

function inclusiveInsertion() {
  const excluded = ["Galaxy", "Nebula", "Star"];
  astronomyObjects
    .filter((object) => !excluded.includes(object.type))
    .forEach((object) => {
      const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>Fun Fact!: ${object.name} is ${object.notableFeatures}</h6>
      </div>
    `;

      DOMSelectors.container.insertAdjacentHTML("beforeend", card);
    });
}

/*co d e */
baseInsertion(); // puts in all the cards as soon as you load the website

DOMSelectors.allButton.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  baseInsertion();
});

DOMSelectors.galaxyButton.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  filteredInsertion("Galaxy");
});

DOMSelectors.nebulaButton.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  filteredInsertion("Nebula");
});

DOMSelectors.starsButton.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  filteredInsertion("Star");
});

DOMSelectors.othersButton.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  inclusiveInsertion();
});
