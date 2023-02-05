import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import LoadingSingle from "../components/LoadingSingle";
import { BASE_URL, options } from "../moviesContext";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const navigate = useNavigate();

  const fetchSingleMovie = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data) {
        setMovie(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No movies found" });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSingleMovie(`${BASE_URL}/get-details?tconst=${id}`);
  }, [id]);

  if (isLoading) return <LoadingSingle />;
  if (error.show) {
    return (
      <HeroSection
        title="Opps! Something went wrong!"
        text="There is no Movie to display"
      />
    );
  }
  if (movie) {
    const { image, title, year, runningTimeInMinutes } = movie;
    return (
      <>
        <Button
          size="small"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBack />}
          color="primary"
          variant="contained"
          sx={{ maxWidth: "160px", marginBottom: "20px" }}
        >
          go back
        </Button>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box>
            <img src={image?.url} alt={title} className="image" />
          </Box>
          <Box>
            <Typography component="h1" variant="h1">
              {title}
            </Typography>

            <Box>
              <Typography component="h3" variant="h3">
                Duration: {runningTimeInMinutes}
              </Typography>
            </Box>
            <Box>
              <Typography component="h3" variant="h3">
                Year: {year}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </>
    );
  }
};

export default SingleMovie;
