import { Box } from "@mui/system";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        width: "1250px",
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
