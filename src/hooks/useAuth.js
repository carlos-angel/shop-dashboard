import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endpoints from "@services/api";

// eslint-disable-next-line no-unused-vars
const AutContext = createContext({ user: {}, signIn: (email, password) => {} });

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AutContext.Provider value={auth}>{children}</AutContext.Provider>;
}

export const useAuth = () => useContext(AutContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const options = {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(endpoints.auth.login, { email, password }, options);

      if (data?.access_token) {
        const token = data.access_token;
        console.log(token);
        Cookie.set("token", token, { expires: 5, secure: true });
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get(endpoints.auth.profile);
        if (!user) {
          setUser({ name: "admin", email: "admin@mail.com" });
        } else {
          setUser(user);
        }
        return { error: false, message: "successful login" };
      }
      return { error: true, message: "Invalid credentials" };
    } catch (error) {
      return { error: true, message: "Invalid credentials" };
    }
  };

  return { user, signIn };
}
