import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const Dashboard = () => {
  const stats = [
    { title: "Total Bookings", value: 1240 },
    { title: "Pending Bookings", value: 24 },
    { title: "Completed Bookings", value: 1180 },
    { title: "Cancelled Bookings", value: 36 },
  ];

  const bookingData = [
    { name: "Jan", bookings: 120 },
    { name: "Feb", bookings: 98 },
    { name: "Mar", bookings: 150 },
    { name: "Apr", bookings: 130 },
    { name: "May", bookings: 160 },
    { name: "Jun", bookings: 110 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-[#75313f] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
          >
            <p className="text-gray-700 text-lg font-medium">{stat.title}</p>
            <p className="text-4xl font-extrabold text-[#75313f] mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 min-h-[300px]">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={bookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#75313f" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
