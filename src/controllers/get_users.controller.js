
import { get_response_error_data, VerificationError } from "../lib/get_response_error_data.js";
import { get_users_service } from "../services/get_users.service.js";

export async function get_users_controller(req, res) {
    try {
        if (req.method !== "GET") {
            throw new VerificationError(405, "Method not allowed");
        }

        const users = await get_users_service();

        res.status(200).json({ successful: true, data: users });
    } catch (error) {
        const { status, message } = get_response_error_data(error);
        res.status(status).json({ successful: false, message: message });
    }
}