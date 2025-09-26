import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForbiddenPage from "./components/modules/403";
import SupplierPolicyPage from "./pages/supplier-policy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<SupplierPolicyPage />} />
        <Route path="/policy" element={<SupplierPolicyPage />} />

        <Route path="*" element={<ForbiddenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
