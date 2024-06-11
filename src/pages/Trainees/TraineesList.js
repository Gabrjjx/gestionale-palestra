import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TraineesList = ({ trainees, onUpdate, onDelete }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTrainee, setSelectedTrainee] = useState(null);

    const handleClick = (event, trainee) => {
        setAnchorEl(event.currentTarget);
        setSelectedTrainee(trainee);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedTrainee(null);
    };

    const handleEdit = () => {
        onUpdate(selectedTrainee);
        handleClose();
    };

    const handleDelete = () => {
        onDelete(selectedTrainee.id);
        handleClose();
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>Lista Trainees</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Genere</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trainees.map((trainee) => (
                            <TableRow key={trainee.id}>
                                <TableCell>{trainee.name}</TableCell>
                                <TableCell>{trainee.phone}</TableCell>
                                <TableCell>{trainee.email}</TableCell>
                                <TableCell>{trainee.gender}</TableCell>
                                <TableCell>{trainee.status}</TableCell>
                                <TableCell>
                                    <IconButton onClick={(event) => handleClick(event, trainee)}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleEdit}>Modifica</MenuItem>
                                        <MenuItem onClick={handleDelete}>Elimina</MenuItem>
                                    </Menu>
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
