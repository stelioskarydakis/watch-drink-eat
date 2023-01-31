import HomeCard from "../components/HomeCard";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <Box>
      <Box paddingBottom="30px">
        <HeroSection
          title="Wecome to WatchDrinkEat!"
          text="Here you can find ideas for having fun at home"
        />
      </Box>
      <HomeCard />
    </Box>
  );
};

export default Home;
