import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MembersList from './pages/MembersList/memberList';
import AddMemberPage from './pages/MembersList/AddMemberPage';
import MemberDetailPage from './pages/MembersList/memberDetailPage';
import TraineesList from './pages/Trainees/TraineesList';
import AddTraineePage from './pages/Trainees/TraineesPage';
import TraineeDetailPage from './pages/Trainees/TraineeDetailPage';
import AssessmentsList from './pages/assesments/AssessmentsList';
import AddAssessmentPage from './pages/assesments/AddAssessmentPage';
import AssessmentDetailPage from './pages/assesments/AssessmentDetailPage';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [members, setMembers] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', gender: 'Male', status: 'Inactive', username: 'john', password: 'password123' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', gender: 'Female', status: 'Inactive', username: 'jane', password: 'password123' },
    ]);

    const [trainees, setTrainees] = useState([
        { id: 1, name: 'Alice Brown', phone: '555-555-5555', gender: 'Female', status: 'Inactive' },
        { id: 2, name: 'Bob Green', phone: '444-444-4444', gender: 'Male', status: 'Active' },
    ]);

    const [assessments, setAssessments] = useState([]);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const handleAddMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    const handleUpdateMember = (updatedMember) => {
        setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
    };

    const handleDeleteMember = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleAddTrainee = (newTrainee) => {
        setTrainees([...trainees, newTrainee]);
    };

    const handleUpdateTrainee = (updatedTrainee) => {
        setTrainees(trainees.map(trainee => (trainee.id === updatedTrainee.id ? updatedTrainee : trainee)));
    };

    const handleDeleteTrainee = (id) => {
        setTrainees(trainees.filter(trainee => trainee.id !== id));
    };

    const handleAddAssessment = (newAssessment) => {
        setAssessments([...assessments, newAssessment]);
    };

    const handleUpdateAssessment = (updatedAssessment) => {
        setAssessments(assessments.map(assessment => (assessment.id === updatedAssessment.id ? updatedAssessment : assessment)));
    };

    const handleDeleteAssessment = (id) => {
        setAssessments(assessments.filter(assessment => assessment.id !== id));
    };

    const totalMembers = members.length;
    const activeMembers = members.filter(member => member.status === 'Active').length;
    const inactiveMembers = members.filter(member => member.status === 'Inactive').length;

    const totalTrainees = trainees.length;
    const activeTrainees = trainees.filter(trainee => trainee.status === 'Active').length;
    const inactiveTrainees = trainees.filter(trainee => trainee.status === 'Inactive').length;

    return (
        <div style={{ display: 'flex' }}>
            {isAuthenticated && <Sidebar onLogout={handleLogout} />}
            <div style={{ flex: 1, padding: '20px' }}>
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/" element={isAuthenticated ? <HomePage
                        totalMembers={totalMembers} activeMembers={activeMembers} inactiveMembers={inactiveMembers}
                        totalTrainees={totalTrainees} activeTrainees={activeTrainees} inactiveTrainees={inactiveTrainees}
                        assessments={assessments} /> : <Navigate to="/login" />} />
                    <Route path="/members" element={isAuthenticated ? <MembersList members={members} onUpdate={handleUpdateMember} onDelete={handleDeleteMember} /> : <Navigate to="/login" />} />
                    <Route path="/add-member" element={isAuthenticated ? <AddMemberPage onAdd={handleAddMember} /> : <Navigate to="/login" />} />
                    <Route path="/member/:id" element={isAuthenticated ? <MemberDetailPage members={members} onUpdate={handleUpdateMember} /> : <Navigate to="/login" />} />
                    <Route path="/trainees" element={isAuthenticated ? <TraineesList trainees={trainees} onUpdate={handleUpdateTrainee} onDelete={handleDeleteTrainee} /> : <Navigate to="/login" />} />
                    <Route path="/add-trainee" element={isAuthenticated ? <AddTraineePage onAdd={handleAddTrainee} /> : <Navigate to="/login" />} />
                    <Route path="/trainee/:id" element={isAuthenticated ? <TraineeDetailPage trainees={trainees} onUpdate={handleUpdateTrainee} /> : <Navigate to="/login" />} />
                    <Route path="/assessments" element={isAuthenticated ? <AssessmentsList assessments={assessments} onDelete={handleDeleteAssessment} /> : <Navigate to="/login" />} />
                    <Route path="/add-assessment" element={isAuthenticated ? <AddAssessmentPage members={members} trainees={trainees} onAdd={handleAddAssessment} /> : <Navigate to="/login" />} />
                    <Route path="/assessment/:id" element={isAuthenticated ? <AssessmentDetailPage assessments={assessments} onUpdate={handleUpdateAssessment} members={members} trainees={trainees} /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
