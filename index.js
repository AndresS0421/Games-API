import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/route.js";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", router);

function onStart(){
    console.log(`Server running on port ${port}`);
}

app.listen(port, onStart);

export default app;