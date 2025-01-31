const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Product = sequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,

    },
    name: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  },
);
 
module.exports = Product;