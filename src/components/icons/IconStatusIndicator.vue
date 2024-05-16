<script setup lang="ts">
import { TodoStatus } from '@/custom_types';
import { ref } from 'vue';
import IconX from './IconX.vue';

let props = defineProps<{
    status: TodoStatus
}>();

let isHovered = ref(false);
</script>

<template>
    <div class="todo_status_indicator_container">
        <div
            class="todo_status_indicator_active"
            v-if="props.status == TodoStatus.InProgress && !isHovered"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
            </svg>
        </div>
        <div
            class="todo_status_indicator_complete"
            v-if="props.status == TodoStatus.Completed && !isHovered"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div
            class="todo_status_indicator_unplanned"
            v-if="props.status == TodoStatus.NotPlanned && !isHovered"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
            </svg>
        </div>
        <div
            class="todo_status_indicator_unplanned"
            v-if="isHovered"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <IconX />
        </div>
    </div>
</template>

<style scoped lang="scss">
.todo_status_indicator_container {
    width: fit-content;
    height: fit-content;
}

.todo_status_indicator_active {
    aspect-ratio: 1 / 1;
    width: 24px;
    color: var(--c-yellow-indicator);
}

.todo_status_indicator_complete {
    aspect-ratio: 1 / 1;
    width: 24px;
    color: var(--c-green-indicator);
}

.todo_status_indicator_unplanned {
    aspect-ratio: 1 / 1;
    width: 24px;
    color: var(--c-red-indicator);
}
</style>