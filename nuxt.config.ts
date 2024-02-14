// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@zadigetvoltaire/nuxt-gtm"],
    gtm: {
        id: "GTM-56G726ML",
    },
});
