// External modules
import { ThemeProvider } from "@material-ui/styles";

// Internal components
import LoginForm from "./Components/organisms/LoginForm/LoginForm";

// Internal modules
import "./styles/App.css";
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoginForm />
        </ThemeProvider>
    );
}

export default App;
