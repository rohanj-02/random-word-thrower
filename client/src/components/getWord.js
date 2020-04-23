import React from "react";
import theme from "../theme";
import NavBar from "./NavBar";
import {
    Typography,
    Button,
    ThemeProvider,
    Grid
    } from "@material-ui/core";

const wordStyleBefore = {
    justifyContent:"center",
    display:"flex"
}
class getWord extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            wordList: [{meaning:"",sentence:"",word:""}],
            selectedWord: 0,
            showMeaning: false
        }
    }

    componentDidMount(){
            this.setState({wordList: this.props.location.state.wordList});
            const length = this.props.location.state.wordList.length;
            let randomNumber = Math.random() * 10000000000;
            randomNumber = parseInt(randomNumber) % length;
            this.setState({selectedWord: randomNumber});
    }

    anotherWord = (event) =>{
        const length = this.state.wordList.length;
        let randomNumber = Math.random() * 10000000000;
        randomNumber = parseInt(randomNumber) % length;
        this.setState({
            selectedWord : randomNumber,
            showMeaning : false    
        });
    }

    handleShowMeaning = (event) => {
        this.setState({showMeaning: true});
    }

    render(){

        const {word, meaning, sentence} = this.state.wordList[this.state.selectedWord];
        const showMeaning = this.state.showMeaning;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <NavBar wordList ={ this.props.location.state.wordList}/>
                    <div 
                        style={{
                            justifyContent:"center",
                            display:"flex",
                            margin:20,
                            padding:20
                    }}>
                        <Grid container>
                            <Grid item xs={12} 
                                style={showMeaning ? {margin: 3,
                                    padding: 3} :wordStyleBefore}>
                                <Typography style={{
                                    font:"Roboto", 
                                    fontWeight:"bold", 
                                    fontSize:"x-large"}}>{word}</Typography>
                            </Grid>
                            {showMeaning && <Grid item xs={12}>
                                <Typography variant="subtitle1" 
                                    style={{
                                        font:"Roboto", 
                                        fontSize:"medium",
                                        margin: 3,
                                        padding: 3
                                    }}>{meaning}</Typography>        
                            </Grid>}
                            {showMeaning && <Grid item xs={12}>
                                <Typography variant="subtitle1" 
                                    style={{
                                        fontStyle:"italic",
                                        font:"Roboto", 
                                        fontSize:"medium",
                                        fontWeight:"lighter",
                                        margin: 3,
                                        padding: 3
                                    }}>{sentence}</Typography>        
                            </Grid>}
                            {!showMeaning && <Grid item xs={12} 
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    position: "absolute",
                                    bottom: "20%",
                                    left:"0",
                                    right:"0",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                }}>
                                <Button color="primary" variant="contained" onClick={this.handleShowMeaning}>Show Meaning</Button>
                            </Grid>}
                            <Grid item xs={12} 
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    position: "absolute",
                                    bottom: "10%",
                                    left:"0",
                                    right:"0",
                                    marginLeft:"auto",
                                    marginRight:"auto"
                                }}>
                                <Button color="primary" variant="contained" onClick={this.anotherWord}>Get Another Word</Button>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

export default getWord;