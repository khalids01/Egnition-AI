import "phoenix_html";

import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import axios from "axios";

axios.defaults.xsrfHeaderName = "x-csrf-token";

createInertiaApp({
  resolve: async (name) => {
    const pages = await import(`./pages/${name}.tsx`);
    return pages;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
