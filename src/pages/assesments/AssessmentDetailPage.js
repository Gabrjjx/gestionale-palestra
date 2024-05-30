import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';

const AssessmentDetailPage = ({ assessments, onUpdate, members, trainees }) => {
    const { id } = useParams();
    const assessment = assessments.find(a => a.id === parseInt(id));
    const [name, setName] = useState(assessment.name);
    const [date, setDate] = useState(assessment.date);
    const [selectedMembers, setSelectedMembers] = useState(assessment.members.map(member => member.id));
    const [organizer, setOrganizer] = useState(assessment.organizer.id);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAssessment = {
            ...assessment,
            name,
            date,
            members: selectedMembers.map(id => members.find(member => member.id === id)),
            organizer: trainees.find(trainee => trainee.id === organizer),
        };
        onUpdate(updatedAssessment);
        navigate('/assessments');
    };

    const handleMemberChange = (event) => {
        setSelectedMembers(event.target.value);
    };

    return (
        <Card style={{ maxWidth: 600, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Modifica Assessment</Typography>
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
                                    <Checkbox checked={selectedMembers.indexOf(member.id) > -1} />
                                    <ListItemText primary={member.name} />
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
                    <Button type="submit" variant="contained" color="primary">Salva</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AssessmentDetailPage;
