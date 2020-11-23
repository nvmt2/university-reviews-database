const { Text, Relationship } = require("@keystonejs/fields");
const access = require("./../access-control");

module.exports = {
  access: {
    read: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    update: access.userIsAdminOrOwner,
  },
  fields: {
    name: {
      type: Text,
    },
    //warning
    majors: {
      type: Relationship,
      ref: "DetailMajor",
      many: true,
    },
  },
};
