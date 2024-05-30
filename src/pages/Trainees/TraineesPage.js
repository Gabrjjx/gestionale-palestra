import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AddTraineePage = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrainee = { id: Date.now(), name, phone, gender, status: 'Inactive' };
        onAdd(newTrainee);
        navigate('/trainees');
    };

    return (
        <Card style={{ maxWidth: 400, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Aggiungi Trainee</Typography>
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
                    <Button type="submit" variant="contained" color="primary">Aggiungi</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddTraineePage;
