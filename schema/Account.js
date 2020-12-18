const {
  Text,
  Password,
  Checkbox,
  Relationship,
} = require("@keystonejs/fields");
const access = require("./../access-control");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { fileAdapter } = require("./Cloundinary.js");

module.exports = {
  schemaDoc: "A list of comment which discuss about a topic",
  access: {
    // update: access.userIsAdminOrOwner,
    //create: access.userIsAdmin,
    //delete: access.userIsAdmin,
    //read: access.userIsAdminOrOwner,
  },
  fields: {
    email: {
      type: Text,
      isRequired: true,
      isUnique: true,
      //access: ({ existingItem, authentication: { item } }) => {
      // return item.isAdmin || existingItem.id === item.id;
      // },
    },
    password: {
      adminDoc: "Fill if you are admin university",
      type: Password,
    },
    passwordUser: {
      adminDoc: "Password for user",
      type: Text,
    },
    username: {
      type: Text,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      isRequired: true,
    },
    avatar: {
      type: CloudinaryImage,
      adapter: fileAdapter,
    },
    topics: {
      type: Relationship,
      ref: "Topic.user",
      many: true,
    },
    comments: {
      type: Relationship,
      ref: "Comment.user",
      many: true,
    },
  },
  labelResolver: (item) => item.email,
};
