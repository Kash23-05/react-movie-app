import { Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
