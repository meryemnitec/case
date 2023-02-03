const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
  } = require('graphql');
  
  const Author = require('./models/author');
  const Book = require('./models/book');
  
  const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
      id: {type: GraphQLID},
      name: {type: GraphQLString},
      genre: {type: GraphQLString},
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return Author.findById(parent.authorId);
        },
      },
    }),
  });
  
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
  });