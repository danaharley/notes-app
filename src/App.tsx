import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";

import Index from "./pages";
import Archived from "./pages/archived";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="archived" element={<Archived />} />
      </Route>
    </Routes>
  );
};

export default App;
