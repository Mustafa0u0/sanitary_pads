// src/components/StatsSection.jsx
import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function StatsSection() {
  // Revenue data: 1 unit = RM 24, 33 units sold => RM 792
  const revenueData = [
    { name: 'Revenue (RM)', value: 792 },
    { name: 'Remaining Goal', value: 2000 - 792 },
  ]
  const REVENUE_COLORS = ['#22c55e', '#e5e7eb']

  // Pack sales data (3-pack units)
  const packData = [
    { month: 'Month 1', units: 7 },
    { month: 'Month 2', units: 11 },
    { month: 'Month 3', units: 15 },
  ]

  const totalUnits = packData.reduce((sum, d) => sum + d.units, 0)

  return (
    <section id="stats" className="bg-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Pie Chart */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Revenue Progress
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={revenueData}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                >
                  {revenueData.map((entry, idx) => (
                    <Cell key={idx} fill={REVENUE_COLORS[idx]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `RM ${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-center text-gray-700 font-medium">
            RM {revenueData[0].value} collected of RM 2000 goal
          </p>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Units Sold (3-Pack Units)
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={packData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Bar dataKey="units" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-center text-gray-700 font-medium">
            7 + 11 + 15 = {totalUnits} units sold
          </p>
        </div>

        {/* Customer Count & Revenue */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Total Customers
          </h3>
          <p className="text-6xl font-extrabold text-brand-green mb-2">
            {totalUnits}
          </p>
     
        </div>
      </div>
    </section>
)
}