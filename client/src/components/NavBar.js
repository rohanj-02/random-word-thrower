import React from "react";
import {
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Button,
    ThemeProvider} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import theme from "../theme";

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            anything: "",
        }
    }


    render(){
        return(
            <ThemeProvider theme={theme}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge = "start">
                            <MenuIcon style={{color: "#ffffff"}}/>
                        </IconButton>
                        <Typography variant="subtitle1" style={{flexGrow: 1}}>
                            Word Thrower
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
