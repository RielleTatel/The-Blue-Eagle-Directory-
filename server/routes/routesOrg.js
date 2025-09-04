import express from "express"; 
import { addOrg, retrive, deleteOrganization } from "../controllers/OrgController.js";  

const router = express.Router(); 

router.post("/", addOrg); 
router.get("/", retrive)
router.delete("/:id", deleteOrganization)

export default router; 