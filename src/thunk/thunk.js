import axios from 'axios';
import * as types from '../actions/type';

const url = "http://localhost:4000";

export const getAllUsers = () => {
    return (dispatch, getState) => {
        axios.get(`${url}/getUsers`).then((response) => {
            dispatch({ type: types.GET_RECORDS, payload: response.data.data })
        },
            (error) => {
                console.log(error);
            }
        );
    };

};

export const createUser = (user) => {
    return (dispatch,getState) => {
        axios.post(`${url}/Addusers`,user).then((response) => {
            console.log(response);
            dispatch({type:types.ADDED_SUCCESSFULLY})

        },
        (error) => {
            console.log(error);
        }
        )
    }
}