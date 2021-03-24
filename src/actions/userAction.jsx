import axios from 'axios'

export const GET_USER_LIST = "GET_USER_LIST"

export const getUserList = () => {
    return dispatch => {
        axios.get('https://my-json-server.typicode.com/alsocodes/first-crud/users')
        .then(function (response) {
            // handle success
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            // handle error
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        });
        // .then(function () {
        //     // always executed
        // });
    }
}
