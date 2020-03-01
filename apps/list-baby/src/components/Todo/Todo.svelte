<script>
  import storeTodo from './store'
  import { Flex, Box, Heading } from 'svelte-system-ui-components'

  let todos = $storeTodo
</script>

<Flex style={{ direction: 'column' }}>
  <Box>
    <Heading as="h2">Just listing...</Heading>
    <input />
    <button type="submit">Add</button>
  </Box>
  <Box>
    <Flex style={{ direction: 'column' }}>
      {#each todos as todo}
        <Box>
          <Heading as="h4">{todo}</Heading>
        </Box>
      {/each}
    </Flex>
  </Box>
</Flex>
