import { createPost } from "../models/post.js";
import { retrieveTable } from "../models/retrieve.js";

export const addOrg = async (req, res) => {
    try {
        const { name, description, link, tag1, tag2, tag3 } = req.body;
        console.log('Received data:', { name, description, link, tag1, tag2, tag3 }); // Debug log
        const newPost = await createPost(name, description, link, tag1, tag2, tag3); 
        res.status(201).json(newPost);
    } catch (err) {
        console.error('Controller error:', err); // Debug log
        res.status(500).json({ error: err.message || "Failed to create post" }); 
    }
} 

export const retrive = async (req, res) => {
    try {
        await retrieveTable(req, res)
    } catch {
        console.error("Controller error:", err);
        res.status(500).json({ error: err.message || "Failed to retrieve posts" });
    }
}
