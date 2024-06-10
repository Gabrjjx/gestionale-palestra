import React, { useState } from 'react';
import {
    Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Typography, Button, Grid, TextField, Menu, MenuItem, IconButton
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const MembersList = ({ members, onEdit, onDelete }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

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
        onDelete(selectedMember.id);
        handleClose();
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRoleFilterChange = (role) => {
        setRoleFilter(role);
    };

    const filteredMembers = members.filter(member =>
        (roleFilter === 'All' || member.role === roleFilter) &&
        (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>Members</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Button
                        variant="contained"
                        startIcon={<FilterListIcon />}
                        onClick={() => handleRoleFilterChange('All')}
                    >
                        View all
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleRoleFilterChange('General')}
                    >
                        General
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleRoleFilterChange('Admin')}
                    >
                        Admin
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleRoleFilterChange('Creator')}
                    >
                        Creator
                    </Button>
                </Grid>
                <Grid item>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: <SearchIcon />
                        }}
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Projects</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Enrolled</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMembers.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                            <Avatar alt={member.name} src={member.avatar} />
                                        </Grid>
                                        <Grid item style={{ marginLeft: '10px' }}>
                                            {member.name}
                                            <Typography variant="body2" color="textSecondary">
                                                {member.email}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>{member.projects}</TableCell>
                                <TableCell>{member.status}</TableCell>
                                <TableCell>{new Date(member.enrolled).toLocaleDateString()}</TableCell>
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
                                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
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
