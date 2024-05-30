import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const TraineeDetailPage = ({ trainees, onUpdate }) => {
    const { id } = useParams();
    const trainee = trainees.find(t => t.id === parseInt(id));
    const [name, setName] = useState(trainee.name);
    const [phone, setPhone] = useState(trainee.phone);
    const [gender, setGender] = useState(trainee.gender);
    const [status, setStatus] = useState(trainee.status);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTrainee = { ...trainee, name, phone, gender, status };
        onUpdate(updatedTrainee);
        navigate('/trainees');
    };

    return (
        <Card style={{ maxWidth: 400, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Modifica Trainee</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Telefono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Genere</InputLabel>
                        <Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value="Male">Maschio</MenuItem>
                            <MenuItem value="Female">Femmina</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Stato</InputLabel>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="Active">Attivo</MenuItem>
                            <MenuItem value="Inactive">Inattivo</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">Salva</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default TraineeDetailPage;
