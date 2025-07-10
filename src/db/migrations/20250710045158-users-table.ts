'use strict';

import { QueryInterface } from 'sequelize';

module.exports = {
    async up(queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      );
    `);
    },

    async down(queryInterface: QueryInterface) {
        try {
            await queryInterface.sequelize.query(`
        ALTER TABLE posts
        DROP CONSTRAINT fk_posts_user;
      `);
        } catch {
        } finally {
            await queryInterface.sequelize.query('DROP TABLE IF EXISTS users;');
        }
    },
};
