import { createPost } from "../models/post.js";

export const addOrg = async (req, res) => {
    try {
        const { name, description } = req.body;
        console.log('Received data:', { name, description }); // Debug log
        const newPost = await createPost(name, description); 
        res.status(201).json(newPost);
    } catch (err) {
        console.error('Controller error:', err); // Debug log
        res.status(500).json({ error: err.message || "Failed to create post" }); 
    }
}