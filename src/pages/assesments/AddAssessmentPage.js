import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AddAssessmentPage = ({ members, trainees, onAdd }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [organizer, setOrganizer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAssessment = {
            id: Date.now(),
            name,
            date,
            members: selectedMembers.map(id => members.find(member => member.id === id)),
            organizer: trainees.find(trainee => trainee.id === organizer),
        };
        onAdd(newAssessment);
        navigate('/assessments');
    };

    const handleMemberChange = (event) => {
        setSelectedMembers(event.target.value);
    };

    return (
        <Card style={{ maxWidth: 400, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Aggiungi Assessment</Typography>
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
                        label="Data"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Membri</InputLabel>
                        <Select
                            multiple
                            value={selectedMembers}
                            onChange={handleMemberChange}
                            renderValue={(selected) => selected.map(id => members.find(member => member.id === id).name).join(', ')}
                        >
                            {members.map((member) => (
                                <MenuItem key={member.id} value={member.id}>
                                    {member.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Organizzatore</InputLabel>
                        <Select
                            value={organizer}
                            onChange={(e) => setOrganizer(e.target.value)}
                        >
                            {trainees.map((trainee) => (
                                <MenuItem key={trainee.id} value={trainee.id}>
                                    {trainee.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">Aggiungi</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddAssessmentPage;
