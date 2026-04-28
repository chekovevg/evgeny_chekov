import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = (path) => readFileSync(resolve(root, path), "utf8");

test("legacy CSS does not override Tailwind spacing scale", () => {
  const css = readProjectFile("css/styles.css");

  assert.equal(
    /--spacing\s*:/.test(css),
    false,
    "Use a site-scoped spacing variable so Tailwind utilities keep their scale."
  );
  assert.match(css, /--site-spacing\s*:/);
});

test("React image data does not use raw public paths", () => {
  const data = readProjectFile("src/react-site-data.js");

  assert.equal(
    /["']img\/(?:magazine|photo-gallery)\//.test(data),
    false,
    "Image data should use Vite-resolved asset URLs, not raw img/... strings."
  );
});

test("React gallery layout prevents stretched blank card interiors", () => {
  const css = readProjectFile("src/app.css");

  assert.match(css, /\.react-gallery-grid\s*\{/);
  assert.match(
    css,
    /break-inside:\s*avoid|align-items:\s*start|aspect-ratio:/,
    "Gallery cards need masonry, top-alignment, or fixed aspect ratio treatment."
  );
});

test("Repeated React CTA links have unique accessible names", () => {
  const jsx = readProjectFile("src/react-site.jsx");

  assert.match(jsx, /aria-label=\{`Open \$\{link\.title\}`\}/);
  assert.match(jsx, /aria-label=\{`Open \$\{project\.title\}`\}/);
  assert.match(jsx, /aria-label=\{`Open \$\{branch\.title\} gallery`\}/);
});
