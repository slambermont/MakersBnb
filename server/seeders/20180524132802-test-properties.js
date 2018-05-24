'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [{
    id: 1,
    name: "Siobhan's house",
    description: 'pretty nice',
    price: 3.00,
    contact:'siobhan@makers.com',
    createdAt: '2018-05-23T14:10:44.743Z',
    updatedAt: '2018-05-23T14:10:44.743Z'
  }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
