import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import HowWorks from "../pages/HowWorks";
import ContactUs from "../pages/ContactUs";
import TermsPage from "../pages/TermsPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Grievance from "../pages/Grievance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "index", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "how-it-works", element: <HowWorks /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "terms-of-use", element: <TermsPage /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "grievance_mechanism", element: <Grievance /> },
      // add more here
    ],
  },
]);

export default router;
