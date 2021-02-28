class AuthService {
  getLoggedUser() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      return loggedUser;
    }
    return null;
  }

  saveNewUser(name, corporate, mail, user, password) {
    // hay que añadir en lista, no sobreescribir
    const newUser = { name, corporate, mail, user, password };
    localStorage.setItem("registeredUsers", JSON.stringify(newUser));
  }
}

const instacedClass = new AuthService();
export default instacedClass;
