import { Route, Routes } from "react-router"; // Changed from "react-router"
import HomePage from "@/pages/home/home-page";
import ServicePage from "./pages/service/service-page";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="services/:servicename" element={<ServicePage />} />
      {/* <Route path="services" element={<ServicePage />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default App;
