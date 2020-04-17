import { getUserId } from '../../util'

export const getUser = (ctx: any) => {
  const userId = getUserId(ctx)
  if (!userId) {
    throw new Error('Invalid userId')
  }
  return ctx.prisma.user.findOne({
    where: {
      id: parseInt(userId),
    },
  })
}
