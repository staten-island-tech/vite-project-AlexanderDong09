const astronomyObjects = [
  {
    name: "WR 124",
    distanceLightYears: 15000,
    type: "Star",
    imageURL: "/WR124.jpg",
    altText:
      "Wolf-Rayet 124 as seen in a composite image from the James Webb Space Telescope.",
    discoveryYear: 1938,
    notableFeatures:
      "An highly luminous Wolf-Rayet star surrounded by an intensely hot nebula formed from the star's extreme stellar wind, characteristic of all Wolf Rayet Stars. Also one of the fastest runaway stars in the Milky Way with a radial velocity around 200 km/s.",
  },
  {
    name: "ESO 137-001",
    distanceLightYears: 220000000,
    type: "Galaxy",
    imageURL: "/jelly.jpg",
    altText:
      "Hubble image of ESO 137-001 displaying a long tail created by gas stripping.",
    discoveryYear: 2005,
    notableFeatures:
      "One of the most famous jellyfish galaxies (also known as *the* jellyfish galaxy, according to it's wikipedia article). As this galaxy moves to the center of the cluster Abell 3627, it gets stripped away by hot gas, thus creating a 260,000 light-year long tail",
  },

  {
    name: "Veil Nebula",
    distanceLightYears: 2100,
    type: "Nebula",
    imageURL: "/veil.jpg",
    altText:
      "Hubble image of a small region of the Veil Nebula spanning 2 light years",
    discoveryYear: 1784,
    notableFeatures:
      "One of the best known supernova remnants, deriving its name from its delicate, draped filamentary structures, 110 light-years across. The image shown here is only about two light years across, showing only a tiny fraction of the nebula's vast and beautiful structure.",
  },
  {
    name: "Boötes Void",
    distanceLightYears: 700000000,
    type: "Void",
    imageURL: "/notquitethevoid.jpg",
    altText:
      "Wikipedia image of Barnard 68, a dark nebula mistakenly used to refer to the Boötes Void.",
    discoveryYear: 1981,
    notableFeatures:
      "Colloquially referred to as the Great Nothing, a somewhat spherical region of space found in the vicinity of the constellation Boötes, containing only 60 galaxies instead of the 2,000 that should be expected from an area this large. With a radius of nearly 330 million light years accross, it is one of the largest voids in the visible universe, and is referred to as a supervoid.",
  },
  {
    name: "W2246-0526",
    distanceLightYears: 12400000000,
    type: "Galaxy",
    imageURL: "/WISE.jpg",
    altText:
      "Artist's impression of the extremely luminous infrared galaxy W2246-0526",
    discoveryYear: 1689,
    notableFeatures:
      "the most luminous known galaxy in the observable universe, 350 trillion times brighter than the sun (it's also cannibalistic! likely the reason why it's so bright)",
  },

  {
    name: "Sirius A",
    distanceLightYears: 8.6,
    type: "Star",
    imageURL: "/Sirius.jpg",
    altText: "An image of Sirius A, the brightest star in the night sky.",
    discoveryYear: 1844,
    notableFeatures:
      "Part of the Sirius binary star system, and is the brightest star in the night sky. Approximately 1.7 times larger than our sun, but appears 25 times more luminous. This apparent brightness is due to its intrinsic luminosity and its proximity to the Solar System. Due to it being the brightest star in the night sky, Sirius appears in some of the earliest astronomical records, meaning it was technically dicovered during ancient times. However, the Sirius Star system was discovered in 1844 with the gravitational effects of Sirius B being observed, so that's the discovery year used. (also putting Ancient times wouldn't work in my code lmaoo)",
  },
  {
    name: "Bubble Nebula",
    distanceLightYears: 7100,
    type: "Nebula",
    imageURL: "/buble.jpg",
    altText:
      "Wide field image of NGC 7635 as captured by the Hubble Space Telescope.",
    discoveryYear: 1787,
    notableFeatures:
      "This whimsical looking nebula was formed by the stellar wind from a massive, hot young star, SAO 20575, which blows a bubble in the surrounding interstellar gas. The nebula is near a giant molecular cloud which contains the expansion of the bubble nebula while itself being excited by the hot central star, causing it to glow. Not much else to say about this, just a silly lil nebula.",
  },
  {
    name: "NGC 4261",
    distanceLightYears: 180000000,
    type: "Black Hole",
    imageURL: "/NGC4261.jpg",
    altText:
      "A Hubble Space Telescope image of the gas and dust disk in the active galactic nucleus of NGC 4261.",
    discoveryYear: 1989,
    notableFeatures:
      "Although NHC 4261 is technically an elliptical galaxy, it does have a supernatural black hole (somewhat offset from the center of the core), which is what this card focuses on. (plus there's enough galaxies in this list anyway). The black hole is estimated to be 1.6 billion times larger than that of our sun ((1.62±0.04)x10^9 M☉), and has  prominent jets emanating radio emmisions from the nucleus that extend more than 88,000 light years.",
  },
  {
    name: "Horsehead Nebula",
    distanceLightYears: 1375,
    type: "Nebula",
    imageURL: "/honse.jpg",
    altText:
      "A false color image of the Horsehead Nebula as taken by the National Science Foundation.",
    discoveryYear: 1888,
    notableFeatures:
      "One of the most identifiable nebulae because of its resemblance to a horse's head. The distinctive horse head shape would be invisible without the colorful gases behind it.  Astronomers estimate that the nebula will disintegrate in about 5-10 million years.",
  },
  {
    name: "Black Eye Galaxy (M64)",
    distanceLightYears: 17.29,
    type: "Galaxy",
    imageURL: "/m64.jpg",
    altText: "M64 as taken with the Hubble Space Telescope.",
    discoveryYear: 1779,
    notableFeatures:
      "The distinctive dark band of absorbing dust partially in front of its bright nucleus gave rise to its nicknames of the 'Black Eye', 'Evil Eye', or 'Sleeping Beauty' galaxy. The gas in the outer regions of galaxy are rotating in the opposite direction from the gas and stars in its inner regions. This strange behavior can be attributed to a merger between M64 and a satellite galaxy over a billion years ago.",
  },
  {
    name: "Proxima Centauri",
    distanceLightYears: 4.24,
    type: "Star",
    imageURL: "/ProxCent.jpg",
    altText:
      "False color Hubble Space Telescope  image taken in 2013. The bright lines are diffraction spikes.",
    discoveryYear: 1915,
    notableFeatures:
      "Proxima Centauri is the nearest star to Earth after the Sun, who despite it's close distance to the earth, is too faint to be seen with the naked eye. Proxima Centauri is a member of the Alpha Centauri star system, being identified as component Alpha Centauri C.",
  },
  {
    name: "Andromeda Galaxy",
    distanceLightYears: 2537000,
    type: "Galaxy",
    imageURL: "/andromeda.jpg",
    altText:
      "A Hubble Space Telescope image of the Andromeda Galaxy, the closest galaxy to our home galaxy",
    discoveryYear: 964,
    notableFeatures:
      "Andromeda is the nearest galaxy to our own Milky Way galaxy, and is the most distant thing we humans can see with the unaided eye. Predicted to collide with our galaxy in in approximately 4.5 billion years, with the galaxy product being named Milkdromeda.",
  },
  {
    name: "Tarantula Nebula",
    distanceLightYears: 161000,
    type: "Nebula",
    imageURL: "/tarantula.jpg",
    altText: "James Webb Space Telescope's NIRCam view of the Tarantula Nebula",
    discoveryYear: 1835,
    notableFeatures:
      "Home to the most massive known stars in the universe, with 21 out of the 44 known stars that have 100 Solar Masses or more (stars 100x larger than our sun) being located inside of this one Nebula, containing the top 4 most massive stars in the universe. In addition, it is an extremely luminous object, so much so that if it were as close to Earth as the Orion Nebula, it would cast visible shadows. In fact, it is the most active starburst region known in the Local Group of galaxies. ",
  },
  {
    name: "R136",
    distanceLightYears: 158200,
    type: "Star Cluster",
    imageURL: "/tarantula.jpg",
    altText:
      "A Hubble Space Telescope image of the R136 star cluster in ultraviolet, visible, and red light.",
    discoveryYear: 1960,
    notableFeatures:
      "R136 is a central star concentration in the NGC 2070 cluster at the heart of the Tarantula Nebula in the Large Magellanic Cloud. It contains 72 class O and Wolf-Rayet stars within 5 parsecs. Producing most of the nebula's energy, it has an estimated mass of 450,000 solar masses and is less than 2 million years old. The brightest part, R136a, includes eight extremely massive stars (such as R136a1, the second most massive star known), and the cluster houses some of the most luminous stars known. ",
  },
  {
    name: "Sagittarius A*",
    distanceLightYears: 26996,
    type: "Black Hole",
    imageURL: "/sgr_a.jpg",
    altText:
      "The polarized view of Sgr A*, as taken by the Event Horizon Telescope (EHT) collaboration.",
    discoveryYear: 1974,
    notableFeatures:
      "The supermassive black hole at the center of our galaxy (about 4.3 million times larger than our sun), also the second ever black hole to be photographed (after the M87 supermassive black hole). Researchers from around the world collaborated and used different telescopes to essentially create a  virtual Earth-sized telescope, where data from each of the observations is combined. In this photo, the polarized view is shown, allowing the magnetic field around the shadow of the black hole to be visible. ",
  },
  {
    name: "Eta Carinae",
    distanceLightYears: 7500,
    type: "Star",
    imageURL: "/Eta_Carinae.jpg",
    altText:
      "Eta Carinae and its billowing pair of dust and gas clouds as captured by the Hubble Space Telescope",
    discoveryYear: 1677,
    notableFeatures:
      "Eta Carinae is a luminous blue variable (LBV) star, known for its dramatic brightness fluctuations and also a binary star system, with the primary star being around 100 times more massive than the Sun and expected to explode as a supernova in the near future.  Eta Carinae experienced a massive outburst in the 19th century, known as the 'Great Eruption' briefly becoming one of the brightest stars in the sky. Surrounding the star is the Homunculus Nebula, an expanding shell of gas and dust shaped like an hourglass.",
  },
  {
    name: "Whirlpool Galaxy (M51)",
    distanceLightYears: 23.5,
    type: "Galaxy",
    imageURL: "/M51.jpg",
    altText:
      "Whirlpool Galaxy (M51a) as taken by the European Space Agency. Object in upper right is NGC 5195.",
    discoveryYear: 1773,
    notableFeatures:
      "The Whirlpool Galaxy, also known as Messier 51a (M51a) or NGC 5194, is a  grand-design spiral galaxy, and the first of its kind to be classified as a spiral galaxy. The Whirlpool Galaxy famously interacts with its companion galaxy, NGC 5195, forming one of the most noted interacting galaxy pairs in astronomy. The two are connected by what is known as a dust-rich tidal bridge, and their interaction has triggered new star formation, making it a favorite subject for astronomers studying galaxy structure and interactions.",
  },
  {
    name: "ULAS J1120+0641",
    distanceLightYears: 28850000000,
    type: "Quasar",
    imageURL: "/ULAS.jpg",
    altText: "Artist's rendering of ULAS J1120+0641.",
    discoveryYear: 2011,
    notableFeatures:
      "Was the most distant known quasar when discovered in 2011, powered by a supermassive black hole with a mass two billion times that of the Sun, with an estimated luminosity of 63 trillion solar luminosities, or a causal 63 trillion times brighter than our sun (outshining entire galaxies.) The quasar emitted the light observed on Earth today less than 770 million years after the Big Bang, about 13 billion years ago, 100 million years earlier than light from the most distant previously known quasar. ",
  },
  {
    name: "MY Camelopardalis",
    distanceLightYears: 13050,
    type: "Star",
    imageURL: "/MY.jpg",
    altText:
      "Artist's rendition of MY Camelopardalis, two supermassive blue O-type stars orbiting extremely close",
    discoveryYear: 2004,
    notableFeatures:
      "MY Camelopardalis is one of the most massive known binary star systems known, consisting of two hot blue O-type stars orbiting each other at over a million kilometers per hour. This star system is a leading candidate for a massive star merger (where the two stars may converge and create one giant star over 60 solar masses in size",
  },
  {
    name: "Helix Nebula",
    distanceLightYears: 650,
    type: "Nebula",
    imageURL: "/EyeOfGod.jpg",
    altText:
      "NGC 7293 seen through several visible filters by Hubble Space Telescope",
    discoveryYear: 1824,
    notableFeatures:
      "The Helix Nebula (NGC 7293) is one of the closest and brightest planetary nebulae to Earth. Formed from the expelled outer layers of a dying star, it has a striking appearance resembling a helix or an eye, giving rise to it being referred to as the 'Eye of God' as well as the 'Eye of Sauron'. The central star, a white dwarf, heats the surrounding gas causing it to glow brightly.",
  },
  {
    name: "Orion Nebula",
    distanceLightYears: 1344,
    type: "Nebula",
    imageURL: "/orion.jpg",
    altText:
      "A Hubble Space Telescope composite image of Orion Nebula in visible and infrared light",
    discoveryYear: 1610,
    notableFeatures:
      "The Orion Nebula (Messier 42 or M42) is a diffuse nebula part of a larger nebula complex in the Orion constellation, known for its rich and varied star formation activity. It's one of the brightest nebulae visible to the naked eye and a massive star-forming region.",
  },
  {
    name: "LMC (Large Magellanic Cloud)",
    distanceLightYears: 163,
    type: "Galaxy",
    imageURL: "/lmc.jpg",
    altText:
      "A map of the Large Magellanic Cloud with the brightest features annotated",
    discoveryYear: 1519,
    notableFeatures:
      "The Large Magellanic Cloud (LMC) is a dwarf galaxy and satellite galaxy of the Milky Way, and is known for its rich star-forming regions, including the famous Tarantula Nebula. It is the fourth-largest galaxy in the Local Group and contains around 20 billion stars, and is predicted to merge with the Milky Way in approximately 2.4 billion years, similar to the Andromeda Galaxy.",
  },
];

export { astronomyObjects };
