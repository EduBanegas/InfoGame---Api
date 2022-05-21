require('dotenv').config();
import { Sequelize } from 'sequelize';

const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_HOST = process.env.DB_HOST as string;

export const sequelize = new Sequelize(
    'projectvideogames',
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres'
    }
);
