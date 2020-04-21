import React from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import theme from "../theme";
import {ThemeProvider, Grid} from "@material-ui/core";

const Home = (props) => {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <div
                style={{
                display: "flex",
                flex:1,
                margin: 20,
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
                }}>
                    <Grid container elevation={6}>
                        <Grid item xs = {12} style={{display: "flex", justifyContent: "center", margin: 10}}>
                            <Link to="/addWord">
                                <Button variant = "contained" color = "primary" size = "medium" name="addButton">
                                    Add a word
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} style={{display: 'flex', justifyContent:"center", margin: 10}}>
                            <Link to="/getWord">
                                <Button variant = "contained" color = "primary" size = "medium" name="getButton">
                                    Get a word
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}
export default Home;