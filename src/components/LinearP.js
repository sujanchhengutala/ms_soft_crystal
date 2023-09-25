import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LinearP = ({ align }) => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: `${align}`,
        alignItems: `${align}`,
        mt: { xs: "0.5rem", sm: "0.5rem", md: "1rem" },
        mb: "2rem",
        ml: "0.2rem",
      }}
    >
      <Box sx={{ width: { xs: "50%", sm: "50%", md: "10%" } }}>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
    </Box>
  );
};

export default LinearP;
