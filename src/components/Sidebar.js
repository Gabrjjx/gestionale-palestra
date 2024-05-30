import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LockIcon from '@mui/icons-material/Lock';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Sidebar = () => {
    return (
        <div style={{ width: '240px', background: '#F4F4F4', height: '100vh', paddingTop: '20px' }}>
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
