import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const AddPersonPage = ({ onAddMember, onAddTrainee }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = { id: Date.now(), name, phone, gender, status };
        if (role === 'member') {
            onAddMember(newPerson);
        } else if (role === 'trainee') {
            onAddTrainee(newPerson);
        }
        setName('');
        setPhone('');
        setGender('');
        setStatus('');
        setRole('');
    };

    return (
        <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Aggiungi Persona</Typography>
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
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="Active">Attivo</MenuItem>
                            <MenuItem value="Inactive">Inattivo</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Ruolo</InputLabel>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value="member">Membro</MenuItem>
                            <MenuItem value="trainee">Trainee</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Aggiungi</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddPersonPage;
