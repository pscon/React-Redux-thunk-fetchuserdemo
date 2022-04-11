import usersService from "../../../components/service /usersService";
import actions from "./users.actions";

// console.log(response.data, "res")

export const loadUsersAsync = () => (dispatch) => {
	dispatch(actions.userLoadStart());
    usersService.getAllUsers()
	.then((response) => dispatch(actions.userLoadSucess(response.data)))
	
	.catch((error) => dispatch(actions.userLoadError(error.message)));
	// console.log(response, "sucess")
};

console.log(usersService, "res")
