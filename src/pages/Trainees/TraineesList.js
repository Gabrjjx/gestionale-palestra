import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';

const TraineesList = ({ trainees, onDelete, onUpdate }) => {
    const handleStatusChange = (trainee, status) => {
        const updatedTrainee = { ...trainee, status };
        onUpdate(updatedTrainee);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Trainees List</Typography>
            <Button variant="contained" color="primary" component={Link} to="/add-trainee">
                Aggiungi Trainee
            </Button>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Genere</TableCell>
                            <TableCell>Stato</TableCell>
                            <TableCell>Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trainees.map((trainee) => (
                            <TableRow key={trainee.id}>
                                <TableCell>{trainee.name}</TableCell>
                                <TableCell>{trainee.phone}</TableCell>
                                <TableCell>{trainee.gender}</TableCell>
                                <TableCell>
                                    <FormControl fullWidth margin="normal">
                                        <Select
                                            value={trainee.status}
                                            onChange={(e) => handleStatusChange(trainee, e.target.value)}
                                        >
                                            <MenuItem value="Active">Attivo</MenuItem>
                                            <MenuItem value="Inactive">Inattivo</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" component={Link} to={`/trainee/${trainee.id}`}>
                                        Dettagli
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => onDelete(trainee.id)} style={{ marginLeft: '10px' }}>
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

export default TraineesList;
