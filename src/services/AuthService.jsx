class AuthService {
  getLoggedUser() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      return loggedUser;
    }
    return null;
  }

  saveNewUser(name, corporate, mail, user, password) {
    const newUser = { name, corporate, mail, user, password };
    const storageList = localStorage.getItem("registeredUsers");
    if (storageList) {
      const parsedItem = JSON.parse(storageList);
      if (parsedItem.map((item) => item.user).includes(user)) {
        return "USER_REPEATED";
      } else if (parsedItem.map((item) => item.mail).includes(mail)) {
        return "MAIL_REPEATED";
      }
      parsedItem.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(parsedItem));
      return "SUCCESS";
    } else {
      const listNewToUser = [newUser];
      localStorage.setItem("registeredUsers", JSON.stringify(listNewToUser));
      return "SUCCESS";
    }
  }

  logUser(user, password) {
    const storageList = localStorage.getItem("registeredUsers");
    if (storageList) {
      const parsedItem = JSON.parse(storageList);
      const matchUser = parsedItem.filter(
        (item) => item.user === user && item.password === password
      );
      if (matchUser && matchUser.name) {
        localStorage.setItem("loggedUser", JSON.stringify(matchUser));
        return "LOGGED";
      }
    }
    return "BAD_CREDENTIALS";
  }

  closeSession() {
    localStorage.removeItem("loggedUser");
  }
}

const instacedClass = new AuthService();
export default instacedClass;
