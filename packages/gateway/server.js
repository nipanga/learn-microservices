const server = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {port} = require('./config');
const schema = require('./data/schema');

server
    .use(bodyParser.json())
    .use('/graphql', graphqlExpress({ schema }))
    .use('/gq', graphiqlExpress({endpointURL: '/graphql'}))
    .listen(port, () => console.log(`Listening on port ${port}`));