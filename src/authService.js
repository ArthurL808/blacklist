import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(credentails, cb) {
    return axios
      .post("/api/auth/login", credentails)
      .then((res) => {
        console.log("logged in");
        cb();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout(cb) {
    return axios
      .post("/api/auth/logout")
      .then((res) => {
        console.log("logged out");
        cb();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isAuthenticated() {
    return axios
      .get("/api/auth/loggedIn")
      .then((res) => {
        return res.data.isAuthenticated;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}

export default new Auth();
