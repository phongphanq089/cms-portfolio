import {defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer menu',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'target',
              title: 'Open in new tab',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
})
