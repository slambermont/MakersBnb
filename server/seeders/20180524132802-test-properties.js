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
  },
  {
    id: 2,
    name: "Salome bathroom",
    description: 'nearly done',
    price: 3.00,
    contact:'salome@madakers.com',
    createdAt: '2018-05-23T14:10:44.743Z',
    updatedAt: '2018-05-23T14:10:44.743Z'
  },
  {
    id: 3,
    name: "Prince Ali",
    description: 'prince ali! fabulous he!',
    price: 3.00,
    contact:'jasmine@makers.com',
    createdAt: '2018-05-23T14:10:44.743Z',
    updatedAt: '2018-05-23T14:10:44.743Z'
  }
  ], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
