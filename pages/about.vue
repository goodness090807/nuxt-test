<template>
    <div>
        <h1>About</h1>
        <button @click="navigate">back</button>
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
