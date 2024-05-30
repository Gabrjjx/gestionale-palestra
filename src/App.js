import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MembersList from './pages/MembersList/memberList';
import LoginPage from './pages/LoginPage/LoginPage';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/members" element={<MembersList />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
