import express from "express"; 
import { addOrg, retrive } from "../controllers/createOrg.js";  

const router = express.Router(); 

router.post("/", addOrg); 
router.get("/", retrive)

export default router; 