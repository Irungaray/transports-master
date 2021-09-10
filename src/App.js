// External modules
import { useState } from "react";

// Internal components
import LoginForm from "./Components/organisms/LoginForm/LoginForm";
import ShippingTable from "./Components/organisms/ShippingTable/ShippingTable";

// Internal modules
import "./styles/App.css";

const App = () => {
    const [token, setToken] = useState('');

    console.log(token)

    let currentPage = <></>

    switch (true) {
        case token.length > 1:
            currentPage = <ShippingTable token={token} />
            break;

        default:
            currentPage = <LoginForm setToken={setToken} />
    }

    return (
        <>
            {currentPage}
        </>
    );
}

export default App;
