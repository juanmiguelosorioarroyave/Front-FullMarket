import axios from "axios";
import SingIn from "../components/pages/SingIn/SingIn";

const API_Login = "https://backend-fullmarket-py.herokuapp.com/login";

class Authservice {
    login(email, password) {
        return axios
        .post(API_Login + "singin", {
            email,
            password
        })
        .then(response => {
            if (response.data.accesToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(email, password) {
        return axios.post(API_Login + "signup", {
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new Authservice();