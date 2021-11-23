module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Posts",
      [
        {
          username: "admin1 dave",
          title: "Hello title1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "admin2 patel",
          title: "Hello title2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {}),
};
