import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from '@nexus/schema'
import * as types from './types'
import './context'

declare let process: {
  argv: any
}

const args: string[] = process.argv
const generate =
  args !== undefined ? Boolean(args.includes('--generate')) : false

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrismaPlugin({
      outputs: { typegen: __dirname + '/../src/generated/index.ts' },
    }),
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/../src/generated/nexus.ts',
  },
  shouldGenerateArtifacts: generate,
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: __dirname + '/../src/context.ts',
        alias: 'Context',
      },
    ],
  },
})
