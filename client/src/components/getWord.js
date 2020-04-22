import React from "react";
import theme from "../theme";
import NavBar from "./NavBar";
import {
    Typography,
    Button,
    ThemeProvider,
    Grid
    } from "@material-ui/core";

const gridStyle = {
    margin: 13,
    padding:13,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
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

    // componentDidMount() {
    //     this.callApi()
    //     .then(res => this.setState({word: res.word,
    //                                 meaning: res.meaning,
    //                                 sentence: res.sentence}))
    //     .catch(err => console.log(err));
    // }

    componentDidMount(){
        // if(this.props.location.state.wordList){
            this.setState({wordList: this.props.location.state.wordList});
            const length = this.props.location.state.wordList.length;
            let randomNumber = Math.random() * 10000000000;
            randomNumber = parseInt(randomNumber) % length;
            this.setState({selectedWord: randomNumber});
        // }  
    }
    // callApi = async() => {
    //     const res = await fetch('/api/get');
    //     const body = await res.json();
    //     console.log(body);
    //     if(res.status !== 200) throw Error(body.message);
    //     return body;
    // }
    anotherWord = (event) =>{
        const length = this.state.wordList.length;
        let randomNumber = Math.random() * 10000000000;
        randomNumber = parseInt(randomNumber) % length;
        this.setState({
            selectedWord : randomNumber,
            showMeaning : false    
        });
    }

    showMeaning = (event) => {
        this.setState({showMeaning: true});
    }

    // anotherWord = (event) => {
    //     this.callApi()
    //     .then(res => this.setState({
    //                             word: res.word,
    //                             meaning: res.meaning,
    //                             sentence: res.sentence,
    //                             showMeaning: false
    //                         }))
    //     .catch(err => console.log(err));
    // }

    render(){
        console.log("list:");
        console.log(this.state.wordList);
        console.log(this.state.selectedWord);

        const {word, meaning, sentence} = this.state.wordList[this.state.selectedWord];
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <NavBar/>
                    <div style={{
                        justifyContent:"center",
                        display:"flex",
                        margin:20,
                        padding:20
                    }}>
                        <Grid container>
                            <Grid item xs={12} style={gridStyle}>
                                <Typography variant="h4">Word</Typography>
                            </Grid>
                            <Grid item xs={12} style={gridStyle}>
                                <Typography variant="subtitle1">{word}</Typography>
                            </Grid>
                            {!this.state.showMeaning && <Grid item xs={12} style={gridStyle}>
                                <Button color="primary" variant="contained" onClick={this.showMeaning}>Show Meaning</Button>
                            </Grid>}
                            {this.state.showMeaning && <Grid item xs={12} style={gridStyle}>
                                <Typography variant="h4">Meaning</Typography>
                            </Grid>}
                            {this.state.showMeaning && <Grid item xs={12} style={gridStyle}>
                                <Typography variant="subtitle1">{meaning}</Typography>        
                            </Grid>}
                            {this.state.showMeaning && <Grid item xs={12} style={gridStyle}>
                                <Typography variant="h4">Sentence</Typography>
                            </Grid>}
                            {this.state.showMeaning && <Grid item xs={12} style={gridStyle}>
                                <Typography variant="subtitle1">{sentence}</Typography>        
                            </Grid>}
                            <Grid item xs={12} style={gridStyle}>
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