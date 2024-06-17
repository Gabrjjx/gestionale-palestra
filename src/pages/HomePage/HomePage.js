import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const HomePage = ({ members, trainees, assessments }) => {
    const [memberData, setMemberData] = useState([]);
    const [traineeData, setTraineeData] = useState([]);
    const [assessmentData, setAssessmentData] = useState([]);

    useEffect(() => {
        setMemberData(members);
        setTraineeData(trainees);
        setAssessmentData(assessments);
    }, [members, trainees, assessments]);

    const totalMembers = memberData.length;
    const activeMembers = memberData.filter(member => member.status === 'Active').length;
    const inactiveMembers = memberData.filter(member => member.status === 'Inactive').length;

    const totalTrainees = traineeData.length;
    const activeTrainees = traineeData.filter(trainee => trainee.status === 'Active').length;
    const inactiveTrainees = traineeData.filter(trainee => trainee.status === 'Inactive').length;

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
        {
            label: 'Trainees',
            data: traineeData.map((trainee, index) => index + 1), // Adjust with real data
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
        },
    ],
};

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ flexGrow: 1, padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Totali</Typography>
                            <Typography variant="h5">{totalMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Attivi</Typography>
                            <Typography variant="h5">{activeMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Membri Inattivi</Typography>
                            <Typography variant="h5">{inactiveMembers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Totali</Typography>
                            <Typography variant="h5">{totalTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Attivi</Typography>
                            <Typography variant="h5">{activeTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Trainees Inattivi</Typography>
                            <Typography variant="h5">{inactiveTrainees}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Prossimi Assessments</Typography>
                            {assessmentData.slice(0, 3).map(assessment => (
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
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Trainees</Typography>
                            <Line data={data} options={options} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Lista Trainees</Typography>
                            <List>
                                {traineeData.slice(0, 4).map(trainee => (
                                    <ListItem key={trainee.id}>
                                        <ListItemAvatar>
                                            <Avatar>{trainee.name.charAt(0)}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={trainee.name}
                                            secondary={`${trainee.phone} - ${trainee.gender} - ${trainee.status}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;
