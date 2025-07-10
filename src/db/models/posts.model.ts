// Model: Post
// Create: db/models/post.model.ts -> columns -> (id, title, content, userId(FK references to users table))

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";

import sequelize from "./sequelize";

class Posts extends Model<
  InferAttributes<Posts>,
  InferCreationAttributes<Posts>
> {
  declare id: number;
  declare title: string;
  declare content: string;
  declare userId: number;
}

Posts.init(
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
