module.exports = (sequelize, DataTypes) => {
  var property = sequelize.define('property', {
    name: DataTypes.CHAR,
    description: DataTypes.CHAR,
    price: DataTypes.FLOAT,
    contact: DataTypes.CHAR,
  }, {
    timestamps: false
  });
  property.associate = function(models) {
    // associations can be defined here
  };
  return property;

};
