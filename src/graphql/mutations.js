import { GraphQLObjectType, GraphQLString } from 'graphql'

import GadgetType from './gadgetType'
import Gadget from '../database/models/gadgets'

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGadget: {
      type: GadgetType,
      args: {
        name: { type: GraphQLString },
        release_date: { type: GraphQLString },
        by_company: { type: GraphQLString },
        price: { type: GraphQLString },
      },
      resolve(parent, { name, release_date, by_company, price }) {
        const newGadget = new Gadget({
          name,
          release_date,
          by_company,
          price,
        })

        return newGadget.save()
      }
    },
  },
})

export default Mutations