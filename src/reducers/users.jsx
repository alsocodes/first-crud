import { GET_USER_LIST } from '../actions/userAction'

let initialState = {
    title : 'Alsocodes Reactjs++',
    getUserList : false,
    errorUserList: false,
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                getUserList: action.payload.data,
                errorUserList: action.payload.errorMessage
            }

        default:
            return state 
    }

}

export default users;
