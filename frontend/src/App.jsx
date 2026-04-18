import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import HispanicOrLatinoPage from "./pages/groups/hispanic-or-latino";
import AmericanIndianOrAlaskanNativePage from "./pages/groups/american-indian-or-alaskan-native";
import AsianPage from "./pages/groups/asian";
import BlackOrAfricanAmericanPage from "./pages/groups/black-or-african-american";
import NativeHawaiianOrOtherPacificIslanderPage from "./pages/groups/native-hawaiian-or-other-pacific-islander";
import WhitePage from "./pages/groups/white";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/groups/hispanic-or-latino"
        element={<HispanicOrLatinoPage />}
      />
      <Route
        path="/groups/american-indian-or-alaskan-native"
        element={<AmericanIndianOrAlaskanNativePage />}
      />
      <Route path="/groups/asian" element={<AsianPage />} />
      <Route
        path="/groups/black-or-african-american"
        element={<BlackOrAfricanAmericanPage />}
      />
      <Route
        path="/groups/native-hawaiian-or-other-pacific-islander"
        element={<NativeHawaiianOrOtherPacificIslanderPage />}
      />
      <Route path="/groups/white" element={<WhitePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
