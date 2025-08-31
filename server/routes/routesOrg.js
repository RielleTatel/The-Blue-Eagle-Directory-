import express from "express"; 
import { addOrg } from "../controllers/createOrg.js"; 

const router = express.Router(); 

router.post("/", addOrg); 

export default router; 