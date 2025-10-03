import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function get_users_service() {
    try {
        // Path to the users.json file
        const usersFilePath = path.join(__dirname, '../database/users.json');
        
        // Read the current users data
        const usersData = await fs.readFile(usersFilePath, 'utf8');
        const { users } = JSON.parse(usersData);
        
        // Return all users
        return users;
    } catch (error) {
        throw new Error(`Failed to get users: ${error.message}`);
    }
}
