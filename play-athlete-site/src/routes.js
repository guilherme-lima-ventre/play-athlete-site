import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Faq from "./pages/Faq";
import Header from "./components/Header";
import PageAnimationFadeIn from "./components/PageAnimationFadeIn";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="home">
                        <Home/>
                        </PageAnimationFadeIn>
                    </>
                    } />
                <Route path="/nosso-time" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="aboutUs">
                        <AboutUs />
                        </PageAnimationFadeIn>
                    </>
                    } />
                <Route path="/sobre-nos" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="services">
                        <Services />
                        </PageAnimationFadeIn>
                    </>
                    } />
                <Route path="/contact-us" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="contactUs">
                        <ContactUs />
                        </PageAnimationFadeIn>
                    </>
                    } />
                <Route path="/faq" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="faq">
                        <Faq />
                        </PageAnimationFadeIn>
                    </>
                    } />
                <Route path="*" element={
                    <>
                        <Header/>
                        <PageAnimationFadeIn key="pageNotFound">
                        <PageNotFound />
                        </PageAnimationFadeIn>
                    </>
                    } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;