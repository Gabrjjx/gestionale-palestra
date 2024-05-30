import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const MemberDetailPage = ({ members, onUpdate }) => {
    const { id } = useParams();
    const member = members.find(m => m.id === parseInt(id));
    const [name, setName] = useState(member.name);
    const [phone, setPhone] = useState(member.phone);
    const [gender, setGender] = useState(member.gender);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMember = { ...member, name, phone, gender };
        onUpdate(updatedMember);
        navigate('/members');
    };

    return (
        <Card style={{ maxWidth: 400, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Modifica Membro</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Telefono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Genere</InputLabel>
                        <Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value="Male">Maschio</MenuItem>
                            <MenuItem value="Female">Femmina</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">Salva</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default MemberDetailPage;
