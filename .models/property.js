'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    contact: DataTypes.STRING,
  }, {
    // timestamps: false
  });
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;

};
