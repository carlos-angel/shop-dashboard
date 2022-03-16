import { createContext, useState, useContext } from "react";

const INITIAL_STATE = {
  alert: { type: "", message: "" },
  onClose: () => {},
  // eslint-disable-next-line no-unused-vars
  showMessage: (type, message) => {},
};
const AlertContext = createContext(INITIAL_STATE);

export function ProviderAlert({ children }) {
  const alert = useProvideAlert();
  return <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>;
}

export const useAlert = () => useContext(AlertContext);

export const useProvideAlert = () => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const onClose = () => setAlert({ type: "", message: "" });
  const showMessage = ({ type, message }) => setAlert({ type, message });

  return { alert, onClose, showMessage };
};
