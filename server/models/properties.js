'use strict';
module.exports = (sequelize, DataTypes) => {
  var Properties = sequelize.define('Properties', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    contact: DataTypes.STRING
  }, {});
  Properties.associate = (models) => {
    Properties.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Properties;
};
