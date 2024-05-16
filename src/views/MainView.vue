<script setup lang="ts">
import TodoSection from '@/components/TodoSection.vue';
import TodoSeparator from '@/components/TodoSeparator.vue'
import { TodoStatus } from '@/custom_types';

const sections = [TodoStatus.Completed, TodoStatus.InProgress, TodoStatus.NotPlanned];
</script>

<template>
	<main>
		<div v-for="(status, index) in sections" class="sections">
			<TodoSection :section-type="status"></TodoSection>
			<TodoSeparator v-if="index < 2" />
		</div>
	</main>
</template>

<style lang="scss">
main {
	width: 100%;
	height: 100%;

	display: flex;

	div {
		width: calc(100% / 3);
		height: 100%;
	}
}

.sections {
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>