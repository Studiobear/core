import { writable } from 'svelte/store'
import nanoid from 'nanoid'

const list = []
function store() {
  const { subscribe, set, update } = writable(list)

  return {
    subscribe,
    add: (todo) =>
      update((t) => {
        const d = [...t, { id: nanoid(), text: todo, done: false }]
        console.log('add Todo: ', d)
        return d
      }),
    done: (id) =>
      update((t) => {
        const todoIndex = t.findIndex((todo) => todo.id === id)
        const updatedTodo = { ...t[todoIndex], done: !t[todoIndex].done }
        return [
          ...t.slice(0, todoIndex),
          updatedTodo,
          ...t.slice(todoIndex + 1),
        ]
      }),
    reset: set(list),
  }
}

const storeTodo = store()

export { storeTodo }
export default storeTodo
