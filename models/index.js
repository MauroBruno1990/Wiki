
const User = require("./user");
const Page = require("./pages");

Page.belongsTo(User, { as: 'author'})


module.exports = { Page, User};