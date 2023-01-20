// schemas/Work.js
export default {
    name: 'work',
    type: 'document',
      title: 'Work',
        fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },

      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },

      {
        name: 'projectLink',
        type: 'string',
        title: 'Project Link'
      },

      {
        name: 'codeLink',
        type: 'string',
        title: 'Code Link'
      },

      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
    ]
  }
