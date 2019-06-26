import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./src/App";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure()

ReactDOM.render((
    <App/>
  ),
  document.getElementById('root')
);
