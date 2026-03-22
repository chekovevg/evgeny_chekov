const reactPageMap = {
  index: "react-index.html",
  cv: "react-cv.html",
  design: "react-design.html",
  magazine: "react-magazine.html",
  "magazine-cover": "react-magazine-cover.html",
  experiments: "react-experiments.html",
  "photo-gallery": "react-photo-gallery.html",
  "photo-gallery-bw": "react-photo-gallery-bw.html",
  "photo-gallery-clr": "react-photo-gallery-clr.html"
};

const body = document.body;
const pageId = body?.dataset?.page;

if (pageId && reactPageMap[pageId]) {
  const switcher = document.createElement("div");
  switcher.className = "architecture-switch";
  switcher.setAttribute("aria-label", "Architecture switch");

  const staticLink = document.createElement("a");
  staticLink.className =
    "architecture-switch__button architecture-switch__button--active";
  staticLink.href = window.location.pathname.split("/").pop() || "index.html";
  staticLink.textContent = "HTML/CSS";

  const reactLink = document.createElement("a");
  reactLink.className = "architecture-switch__button";
  reactLink.href = reactPageMap[pageId];
  reactLink.textContent = "React + shadcn";

  switcher.append(staticLink, reactLink);
  body.prepend(switcher);
}
