// models/organizationModel.js
import supabase from "../services/supabaseClient.js";

const createPost = async (name, description, link, tag1, tag2, tag3) => {
    console.log('Attempting to insert:', { name, description, link, tag1, tag2, tag3 }); // Debug log
    
    const { data, error } = await supabase
        .from("Organizations")
        .insert([{ name, description, link, tag1, tag2, tag3 }])
        .select();
    
    if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
    }
    
    console.log('Successfully inserted:', data); // Debug log
    return data;
}; 

const retrieveTable = async (req, res) => {
    try { 
        const { data, error } = await supabase 
        .from("Organizations")
        .select("*")

        if (error) throw error; 
        res.json(data)  
    } catch (err) {
        console.error("Supabase error: ", err.message)
        res.status(500).json({ error: err.message });
    }
}; 

const deleteOrg = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Deleting organization with ID:', id);
        
        const { data, error } = await supabase
        .from("Organizations")
        .delete()
        .eq('id', id); 

        if (error) {
            console.error('Error deleting organization:', error.message);
            return res.status(500).json({ error: 'Failed to delete organization' });
        }

        console.log('Successfully deleted organization:', data);
        res.status(200).json({ message: 'Organization deleted successfully', data });

    } catch (err) {
        console.error("Supabase error: ", err.message)
        res.status(500).json({ error: err.message });
    }
}

export {
    createPost, 
    retrieveTable,
    deleteOrg
}