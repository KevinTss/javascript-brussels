const siteUrl = "https://javascript.brussels"
const siteTitle =
  "Find everything you need about JavaScript in Brussels | JavaScript Brussels"
const siteImage =
  "https://user-images.githubusercontent.com/39580007/119239421-2e604580-bb49-11eb-9cec-b56b45032619.png"
const siteDescription =
  "Find tutorials, books, jobs, bootcamps and all useful resources shared by the community."

export default {
  target: "static",
  modules: ["@nuxtjs/style-resources", "@nuxtjs/gtm"],
  styleResources: {
    scss: ["~/assets/style/_variables.scss", "~/assets/style/_mixins.scss"],
  },
  head: {
    title: siteTitle,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      { property: "description", content: siteDescription },
      // Open graph - https://ogp.me/
      { property: "og:image:height", content: "600" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image", content: siteImage },
      { property: "og:title", content: siteTitle },
      { property: "og:url", content: siteUrl },
      { property: "og:description", content: siteDescription },
      { property: "og:site_name", content: "JavaScript Brussels" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      /**
       * Google Font
       * https://fonts.google.com/specimen/Roboto
       */
      { rel: "stylesheet", href: "https://fonts.gstatic.com" },
      {
        rel: "preconnect",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap",
      },
    ],
  },
  gtm: {
    id: "GTM-W4JBHK9",
  },
}
