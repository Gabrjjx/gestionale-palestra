import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = ({ totalMembers, activeMembers, inactiveMembers, totalTrainees, activeTrainees, inactiveTrainees, assessments }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Membri Totali</Typography>
                                    <Typography variant="h5">{totalMembers}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Membri Attivi</Typography>
                                    <Typography variant="h5">{activeMembers}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Membri Inattivi</Typography>
                                    <Typography variant="h5">{inactiveMembers}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Trainees Totali</Typography>
                                    <Typography variant="h5">{totalTrainees}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Trainees Attivi</Typography>
                                    <Typography variant="h5">{activeTrainees}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Trainees Inattivi</Typography>
                                    <Typography variant="h5">{inactiveTrainees}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Upcoming Assessments</Typography>
                            {assessments.slice(0, 3).map(assessment => (
                                <div key={assessment.id} style={{ marginBottom: '10px' }}>
                                    <Typography variant="subtitle1">{assessment.name}</Typography>
                                    <Typography variant="body2">{new Date(assessment.date).toLocaleDateString()}</Typography>
                                    <Typography variant="body2">
                                        {assessment.members.map(member => member.name).join(', ')}
                                    </Typography>
                                </div>
                            ))}
                            <Button variant="contained" color="primary" component={Link} to="/assessments" style={{ marginTop: '10px' }}>
                                View All
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;
