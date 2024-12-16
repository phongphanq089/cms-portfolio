import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageGallery',
  title: 'Image gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
