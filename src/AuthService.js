export default class AuthService {
  constructor() {
    this.Authenticated = false;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.Authenticated = true;
  }

  logout() {
    this.Authenticated = false;
  }

  isAuthenticated() {
    return this.Authenticated;
  }
}
