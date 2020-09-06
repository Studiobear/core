import toVfile from 'to-vfile'
import VMessage from 'vfile-message'
import unified from 'unified'
import stream from 'unified-stream'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import parseFrontmatter from 'remark-parse-yaml'
import excerpt from 'remark-excerpt'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import filter from 'unist-util-filter'
import visit from 'unist-util-visit'
import xtend from 'xtend'
import path from 'path'

export const removeFrontmatter = () => async (tree, file) => {
  let getFrontMatter
  const getFM = await visit(tree, 'yaml', (node) => {
    getFrontMatter = node.data.parsedValue
    return
  })
  file.data.frontmatter = getFrontMatter
  return filter(tree, (node) => node.type !== 'yaml')
}

export const processor = () => async (filepath) => {
  const postParse = await unified().use(markdown)

  const postFM = await postParse()
    .use(frontmatter)
    .use(parseFrontmatter)
    .use(removeFrontmatter)

  const postBody = await postFM()
    .use(remark2rehype)
    .use(stringify)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then((file) => String(file.contents))
    .catch(console.error)

  const postAbstract = await postFM().use(excerpt)

  return postAbstract()
    .use(remark2rehype)
    .use(stringify)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then((file) => ({
      title: file.data.frontmatter.title || 'No title',
      slug: file.data.frontmatter.slug || '/',
      date: file.data.frontmatter.date || '',
      html: postBody,
      excerpt: file.contents,
    }))
    .catch(console.error)
}

// For dev use
const unifiedLog = () => (tree, file) => {
  console.log('log:', tree, file)
  return tree
}

export default processor
