import React from "react";
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";
import GetWord from "./getWord";
import AddWord from "./addWord";
import Home from "./home";

class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            add: false,
            addButton: true,
            get: false,
            getButton: true,
        }
    }
    
    buttonOnClick = async (event) =>{
        console.log(event.target.name);
        await this.setState({[event.target.name] : false});
    }

    backFromAdd = () => {
        this.setState({
            add: false,
            addButton: true,
            getButton: true,
            get: false,
        })
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path ="/addWord" component={AddWord}/>
                        <Route exact path="/getWord" component={GetWord}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Page1;