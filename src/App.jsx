import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/themeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <GlobalStyles />
      

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user" element={<UserPage/>} />
      </Routes>


      
    </ThemeProvider>
  );
}

export default App;