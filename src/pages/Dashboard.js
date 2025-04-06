import React from 'react';
import { dashboardData } from '../data/mockData';
import StatsCard from '../components/StatsCard';
import RecentPatients from '../components/RecentPatients';
import AppointmentsTable from '../components/AppointmentsTable';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Header />

                    <main className="p-4 md:p-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <StatsCard title="Total Patients" value={dashboardData.totalPatients} />
                            <StatsCard
                                title="Average Consultation"
                                value={dashboardData.averageConsultation.time}
                                change={dashboardData.averageConsultation.change}
                                isPositive={true}
                            />
                            <StatsCard
                                title="Monthly Revenue"
                                value={dashboardData.monthlyRevenue.amount}
                                change={dashboardData.monthlyRevenue.change}
                                isPositive={true}
                            />
                            <StatsCard title="Upcoming Appointments" value={`${dashboardData.upcomingAppointments} today`} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h2 className="text-lg font-semibold mb-4">Early Done</h2>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-800 font-bold">{dashboardData.earlyDone.initials}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{dashboardData.earlyDone.name}</h3>
                                            <p className="text-sm text-gray-600">{dashboardData.earlyDone.info}</p>
                                        </div>
                                    </div>
                                </div>

                                <AppointmentsTable appointments={dashboardData.todayAppointments} />
                            </div>

                            <div className="space-y-6">
                                <RecentPatients patients={dashboardData.recentPatients} />

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h2 className="text-lg font-semibold mb-4">Today's Appointments</h2>
                                    <p className="text-gray-600">{dashboardData.existingConfirmations} existing confirmations</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;