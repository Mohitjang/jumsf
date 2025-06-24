import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* Add global layout like Navbar, Sidebar here if needed */}

      {/* Header */}
      <Header />

      {/* other pages */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;