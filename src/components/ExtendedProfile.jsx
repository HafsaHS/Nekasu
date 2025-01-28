import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ExtendedProfile = () => {
  // Gender data for pie chart
  const genderData = [
    { name: "Female", value: 55 },
    { name: "Male", value: 40 },
    { name: "Trans", value: 33 },
    { name: "Other", value: 2.3 },
  ];

  // Colors for pie chart
  const COLORS = ["#FF69B4", "#4169E1", "#FFD700", "#98FB98"];

  // Age data for bar chart
  const ageData = [
    { age: "18", value: 18 },
    { age: "20", value: 20 },
    { age: "24", value: 24 },
    { age: "26", value: 26 },
    { age: "28", value: 28 },
    { age: "30", value: 30 },
    { age: "32", value: 32 },
  ];

  return (
    <div className="w-full px-10 py-8">
      <h2 className="text-2xl font-bold mb-6">Audiences</h2>

      <div className="flex flex-row gap-x-16">
        {/* Age Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-2">Age</h3>
          <div className="mb-2">
            <span className="text-purple-700 font-bold text-xl">
              Total Audience:
            </span>
            <span className="text-purple-700 font-bold text-2xl ml-2">
              17,098,768
            </span>
          </div>

          <div className="h-64 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col h-full">
              <div className="text-sm text-gray-600 mb-2">Number of people</div>
              <div className="flex items-end h-full space-x-4">
                {ageData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-8 bg-purple-600 rounded-t"
                      style={{ height: `${item.value * 3}px` }}
                    ></div>
                    <div className="text-sm mt-1">{item.age}</div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-2">Age</div>
            </div>
          </div>
        </div>

        {/* Gender Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-2">Gender</h3>
          <div className="mb-2">
            <span className="text-purple-700 font-bold text-xl">
              Total Audience:
            </span>
            <span className="text-purple-700 font-bold text-2xl ml-2">
              17,098,768
            </span>
          </div>

          <div className="relative h-64 bg-gray-50 p-4 rounded-lg">
            <PieChart width={300} height={200}>
              <Pie
                data={genderData}
                cx={150}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {genderData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-sm">
                      {entry.name} {entry.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <img
            src="/api/placeholder/1200/400"
            alt="Location Map"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex gap-x-8">
            <span className="text-gray-800">India: 50283</span>
            <span className="text-gray-800">Russia: 48787</span>
            <span className="text-gray-800">America: 31878</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-navy-blue text-white px-8 py-3 rounded-lg font-medium">
          Download Profile
        </button>
      </div>
    </div>
  );
};

export default ExtendedProfile;
