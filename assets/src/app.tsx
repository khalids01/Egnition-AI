import "phoenix_html";

import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { hydrateRoot } from "react-dom/client";
import axios from "axios";
import { Toaster } from "./components/ui/toast";

axios.defaults.xsrfHeaderName = "x-csrf-token";

createInertiaApp({
  resolve: async (name) => {
    const pages = await import(`./pages/${name}.tsx`);
    return pages;
  },
  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <>
        <App {...props} />
        <Toaster />
      </>
    );
  },
});
