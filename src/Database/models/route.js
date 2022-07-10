'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Route.init( {
      // origin: DataTypes.STRING,
      // destination: DataTypes.STRING,
      description: DataTypes.STRING,

      // Creating two objects with the same value will throw an error. The unique property can be either a
      // boolean, or a string. If you provide the same string for multiple columns, they will form a
      // composite unique key.
      destination: {
        type: DataTypes.STRING,
        unique: "compositeIndex",
      },
      origin: {
        type: DataTypes.INTEGER,
        unique: "compositeIndex",
      },

      // The unique property is simply a shorthand to create a unique constraint.
      // someUnique: { type: DataTypes.STRING, unique: true },

      // Go on reading for further information about primary keys
      // identifier: { type: DataTypes.STRING, primaryKey: true },
<<<<<<< HEAD
    }, {
    sequelize,
    modelName: 'Route',
  });
=======
    },
    {
      sequelize,
      modelName: "Route",
    }
  );
>>>>>>> 4c984325079d04a88fe46bad4f01c57feb7015f4
  return Route;
};