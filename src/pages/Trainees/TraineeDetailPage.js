import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';

const TraineeDetailPage = ({ trainees, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trainee, setTrainee] = useState(null);

    useEffect(() => {
        const traineeData = trainees.find(t => t.id === parseInt(id));
        if (traineeData) {
            setTrainee(traineeData);
        }
    }, [id, trainees]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(trainee);
        navigate('/trainees');
    };

    if (!trainee) return <Typography>Loading...</Typography>;

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Modifica Trainee</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome"
                    name="name"
                    value={trainee.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Telefono"
                    name="phone"
                    value={trainee.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={trainee.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Genere"
                    name="gender"
                    value={trainee.gender}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Status"
                    name="status"
                    value={trainee.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Salva</Button>
            </form>
        </Paper>
    );
};

export default TraineeDetailPage;
