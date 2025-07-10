// Model: Post
// Create: db/models/post.model.ts -> columns -> (id, title, content, userId(FK references to users table))

import { DataTypes,InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';


class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: number;
    declare title: string;
    declare content: string;
    declare userId: number;
}

Post.init(
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
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
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    { sequelize }
);
