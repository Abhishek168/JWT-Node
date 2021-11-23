module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("Post", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Post;
};
