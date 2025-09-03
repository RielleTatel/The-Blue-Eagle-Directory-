import { useState, useEffect } from "react"; 

interface information {
    name: string; 
    description: string; 
    link: string | null;  
    tag1: string | null; 
    tag2: string | null; 
    tag3: string | null; 
}

const retrieveHook = () => {
    const [isTable, setIsTable] = useState<information[]>([])

    const fetchTable =  async () => {
        try {
            const response = await fetch('http://localhost:8000/api/get')
            const data = await response.json(); 
            setIsTable(data)

        } catch (err) {
            console.log('An error has occured', err)
        }
    }

    useEffect(() => {
        fetchTable();
    }, [])

    return {
        isTable, 
        fetchTableData: fetchTable
    }
}

export default retrieveHook; 