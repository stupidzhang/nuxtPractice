module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtPractice",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/route"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "~/plugins/api"],
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    "/api": {
      target: "http://localhost:3000"
      // pathRewrite: { "": "" }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }], ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
    ]
    },
    transpile: [/^element-ui/],
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true
      }
    }

    // analyze: true
  },
  dev: process.env.NODE_ENV !== "production",
  env: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL
  },
  router: {
    middleware: "index"
  },
  // serverMiddleware:[
  //   '../server/routes/users.js'
  // ]
};
