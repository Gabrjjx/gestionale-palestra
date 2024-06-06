import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, MenuItem } from '@mui/material';

const EditTraineeDialog = ({ open, onClose, trainee, onSave }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [verification, setVerification] = useState(false);

    useEffect(() => {
        if (trainee) {
            setName(trainee.name);
            setPhone(trainee.phone);
            setEmail(trainee.email);
            setGender(trainee.gender);
            setStatus(trainee.status);
            setVerification(trainee.verification);
        }
    }, [trainee]);

    const handleSave = () => {
        const updatedTrainee = {
            ...trainee,
            name,
            phone,
            email,
            gender,
            status,
            verification,
        };
        onSave(updatedTrainee);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Modifica Trainee</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Modifica i dettagli del trainee e salva le modifiche.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nome"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Telefono"
                    type="text"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Genere"
                    select
                    fullWidth
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <MenuItem value="Male">Maschio</MenuItem>
                    <MenuItem value="Female">Femmina</MenuItem>
                </TextField>
                <TextField
                    margin="dense"
                    label="Status"
                    select
                    fullWidth
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <MenuItem value="Active">Attivo</MenuItem>
                    <MenuItem value="Inactive">Inattivo</MenuItem>
                </TextField>
                <TextField
                    margin="dense"
                    label="Verifica"
                    select
                    fullWidth
                    value={verification}
                    onChange={(e) => setVerification(e.target.value)}
                >
                    <MenuItem value={true}>Verified</MenuItem>
                    <MenuItem value={false}>Unverified</MenuItem>
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Annulla
                </Button>
                <Button onClick={handleSave} color="primary">
                    Salva
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTraineeDialog;
