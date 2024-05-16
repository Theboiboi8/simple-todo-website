<script setup lang="ts">
import AccentButton from './AccentButton.vue';
import IconPlus from './icons/IconPlus.vue'

let emit = defineEmits<{
    (e: 'create_new'): void
}>();
</script>

<template>
    <div class="header-container">
        <h1>Todo Tracker</h1>
        <AccentButton class="add_button" @click="emit('create_new')">
            Add new&NonBreakingSpace;
            <IconPlus class="icon"/>
        </AccentButton>
        <h2>Made by <a href="https://github.com/Theboiboi8" target="_blank">Kamela</a></h2>
    </div>
</template>

<style lang="scss">
.header-container {
    width: 100%;
    height: 3.5rem;
    border-radius: 0;
    padding: .5rem 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    h1 {
        font-weight: 900;
        color: var(--heading);
    }
}

.header-container .add_button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;

    font-weight: 700;
    padding: .5em;
}

.header-container .add_button .icon {
    aspect-ratio: 1 / 1;
    height: 1.5em;
}
</style>