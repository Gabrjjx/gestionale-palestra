import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AssessmentsList = ({ assessments }) => {
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/assessment/${id}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Organizzatore</TableCell>
                        <TableCell>Azioni</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assessments.map(assessment => (
                        <TableRow key={assessment.id}>
                            <TableCell>{assessment.name}</TableCell>
                            <TableCell>{new Date(assessment.date).toLocaleDateString()}</TableCell>
                            <TableCell>{assessment.organizer.name}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleViewDetails(assessment.id)}>Dettagli</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AssessmentsList;
