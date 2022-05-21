import server from './app';
import { sequelize } from './database/database';

// Models
import './models/user.model';

async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log('Connection has been established successfully');

        server.listen(3001, () => {
            console.log('Listening at 3001');
        });
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
}

main();
