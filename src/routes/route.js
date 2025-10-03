import express from "express";
import { add_user_score } from "../controllers/add_user_score.controller.js";
import { get_users_controller } from "../controllers/get_users.controller.js";

const router = express.Router();

router.route("/add-score")
    .post(add_user_score);

router.route("/get-users")
    .get(get_users_controller);

export default router;