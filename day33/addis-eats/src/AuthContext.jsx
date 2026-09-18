import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const REGISTERED_USERS_KEY = "addis-eats-users";
const CURRENT_USER_KEY = "addis-eats-current-user";

function getRegisteredUsers() {
  try {
    const users = localStorage.getItem(REGISTERED_USERS_KEY);

    return users ? JSON.parse(users) : [];
  } catch {
    return [];
  }
}

function saveRegisteredUsers(users) {
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);

    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser);

  function register({ name, identifier, password }) {
    const users = getRegisteredUsers();

    const normalizedIdentifier = identifier.trim().toLowerCase();

    const alreadyRegistered = users.some(
      (existingUser) => existingUser.identifier === normalizedIdentifier,
    );

    if (alreadyRegistered) {
      return {
        success: false,
        message: "An account with this email or phone number already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      identifier: normalizedIdentifier,
      password,
    };

    const updatedUsers = [...users, newUser];

    saveRegisteredUsers(updatedUsers);

    const loggedInUser = {
      id: newUser.id,
      name: newUser.name,
      identifier: newUser.identifier,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

    setUser(loggedInUser);

    return {
      success: true,
      message: "Account created successfully.",
    };
  }

  function login({ identifier, password }) {
    const users = getRegisteredUsers();

    const normalizedIdentifier = identifier.trim().toLowerCase();

    const existingUser = users.find(
      (registeredUser) =>
        registeredUser.identifier === normalizedIdentifier &&
        registeredUser.password === password,
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email/phone number or password.",
      };
    }

    const loggedInUser = {
      id: existingUser.id,
      name: existingUser.name,
      identifier: existingUser.identifier,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

    setUser(loggedInUser);

    return {
      success: true,
      message: "Login successful.",
    };
  }

  function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
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
  return useContext(AuthContext);
}
