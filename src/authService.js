import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(credentails, cb) {
    return axios
      .post("/api/auth/login", credentails)
      .then((res) => {
        console.log(res.data, "loggedIn");
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
        console.log(res.data, "logged out");
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
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}

export default new Auth();
