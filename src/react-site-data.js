import cvHtml from "../cv.html?raw";
import experimentsHtml from "../experiments.html?raw";
import magazineHtml from "../magazine.html?raw";
import magazineCoverHtml from "../magazine-cover.html?raw";
import photoGalleryHtml from "../photo-gallery.html?raw";

import magazineSpread1 from "../img/magazine/2-1.jpg";
import magazineSpread2 from "../img/magazine/2-2.jpg";
import magazineSpread3 from "../img/magazine/2-3.jpg";
import magazineSpread4 from "../img/magazine/2-4.jpg";
import magazineSpread5 from "../img/magazine/2-5.jpg";
import magazineSpread6 from "../img/magazine/2-6.jpg";
import magazineSpread7 from "../img/magazine/2-7.jpg";
import magazineSpread8 from "../img/magazine/2-8.jpg";
import magazineSpread9 from "../img/magazine/2-9.jpg";
import magazineCover from "../img/magazine/2-10.jpg";
import bwPhoto1 from "../img/photo-gallery/1-5.jpg";
import bwPhoto2 from "../img/photo-gallery/1-1.jpg";
import bwPhoto3 from "../img/photo-gallery/1-3.jpg";
import bwPhoto4 from "../img/photo-gallery/1-4.jpg";
import bwPhoto5 from "../img/photo-gallery/1-6.jpg";
import bwPhoto6 from "../img/photo-gallery/1-8.jpg";
import bwPhoto7 from "../img/photo-gallery/1-7.jpg";
import bwPhoto8 from "../img/photo-gallery/1-10.jpg";
import bwPhoto9 from "../img/photo-gallery/1-11.jpg";
import bwPhoto10 from "../img/photo-gallery/1-12.jpg";
import colorPhoto1 from "../img/photo-gallery/2-5.jpg";
import colorPhoto2 from "../img/photo-gallery/2-2.jpg";
import colorPhoto3 from "../img/photo-gallery/2-1.jpg";
import colorPhoto4 from "../img/photo-gallery/2-4.jpg";
import colorPhoto5 from "../img/photo-gallery/2-6.jpg";
import colorPhoto6 from "../img/photo-gallery/2-8.jpg";
import colorPhoto7 from "../img/photo-gallery/2-7.jpg";
import colorPhoto8 from "../img/photo-gallery/2-3.jpg";
import colorPhoto9 from "../img/photo-gallery/2-10.jpg";

function extractInnerHtml(html, pattern, fallback = "") {
  const match = html.match(pattern);
  return match ? match[1].trim() : fallback;
}

export const reactPageMap = {
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

export const staticPageMap = {
  index: "index.html",
  cv: "cv.html",
  design: "design.html",
  magazine: "magazine.html",
  "magazine-cover": "magazine-cover.html",
  experiments: "experiments.html",
  "photo-gallery": "photo-gallery.html",
  "photo-gallery-bw": "photo-gallery-bw.html",
  "photo-gallery-clr": "photo-gallery-clr.html"
};

export const homeLinks = [
  { title: "About me", href: reactPageMap.cv, description: "Long-form profile page." },
  { title: "Design", href: reactPageMap.design, description: "Editorial and cover experiments." },
  { title: "Experiments", href: reactPageMap.experiments, description: "Playful sandbox and typography." },
  { title: "Photo", href: reactPageMap["photo-gallery"], description: "Two gallery branches from the same archive." }
];

export const socialLinks = [
  { title: "Instagram", href: "http://www.instagram.com/evgenychekov/" },
  { title: "Telegram", href: "https://t.me/argbcmyk" },
  { title: "Email", href: "mailto:chekov9404@gmail.com" }
];

export const designProjects = [
  {
    title: "Student magazine",
    href: reactPageMap.magazine,
    image: magazineSpread2,
    alt: "Magazine spread preview"
  },
  {
    title: "Magazine cover",
    href: reactPageMap["magazine-cover"],
    image: magazineCover,
    alt: "Magazine cover preview"
  }
];

export const photoBranches = [
  {
    title: "Black and white",
    href: reactPageMap["photo-gallery-bw"],
    image: bwPhoto1,
    alt: "Black and white gallery preview"
  },
  {
    title: "Color",
    href: reactPageMap["photo-gallery-clr"],
    image: colorPhoto1,
    alt: "Color gallery preview"
  }
];

export const bwPhotos = [
  bwPhoto1,
  bwPhoto2,
  bwPhoto3,
  bwPhoto4,
  bwPhoto5,
  bwPhoto6,
  bwPhoto7,
  bwPhoto8,
  bwPhoto9,
  bwPhoto10
];

export const colorPhotos = [
  colorPhoto1,
  colorPhoto2,
  colorPhoto3,
  colorPhoto4,
  colorPhoto5,
  colorPhoto6,
  colorPhoto7,
  colorPhoto8,
  colorPhoto9
];

export const magazinePhotos = [
  magazineSpread1,
  magazineSpread2,
  magazineSpread3,
  magazineSpread4,
  magazineSpread5,
  magazineSpread6,
  magazineSpread7,
  magazineSpread8,
  magazineSpread9
];

export const magazineCoverImage = magazineCover;

export const copyBlocks = {
  cv: extractInnerHtml(cvHtml, /<article>([\s\S]*?)<\/article>/i),
  experiments: extractInnerHtml(experimentsHtml, /<pre class="text">([\s\S]*?)<\/pre>/i),
  magazine: extractInnerHtml(magazineHtml, /<p class="story-mag">([\s\S]*?)<\/p>/i),
  "magazine-cover": extractInnerHtml(
    magazineCoverHtml,
    /<p class="story-cover">([\s\S]*?)<\/p>/i
  ),
  "photo-gallery": extractInnerHtml(
    photoGalleryHtml,
    /<p class="story-photo">([\s\S]*?)<\/p>/i
  )
};
