import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE posts
      ADD CONSTRAINT fk_posts_user
      FOREIGN KEY (userId)
      REFERENCES users(id)
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface: QueryInterface) {
    try {
      await queryInterface.sequelize.query(`
        ALTER TABLE posts
        DROP CONSTRAINT fk_posts_user;
      `);
    } catch (error) {}
  },
};
