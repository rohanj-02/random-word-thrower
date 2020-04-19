import React from "react";
import {Link} from "react-router-dom";

function Page1(){
    return(
        <div>
            <Link to="/addWord">
                <button>Add a word</button>
            </Link>
            <Link to="/getWord">
                <button>Get a word</button>
            </Link>
        </div>
    )
}

export default Page1;