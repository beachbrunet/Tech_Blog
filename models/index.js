// Importing models User, Post, Comment
const User = require("./User");
const Post = require("./Post");
const Comment = require("./aComment");

// outline example code
// Gallery.hasMany(Painting, {
//   foreignKey: "gallery_id",
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: "gallery_id",
// });

// needs a post and comment
User.hasMany(Post, {
  foreignKey: "User_id",
});

User.hasMany(Comment, {
  foreignKey: "User_id",
});

Post.hasMany(Comment, {
  foreignKey: "Post_id",
});

Post.belongsTo(Post, {
  foreignKey: "User_id",
});

Comment.belongsTo(User, {
  foreignKey: "User_id",
});

Comment.belongsTo(Post, {
  foreignKey: "Post_id",
});

module.exports = { User, Post, Comment };
