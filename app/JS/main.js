import "../CSS/style.css";
import "./DOM.js";
import { astronomyObjects } from "./objects.js";

astronomyObjects.forEach((object) => {
  const card = `
    <div class="card">
        <h2 class="header">${object.name}</h2>
        <img src="${object.imageUrl}" alt="${object.altText}">
        <h3>Type of Object: ${object.type}</h3>
        <p>Discovery Year of Object: ${object.discoveryYear}</p>
        <p>Object Composition: ${object.composition}</p>
        <p>Fun Fact!: ${object.name} is ${object.notableFeatures}</p>
  `;

  DOMSelectors.container.insertAdjacentHTML("beforeend", card);
});
