<script setup lang="ts">
import { TodoStatus, type TodoEntry } from '@/custom_types';
import IconStatusIndicator from './icons/IconStatusIndicator.vue';
import { useTodoEntriesStore } from '@/stores/todo_entries';
import { ref } from 'vue';

let props = defineProps<{
    name: string
    status: TodoStatus
}>();

const todoEntriesStore = useTodoEntriesStore();

let entries = ref(todoEntriesStore.todoEntries);

function remove_todo_item() {
    const name: string = props.name;
    const status: TodoStatus = props.status

    todoEntriesStore.removeTodoEntry({ name, status } as TodoEntry);
}
</script>

<template>
    <div class="todo_card_container">
        <div class="todo_card_inside_container">
            <h3>{{ props.name }}</h3>
            <IconStatusIndicator :status="props.status" @click="remove_todo_item"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.todo_card_container {
    width: 100%;
    height: fit-content;
    background-color: var(--background-secondary);
    padding: .25rem;
    border-radius: var(--roundness-s);
}

.todo_card_container > .todo_card_inside_container {
    width: 100%;
    padding: .15rem;
    height: fit-content;
    display: flex;
    justify-content: space-between;

    h3 {
        font-weight: 700;
        max-width: 90%;
    }
}
</style>