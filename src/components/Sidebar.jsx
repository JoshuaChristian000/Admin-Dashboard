import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-base-200 p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>

        <ul className="menu bg-base-200 rounded-box">
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/add-user">Add User</Link>
            </li>
      </ul>

    </div>
  )
}

export default Sidebar