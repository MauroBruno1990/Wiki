const Sequelize = require("sequelize");
const db = require("../db");

//-- Page Model
class Page extends Sequelize.Model {}
Page.init(
  {
    title: {
      type: Sequelize.STRING,
    },
    urlTitle: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.ENUM("open", "closed"),
    },
  },
  { sequelize: db, modelName: "page" }
);

module.exports = Page;