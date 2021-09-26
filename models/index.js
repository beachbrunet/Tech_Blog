// Importing models
const Comment = require("./aComment");
const Post = require("./Post");
const User = require("./User");

Gallery.hasMany(Painting, {
  foreignKey: "gallery_id",
});

Painting.belongsTo(Gallery, {
  foreignKey: "gallery_id",
});

module.exports = { User, Gallery, Painting };
