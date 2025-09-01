import { useState, useEffect } from "react"; 

const retrieveHook = () => {
    const [isTable, setIsTable] = useState({})

    const fetchTable =  async () => {
        try {
            const response = await fetch('to be followed')
            const data = await response.json(); 
            setIsTable(data)

        } catch (err) {
            console.log('An error has occured', err)
        }
    }

    useEffect(() => {
        fetchTable
    }, [])

    return {
        isTable, 
        fetchTableData: fetchTable
    }
}

export default retrieveHook; 