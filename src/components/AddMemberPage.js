import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Snackbar, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        margin: '20px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(2),
    }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddMemberPage = ({ onAdd }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMember = { id: Date.now(), name, phone, gender, status };
        onAdd(newMember);
        setName('');
        setPhone('');
        setGender('');
        setStatus('');
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Aggiungi Membro</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Telefono"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel>Genere</InputLabel>
                                <Select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <MenuItem value="Male">Maschio</MenuItem>
                                    <MenuItem value="Female">Femmina</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel>Stato</InputLabel>
                                <Select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <MenuItem value="Active">Attivo</MenuItem>
                                    <MenuItem value="Inactive">Inattivo</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
                                Aggiungi
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">
                        Salvato correttamente
                    </Alert>
                </Snackbar>
            </CardContent>
        </Card>
    );
};

export default AddMemberPage;
