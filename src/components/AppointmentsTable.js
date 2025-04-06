import React from 'react';

const AppointmentsTable = ({ appointments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Today's Appointments</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
            <th className="pb-2">My</th>
            <th className="pb-2">Medical Advisers</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id} className="border-b border-gray-100 last:border-0">
              <td className="py-3"></td>
              <td className="py-3">
                <div className="text-gray-800">© {appointment.time}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;