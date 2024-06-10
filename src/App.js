import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import EditMemberDialog from './pages/MembersList/memberDetailPage';
import './App.css';

const App = () => {
    const [members, setMembers] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', gender: 'Male', status: 'Inactive', email: 'john@example.com', verification: false, role: 'General', projects: '12/25', enrolled: '2019-05-12' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', gender: 'Female', status: 'Inactive', email: 'jane@example.com', verification: true, role: 'Admin', projects: '18/50', enrolled: '2017-08-07' },
    ]);

    const [trainees, setTrainees] = useState([
        { id: 1, name: 'Alice Brown', phone: '555-555-5555', gender: 'Female', status: 'Inactive', email: 'alice@example.com', verification: true, role: 'General', projects: '6/10', enrolled: '2020-01-15' },
        { id: 2, name: 'Bob Green', phone: '444-444-4444', gender: 'Male', status: 'Active', email: 'bob@example.com', verification: false, role: 'Admin', projects: '10/20', enrolled: '2021-06-20' },
    ]);

    const [assessments, setAssessments] = useState([]);

    const [selectedMember, setSelectedMember] = useState(null);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);

    const handleAddMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    const handleUpdateMember = (updatedMember) => {
        setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
    };

    const handleDeleteMember = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleEditMember = (member) => {
        setSelectedMember(member);
        setEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setSelectedMember(null);
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
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <Routes>
                    <Route path="/members" element={<MembersList members={members} onEdit={handleEditMember} onDelete={handleDeleteMember} />} />
                    <Route path="/add-member" element={<AddMemberPage onAdd={handleAddMember} />} />
                    <Route path="/member/:id" element={<MemberDetailPage members={members} onUpdate={handleUpdateMember} />} />
                    <Route path="/trainees" element={<TraineesList trainees={trainees} onUpdate={handleUpdateTrainee} onDelete={handleDeleteTrainee} />} />
                    <Route path="/add-trainee" element={<AddTraineePage onAdd={handleAddTrainee} />} />
                    <Route path="/trainee/:id" element={<TraineeDetailPage trainees={trainees} onUpdate={handleUpdateTrainee} />} />
                    <Route path="/assessments" element={<AssessmentsList assessments={assessments} onDelete={handleDeleteAssessment} />} />
                    <Route path="/add-assessment" element={<AddAssessmentPage members={members} trainees={trainees} onAdd={handleAddAssessment} />} />
                    <Route path="/assessment/:id" element={<AssessmentDetailPage assessments={assessments} onUpdate={handleUpdateAssessment} members={members} trainees={trainees} />} />
                    <Route path="/" element={<HomePage
                        totalMembers={totalMembers} activeMembers={activeMembers} inactiveMembers={inactiveMembers}
                        totalTrainees={totalTrainees} activeTrainees={activeTrainees} inactiveTrainees={inactiveTrainees}
                        assessments={assessments} />} />
                </Routes>
                {selectedMember && (
                    <EditMemberDialog
                        open={isEditDialogOpen}
                        onClose={handleCloseEditDialog}
                        member={selectedMember}
                        onSave={handleUpdateMember}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
