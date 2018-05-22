'use strict';
module.exports = (sequelize, DataTypes) => {
  var Properties = sequelize.define('Properties', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {});
  Properties.associate = function(models) {
    // associations can be defined here
  };
  return Properties;
};