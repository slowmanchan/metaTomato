class Auth {
/**
 * Authenticate a user. Save a token string in Local Storage
 *
 * @param {string} token
 */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
