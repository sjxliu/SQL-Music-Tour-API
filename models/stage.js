"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage.init(
    {
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name_stage: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Stage",
      tableName: "stages",
      timestamps: false,
    }
  );
  return Stage;
};
