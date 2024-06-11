import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AddMemberDialog = ({ open, onClose, onSave }) => {
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        status: 'Inactive',
        role: 'General',
        projects: '',
        verification: false,
        avatar: '',
        enrolled: new Date().toISOString().split('T')[0]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMember({ ...newMember, [name]: value });
    };

    const handleSave = () => {
        onSave(newMember);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Member</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={newMember.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={newMember.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="phone"
                    label="Phone"
                    type="text"
                    fullWidth
                    value={newMember.phone}
                    onChange={handleChange}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        name="role"
                        value={newMember.role}
                        onChange={handleChange}
                    >
                        <MenuItem value="General">General</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Creator">Creator</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    name="projects"
                    label="Projects"
                    type="text"
                    fullWidth
                    value={newMember.projects}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddMemberDialog;
