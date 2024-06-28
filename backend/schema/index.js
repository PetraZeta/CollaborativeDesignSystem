const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLID } = require('graphql');
const { Component } = require('../models');

// Definir el tipo de componente
const ComponentType = new GraphQLObjectType({
  name: 'Component',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

// Definir la raíz de la consulta
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    component: {
      type: ComponentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Component.findByPk(args.id);
      }
    },
    components: {
      type: new GraphQLList(ComponentType),
      resolve() {
        return Component.findAll();
      }
    }
  }
});

// Definir las mutaciones
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addComponent: {
      type: ComponentType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Component.create({
          name: args.name,
          description: args.description
        });
      }
    }
  }
});

// Exportar el esquema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
