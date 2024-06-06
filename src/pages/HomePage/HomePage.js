import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MembersList from '../MembersList/memberList';
import TraineesList from '../Trainees/TraineesList';
import EditMemberDialog from '../MembersList/memberDetailPage';
import EditTraineeDialog from '../Trainees/TraineeDetailPage';

const HomePage = ({ totalMembers, activeMembers, inactiveMembers, totalTrainees, activeTrainees, inactiveTrainees, assessments }) => {
    const [members, setMembers] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', gender: 'Male', status: 'Active', verification: true, avatar: 'path/to/avatar1.jpg' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', gender: 'Female', status: 'Inactive', verification: false, avatar: 'path/to/avatar2.jpg' },
    ]);

    const [trainees, setTrainees] = useState([
        { id: 1, name: 'Alice Brown', phone: '555-555-5555', email: 'alice@example.com', gender: 'Female', status: 'Active', verification: true, avatar: 'path/to/avatar3.jpg' },
        { id: 2, name: 'Bob Green', phone: '444-444-4444', email: 'bob@example.com', gender: 'Male', status: 'Inactive', verification: false, avatar: 'path/to/avatar4.jpg' },
    ]);

    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [isEditMemberDialogOpen, setEditMemberDialogOpen] = useState(false);
    const [isEditTraineeDialogOpen, setEditTraineeDialogOpen] = useState(false);

    const handleEditMember = (member) => {
        setSelectedMember(member);
        setEditMemberDialogOpen(true);
    };

    const handleDeleteMember = (member) => {
        setMembers(members.filter(m => m.id !== member.id));
    };

    const handleEditTrainee = (trainee) => {
        setSelectedTrainee(trainee);
        setEditTraineeDialogOpen(true);
    };

    const handleDeleteTrainee = (trainee) => {
        setTrainees(trainees.filter(t => t.id !== trainee.id));
    };

    const handleSaveMember = (updatedMember) => {
        setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
        setEditMemberDialogOpen(false);
    };

    const handleSaveTrainee = (updatedTrainee) => {
        setTrainees(trainees.map(trainee => (trainee.id === updatedTrainee.id ? updatedTrainee : trainee)));
        setEditTraineeDialogOpen(false);
    };

    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <Typography variant="h4" className="dashboard-title">Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#f0f8ff' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Totali</Typography>
                            <Typography variant="h5">{totalMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#e0f7fa' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Attivi</Typography>
                            <Typography variant="h5">{activeMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffe0b2' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Inattivi</Typography>
                            <Typography variant="h5">{inactiveMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#f0f8ff' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Totali</Typography>
                            <Typography variant="h5">{totalTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#e0f7fa' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Attivi</Typography>
                            <Typography variant="h5">{activeTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffe0b2' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Inattivi</Typography>
                            <Typography variant="h5">{inactiveTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card className="card" style={{ backgroundColor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Prossimi Assessments</Typography>
                            {assessments.slice(0, 3).map(assessment => (
                                <div key={assessment.id} style={{ marginBottom: '10px' }}>
                                    <Typography variant="subtitle1">{assessment.name}</Typography>
                                    <Typography variant="body2">{new Date(assessment.date).toLocaleDateString()}</Typography>
                                    <Typography variant="body2">
                                        Membri: {assessment.members.map(member => member.name).join(', ')}
                                    </Typography>
                                    <Typography variant="body2">
                                        Organizzatore: {assessment.organizer.name}
                                    </Typography>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <MembersList members={members} onEdit={handleEditMember} onDelete={handleDeleteMember} />
                </Grid>
                <Grid item xs={12}>
                    <TraineesList trainees={trainees} onEdit={handleEditTrainee} onDelete={handleDeleteTrainee} />
                </Grid>
            </Grid>
            {selectedMember && (
                <EditMemberDialog
                    open={isEditMemberDialogOpen}
                    onClose={() => setEditMemberDialogOpen(false)}
                    member={selectedMember}
                    onSave={handleSaveMember}
                />
            )}
            {selectedTrainee && (
                <EditTraineeDialog
                    open={isEditTraineeDialogOpen}
                    onClose={() => setEditTraineeDialogOpen(false)}
                    trainee={selectedTrainee}
                    onSave={handleSaveTrainee}
                />
            )}
        </div>
    );
};

export default HomePage;
