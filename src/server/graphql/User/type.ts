import { objectType, list } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('email')
    t.nullable.string('name')
    t.string('password')
    t.nullable.string('groupId')
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: list('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('PostScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.posts
      },
    })
    t.nullable.field('group', {
      type: 'Group',
      args: {
        where: 'GroupWhereInput',
      },
      resolve(root: any) {
        return root.group
      },
    })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: list('CommentOrderByWithRelationInput'),
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CommentScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.comments
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
