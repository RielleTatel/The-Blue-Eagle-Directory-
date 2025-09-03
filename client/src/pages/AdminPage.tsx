import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/Button";
import OrgModal from "../components/ui/OrgModal";
import retrieveHook from "../hookQueries/GetOrganization";
import {  Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, } from "../components/ui/table"; 

const AdminPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {isTable, fetchTableData} = retrieveHook(); 

    useEffect(() => {
        fetchTableData(); 
    }, [fetchTableData])

    return (
        <>
            <Header/>
            <div className="w-full min-h-screen flex-row p-5"> 
                <h1 className="font-heading  text-xl"> Organizations </h1>
                <div className="flex:row gap-y-10"> 
                    <div className="w-full lg:min-h-[110px] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-md flex justify-center items-center"> 
                    <div className="flex flex-row items-center justify-center w-full max-w-4xl py-4 gap-x-10"> 
                        <div className="flex flex-col w-full max-w-md"> 
                            <label htmlFor="searchBar" className="mb-2 text-sm font-medium text-gray-700"> What are you looking for? </label>
                                <input
                                    id="searchBar"
                                    placeholder="Search for organization"
                                    className="bg-gray-300 w-full p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="searchBar"
                                /> 
                        </div> 
                        <div className="flex flex-col w-full max-w-md">
                            <label htmlFor="category" className="mb-2 text-sm font-medium text-gray-700"> Category </label>
                            <Select name="category">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col w-full max-w-md">
                            <label htmlFor="status" className="mb-2 text-sm font-medium text-gray-700"> Status </label>
                            <Select name="status">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col w-full max-w-md">
                            <label htmlFor="create" className="mb-2 text-sm font-medium text-gray-700 italic"> Add Organization </label>
                            <Button 
                                name="create"
                                variant="heading"
                                onClick={() => setIsModalOpen(true)}
                                >  
                                Create Org
                            </Button>

                        </div>
                    </div>
                    </div>

                    {/* content page */}
                    <div className="w-full lg:min-h-[500px] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-md mt-5 overflow-hidden">  
                        <div className="overflow-x-auto"> 
                            <Table className="table-fixed w-full">
                                <TableCaption> Organization database </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                            <TableHead className="w-[150px]"> name </TableHead>
                                            <TableHead className="w-[120px]"> Tags </TableHead>
                                            <TableHead className="w-[200px]"> Description </TableHead>
                                            <TableHead className="w-[150px] text-right"> Public Links </TableHead>
                                            <TableHead className="w-[100px] text-right"> Action </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {isTable && isTable.map((org: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">
                                                <div className="truncate" title={org.name}>
                                                    {org.name}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="truncate" title={`${org.tag1 || ''} ${org.tag2 || ''} ${org.tag3 || ''}`}>
                                                    {[org.tag1, org.tag2, org.tag3].filter(Boolean).join(', ')}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="truncate" title={org.description}>
                                                    {org.description}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="truncate" title={org.link}>
                                                    {org.link}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">   
                                                <Button
                                                    variant="tag"
                                                    className="italic"> 
                                                    Inspect
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>  
                </div>
            </div>
            <OrgModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default AdminPage;