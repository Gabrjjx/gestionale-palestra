import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';

const MembersList = ({ members, onUpdate }) => {
    const handleStatusChange = (member, status) => {
        const updatedMember = { ...member, status };
        onUpdate(updatedMember);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Members List</Typography>
            <Button variant="contained" color="primary" component={Link} to="/add-member">
                Aggiungi Membro
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
                        {members.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.phone}</TableCell>
                                <TableCell>{member.gender}</TableCell>
                                <TableCell>
                                    <FormControl fullWidth margin="normal">
                                        <Select
                                            value={member.status}
                                            onChange={(e) => handleStatusChange(member, e.target.value)}
                                        >
                                            <MenuItem value="Active">Attivo</MenuItem>
                                            <MenuItem value="Inactive">Inattivo</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" component={Link} to={`/member/${member.id}`}>
                                        Dettagli
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

export default MembersList;
