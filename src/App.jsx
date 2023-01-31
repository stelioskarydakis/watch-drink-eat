import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import SingleMovie from "./pages/SingleMovie";
import Movies from "./pages/Movies";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container sx={{ paddingY: 5 }} maxWidth="lg">
          <Box sx={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cocktails" element={<Cocktails />} />
              <Route path="/cocktail/:id" element={<SingleCocktail />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<SingleMovie />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipe/:id" element={<SingleRecipe />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
