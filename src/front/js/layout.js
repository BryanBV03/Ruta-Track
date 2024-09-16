import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Inicio } from "./pages/Inicio";
import Profile from "./pages/profile";
import Mapa from "./pages/Logistica";
import LoginForm from "./pages/Acceso";
import CondicionesDeUso from "./pages/CondicionesUso";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PropiedadIntelectual from "./pages/propiedadIntelectual";
import ProteccionDeDatos from "./pages/proteccionDatos";
import PoliticaDeCookies from "./pages/politicaCookies";
import LimitacionDeResponsabilidad from "./pages/limitacionResponsabilidad";
import Jurisdiccion from "./pages/jurisdiccion";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Inicio />} path="/" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Mapa />} path="/mapa" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<CondicionesDeUso />} path="/condicionesUso" />
                        <Route element={<PropiedadIntelectual />} path="/propiedadIntelectual" />
                        <Route element={<ProteccionDeDatos />} path="/proteccionDeDatos" />
                        <Route element={<PoliticaDeCookies />} path="/politicaCookies" />
                        <Route element={<LimitacionDeResponsabilidad />} path="/limitacionResponsabilidad" />
                        <Route element={<Jurisdiccion />} path="/jurisdiccion" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
