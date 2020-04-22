import React from "react";
import theme from "../theme";
import {
    Typography,
    Grid,
    ThemeProvider,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const buttonStyle = {

};

class listWordItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            word: "",
            meaning: "",
            sentence: "",
            showMeaning: false
        }
    }

    componentDidMount(){
        const {word, meaning, sentence} = this.props.word;
        this.setState({
            word: word,
            meaning: meaning,
            sentence: sentence
        });
    }

    handleClick = (event) => {
        const current = ! this.state.showMeaning;
        this.setState({showMeaning: current});
    }

    render(){
        const {word, meaning, sentence, showMeaning} = this.state;
        return(
            <ThemeProvider theme={theme}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography style={{
                            font:"Roboto", 
                            fontSize:"medium"}}>
                                {word}
                            </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" 
                                    style={{
                                        font:"Roboto", 
                                        fontSize:"medium"
                                    }}>{meaning}</Typography>        
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" 
                                    style={{
                                        fontStyle:"italic",
                                        font:"Roboto", 
                                        fontSize:"medium",
                                        fontWeight:"lighter"
                                    }}>{sentence}</Typography>        
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>                        
            </ThemeProvider>
                
        )
    }
}

export default listWordItem;