import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Toolbar, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ClassIcon from '@mui/icons-material/Class';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#3f51b5', // Background color of the sidebar
        color: '#fff', // Text color
    },
});

const ToolbarContainer = styled(Toolbar)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    backgroundColor: '#303f9f', // Background color of the toolbar
});

const Logo = styled(Typography)({
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
});

const ListItemStyled = styled(ListItem)({
    color: '#fff',
    '&:hover': {
        backgroundColor: '#303f9f', // Hover color
    },
});

const ListItemIconStyled = styled(ListItemIcon)({
    color: '#fff',
});

const Sidebar = ({ onLogout }) => {
    return (
        <DrawerContainer
            variant="permanent"
        >
            <ToolbarContainer>
                <Logo variant="h6" noWrap component="div">
                    Gym Management
                </Logo>
            </ToolbarContainer>
            <Divider />
            <Typography variant="subtitle1" style={{ padding: '10px 16px', color: '#fff' }}>Dashboard</Typography>
            <List>
                <ListItemStyled button component={Link} to="/">
                    <ListItemIconStyled>
                        <DashboardIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Dashboard" />
                </ListItemStyled>
            </List>
            <Divider />
            <Typography variant="subtitle1" style={{ padding: '10px 16px', color: '#fff' }}>Menu</Typography>
            <List>
                <ListItemStyled button component={Link} to="/members">
                    <ListItemIconStyled>
                        <GroupIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Members" />
                </ListItemStyled>
                <ListItemStyled button component={Link} to="/trainees">
                    <ListItemIconStyled>
                        <GroupIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Trainees" />
                </ListItemStyled>
                <ListItemStyled button component={Link} to="/assessments">
                    <ListItemIconStyled>
                        <AssessmentIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Assessments" />
                </ListItemStyled>
            </List>
            <Divider />
            <Typography variant="subtitle1" style={{ padding: '10px 16px', color: '#fff' }}>Courses</Typography>
            <List>
                <ListItemStyled button component={Link} to="/add-course">
                    <ListItemIconStyled>
                        <ClassIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Aggiungi Corso" />
                </ListItemStyled>
            </List>
            <Divider />
            <Typography variant="subtitle1" style={{ padding: '10px 16px', color: '#fff' }}>Personal</Typography>
            <List>
                <ListItemStyled button component={Link} to="/add-person">
                    <ListItemIconStyled>
                        <PersonAddIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Aggiungi Persona" />
                </ListItemStyled>
                <ListItemStyled button onClick={onLogout}>
                    <ListItemIconStyled>
                        <LockIcon />
                    </ListItemIconStyled>
                    <ListItemText primary="Logout" />
                </ListItemStyled>
            </List>
        </DrawerContainer>
    );
};

export default Sidebar;
