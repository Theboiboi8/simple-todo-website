<script setup lang="ts">
import { DialogType, TodoStatus, type TodoEntry } from '@/custom_types';
import AccentButton from './AccentButton.vue';
import OutlineButton from './OutlineButton.vue';
import { useTodoEntriesStore } from '@/stores/todo_entries';
import { ref } from 'vue';
import { useDialogStore } from '@/stores/dialog_store';

let props = defineProps<{
    title: string
    dialogType: DialogType
}>();

let emit = defineEmits<{
    (e: 'close'): void
}>();

let todo_name = ref('');

let todo_status = ref(TodoStatus.Completed);

const todoEntriesStore = useTodoEntriesStore();

let entries = ref(todoEntriesStore.todoEntries);

const dialogStore = useDialogStore();

let dialogType = ref(dialogStore.dialogType);

let dialogOpen = ref(dialogStore.dialogOpen);

function addTodoItem(name: string, status: TodoStatus) {
    todoEntriesStore.addTodoEntry(name, status);
}

const isRemove = (type: DialogType) => {
    if (type === DialogType.Remove) {
        return true
    } else {
        return false
    }
}

const isCreate = (type: DialogType) => {
    if (type === DialogType.Create) {
        return true
    } else {
        return false
    }
}

function submit(name: string, status: TodoStatus) {
    addTodoItem(name, status);
    emit('close');
}
</script>

<template>
    <div class="backdrop_container">
        <div class="dialog_container">
            <h1>{{ props.title }}</h1>
            <div class="inputs">
                <div class="name_input">
                    Name:&NonBreakingSpace;
                    <input placeholder="Name..." v-model="todo_name"/>
                </div>
                <div class="status_input">
                    Status:&NonBreakingSpace;
                    <select v-model="todo_status">
                        <option :value="TodoStatus.Completed">Completed</option>
                        <option :value="TodoStatus.InProgress">In Progress</option>
                        <option :value="TodoStatus.NotPlanned">Not Planned</option>
                    </select>
                </div>
            </div>
            <div class="dialog_buttons">
                <OutlineButton class="cancel_button" @click="emit('close')">
                    Cancel
                </OutlineButton>
                <AccentButton class="confirm_button" @click="submit(todo_name, todo_status)">
                    Confirm
                </AccentButton>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.backdrop_container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(.25rem);
}

.dialog_container {
    background-color: var(--background-secondary);
    border: 4px solid var(--accent-general);
    border-radius: var(--roundness-xl);

    height: fit-content;
    width: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-weight: 900;
        font-size: 2em;
        padding: .5rem;
        text-align: center;
        color: var(--heading);
    }
}

.dialog_container .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: fit-content;

    padding: .5rem;
}

.dialog_container .inputs * {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2.5rem;
    max-height: 3rem;
    width: fit-content;
    padding: .5rem;

    input,
    select {
        width: 20rem;
        height: 1.75rem;

        padding: .25rem;

        background-color: var(--background-button);
        color: var(--text-white);
        border: 2px solid var(--accent-general);
        border-radius: var(--roundness-xxs);

        transition: all 150ms;
    }
}

.dialog_container .dialog_buttons {
    width: 100%;
    padding: 1rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: .5rem;
    align-items: center;
    justify-content: right;
}

.dialog_container .dialog_buttons .confirm_button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;

    font-weight: 700;
    padding: .5em;
}

.dialog_container .dialog_buttons .cancel_button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;

    font-weight: 700;
    padding: .5em;
}
</style>