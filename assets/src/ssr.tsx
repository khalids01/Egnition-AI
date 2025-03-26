import React from "react";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";

export async function render(page:any) {
  try {
    const { default: component } = await import(`./pages/${page.component}`);
    page.component = component;
    
    const html = await createInertiaApp({
      page,
      render: ReactDOMServer.renderToString,
      resolve: (name) => component,
      setup: ({ App, props }) => <App {...props} />,
    });

    return html;
  } catch (error) {
    throw error;
  }
}
