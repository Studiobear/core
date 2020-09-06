import vfile from 'vfile'
import { processor } from '../md-processor'

const filePath = './src/utils/example.md'
const postWrap = processor(filePath)

let post
beforeAll(async () => {
  post = await postWrap(filePath)
  // console.log(post)
  return
})

describe('MD Processor', () => {
  test('returns post title, slug, html and excerpt', () => {
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('slug')
    expect(post).toHaveProperty('html')
    expect(post).toHaveProperty('excerpt')
  })

  test('body is longer than excerpt', () => {
    expect(String(post.html).length > String(post.excerpt).length).toBe(true)
  })
})
