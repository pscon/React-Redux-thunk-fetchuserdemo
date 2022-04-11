import actionTypes from "./users.actionTypes";

const userLoadStart = () => ({
type: actionTypes.USERS_LOAD_START,
})

const userLoadSucess = (users) => ({
    type: actionTypes.USERS_LOAD_SUCCESS, 
    payload: users,

})
const userLoadError = (errorMessage) => ({
    type: actionTypes.USERS_LOAD_ERROR, 
    payload: errorMessage,
})

export default {
    userLoadStart, 
    userLoadSucess,
    userLoadError,
};