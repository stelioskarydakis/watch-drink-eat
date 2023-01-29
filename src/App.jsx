import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import Error from "./pages/Error";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container sx={{ marginY: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/cocktail/:id" element={<SingleCocktail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
