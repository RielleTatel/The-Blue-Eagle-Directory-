// models/organizationModel.js
import supabase from "../services/supabaseClient.js";

export const createPost = async (name, description) => {
    console.log('Attempting to insert:', { name, description }); // Debug log
    
    const { data, error } = await supabase
        .from("Organizations")
        .insert([{ name, description }])
        .select();
    
    if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
    }
    
    console.log('Successfully inserted:', data); // Debug log
    return data;
};
