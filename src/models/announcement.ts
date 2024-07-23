import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config";
import moment from "moment";
import { AnnouncementAttributes } from "../interfaces/announcement.interface";
import { HookReturn } from "sequelize/types/hooks";
import { ValidationOptions } from "sequelize/types/instance-validator";

class Announcement extends Model<AnnouncementAttributes> {}

Announcement.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "announcement",
    tableName: "announcements",
    hooks: {
      beforeValidate: (
        announcement: any,
        options: ValidationOptions
      ): HookReturn => {
        // Format date before valid
        if (announcement.fecha) {
          announcement.fecha = moment(announcement.fecha, "MM/YY").format(
            "MM/YY"
          );
        }
      },
    },
  }
);

export default Announcement;
