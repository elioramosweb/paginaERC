// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Página Elio Ramos Colón",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.


  pages: [
    { name: "" }, // Esto actúa como un separador visual
  
    {
      name: "Proyectos",
      pages: [
        { name: "Arte Generativo y Visualización de Alto Rendimiento", path: "/arte-generativo" },
        { name: "Visualización de los Dígitos de \u03C0", path: "/proyectos-pi" },
        { name: "Proyectos de Estudiantes", path: "/proyectos-estudiantes" },
      ],
    }
  ],
  

  // pages: [
  //   {
  //     { name: "―" }, 

  //     {
  //     name: "Proyectos",
  //     pages: [
  //       {name: "Arte Generativo", path: "/arte-generativo"},
  //       {name: "Visualización de Alto Rendimiento", path: "/proyectos-shaders"},
  //     ]
  //     }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  //footer: "Built with Observable.", // what to show in the footer (HTML)
  footer:false,
  pager: false,
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  output: "public_html",
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
