import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const EditMemberDialog = ({ open, onClose, member, onSave }) => {
    const [editedMember, setEditedMember] = useState(member);

    useEffect(() => {
        setEditedMember(member);
    }, [member]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedMember({ ...editedMember, [name]: value });
    };

    const handleSave = () => {
        onSave(editedMember);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Member</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={editedMember.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={editedMember.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="phone"
                    label="Phone"
                    type="text"
                    fullWidth
                    value={editedMember.phone}
                    onChange={handleChange}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        name="role"
                        value={editedMember.role}
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
                    value={editedMember.projects}
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

export default EditMemberDialog;
