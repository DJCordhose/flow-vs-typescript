import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./container/App";

ReactDOM.render(
    <App />,
    document.getElementById("example")
);

import {load} from './actions/actionCreators';
load();

