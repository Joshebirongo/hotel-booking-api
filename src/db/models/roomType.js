// Import the Sequelize instance from the database connection library
import { sequelize } from '../../libraries/DBConnection.js';
// Import DataTypes from sequelize to define column types
import { DataTypes } from 'sequelize';

// Define the name of the room type table
export const ROOM_TYPE_TABLE = 'room_type';

// Define the room type model
export const RoomType = sequelize.define(
  ROOM_TYPE_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pricePerNight: {
      type: DataTypes.DECIMAL(10, 2),
      validate : {
        min: 15,
      },
      field: 'price_per_night',
    },
    maxOccupancy: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      validate: {
        min: 1,
      },
      field: 'max_occupancy',
    },
    amenities: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  },
  {
    sequelize,
    tableName: ROOM_TYPE_TABLE,
    modelName: 'room_type',
    timestamps: true,
  }
);
