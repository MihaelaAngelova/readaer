import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Home() {
    const { loggedUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedUser) {
            navigate('/register');
        }
    }, [loggedUser, navigate]);

    if (!loggedUser) {
        return null; // Optionally, show a loading indicator here
    }

    return (
        <div>
            <h1>Welcome, {loggedUser.firstName}!</h1>
        </div>
    );
}

export default Home;
