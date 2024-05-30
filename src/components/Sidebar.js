import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LockIcon from '@mui/icons-material/Lock';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import logo from '../Creami_gym_management_logo.jpg'; // Assicurati che il percorso sia corretto

const Sidebar = () => {
    return (
        <div style={{ width: '240px', background: '#F4F4F4', height: '100vh', paddingTop: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={logo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
            </div>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/members">
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Members" />
                </ListItem>
                <ListItem button component={Link} to="/trainees">
                    <ListItemIcon>
                        <FitnessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trainees" />
                </ListItem>
                <ListItem button component={Link} to="/assessments">
                    <ListItemIcon>
                        <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assessments" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                    <ListItemIcon>
                        <LockIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
