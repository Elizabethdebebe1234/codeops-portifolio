import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("addis-eats-user");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem("addis-eats-user");
      return null;
    }
  });

  function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem("addis-eats-users") || "[]");

    const cleanEmail = email.trim().toLowerCase();

    const emailExists = users.some(
      (account) => account.email && account.email.toLowerCase() === cleanEmail,
    );

    if (emailExists) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      name: name.trim(),
      email: cleanEmail,
      password,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("addis-eats-users", JSON.stringify(updatedUsers));

    const loggedInUser = {
      name: newUser.name,
      email: newUser.email,
    };

    setUser(loggedInUser);

    localStorage.setItem("addis-eats-user", JSON.stringify(loggedInUser));

    return {
      success: true,
    };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("addis-eats-users") || "[]");

    const cleanEmail = email.trim().toLowerCase();

    const foundUser = users.find(
      (account) =>
        account &&
        account.email &&
        account.email.toLowerCase() === cleanEmail &&
        account.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    const loggedInUser = {
      name: foundUser.name,
      email: foundUser.email,
    };

    setUser(loggedInUser);

    localStorage.setItem("addis-eats-user", JSON.stringify(loggedInUser));

    return {
      success: true,
    };
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("addis-eats-user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
