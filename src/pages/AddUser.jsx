import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const AddUser = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const getLocalUsers = () => {
    return JSON.parse(localStorage.getItem("newUsers")) || []
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  
  useEffect(() => {
    if(id){
      const users = getLocalUsers()

      const user = users.find((u)=> u.id === Number(id))

      if(user){
        setName(user.name)
        setEmail(user.email)
        setCompany(user.company.name)
      }
    }
  },[id])


  const handleSubmit = (e) => {
    e.preventDefault()
    if(id){
      const users = getLocalUsers()
      const updatedUsers = users.map((u) =>
      u.id === Number(id)
      ? { ...u, name, email, company: { name: company } }
      : u
      )
      localStorage.setItem("newUsers", JSON.stringify(updatedUsers))
      navigate("/users")
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        company: {
          name: company
        }
      }
      const storedUsers = getLocalUsers()
      storedUsers.push(newUser)
      localStorage.setItem("newUsers", JSON.stringify(storedUsers))
      navigate('/users')
      }
      
  }
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">Company</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={company}
            onChange={(e)=> setCompany(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-full">
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUser