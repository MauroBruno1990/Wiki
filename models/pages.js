const Sequelize = require("sequelize");
const db = require("../db");
const { get }= require("../routes")

//-- Page Model
class Page extends Sequelize.Model {}
Page.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false
      
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM("open", "closed"),
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    route: {
      type: Sequelize.VIRTUAL,
      get(){
        return `/wiki/${this.getDataValue('urlTitle')}`
      }
    }
  },
  { sequelize: db, modelName: "page" }
);

// HOOK
Page.beforeValidate((page, options)=>{
  if(page.title){
    page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
    options.fields.push('urlTitle')
  }
})

module.exports = Page;