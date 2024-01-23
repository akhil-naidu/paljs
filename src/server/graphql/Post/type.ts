import { objectType, list } from 'nexus'

export const Post = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Post',
  definition(t) {
    t.string('id')
    t.boolean('published')
    t.string('title')
    t.nullable.string('authorId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('author', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
      },
      resolve(root: any) {
        return root.author
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
      type: 'PostCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
