import { Grid } from "@mui/material";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <HomeCard />
      </Grid>
    </div>
  );
};

export default Home;
