import React from 'react';

const RecentPatients = ({ patients }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
      <p className="text-sm text-gray-500 mb-4">Recently added or updated patient records</p>
      
      <div className="space-y-4">
        {patients.map(patient => (
          <div key={patient.id} className="border-b border-gray-100 pb-3 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{patient.name}</h3>
                {patient.age && <p className="text-sm text-gray-600">{patient.age} - {patient.condition}</p>}
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{patient.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPatients;