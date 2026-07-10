// Edit this file to add or remove releases, features, and changelog entries.
// Nothing else in the site needs to change — main.js renders these arrays automatically.

// ---------------------------------------------------------------------------
// REQUIREMENTS — shown as pills under the hero title.
// Edit the values to match your build. Leave a string empty ("") to hide it.
// ---------------------------------------------------------------------------
const REQUIREMENTS = {
  minecraft: "1.21.1",   // Minecraft version this build targets
  loader: "Fabric",      // Mod loader
  java: "21+",           // Minimum Java version
};

// ---------------------------------------------------------------------------
// RELEASES — downloadable builds, newest first.
// To publish a build: add an object. To take one down: delete or comment it out.
// ---------------------------------------------------------------------------
const RELEASES = [
  // {
  //   version: "1.0.0",
  //   mcVersion: "1.21.1",
  //   loader: "Fabric",
  //   date: "2026-07-10",
  //   url: "https://github.com/yourname/yourrepo/releases/download/v1.0.0/magicsclient-1.0.0.jar",
  //   size: "1.2 MB",
  //   primary: true       // marks the recommended/latest build
  // }
];

// ---------------------------------------------------------------------------
// FEATURES — shown as a grid. Keep it short and honest; 3–6 works best.
// ---------------------------------------------------------------------------
const FEATURES = [
  {
    icon: "⚡",
    title: "Lightweight",
    text: "TODO: describe a real feature — e.g. minimal performance overhead.",
  },
  {
    icon: "🧩",
    title: "Fabric-native",
    text: "TODO: describe how it integrates with Fabric / Fabric API.",
  },
  {
    icon: "🎛️",
    title: "Configurable",
    text: "TODO: describe what players can toggle or customize.",
  },
];

// ---------------------------------------------------------------------------
// CHANGELOG — newest first.
// ---------------------------------------------------------------------------
const CHANGELOG = [
  {
    version: "1.0.0",
    date: "2026-07-10",
    notes: [
      "TODO: describe what changed in this version",
      "TODO: another line item",
    ],
  },
];
