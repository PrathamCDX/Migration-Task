import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import Post from './posts.model';
import sequelize from './sequelize';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id?: number;
    declare name: string;
    declare email: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { tableName: 'users', sequelize }
);

// Association: User has many Posts
User.hasMany(Post, {
    foreignKey: 'userId',
});

export default User;
