import apiClient from "../apiClient";

class usersService {
    getAllUsers = () => apiClient().get("users");
    
}
// console.log(usersService);

export default new usersService();