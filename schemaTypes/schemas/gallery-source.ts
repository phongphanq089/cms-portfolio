import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallerySource',
  title: 'Gallery Source',
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
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'videoFile',
              title: 'Upload Video',
              type: 'file',
              options: {
                accept: 'video/*',
              },
            }),
            defineField({
              name: 'videoURL',
              title: 'Video URL',
              type: 'url',
              description: 'Nhúng video từ URL (YouTube, Vimeo, etc.)',
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
            }),
          ],
          preview: {
            select: {
              title: 'videoFile.asset.originalFilename',
              media: 'thumbnail',
            },
          },
        },
      ],
    }),
  ],
})
