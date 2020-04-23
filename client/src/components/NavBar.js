import React from "react";
import {
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Button,
    ThemeProvider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import theme from "../theme";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {Link} from "react-router-dom";

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sideBar: false,
        }
    }

    toggleSideBar = () => {
        this.setState({sideBar: !this.state.sideBar});
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Drawer anchor="left" open={this.state.sideBar} onClose = {this.toggleSideBar}>
                <div
                    role="presentation"
                    >
                    <List>
                        <Link to={{
                                    pathname: "/addWord",
                                    state: {wordList: this.props.wordList}
                                }} className="text-link">
                            <ListItem button>
                                <ListItemIcon><AddCircleOutlineIcon/></ListItemIcon>
                                <ListItemText primary="Add Word"/>
                            </ListItem>    
                        </Link>
                        <Link to={{
                                    pathname: "/getWord",
                                    state: {wordList: this.props.wordList}
                                }} className="text-link">
                            <ListItem button>
                                <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
                                <ListItemText primary="Get Word"/>
                            </ListItem>    
                        </Link>
                        <Link to={{
                                    pathname: "/listWord",
                                    state: {wordList: this.props.wordList}
                                }} className="text-link">
                            <ListItem button>
                                <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                <ListItemText primary="List Word"/>
                            </ListItem>    
                        </Link>
                    </List>
                    </div>
                </Drawer> 
                 <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge = "start" onClick={this.toggleSideBar}>
                            <MenuIcon style={{color: "#ffffff"}}/>
                        </IconButton>                        
                        <Typography variant="subtitle1" style={{flexGrow: 1}}>
                            <Link to={{
                                pathName:"/",
                                state: {wordList: this.props.wordList}
                            }} className="text-link">
                            Word Thrower
                            </Link>
                        </Typography>
                        <div style={{alignItems: "right"}}>
                            <ThemeProvider theme={theme}>
                                <Button color="secondary" variant="contained">
                                    <Typography variant="subtitle1">
                                    Login                            
                                    </Typography>
                                </Button>
                            </ThemeProvider>
                        </div>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
        );
    }
}

export default NavBar;
