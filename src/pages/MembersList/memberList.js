import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox, Button, TextField, Menu, MenuItem, IconButton, Select } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MembersList = ({ members, onUpdate, onDelete }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [editMember, setEditMember] = useState(null);

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorEl(null);
    };

    const handleFilterChange = (status) => {
        setFilter(status);
        handleFilterClose();
    };

    const handleSelectMember = (id) => {
        setSelectedMembers((prev) =>
            prev.includes(id) ? prev.filter(memberId => memberId !== id) : [...prev, id]
        );
    };

    const handleEditClick = (member) => {
        setEditMember(member);
    };

    const handleEditChange = (field, value) => {
        setEditMember({
            ...editMember,
            [field]: value
        });
    };

    const handleEditSave = () => {
        onUpdate(editMember);
        setEditMember(null);
    };

    const handleDeleteSelected = () => {
        selectedMembers.forEach(id => onDelete(id));
        setSelectedMembers([]);
    };

    const filteredMembers = members.filter(member => {
        if (filter === 'All') return true;
        return member.status === filter;
    }).filter(member => member.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>Members</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <TextField
                    label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    variant="outlined"
                    style={{ marginRight: '10px' }}
                />
                <Button
                    aria-controls="filter-menu"
                    aria-haspopup="true"
                    onClick={handleFilterClick}
                    variant="outlined"
                    startIcon={<FilterListIcon />}
                >
                    Filter
                </Button>
                <Menu
                    id="filter-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleFilterClose}
                >
                    <MenuItem onClick={() => handleFilterChange('All')}>All</MenuItem>
                    <MenuItem onClick={() => handleFilterChange('Active')}>Active</MenuItem>
                    <MenuItem onClick={() => handleFilterChange('Inactive')}>Inactive</MenuItem>
                </Menu>
                {selectedMembers.length > 0 && (
                    <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={handleDeleteSelected}
                    >
                        Delete Selected
                    </Button>
                )}
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selectedMembers.length > 0 && selectedMembers.length < members.length}
                                    checked={members.length > 0 && selectedMembers.length === members.length}
                                    onChange={(e) => setSelectedMembers(e.target.checked ? members.map(member => member.id) : [])}
                                />
                            </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMembers.map((member) => (
                            <TableRow key={member.id} selected={selectedMembers.includes(member.id)}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedMembers.includes(member.id)}
                                        onChange={() => handleSelectMember(member.id)}
                                    />
                                </TableCell>
                                <TableCell>
                                    {editMember && editMember.id === member.id ? (
                                        <TextField
                                            value={editMember.name}
                                            onChange={(e) => handleEditChange('name', e.target.value)}
                                        />
                                    ) : (
                                        member.name
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editMember && editMember.id === member.id ? (
                                        <TextField
                                            value={editMember.phone}
                                            onChange={(e) => handleEditChange('phone', e.target.value)}
                                        />
                                    ) : (
                                        member.phone
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editMember && editMember.id === member.id ? (
                                        <Select
                                            value={editMember.status}
                                            onChange={(e) => handleEditChange('status', e.target.value)}
                                        >
                                            <MenuItem value="Active">Active</MenuItem>
                                            <MenuItem value="Inactive">Inactive</MenuItem>
                                        </Select>
                                    ) : (
                                        <span style={{
                                            color: member.status === 'Active' ? 'green' : member.status === 'Inactive' ? 'red' : 'orange'
                                        }}>
                                            {member.status}
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editMember && editMember.id === member.id ? (
                                        <Button onClick={handleEditSave}>Save</Button>
                                    ) : (
                                        <>
                                            <IconButton onClick={() => handleEditClick(member)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(member.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default MembersList;
