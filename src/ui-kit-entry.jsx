import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import UiKitDemo from "@/ui-kit-demo";

const rootElement = document.getElementById("ui-kit-root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UiKitDemo />
    </StrictMode>
  );
}
