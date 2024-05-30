import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Trainees',
            data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
};

const HomePage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Trainees</Typography>
                            <Typography variant="h5">32</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Active Trainees</Typography>
                            <Typography variant="h5">20</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Inactive Trainees</Typography>
                            <Typography variant="h5">12</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Card style={{ marginTop: '20px' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Trainees</Typography>
                    <Line data={data} />
                </CardContent>
            </Card>
        </div>
    );
};

export default HomePage;
