import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
