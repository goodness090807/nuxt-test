<template>
    <div>
        <button @click="navigateWithNavigationTo">
            navigateWithNavigationTo
        </button>
        <button @click="navigateWithLocation">navigateWithLocation</button>
        <button @click="navigateWithVanillaJS">navigateWithVanillaJS</button>
        <button @click="navigateWithReplace">navigateWithReplace</button>
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
        navigateWithVanillaJS() {
            window.history.pushState({}, "", "/about");

            const navEvent = new PopStateEvent("popstate");
            window.dispatchEvent(navEvent);
        },
        navigateWithReplace() {
            navigateTo("/about", { replace: true });
        },
    },
    mounted() {
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function () {
            console.log("history.pushState triggered", arguments);
            originalPushState.apply(this, arguments);
        };

        history.replaceState = function () {
            console.log("history.replaceState triggered", arguments);
            originalReplaceState.apply(this, arguments);
        };
    },
};
</script>
