import { useEffect, useState } from "react"
import { getUsers } from "../services/api"
import { useNavigate } from "react-router-dom"

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const getLocalUsers = () => {
    return JSON.parse(localStorage.getItem("newUsers")) || []
  }

  
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers()
      setUsers(data)
      const storedUsers = JSON.parse(localStorage.getItem("newUsers")) || []

      setUsers([...data, ...storedUsers])
    }
    fetchUsers()
  },[])

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?")

  if(!confirmDelete) return 
  
  const users = getLocalUsers()

  const filtered = users.filter((u) => u.id !== id)

  localStorage.setItem("newUsers", JSON.stringify(filtered))

  setUsers((prev) => prev.filter((u) => u.id !== id))
}

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
           <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button className="btn btn-sm btn-warning" onClick={()=> navigate(`/edit-user/${user.id}`)}>Edit</button>
                  <button className="btn btn-sm btn-error ml-2" onClick={()=> handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Users