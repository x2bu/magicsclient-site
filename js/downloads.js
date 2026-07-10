// Edit this file to add or remove releases, features, and changelog entries.
// Nothing else in the site needs to change — main.js renders these arrays automatically.

// ---------------------------------------------------------------------------
// REQUIREMENTS — shown as pills under the hero title.
// Edit the values to match your build. Leave a string empty ("") to hide it.
// ---------------------------------------------------------------------------
const REQUIREMENTS = {
  minecraft: "1.21.11",  // Minecraft version this build targets
  loader: "Fabric",      // Mod loader
  java: "21+",           // Minimum Java version
};

// ---------------------------------------------------------------------------
// RELEASES — downloadable builds, newest first.
// To publish a build: add an object. To take one down: delete or comment it out.
// ---------------------------------------------------------------------------
const RELEASES = [
  {
    name: "Krypton Client",
    version: "1.21.11",
    mcVersion: "1.21.11",
    loader: "Fabric",
    date: "2026-07-10",
    url: "/downloads/krypton-client-1.21.11.jar",
    size: "5.4 MB",
    primary: true, // marks the recommended/latest build
  },
  {
    name: "HypixelHelper",
    version: "1.0.0",
    mcVersion: "1.21.11",
    loader: "Fabric",
    date: "2026-07-10",
    url: "/downloads/hypixelhelper.jar",
    size: "4.1 MB",
  },
];

// ---------------------------------------------------------------------------
// FEATURES — shown as a grid. Keep it short and honest; 3–6 works best.
// ---------------------------------------------------------------------------
const FEATURES = [
  {
    icon: "🆓",
    title: "Completely free",
    text: "No paid tiers, no keys to buy, no resellers. Pick a build, download it, done.",
  },
  {
    icon: "🔒",
    title: "HWID-locked",
    text: "Every build is tied to the machine that runs it, so it can't be copied, re-uploaded, or repackaged as a ratted version the way cracked clients usually are.",
  },
  {
    icon: "🧩",
    title: "All the modules — plus extras",
    text: "The full set of core modules you already know, rebuilt from scratch under a new name, with a few extra modules on top.",
  },
  {
    icon: "⚡",
    title: "Lightweight & Fabric-native",
    text: "Built on Fabric for Minecraft 1.21.11. Low overhead, fast launch, no bloat.",
  },
  {
    icon: "🔄",
    title: "Actively updated",
    text: "New modules and fixes ship regularly — grab the latest build from the download section.",
  },
  {
    icon: "💬",
    title: "Discord support",
    text: "Questions, bug reports, or module requests? Join the Discord — links are in the header and footer.",
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
      "Initial public release for Minecraft 1.21.11 (Fabric).",
      "Full rewrite and rebrand — every core module rebuilt from scratch on new code.",
      "Added HWID lock so builds can't be copied or repackaged as ratted versions.",
      "Added several extra modules beyond the original client.",
    ],
  },
];
