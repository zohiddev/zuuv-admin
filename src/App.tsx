import { useAuthContext } from "@context/AuthProvider";
import { AppRoutes, AuthRoutes } from "./components";

function App() {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default App;
