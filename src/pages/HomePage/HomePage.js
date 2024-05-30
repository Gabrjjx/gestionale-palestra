import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';


const HomePage = ({ totalMembers, activeMembers, inactiveMembers, totalTrainees, activeTrainees, inactiveTrainees, assessments }) => {
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
            </Grid>
        </div>
    );
};

export default HomePage;
