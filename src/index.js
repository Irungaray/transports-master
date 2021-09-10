// External modules
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";

// Internal modules
import "./styles/index.css";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
