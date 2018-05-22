module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    contact: DataTypes.STRING
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};
