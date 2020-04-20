import { getUserId } from '../../util'

export const getUser = async (ctx: any) => {
  const userId = await getUserId(ctx)
  if (!userId) {
    return {}
  }
  return ctx.prisma.user.findOne({
    where: {
      id: parseInt(userId),
    },
  })
}
