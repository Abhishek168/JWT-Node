module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Admins',
    [
      {
        name: 'admin1 dave',
        email: 'admin1dave@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'admin2 patel',
        email: 'admin2patel@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Admins', null, {}),
};

