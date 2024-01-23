import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext.jsx";

import RegisterPage from "./pages/registerPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AgendarPage from "./pages/AgendarPage.jsx";

import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { ServicioProvider } from "./context/ServContext.jsx"
import ServiciosPage from "./pages/ServiciosPage.jsx"
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";




function App() {
  return (
    <AuthProvider>
      <ServicioProvider>
        <BrowserRouter>
          <main className="container mx-auto ">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* privadas */}

              <Route element={<ProtectedRoute />}>

                <Route path="/Agendar" element={<AgendarPage />} />
                <Route path="/Servicios" element={<ServiciosPage />} />
                <Route path="/Agendar/:id" element={<AgendarPage />} />
                <Route path="/profile" element={<ProfilePage />} />

              </Route>

            </Routes>
          </main>
        </BrowserRouter>
      </ServicioProvider>
    </AuthProvider>
  );
}

export default App;