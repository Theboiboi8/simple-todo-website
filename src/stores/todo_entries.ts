import { defineStore } from 'pinia'
import type { TodoEntry, TodoStatus } from '@/custom_types'

export const useTodoEntriesStore = defineStore('todo_entries', {
	state: () => {
		return {
			todoEntries: [] as TodoEntry[]
		}
	},
	actions: {
		addTodoEntry(name: string, status: TodoStatus) {
			this.todoEntries.push({ name, status })
		}
	}
})