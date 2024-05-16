import { defineStore } from 'pinia'
import { DialogType, type TodoEntry } from '@/custom_types'

export const useDialogStore = defineStore('dialog', {
	state: () => {
		return {
			dialogOpen: false,
            dialogType: {} as DialogType,
            dialogResultCreate: {} as TodoEntry,
            dialogResultEdit: [{} as TodoEntry, {} as number],
		}
	},
	actions: {
		showDialog(type: DialogType) {
            this.dialogType = type;
            this.dialogOpen = true;
        },

        closeDialog() {
            this.dialogOpen = false;
        },

        setCreateResults(results: TodoEntry) {
            this.dialogResultCreate = results;
        },

        setEditResults(results: TodoEntry, index: number) {
            this.dialogResultEdit = [results, index];
        },
	}
})