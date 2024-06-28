const express= require('express');
const {graphqlHTTP}= require('express-graphql');
const schema= require('./schema');
const sequelize = require('./db');

const app= express();

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true,
}));

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});