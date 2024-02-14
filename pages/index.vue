<template>
    <div>
        <button @click="navigateWithNavigationTo">
            navigateWithNavigationTo
        </button>
        <button @click="navigateWithLocation">navigateWithLocation</button>
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
