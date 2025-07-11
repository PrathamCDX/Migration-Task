import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';
import User from './user.model';

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: number;
    declare title: string;
    declare content: string;
    declare userId: number;
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,   // Use INTEGER for id
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,   // Use INTEGER for FK
            allowNull: false,
        },
    },
    { tableName: 'posts', sequelize }
);

// Keep this association to connect Post -> User
Post.belongsTo(User, {
    foreignKey: 'userId',
});

export default Post;
