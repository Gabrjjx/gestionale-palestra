import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const AddCoursePage = ({ onAddCourse }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = { id: Date.now(), name, description, startDate, endDate };
        onAddCourse(newCourse);
        setName('');
        setDescription('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Aggiungi Corso</Typography>
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
                        label="Descrizione"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Data di Inizio"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <TextField
                        label="Data di Fine"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>Aggiungi</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddCoursePage;
