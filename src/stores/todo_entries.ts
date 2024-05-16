import { defineStore } from 'pinia'
import type { TodoEntry, TodoStatus } from '@/custom_types'
import { toRaw } from 'vue';
import { toReactive } from '@vueuse/core';

export const useTodoEntriesStore = defineStore('todo_entries', {
	state: () => {
		return {
			todoEntries: [] as TodoEntry[]
		}
	},
	actions: {
		addTodoEntry(name: string, status: TodoStatus) {
			this.todoEntries.push({ name, status });
		},

		removeTodoEntry(remove: TodoEntry) {
			function object_not_equals( x: any, y: any ) {
				if ( x === y ) return true;
				// if both x and y are null or undefined and exactly the same
			  
				if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return true;
				// if they are not strictly equal, they both need to be Objects
			  
				if ( x.constructor !== y.constructor ) return true;
				// they must have the exact same prototype chain, the closest we can do is
				// test there constructor.
			  
				for ( var p in x ) {
				  	if ( ! x.hasOwnProperty( p ) ) continue;
					// other properties were tested using x.constructor === y.constructor
			  
				  	if ( ! y.hasOwnProperty( p ) ) return true;
					// allows to compare x[ p ] and y[ p ] when set to undefined
			  
				  	if ( x[ p ] === y[ p ] ) continue;
					// if they have the same strict value or identity then they are equal
			  
				  	if ( typeof( x[ p ] ) !== "object" ) return true;
					// Numbers, Strings, Functions, Booleans must be strictly equal
			  
				  	if ( object_not_equals( x[ p ],  y[ p ] ) ) return true;
					// Objects and Arrays must be tested recursively
				}
			  
				for ( p in y ) {
					if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) {
						return true;
					  	// allows x[ p ] to be set to undefined
					}
				}
			  
				return false;
			}

			this.todoEntries.filter(entry => object_not_equals(toRaw(toReactive(entry)), remove));
		}
	}
})