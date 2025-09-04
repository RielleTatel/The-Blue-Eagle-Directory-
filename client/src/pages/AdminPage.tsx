import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/Button";
import OrgModal from "../components/ui/OrgModal";
import retrieveHook from "../hookQueries/GetOrganization";
import deleteOrg from "../hookQueries/DeleteFunction";
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

    const handleDelete = async (orgId: number) => {
        try {
            await deleteOrg(orgId);
            fetchTableData();
            console.log("Organization deleted successfully");
        } catch (error) {
            console.error("Failed to delete organization:", error);
        }
    };

    return (
        <>
            <Header/>
            <div className="w-full min-h-screen p-3 sm:p-5"> 
                <h1 className="font-heading text-lg sm:text-xl mb-4"> Organizations </h1>
                
                {/* Responsive Filter Section */}
                <div className="space-y-4 mb-6"> 
                    <div className="w-full shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-md p-4"> 
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
                            {/* Search Bar */}
                            <div className="flex flex-col sm:col-span-2 lg:col-span-1"> 
                                <label htmlFor="searchBar" className="mb-2 text-sm font-medium text-gray-700"> 
                                    What are you looking for? 
                                </label>
                                <input
                                    id="searchBar"
                                    placeholder="Search for organization"
                                    className="bg-gray-300 w-full p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    name="searchBar"
                                /> 
                            </div> 
                            
                            {/* Category Select */}
                            <div className="flex flex-col">
                                <label htmlFor="category" className="mb-2 text-sm font-medium text-gray-700"> 
                                    Category 
                                </label>
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
                            
                            {/* Status Select */}
                            <div className="flex flex-col">
                                <label htmlFor="status" className="mb-2 text-sm font-medium text-gray-700"> 
                                    Status 
                                </label>
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
                            
                            {/* Create Button */}
                            <div className="flex flex-col">
                                <label htmlFor="create" className="mb-2 text-sm font-medium text-gray-700 italic"> 
                                    Add Organization 
                                </label>
                                <Button 
                                    name="create"
                                    variant="heading"
                                    size="default"
                                    className="w-full h-10"
                                    onClick={() => setIsModalOpen(true)}
                                >  
                                    <span className="hidden sm:inline">Create Organization</span>
                                    <span className="sm:hidden">Create Org</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="w-full shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-md overflow-hidden">  
                        <div className="overflow-x-auto"> 
                            <Table className="w-full min-w-[600px]">
                                <TableCaption> Organization database </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[120px] sm:w-[150px] px-2 sm:px-4"> 
                                            Name 
                                        </TableHead>
                                        <TableHead className="w-[100px] sm:w-[120px] px-2 sm:px-4 hidden sm:table-cell"> 
                                            Tags 
                                        </TableHead>
                                        <TableHead className="w-[150px] sm:w-[200px] px-2 sm:px-4"> 
                                            Description 
                                        </TableHead>
                                        <TableHead className="w-[120px] sm:w-[150px] text-right px-2 sm:px-4 hidden md:table-cell"> 
                                            Public Links 
                                        </TableHead>
                                        <TableHead className="w-[80px] sm:w-[100px] text-right px-2 sm:px-4"> 
                                            Action 
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {isTable && isTable.map((org: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium px-2 sm:px-4">
                                                <div className="truncate max-w-[100px] sm:max-w-[130px]" title={org.name}>
                                                    {org.name}
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-2 sm:px-4 hidden sm:table-cell">
                                                <div className="truncate max-w-[80px] sm:max-w-[100px]" title={`${org.tag1 || ''} ${org.tag2 || ''} ${org.tag3 || ''}`}>
                                                    {[org.tag1, org.tag2, org.tag3].filter(Boolean).join(', ')}
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-2 sm:px-4">
                                                <div className="truncate max-w-[120px] sm:max-w-[180px]" title={org.description}>
                                                    {org.description}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right px-2 sm:px-4 hidden md:table-cell">
                                                <div className="truncate max-w-[100px] sm:max-w-[130px]" title={org.link}>
                                                    {org.link}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right px-2 sm:px-4">   
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    className="text-xs sm:text-sm px-2 sm:px-3 py-1"
                                                    onClick={() => handleDelete(org.id)}
                                                > 
                                                    <span className="hidden sm:inline">Delete</span>
                                                    <span className="sm:hidden">Del</span>
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