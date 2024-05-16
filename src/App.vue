<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import CustomDialog from '@/components/CustomDialog.vue';
import { useDialogStore } from './stores/dialog_store';
import { DialogType } from './custom_types';
import { ref } from 'vue';

const dialogStore = useDialogStore();

let dialogType = ref(dialogStore.dialogType);

let dialogOpen = ref(dialogStore.dialogOpen);

let title: string;
let type: DialogType;

function openCreateDialog() {
	type = DialogType.Create;
	dialogType.value = type;

	if (dialogType.value == DialogType.Create) {
		title = 'Create Todo Item';
	} else if (dialogType.value == DialogType.Edit) {
		title = 'Edit Todo Item';
	} else if (dialogType.value == DialogType.Remove) {
		title = 'Remove Todo Item?';
	} else {
		title = '';
	}

	dialogOpen.value = true;
}

function close_dialog() {
	dialogOpen.value = false;
}
</script>

<template>
	<Header @create_new="openCreateDialog"/>
	<main class="main">
		<div class="container">
			<RouterView />
			<CustomDialog :dialog-type="type" :title="title" v-if="dialogOpen" @close="close_dialog"/>
		</div>
	</main>
</template>

<style lang="scss">
.main {
	width: 100%;
	height: calc(100% - 3.5rem);
	padding: .5rem;
	padding-top: 0;
}

.container {
	padding: 1rem;
	background-color: var(--background);
	max-width: 100dvw;
	max-height: 100dvh;
	height: 100%;
	width: 100%;
	border-radius: var(--roundness-m);
}
</style>
