import "./App.css";
import Login from "./components";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Login
        title="Login with local storage"
        description="Using in memory database and crypto"
      ></Login>
    </AuthProvider>
  );
}
