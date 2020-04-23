import React from "react";
import {
    Grid,
    ThemeProvider} from "@material-ui/core";
import ListWordItem from "./listWordItem";
import theme from "../theme";
import NavBar from "./NavBar";

const listWord = (props) => {
    const {wordList} = props.location.state;
    const listOfWords = wordList.map((word, id) => <ListWordItem word ={word} key={id}/>);
    return(
        <div style={{width:"100%"}}>
            <ThemeProvider theme={theme}>
                <NavBar wordList ={ wordList}/>
                {listOfWords}
            </ThemeProvider>
        </div>
    )
}

export default listWord;