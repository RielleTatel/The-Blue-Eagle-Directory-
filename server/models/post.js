// models/organizationModel.js
import supabase from "../services/supabaseClient.js";

export const createPost = async (name, description, link, tag1, tag2, tag3) => {
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
