<script>
  import storeTodo from './store'
  import { Flex, Box, Heading } from '@studiobear/designspek-components'

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

  $: itemStyle = {
    bg: $$props.theme.colors.background,
    py: 2,
    px: 4,
    _hover: {
      bg: $$props.theme.colors.secondary,
    },
  }
</script>

<Flex style={{ direction: 'column' }}>
  <Box>
    <Heading as="h2">Just listing...</Heading>
    <input bind:value={inputTodo} />
    <button on:click={addTodo}>Add</button>
  </Box>
  <Box>
    <Heading as="h4">Total of {$storeTodo.length} todos</Heading>
    <Flex style={{ direction: 'column' }}>
      {#each $storeTodo as todo (todo.id)}
        <Box on:click={() => done(todo.id)} style={itemStyle}>
          <Heading as="h4">
            {@html todo.done ? `<span style="color: ${$$props.theme.colors.primary}">&#10004</span>` : '<span style="color: #ccc">&#10004</span>'}
            {todo.text}
          </Heading>
        </Box>
      {/each}
    </Flex>
  </Box>
</Flex>
