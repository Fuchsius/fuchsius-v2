import { Route, Routes } from "react-router";
import HomePage from "@/pages/home/home-page";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default App;
