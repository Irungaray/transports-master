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

export const getShipperById = async (id, token) => {
    try {
        const res = await Axios(
            {
                method: "POST",
                url: `${uri}/Transportes/TransporteId`,
                data: {
                    id,
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return res;
    } catch (error) {
        return error.response;
    }
};

export const getShippers = async (token) => {
    try {
        const res = await Axios(
            {
                method: "POST",
                url: `${uri}/Transportes/GetList`,
                data: {
                    "filtro": "",
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return res;
    } catch (error) {
        return error.response;
    }
};