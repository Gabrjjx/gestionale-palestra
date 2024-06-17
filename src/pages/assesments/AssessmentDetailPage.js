import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AssessmentDetailPage = ({ assessments, members, trainees, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [assessment, setAssessment] = useState(null);

    useEffect(() => {
        const assessmentData = assessments.find(a => a.id === parseInt(id));
        if (assessmentData) {
            setAssessment(assessmentData);
        }
    }, [id, assessments]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssessment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMembersChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setAssessment(prevState => ({
            ...prevState,
            members: value.map(id => members.find(m => m.id === parseInt(id)))
        }));
    };

    const handleTraineesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setAssessment(prevState => ({
            ...prevState,
            trainees: value.map(id => trainees.find(t => t.id === parseInt(id)))
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(assessment);
        navigate('/assessments');
    };

    if (!assessment) return <Typography>Loading...</Typography>;

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Modifica Assessment</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome"
                    name="name"
                    value={assessment.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Data"
                    type="date"
                    name="date"
                    value={assessment.date}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Membri</InputLabel>
                    <Select
                        multiple
                        native
                        value={assessment.members ? assessment.members.map(m => m.id) : []}
                        onChange={handleMembersChange}
                        inputProps={{
                            id: 'select-multiple-members',
                        }}
                    >
                        {members.map(member => (
                            <option key={member.id} value={member.id}>
                                {member.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Trainees</InputLabel>
                    <Select
                        multiple
                        native
                        value={assessment.trainees ? assessment.trainees.map(t => t.id) : []}
                        onChange={handleTraineesChange}
                        inputProps={{
                            id: 'select-multiple-trainees',
                        }}
                    >
                        {trainees.map(trainee => (
                            <option key={trainee.id} value={trainee.id}>
                                {trainee.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Salva</Button>
            </form>
        </Paper>
    );
};

export default AssessmentDetailPage;
