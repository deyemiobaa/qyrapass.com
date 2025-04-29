import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RequestAccountDeletion from "./pages/RequestAccountDeletion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/request-account-deletion"
          element={<RequestAccountDeletion />}
        />
      </Routes>
    </Router>
  );
}

export default App;
