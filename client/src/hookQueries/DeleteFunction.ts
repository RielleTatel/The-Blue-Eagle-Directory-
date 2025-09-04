import axios from 'axios';

const deleteOrg = async (postId: number) => {
    console.log("Deleting data"); 

    try {
        const response = await axios.delete(`http://localhost:8000/api/delete/${postId}`); 
        return response.data; 
    } catch (error: any) {
        if (error.response) {
            console.error("Backend error:", error.response.data);
            throw error.response.data;
          } else if (error.request) {
            console.error("No response from server:", error.request);
            throw new Error("No response from server");
          } else {
            console.error("Request setup error:", error.message);
            throw error;
          }
    }
}

export default deleteOrg