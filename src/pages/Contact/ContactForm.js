import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LinearP from "../../components/LinearP";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Stack from "@mui/material/Stack";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme()

  return (
    <Box sx={{ width: "100%", height: {xs:"90vh", sm:"98vh", md:"99vh"} }}>
      <Container >
        <Typography
          sx={{
            p: {
              xs: "2.5rem 0 1rem 0.2rem",
              sm: "2.5rem 0 1rem 0.2rem",
              md: "4rem 0 1rem 0.2rem",
            },
            fontSize: { xs: "20px", sm: "30px", md: `${theme.fontSize.titleSize}` },
            fontWeight: { xs: "700", sm: "700", md: "700" },
          }}
        >
          Let’s Build Something Great Together
        </Typography>
        <LinearP align={"left"} />
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "65%" },
            height: { xs: "7rem", sm: "7rem", md: "4rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "15px", md: "16px" },
              p: {
                xs: "0rem 0 1rem 0.2rem",
                sm: "0rem 0 1rem 0.2rem",
                md: "0rem 0 1rem 0.2rem",
              },
            }}
          >
            If you are planning to build and grow your online business, we are
            happy to help you. Don’t wait until someone else comes up with a
            similar idea and leaves you out wondering.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "38ch", sm: "36ch", md: "75ch" },
              },
              height: "80vh",
              width: { xs: "100%", sm: "100%", md: "65%" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2}>
              <TextField
                id="standard-text-input"
                label="Name"
                type="text"
                variant="standard"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                id="standard-text-input"
                label="Email"
                type="text"
                variant="standard"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

              />
              <TextField
                id="standard-number-input"
                label="Phone no"
                type="number"
                variant="standard"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}

              />
              <TextField
                id="standard-multiline-static"
                label="What would you like to know about?"
                multiline
                rows={4}
                variant="standard"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}

              />
            </Stack>

            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "98%", sm: "100%", md: "15rem" },
                  height: "3rem",
                  m: { xs: "7% 0 0 1%", sm: "7% 0 0 1%", md: "4.5% 0 0 0.5%" },
                }}
              >
                Send Message <KeyboardArrowRightIcon />
              </Button>
            </Box>
          </Box>
          <Box
        sx={{
          background: "#dcfcff",
          width: "35%",
          height: "55%",
          borderRadius: "50%",
          display: {xs:"none", sm:"none", md:"flex"},

        }}
      >
        <Box
          component={"img"}
          width={"90%"}
          height={"90%"}
          src="/images/cc.webp"
        />
      </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
