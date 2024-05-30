import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AssessmentsList = ({ assessments, onDelete }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Assessments List</Typography>
            <Button variant="contained" color="primary" component={Link} to="/add-assessment">
                Aggiungi Assessment
            </Button>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Membri</TableCell>
                            <TableCell>Organizzatore</TableCell>
                            <TableCell>Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assessments.map((assessment) => (
                            <TableRow key={assessment.id}>
                                <TableCell>{assessment.name}</TableCell>
                                <TableCell>{new Date(assessment.date).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <ul>
                                        {assessment.members.map(member => (
                                            <li key={member.id}>{member.name}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>{assessment.organizer.name}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" component={Link} to={`/assessment/${assessment.id}`}>
                                        Dettagli
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => onDelete(assessment.id)} style={{ marginLeft: '10px' }}>
                                        Elimina
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AssessmentsList;
