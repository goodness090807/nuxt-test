<template>
    <div>
        <button @click="navigate">page2</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigate() {
            navigateTo("/about");
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
