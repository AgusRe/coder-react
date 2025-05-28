import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <h2>¡Página no encontrada!</h2>
            <Link className='btn btn-dark' to="/">Volver al inicio</Link>
        </div>
    );
}

export default Error;