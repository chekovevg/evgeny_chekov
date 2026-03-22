import cvHtml from "../cv.html?raw";
import experimentsHtml from "../experiments.html?raw";
import magazineHtml from "../magazine.html?raw";
import magazineCoverHtml from "../magazine-cover.html?raw";
import photoGalleryHtml from "../photo-gallery.html?raw";

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
    image: "img/magazine/2-2.jpg",
    alt: "Magazine spread preview"
  },
  {
    title: "Magazine cover",
    href: reactPageMap["magazine-cover"],
    image: "img/magazine/2-10.jpg",
    alt: "Magazine cover preview"
  }
];

export const photoBranches = [
  {
    title: "Black and white",
    href: reactPageMap["photo-gallery-bw"],
    image: "img/photo-gallery/1-5.jpg",
    alt: "Black and white gallery preview"
  },
  {
    title: "Color",
    href: reactPageMap["photo-gallery-clr"],
    image: "img/photo-gallery/2-5.jpg",
    alt: "Color gallery preview"
  }
];

export const bwPhotos = [
  "img/photo-gallery/1-5.jpg",
  "img/photo-gallery/1-1.jpg",
  "img/photo-gallery/1-3.jpg",
  "img/photo-gallery/1-4.jpg",
  "img/photo-gallery/1-6.jpg",
  "img/photo-gallery/1-8.jpg",
  "img/photo-gallery/1-7.jpg",
  "img/photo-gallery/1-10.jpg",
  "img/photo-gallery/1-11.jpg",
  "img/photo-gallery/1-12.jpg"
];

export const colorPhotos = [
  "img/photo-gallery/2-5.jpg",
  "img/photo-gallery/2-2.jpg",
  "img/photo-gallery/2-1.jpg",
  "img/photo-gallery/2-4.jpg",
  "img/photo-gallery/2-6.jpg",
  "img/photo-gallery/2-8.jpg",
  "img/photo-gallery/2-7.jpg",
  "img/photo-gallery/2-3.jpg",
  "img/photo-gallery/2-10.jpg"
];

export const magazinePhotos = [
  "img/magazine/2-1.jpg",
  "img/magazine/2-2.jpg",
  "img/magazine/2-3.jpg",
  "img/magazine/2-4.jpg",
  "img/magazine/2-5.jpg",
  "img/magazine/2-6.jpg",
  "img/magazine/2-7.jpg",
  "img/magazine/2-8.jpg",
  "img/magazine/2-9.jpg"
];

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
