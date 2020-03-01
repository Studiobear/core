import { writable } from 'svelte/store'

const default = {master:[]}
function store() {
  const { subscribe, set, update } = writable(default)

  return {
    subscribe,
    add: (todo) => update(t => {...t, ...todo}),
    done: (id) => update(t => (t.id === id) t.done = true),
    reset: set(default),
  }
}

const storeTodo = store()

export { storeTodo }
export default storeTodo
