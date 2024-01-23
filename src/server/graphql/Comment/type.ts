import { objectType } from 'nexus'

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.string('id')
    t.string('contain')
    t.string('postId')
    t.nullable.string('authorId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('post', {
      type: 'Post',
      resolve(root: any) {
        return root.post
      },
    })
    t.nullable.field('author', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
      },
      resolve(root: any) {
        return root.author
      },
    })
  },
})
