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
      resolve: (parent, { name, release_date, by_company, price }) => {
        const newGadget = new Gadget({
          name,
          release_date,
          by_company,
          price,
        })

        return newGadget.save()
      },
    },
    updateGadget: {
      type: GadgetType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        release_date: { type: GraphQLString },
        by_company: { type: GraphQLString },
        price: { type: GraphQLString },
      },
      resolve: async (parent, {id, name, release_date, by_company, price }) => {
        try {
          return await Gadget.findByIdAndUpdate(id,
            { name, release_date, by_company, price },
            { returnOriginal:false })
        } catch (e) {
          console.error(`Unable to update item with id ${id}`, e.message)
        }
      },
    },
    deleteGadget: {
      type: GadgetType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, { id }) => {
        try {
          return await Gadget.findByIdAndDelete(id)
        } catch (e) {
          console.error(`Unable to delete item with id ${id}`, e.message)
        }
      },
    },
  },
})

export default Mutations