export default {
    name: 'backend',
    title: 'Backend',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          }
    ],
    preview: {
        select: {
          title: 'Title',
        }
    }
}