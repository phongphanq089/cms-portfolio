import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tags'}}],
    }),
    defineField({
      name: 'urlPage',
      title: 'Url page',
      type: 'string',
    }),
    defineField({
      name: 'urlGithub',
      title: 'Url Github',
      type: 'string',
    }),
  ],
})
