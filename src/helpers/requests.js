import Axios from "axios";

const uri = `${process.env.REACT_APP_URI}`;

export const login = async (username, password) => {
    try {
        const res = await Axios(
            {
                method: "POST",
                url: `${uri}/login/authenticate`,
                data: { username, password },
            },
        );

        return res;
    } catch (error) {
        return error.response;
    }
};