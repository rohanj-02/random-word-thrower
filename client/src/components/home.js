import React from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import theme from "../theme";
import {ThemeProvider, Grid} from "@material-ui/core";

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: "admin",
            wordList: []
        };
    }

    async componentDidMount(){
        if(this.state.wordList.length <= 0){
            this.callApi()
            .then((res) => {
                this.setState({wordList : res});
            })
            .catch(err => console.log(err));
        }
    }
    
    callApi = async() => {
        const res = await fetch('/api/get');
        const body = await res.json();
        console.log(body);
        if(res.status !== 200) throw Error(body.message);
        return body;
    }

    render(){
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
                                <Link to={{
                                    pathname: "/getWord",
                                    state: this.state
                                }}>
                                    <Button variant = "contained" color = "primary" size = "medium" name="getButton">
                                        Get a word
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} style={{display: 'flex', justifyContent:"center", margin: 10}}>
                                <Link to={{
                                    pathname: "/listWord",
                                    state: this.state
                                }}>
                                    <Button variant = "contained" color = "primary" size = "medium" name="listButton">
                                        Check Your List
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}
export default Home;