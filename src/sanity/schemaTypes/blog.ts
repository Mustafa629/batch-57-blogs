import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
     
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})