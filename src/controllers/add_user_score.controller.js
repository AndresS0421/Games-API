import { get_response_error_data, VerificationError } from "../lib/get_response_error_data.js";
import { add_user_score_service } from "../services/add_user_score.service.js";

export async function add_user_score(req, res) {
    try {
        if (req.method !== "POST") {
            throw new VerificationError(405, "Method not allowed");
        }

        const { user_id, score } = req.body;

        if (!user_id || !score) {
            throw new VerificationError(400, "Missing user_id or score");
        }

        if (typeof user_id !== "string" || typeof score !== "number") {
            throw new VerificationError(400, "Invalid user_id or score");
        }

        const user = await add_user_score_service(user_id, score);

        res.status(200).json({ successful: true, data: user });
    } catch (error) {
        const { status, message } = get_response_error_data(error);
        res.status(status).json({ successful: false, message: message });
    }
}