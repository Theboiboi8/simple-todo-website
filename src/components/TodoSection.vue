<script setup lang="ts">
import { TodoStatus } from '@/custom_types';
import AccentButton from './AccentButton.vue';
import IconPlus from "./icons/IconPlus.vue";
import { useTodoEntriesStore } from '@/stores/todo_entries';
import { ref } from 'vue';
import Card from './Card.vue';

let props = defineProps<{
    sectionType: TodoStatus
}>();

let title: string;

if (props.sectionType == TodoStatus.Completed) {
    title = 'Completed';
} else if (props.sectionType == TodoStatus.InProgress) {
    title = 'In Progress';
} else if (props.sectionType == TodoStatus.NotPlanned) {
    title = 'Not Planned';
}

const todoEntriesStore = useTodoEntriesStore();

let entries = ref(todoEntriesStore.todoEntries);
</script>

<template>
	<section class="todo-section-container">
		<h2>
            {{ title }}
        </h2>
        <div class="scroll_container_todo">
            <p v-for="(entry, index) in entries.filter((entry) => entry.status == props.sectionType)">
                <Card :name="entry.name" :status="entry.status" />
            </p>
        </div>
	</section>
</template>

<style scoped lang="scss">
.todo-section-container {
    width: 100%;
    height: 100%;
    padding: .5rem 2rem;
    overflow: hidden;

    h2 {
        font-weight: 700;
        color: var(--heading);
        padding-bottom: .5rem;
    }
}

.todo-section-container .scroll_container_todo {
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>