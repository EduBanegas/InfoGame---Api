import { DataTypes, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../database/database';

export const userModel = sequelize.define(
    // model name
    'user',

    // model attrubutes
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
