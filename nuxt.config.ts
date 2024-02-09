// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-gtag", "@zadigetvoltaire/nuxt-gtm"],
    gtag: {
        id: "G-17NB8M1C1V",
    },
    gtm: {
        id: "GTM-56G726ML",
    },
});
