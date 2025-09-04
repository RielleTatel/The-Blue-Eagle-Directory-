import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routesOrg from "./routes/routesOrg.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"], 
    credentials: true 
}; 

app.use(cors(corsOptions)); 
app.use(express.json()); 
//Routes 

app.use("/api/posts", routesOrg)
app.use("/api/get", routesOrg)
app.use("/api/delete", routesOrg)

app.get("/api", (req, res) => {
    res.json({ message: "Blue Eagle Directory API is running! Hello" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});