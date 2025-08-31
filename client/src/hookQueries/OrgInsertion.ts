import { useState } from 'react'; 

interface information {
    name: string; 
    description: string; 
}

const include = () => {
    const [formData, setFormdata] = useState<information>({
        name: '', 
        description: ''}); 

    const handleChange = (e: any) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    } 

    const handleSubmit = async (e: any) => { 
        e.preventDefault(); 
        
        console.log('Submitting form data:', formData); // Debug log

        try {
            const response = await fetch('http://localhost:8000/api/posts', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(formData), 
            });
            
            console.log('Response status:', response.status); // Debug log
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
            }
            
            const data = await response.json(); 
            console.log('Success: ', data);
            
            // Reset form after successful submission
            setFormdata({ name: '', description: '' });
            
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    }

    return {
        formData, 
        handleChange,
        handleSubmit
    }

}  

export default include; 