<script setup lang="ts">

</script>

<template>
    <button class="accent_button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.accent_button {
    padding: .25rem;
    text-align: center;

    background-color: var(--accent-button);
    color: var(--text-colored);
    border: none;
    border-radius: var(--roundness-xxs);

    cursor: pointer;
    transition: all 150ms;

    * {
        min-width: .75em;
    }
}

:hover {
    background-color: var(--accent-button-hover);
}

:focus {
    background-color: var(--accent-button-click);
}
</style>