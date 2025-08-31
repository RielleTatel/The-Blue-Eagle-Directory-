import './App.css'; 
import { useEffect } from "react"; 
import axios from "axios"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrganizationsPage from './pages/OrganizationsPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/layout/Footer'; 
import Testing from './pages/Testing';

const App = () => {

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api")
      console.log(response.data)
    } catch {
      console.error("API Error:")
    }
  }  

  useEffect(() => {
    fetchApi(); 
  }, [])

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
            <Route path="/" element={<LandingPage/>}/> 
            <Route path="Organizations" element={<OrganizationsPage/>}/> 
            <Route path="Admin" element={<AdminPage/>}/> 
            <Route path='Testing'element={<Testing/>} />
        </Routes>
        <Footer />
      </div>
  </HashRouter>
  )
}

export default App;