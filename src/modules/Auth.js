class Auth {
/**
 * Authenticate a user. Save a token string in Local Storage
 *
 * @param {string} token
 */
  static authenticateUser(token, email, name) {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email)
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
