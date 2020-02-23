const test = require('ava')
import { processCss, styled, system } from '../src/index'
import { shortHandAttributes } from '../src/constants'

const theme = {
  color: {
    primary: 'dodgerblue',
  },
  scale: ['0', '0.5rem', '1rem'],
}

class HTMLNode {
  constructor() {
    this.class = ''
    this.classList = {
      add: cn => {
        this.class += `${cn}`
      },
      remove: cn => {
        this.class = this.class.replace(cn, '')
      },
    }
  }
}

// named aliases for array values
theme.scale.s = theme.scale[0]

test('processCss: should resolve pseudo selectors via _', t => {
  t.deepEqual(processCss({ _hover: { color: 'red' } }, theme), {
    '&:hover': { color: 'red' },
  })
  t.deepEqual(processCss({ _after: { color: 'red' } }, theme), {
    '&:after': { color: 'red' },
  })
  t.deepEqual(processCss({ _before: { color: 'red' } }, theme), {
    '&:before': { color: 'red' },
  })
})

/*
test('processCss: should resolve shorthand properties to regular css properties', t => {
  for (const [key, value] of shortHandAttributes.entries()) {
    let expectedOutput = {}
    expectedOutput = Object.assign(
      expectedOutput,
      system({ [value[0]]: 'value' }),
    )
    console.log(processCss({ [key]: 'value' }, {}), expectedOutput)
    t.deepEqual(processCss({ [key]: 'value' }, {}), expectedOutput)
  }
})
*/

test('styled: should create classNames and update the node with it', t => {
  const props = { color: 'color.primary' }
  const node = new HTMLNode()
  const result = styled(node, [props, theme])
  t.is(node.class.includes('go'), true)

  let previousClassName = node.class
  // update with different props leads to new classname
  result.update([{ color: 'color.secondary' }, theme])
  t.is(node.class.includes('go'), true)
  t.is(node.class.includes(previousClassName), false)
})
