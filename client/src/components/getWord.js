import React from "react";
import NavBar from "./NavBar";
import {Typography} from "@material-ui/core";

class getWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: "",
            meaning: "",
            sentence: ""
        }
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({word: res.word,
                                    meaning: res.meaning,
                                    sentence: res.sentence}))
        .catch(err => console.log(err));
    }

    callApi = async() => {
        const res = await fetch('/api/get');
        const body = await res.json();
        console.log(body);
        if(res.status !== 200) throw Error(body.message);
        return body;
    }

    render(){
        return (
            <div>
                <NavBar/>
                <h3>Word</h3>
                <p>{this.state.word}</p>
                <h3>Meaning</h3>
                <p>{this.state.meaning}</p>
                <h3>Sentence</h3>
                <p>{this.state.sentence}</p>
            </div>
        )
    }
}

export default getWord;