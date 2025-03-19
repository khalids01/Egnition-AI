import React from "react";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";

export function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: async (path) => {
      return await import(`./pages/${path}`);
    },
    setup: ({ App, props }) => <App {...props} />,
  });
}
