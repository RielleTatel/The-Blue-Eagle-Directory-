
import supabase from "../services/supabaseClient";

export const retrieveTable = async (req, res) => {
    try { 
        const { data, error } = await supabase 
        .from("Organizatiojns")
        .select("*")

        if (error) throw error; 
        res.json(data)  
    } catch (err) {
        console.error("Supabase error: ", err.message)
        res.status(500).json({ error: err.message });
    }
}; 