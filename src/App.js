// External modules
import { useState, useEffect } from "react";
import Cookie from "js-cookie";

// Internal components
import LoginForm from "./Components/organisms/LoginForm/LoginForm";
import ShippingTable from "./Components/organisms/ShippingTable/ShippingTable";

// Internal modules
import "./styles/App.css";

const App = () => {
    const [isLogged, setIsLogged] = useState(false);

    const setToken = (value) => {
        Cookie.set('token', value, { expires: 3 });
        setIsLogged(true)
    }

    useEffect(() => {
        const checkLogin = () => {
            if (Cookie.get('token') !== undefined) setIsLogged(true);
        }

        checkLogin()
    }, [])

    let currentPage = <></>

    switch (true) {
        case isLogged:
            const token = Cookie.get('token')
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
