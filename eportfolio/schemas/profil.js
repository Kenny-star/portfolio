export default {
    name: 'profil',
    title: 'Profil',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }
    ],
    preview: {
        select: {
          media: 'mainImage',
        }
    }
}