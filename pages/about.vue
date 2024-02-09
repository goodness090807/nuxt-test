<template>
    <div>
        <h1>About</h1>
        <button @click="navigate">page1</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigate() {
            navigateTo("/");
        },
    },
};
</script>
