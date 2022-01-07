export default {
  port: 3000,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@restfulapibanco.lq7ds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  env: "development",
};
