import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
} from "@material-ui/core";
import Axios from "axios";

class addWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: "",
            meaning: "",
            sentence: ""
        }
    }

    handleChange = (event) => {
        return this.setState({[event.target.id]: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        const url = "/api/add";
        const word = {
            word: this.state.word,
            meaning: this.state.meaning,
            sentence: this.state.sentence
        }

        Axios.post(url, word).then((res) => {
            console.log("Got the response" + res);
            this.setState({
                word: "",
                meaning: "",
                sentence: ""
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        return(
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 20,
              padding: 20
            }}>
            <form 
                style={{ width: "50%" }} 
                id="addWord"
                onSubmit={this.handleSubmit}>
            
              <h1>Add Word Form</h1>
    
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="word">Word</InputLabel>
                <Input id="word" type="text" onChange = {this.handleChange} value={this.state.word}/>
              </FormControl>
    
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="meaning">Meaning</InputLabel>
                <Input id="meaning" type="text" onChange = {this.handleChange} value={this.state.meaning}/>
              </FormControl>
    
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="sentence">Sentence</InputLabel>
                <Input id="sentence" multiline rows={5} onChange = {this.handleChange} value={this.state.sentence}/>
              </FormControl>
    
              <Button variant="contained" color="primary" size="medium" type="submit">
                  Send
              </Button>
            </form>
          </div>
        )
    }
}

export default addWord;