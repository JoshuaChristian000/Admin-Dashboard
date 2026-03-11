const Dashboard = () => {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Users</h2>
            <p className="text-3xl font-bold">1,200</p>
            <p className="text-green-500 text-sm">+21% from last month</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Revenue</h2>
            <p className="text-3xl font-bold">$34K</p>
            <p className="text-green-500 text-sm">+15% increase</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Orders</h2>
            <p className="text-3xl font-bold">450</p>
            <p className="text-yellow-500 text-sm">12 pending</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard