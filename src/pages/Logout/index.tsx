import { useAuthContext } from "@context/AuthProvider";
import { useEffect } from "react";

const LogoutPage = () => {
    const { logout } = useAuthContext();
    useEffect(() => {
        logout();
    }, []);
    return <div>logout</div>;
};

export default LogoutPage;
