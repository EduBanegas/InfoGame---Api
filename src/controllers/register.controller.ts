import { userModel } from '../models/user.model';
import bcrypt from 'bcrypt';

const BCRUPT_SALT_ROUNDS = 12;

const registerController = async (req: any, res: any, next: any) => {
    try {
        const { username, password, name, lastname } = req.body;

        if (!username || !password || !name || !lastname) {
            throw new Error('Some fields are empty');
        }

        // Password encryption
        bcrypt.hash(password, BCRUPT_SALT_ROUNDS).then(async hashedPassword => {
            // Create a new user
            const newUser = await userModel.create({
                username,
                password: hashedPassword,
                name,
                lastname
            });

            return res.json({
                data: newUser,
                message: 'User created successfully'
            });
        });
    } catch (err) {
        next(err);
    }
};

export default registerController;
