export interface TodoEntry {
	name: string
	status: TodoStatus
}

export enum TodoStatus {
	Completed,
	InProgress,
	NotPlanned,
}

export enum DialogType {
    Create,
    Edit,
    Remove,
}