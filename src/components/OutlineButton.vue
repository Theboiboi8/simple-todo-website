<script setup lang="ts">

</script>

<template>
    <button class="outline_button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.outline_button {
    padding: .25rem;
    text-align: center;

    background-color: var(--background-button);
    color: var(--text-icons);
    border: none;
    border-radius: var(--roundness-xxs);

    cursor: pointer;
    transition: all 150ms;

    * {
        min-width: .75em;
    }
}

:hover {
    outline: 2px solid var(--accent-general);
}

:focus {
    background-color: var(--background-button-click);
}
</style>