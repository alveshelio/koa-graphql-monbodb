import mongoose from 'mongoose'

const initDB = () => {
  mongoose.connect(
    `mongodb://koa-graphql:K0a-graphql@ds255917.mlab.com:55917/koa-graphql-mongodb`,
     { userNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })
};

export default initDB;
