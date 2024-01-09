import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restraunt',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule=> rule.required()
      
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule=> rule.max(200)
      
    },
    {
      name: 'image',
      type: 'image',
      title: ' image of the restaurant',
    },
    {
        name: 'lat',
        type: 'number',
        title: ' latitude of the restaurant',
    },
    {
        name: 'lng',
        type: 'number',
        title: 'longitude of the restaurant',
    },
    {
        name: 'address',
        type: 'string',
        title: 'Restaurant Address',
        validation: rule=> rule.required()
        
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: rule=> rule.required().min(1).max(5).error('Please enter value between 1 to 5')
        
      },
      {
        name: 'reviews',
        type: 'string',
        title: 'Reviews',
      },
      {
        name: 'type',
        title: 'Category',
        validation: rule=> rule.required(),
        type: 'reference',
        to: [{type: 'category'}]
        
      },
      {
        name: 'dishes',
        title: 'Dishes',
        type: 'array',
        of: [{type: 'reference',to:[{type:'dish'}]}]
        
      },
  ],
})
