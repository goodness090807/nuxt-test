<template>
    <div>
        <button @click="navigateWithNavigationTo">
            navigateWithNavigateTo
        </button>
        <button
            style="margin-left: 10px; margin-right: 10px"
            @click="navigateWithReplace">
            navigateWithNavigateToReplace
        </button>
        <NuxtLink style="margin-left: 10px; margin-right: 10px" href="/about"
            >navigateWithNuxtLink</NuxtLink
        >
        <NuxtLink
            style="margin-left: 10px; margin-right: 10px"
            href="/about"
            replace
            >navigateWithNuxtLinkReplace</NuxtLink
        >
        <button @click="navigateWithLocation">navigateWithLocation</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateWithNavigationTo() {
            navigateTo("/about");
        },
        navigateWithLocation() {
            window.location.href = "/about";
        },
        navigateWithReplace() {
            navigateTo("/about", { replace: true });
        },
    },
};
</script>
