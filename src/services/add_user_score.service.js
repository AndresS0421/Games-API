import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function add_user_score_service(user_id, score) {
    try {
        // Path to the users.json file
        const usersFilePath = path.join(__dirname, '../database/users.json');
        
        // Read the current users data
        const usersData = await fs.readFile(usersFilePath, 'utf8');
        const { users } = JSON.parse(usersData);
        
        // Find the user by user_id
        const userIndex = users.findIndex(user => user.id === user_id);
        
        if (userIndex === -1) {
            throw new Error(`User with id ${user_id} not found`);
        }
        
        // Update the user's score (add to the current score)
        users[userIndex].scores += score;
        
        // Write the updated data back to the file
        const updatedData = { users };
        await fs.writeFile(usersFilePath, JSON.stringify(updatedData, null, 2), 'utf8');
        
        // Return only the updated user
        return users[userIndex];
    } catch (error) {
        throw new Error(`Failed to add user score: ${error.message}`);
    }
}
