import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactSite from "@/react-site";

const rootElement = document.getElementById("react-site-root");

if (rootElement) {
  const page = rootElement.dataset.page;

  createRoot(rootElement).render(
    <StrictMode>
      <ReactSite page={page} />
    </StrictMode>
  );
}
