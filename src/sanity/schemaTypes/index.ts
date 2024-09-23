import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './pets'
import { blogType } from './blog' 

/**
 * Define your schema types here.
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default [eventType]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType,blogType],
}
