import { Box, Skeleton, Stack } from "@mui/material";

const LoadingSingle = () => {
  return (
    <>
      <Stack
        sx={{ flexWrap: "wrap" }}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Box sx={{ margin: "10px" }}>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={50} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={160} />
            <Skeleton variant="text" sx={{ fontSize: "0.5rem" }} width={120} />
            <Skeleton variant="rectangular" width={100} height={30} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default LoadingSingle;
