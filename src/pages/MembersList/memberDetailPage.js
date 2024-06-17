import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';

const MemberDetailPage = ({ members, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const memberData = members.find(m => m.id === parseInt(id));
        if (memberData) {
            setMember(memberData);
        }
    }, [id, members]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(member);
        navigate('/members');
    };

    if (!member) return <Typography>Loading...</Typography>;

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Modifica Membro</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome"
                    name="name"
                    value={member.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Telefono"
                    name="phone"
                    value={member.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={member.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Genere"
                    name="gender"
                    value={member.gender}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Status"
                    name="status"
                    value={member.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Salva</Button>
            </form>
        </Paper>
    );
};

export default MemberDetailPage;
