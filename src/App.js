import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MembersList from './pages/MembersList/memberList';
import AddMemberPage from './pages/MembersList/AddMemberPage';
import MemberDetailPage from './pages/MembersList/memberDetailPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
    const [members, setMembers] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', gender: 'Male', status: 'Inactive' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', gender: 'Female', status: 'Inactive' },
    ]);

    const handleAddMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    const handleUpdateMember = (updatedMember) => {
        setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/members" element={<MembersList members={members} onUpdate={handleUpdateMember} />} />
                    <Route path="/add-member" element={<AddMemberPage onAdd={handleAddMember} />} />
                    <Route path="/member/:id" element={<MemberDetailPage members={members} onUpdate={handleUpdateMember} />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
