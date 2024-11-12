import "../CSS/style.css";
import { DOMSelectors } from "./DOM.js";
import { astronomyObjects } from "./objects.js";

function clearScreen() {
  DOMSelectors.container.innerHTML = "";
}

function baseInsertion() {
  clearScreen();
  astronomyObjects.forEach((object) => {
    const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>${object.notableFeatures}</h6>
      </div>
    `;

    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
  });
}

function filteredInsertion(ObjectType) {
  clearScreen();

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
          <h6>${object.notableFeatures}</h6>
      </div>
    `;

      DOMSelectors.container.insertAdjacentHTML("beforeend", card);
    });
}

function inclusiveInsertion() {
  clearScreen();

  const excluded = ["Galaxy", "Nebula", "Star"];
  astronomyObjects
    .filter((object) => !excluded.includes(object.type)) // if it DOESNT include the object types defined before, then it inserts them 
    .forEach((object) => {
      const card = `
      <div class="card">
          <h3 class="header">${object.name}</h3>
          <img src="${object.imageURL}" alt="${object.altText}">
          <h4>Type of Object: ${object.type}</h4>
          <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
          <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
          <h6>${object.notableFeatures}</h6>
      </div>
    `;

      DOMSelectors.container.insertAdjacentHTML("beforeend", card);
    });
}

function sortObjects(sortOption) {
  // if its not painfully obvious i used chatgpt for this (though its really only the first two parts that I really relied on it) but im leaving all these comments to make sure I understand whats going on, i dont wanna just copy code and not know how it works :')

  /*converts the array-like objects (the cards) ON SCREEN into a true array so that arraymethods can be used. the cards are similar to an array as they're just divs/card elements with information, similar to objects within an array */
  const displayedObjects = Array.from(DOMSelectors.container.children); // Array.from converts the elements (aka the children) from the container where are the cards are into an array

  // get the data from the displayed cards to sort
  let sortedData = displayedObjects.map((card) => {
    // goes through all of the cards using map
    const name = card.querySelector(".header").textContent; // gets the card by looking at the name of each object (on the card itself, as each one has the class .header)
    return astronomyObjects.find((object) => object.name === name); // returns the cards after finding them using the prev variable
  });

  // Apply sorting to the filtered data wooo
  if (sortOption === "distanceAsc") {
    sortedData.sort((a, b) => a.distanceLightYears - b.distanceLightYears); // sorts distance by ascending order
  } else if (sortOption === "distanceDesc") {
    sortedData.sort((a, b) => b.distanceLightYears - a.distanceLightYears); // descending order
  } else if (sortOption === "yearAsc") {
    sortedData.sort((a, b) => a.discoveryYear - b.discoveryYear);
  } else if (sortOption === "yearDesc") {
    sortedData.sort((a, b) => b.discoveryYear - a.discoveryYear);
  }

  // clear the container and insert the sorted data
  clearScreen();
  sortedData.forEach((object) => {
    const card = `
    <div class="card">
        <h3 class="header">${object.name}</h3>
        <img src="${object.imageURL}" alt="${object.altText}">
        <h4>Type of Object: ${object.type}</h4>
        <h5>Distance to Earth (in light-years): ${object.distanceLightYears.toLocaleString()}</h5>
        <h6>Discovery Year of Object: ${object.discoveryYear}</h6>
        <h6>${object.notableFeatures}</h6>
    </div>
  `;
    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
  });
}

function resetSortedObjects() {
  if (currentFilter === "Galaxy") {
    filteredInsertion("Galaxy");
  } else if (currentFilter === "Nebula") {
    filteredInsertion("Nebula");
  } else if (currentFilter === "Star") {
    filteredInsertion("Star");
  } else if (currentFilter === "Others") {
    inclusiveInsertion();
  } else {
    baseInsertion();
  }
}

//

//

/*co d e */
let currentFilter = "All";
baseInsertion(); // puts in all the cards as soon as you load the website

DOMSelectors.allButton.addEventListener("click", function () {
  currentFilter = "All";
  baseInsertion();
});

DOMSelectors.galaxyButton.addEventListener("click", function () {
  currentFilter = "Galaxy";
  filteredInsertion("Galaxy");
});

DOMSelectors.nebulaButton.addEventListener("click", function () {
  currentFilter = "Nebula";
  filteredInsertion("Nebula");
});

DOMSelectors.starsButton.addEventListener("click", function () {
  currentFilter = "Star";
  filteredInsertion("Star");
});

DOMSelectors.othersButton.addEventListener("click", function () {
  currentFilter = "Others";
  inclusiveInsertion();
});

DOMSelectors.resetSort.addEventListener("click", function () {
  resetSortedObjects();
});

DOMSelectors.sortButton.addEventListener("click", function () {
  const option = DOMSelectors.sortOptions.value;
  sortObjects(option);
});
