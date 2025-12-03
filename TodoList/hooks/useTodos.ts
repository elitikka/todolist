import { useReducer } from 'react';
import type { Item } from '../types/types';

// Implement reducer 
function todoReducer(state: Item[], action: any): Item[] {
  switch (action.type) {

    case 'ADD': {
      // Create new item using timestamp id, push new object into array
      const newItem: Item = {
        id: Date.now().toString(),
        name: action.name,
        done: false,
      };
      return [...state, newItem];
    }

    case 'TOGGLE': {
      // match by id 
      return state.map(item =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    }

    case 'REMOVE': {
      // return filtered array --> array without the item (that was removed)
      return state.filter(item => item.id !== action.id);
    }

    default:
      throw new Error('Unknown axtion type used in todoReducer');
  }
}


export function useTodos(initial: Item[] = []) {

  const [todos, dispatch] = useReducer(todoReducer, initial);

  const addTodo = (name: string) => {
    dispatch({ type: 'ADD', name });
  }

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE', id });
  }

  const removeTodo = (id: string) => {
    dispatch({ type: 'REMOVE', id });
  }


  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
