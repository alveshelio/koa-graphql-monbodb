import { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql'

import GadgetType from './gadgetType';
import Gadget from '../database/models/gadgets'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: {
      type: GadgetType,
      args: { id: { type: GraphQLString }},
      resolve: (parent, args) => Gadget.findById(args.id)
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
})
