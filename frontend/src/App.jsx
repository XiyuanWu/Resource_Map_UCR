import { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import HispanicOrLatinoPage from "./pages/groups/hispanic-or-latino";
import UmmahMuslimPage from "./pages/groups/ummah-muslim";
import AsianPage from "./pages/groups/asian";
import BlackOrAfricanAmericanPage from "./pages/groups/black-or-african-american";
import AmericanIndianPage from "./pages/groups/american-indian";
import WhitePage from "./pages/groups/white";

/** SPA navigations keep scroll Y by default; reset so each route starts at the top. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/groups/hispanic-or-latino"
          element={<HispanicOrLatinoPage />}
        />
        <Route path="/groups/ummah-muslim" element={<UmmahMuslimPage />} />
        <Route path="/groups/asian" element={<AsianPage />} />
        <Route
          path="/groups/black-or-african-american"
          element={<BlackOrAfricanAmericanPage />}
        />
        <Route
          path="/groups/american-indian"
          element={<AmericanIndianPage />}
        />
        <Route path="/groups/white" element={<WhitePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
