import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import AddUser from "./pages/AddUser"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar/>    
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
          <Route path="/edit-user/:id" element={<AddUser/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
