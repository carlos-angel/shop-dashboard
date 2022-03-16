import Header from "@components/Header";
import Nav from "@common/Nav";
import { useAlert } from "@hooks/useAlert";
import Alert from "@common/Alert";

export default function MainLayout({ children }) {
  const { alert, onClose } = useAlert();
  const showAlert = !!alert.message;
  return (
    <div className="min-h-full">
      <Header />
      <Nav />
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {showAlert && <Alert {...alert} onClose={onClose} />}
          {children}
        </div>
      </main>
    </div>
  );
}
