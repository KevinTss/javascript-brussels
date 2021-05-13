export default {
  target: "static",
  modules: ["@nuxtjs/style-resources", "@nuxtjs/gtm"],
  styleResources: {
    scss: ["~/assets/style/_variables.scss", "~/assets/style/_mixins.scss"],
  },
  head: {
    title: "JavaScript Brussels",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
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
