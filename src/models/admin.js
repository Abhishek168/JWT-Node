module.exports = (sequelize, DataTypes) =>{
  var Admin = sequelize.define("Admin", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Admin;
};
