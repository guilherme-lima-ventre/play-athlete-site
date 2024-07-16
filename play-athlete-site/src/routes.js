import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Faq from "./pages/Faq";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/nosso-time" element={<AboutUs />} />
                <Route path="/sobre-nos" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;