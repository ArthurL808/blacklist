import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(credentails,cb) {
    return axios
      .post("/api/auth/login", credentails)
      .then((res) => {
        
        this.setToken(JSON.stringify(res.data.id))
        cb()
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout(cb) {
    return axios
      .post("/api/auth/logout")
      .then((res) => {
        sessionStorage.removeItem('token')
        console.log('logged out')
        cb()
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isAuthenticated() {
    const token = this.getToken()
    return !!token
  }

  setToken(token){
    sessionStorage.setItem('token',token)
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  
}

export default new Auth();
