import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadUsersAsync } from "../redux/reducers/users/users.thunks";
import { loadUsersAsync } from "../redux/reducer/users/usersthunks";


const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);
console.log(users, "dis")
	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	return (
		<div>
			<h1>User Listing</h1>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{users && users.map((user) => <h5 key={user.id}> Name: {user.name}
			<br/>
			UserName: {user.username}
			<br/>
			Email: {user.email}
			</h5>

			
			)}
		</div>
	);
};

export default UserListing;