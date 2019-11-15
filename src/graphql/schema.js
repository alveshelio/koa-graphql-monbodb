import { GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql'

import GadgetType from './gadgetType';
import Mutations from './mutations'
import Gadget from '../database/models/gadgets'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: {
      type: GadgetType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (parent, { id }) => await Gadget.findById(id)
    },
    gadgets: {
      type: new GraphQLList(GadgetType),
      resolve: async () => await Gadget.find()
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})
