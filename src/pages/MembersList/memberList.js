import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MembersList = ({ members, onEdit, onDelete }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClick = (event, member) => {
        setAnchorEl(event.currentTarget);
        setSelectedMember(member);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMember(null);
    };

    const handleEdit = () => {
        onEdit(selectedMember);
        handleClose();
    };

    const handleDelete = () => {
        onDelete(selectedMember);
        handleClose();
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>Membri</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Numero</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Genere</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Verifica</TableCell>
                            <TableCell>Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell><Avatar alt={member.name} src={member.avatar} /></TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.phone}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>{member.gender}</TableCell>
                                <TableCell>{member.status}</TableCell>
                                <TableCell>{member.verification ? 'Verified' : 'Unverified'}</TableCell>
                                <TableCell>
                                    <IconButton onClick={(event) => handleClick(event, member)}>
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

export default MembersList;
