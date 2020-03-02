<script>
  import storeTodo from './store'
  import { Flex, Box, Heading } from 'svelte-system-ui-components'

  let inputTodo = ''

  function addTodo() {
    console.log('addTodo: ', inputTodo)
    storeTodo.add(inputTodo)
    inputTodo = ''
    return
  }
  function done(id) {
    console.log('doneTodo: ', id)
    storeTodo.done(id)
    return
  }
  console.log('TODO', $$props)
</script>

<Flex style={{ direction: 'column' }}>
  <Box>
    <Heading as="h2">Just listing...</Heading>
    <input bind:value={inputTodo} />
    <button on:click={addTodo}>Add</button>
  </Box>
  <Box>
    <Heading as="h4">
      Total of {$storeTodo.length} todos {$$props.theme.colors.primary}
    </Heading>
    <Flex style={{ direction: 'column' }}>
      {#each $storeTodo as todo (todo.id)}
        <div on:click={() => done(todo.id)}>
          <Heading as="h4">
            {@html todo.done ? `<span style="color: ${$$props.theme.colors.primary}">&#10004</span>` : '<span style="color: #ccc">&#10004</span>'}
            {todo.text}
          </Heading>
        </div>
      {/each}
    </Flex>
  </Box>
</Flex>
